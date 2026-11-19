// Reads posts from The ACES Journal on Blogger, so new posts appear on the website automatically.
export const BLOGGER_URL = "https://theacesjournal.blogspot.com";

export interface BlogPost {
  id: string;
  title: string;
  url: string;
  date: string;
  excerpt: string;
  image?: string;
  labels: string[];
  linkedinUrl?: string; // a LinkedIn article link found inside the post text
  // Only for posts written in data/posts.ts:
  slug?: string;
  source?: string; // for example "LinkedIn"
  author?: string;
  body?: string[]; // full article text; when set the post opens on this site instead of linking out
}

// Makes two forms of the same address comparable (http or https, ?m=1, trailing slash).
export const normalizeUrl = (u: string) =>
  u
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/[?#].*$/, "")
    .replace(/\/+$/, "");

// Finds the LinkedIn ARTICLE or POST link inside a Blogger post (company and profile links are ignored).
// If there are several, the last one is used, because the link is added at the bottom of the post.
const LINKEDIN_ARTICLE =
  /https?:\/\/(?:[a-z]{2,3}\.)?linkedin\.com\/(?:pulse|posts|feed\/update)\/[^\s"'<>)\]]+|https?:\/\/lnkd\.in\/[^\s"'<>)\]]+/gi;

export function findLinkedinArticle(html: string): string | undefined {
  const text = html.replace(/&amp;/g, "&");
  const matches = text.match(LINKEDIN_ARTICLE);
  return matches ? matches[matches.length - 1] : undefined;
}

// Where a card should open: a LinkedIn link inside the post, else the paired link in data/linkedinLinks.ts, else Blogger.
export function resolveTarget(
  post: BlogPost,
  pairs: Record<string, string>
): { href: string; onLinkedin: boolean } {
  if (post.linkedinUrl) return { href: post.linkedinUrl, onLinkedin: true };
  const key = normalizeUrl(post.url);
  for (const [blogger, linkedin] of Object.entries(pairs)) {
    if (normalizeUrl(blogger) === key) return { href: linkedin, onLinkedin: true };
  }
  return { href: post.url, onLinkedin: false };
}

// Blogger sends small preview images. This asks Google's image server for a large version instead.
// Handles the three address styles Blogger uses: ".../s320/pic.jpg", ".../w72-h72-p-k-no-nu/pic.jpg" and "...=w640-h364".
export function upscaleBloggerImage(url: string): string {
  let u = url.trim().replace(/^\/\//, "https://").replace(/^http:/, "https:");
  if (!/googleusercontent\.com|\.bp\.blogspot\.com|blogger\.com/i.test(u)) return u;
  if (/=[swh]\d+[^/?#]*$/.test(u)) return u.replace(/=[swh]\d+[^/?#]*$/, "=s1000");
  return u.replace(/\/(?:s\d+|w\d+-h\d+)[^/]*\//, "/s1000/");
}

const decode = (t: string) =>
  t
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

const stripHtml = (html: string) =>
  decode(
    html
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<[^>]+>/g, " ")
  )
    .replace(/https?:\/\/\S+/g, "")
    .replace(/\s+/g, " ")
    .trim();

const truncate = (text: string, max = 180) =>
  text.length <= max ? text : text.slice(0, max).replace(/\s+\S*$/, "") + "...";

export function parseBloggerFeed(json: any): BlogPost[] {
  const entries: any[] = json?.feed?.entry ?? [];
  return entries
    .map((e) => {
      const html: string = e.content?.$t ?? e.summary?.$t ?? "";
      const url: string = (e.link ?? []).find((l: any) => l.rel === "alternate")?.href ?? "";
      // Prefer the picture inside the post (the original upload); fall back to Blogger's small preview.
      const rawImage: string | undefined =
        html.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1] ?? e["media$thumbnail"]?.url;
      const image = rawImage ? upscaleBloggerImage(rawImage) : undefined;
      return {
        id: e.id?.$t ?? url,
        title: e.title?.$t || "Untitled",
        url,
        date: e.published?.$t ?? "",
        excerpt: truncate(stripHtml(html)),
        image,
        labels: (e.category ?? []).map((c: any) => c.term).filter(Boolean),
        linkedinUrl: findLinkedinArticle(html),
      } as BlogPost;
    })
    .filter((p) => p.url);
}

// Fallback for browsers/blogs that block the normal request: Blogger also supports script (JSONP) loading.
function loadJsonp(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const callbackName = "__bloggerCb" + Date.now();
    const script = document.createElement("script");
    let timer = 0;
    const cleanup = () => {
      delete (window as any)[callbackName];
      script.remove();
      window.clearTimeout(timer);
    };
    timer = window.setTimeout(() => {
      cleanup();
      reject(new Error("timeout"));
    }, 10000);
    (window as any)[callbackName] = (data: any) => {
      cleanup();
      resolve(data);
    };
    script.onerror = () => {
      cleanup();
      reject(new Error("failed"));
    };
    script.src = `${url}&callback=${callbackName}`;
    document.body.appendChild(script);
  });
}

export async function fetchBloggerPosts(blogUrl: string, max = 12): Promise<BlogPost[]> {
  const base = blogUrl.replace(/\/+$/, "");
  try {
    const res = await fetch(`${base}/feeds/posts/default?alt=json&max-results=${max}`);
    if (!res.ok) throw new Error(String(res.status));
    return parseBloggerFeed(await res.json());
  } catch {
    const data = await loadJsonp(`${base}/feeds/posts/default?alt=json-in-script&max-results=${max}`);
    return parseBloggerFeed(data);
  }
}
