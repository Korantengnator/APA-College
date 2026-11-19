import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import {
  BLOGGER_URL,
  BlogPost,
  fetchBloggerPosts,
  normalizeUrl,
  resolveTarget,
} from "../lib/blogger";
import { localPosts } from "../data/posts";
import { linkedinLinks } from "../data/linkedinLinks";
import { usePageTitle } from "../lib/usePageTitle";
import React from "react";

export const formatPostDate = (iso: string) =>
  iso
    ? new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
    : "";

function PostCard({ post }: { post: BlogPost }) {
  const onSite = Boolean(post.body && post.slug);
  const target = resolveTarget(post, linkedinLinks);
  const cls =
    "group h-full flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300";

  const content = (
    <>
      {post.image ? (
        <img src={post.image} alt="" loading="lazy" className="w-full h-48 object-cover" />
      ) : (
        <div className="w-full h-48 bg-gradient-to-br from-[#0A2744] to-[#14507F]"></div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 min-h-[1.75rem] mb-3">
          {post.labels[0] && (
            <span className="text-xs font-semibold uppercase tracking-wide text-[#0D3B66] bg-[#0D3B66]/10 rounded-full px-3 py-1">
              {post.labels[0]}
            </span>
          )}
          {post.date && <span className="text-sm text-gray-600">{formatPostDate(post.date)}</span>}
        </div>
        <h2 className="text-xl font-bold leading-snug text-[#0D3B66] group-hover:text-[#1F5CBA] transition-colors line-clamp-2 min-h-[3.5rem] mb-3">
          {post.title}
        </h2>
        <p className="text-gray-700 text-base leading-relaxed line-clamp-3 min-h-[5rem] mb-4">
          {post.excerpt}
        </p>
        <span className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4 font-semibold text-[#0D3B66] group-hover:text-[#1F5CBA] transition-colors">
          {onSite ? "Read more" : target.onLinkedin ? "Read on LinkedIn" : "Read article"}
          {onSite ? <ArrowRight size={16} /> : <ExternalLink size={16} />}
        </span>
      </div>
    </>
  );

  return onSite ? (
    <Link to={`/blog/${post.slug}`} onClick={() => window.scrollTo({ top: 0 })} className={cls}>
      {content}
    </Link>
  ) : (
    <a href={target.href} target="_blank" rel="noopener noreferrer" className={cls}>
      {content}
    </a>
  );
}

// Saved posts plus live Blogger posts. A live post replaces its saved copy; newest first.
export function mergePosts(saved: BlogPost[], live: BlogPost[]): BlogPost[] {
  const byUrl = new Map<string, BlogPost>();
  for (const p of saved) byUrl.set(normalizeUrl(p.url), p);
  for (const p of live) {
    const key = normalizeUrl(p.url);
    const existing = byUrl.get(key);
    // a picture saved on this site is the clearest one, so keep it
    byUrl.set(key, existing?.image ? { ...p, image: existing.image } : p);
  }
  return [...byUrl.values()].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}

function SkeletonCard() {
  return (
    <div className="h-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm animate-pulse" aria-hidden="true">
      <div className="w-full h-48 bg-gray-200"></div>
      <div className="p-6 space-y-4">
        <div className="h-6 w-1/3 bg-gray-200 rounded-full"></div>
        <div className="h-5 w-5/6 bg-gray-200 rounded"></div>
        <div className="h-5 w-2/3 bg-gray-200 rounded"></div>
        <div className="h-4 w-full bg-gray-200 rounded"></div>
        <div className="h-4 w-4/5 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  usePageTitle(
    "Blog",
    "Career guidance, workplace insights and expert advice from the APA College Educational Services team."
  );
  // null means "still waiting for Blogger"; we show loading placeholders instead of a half-empty page
  const [remote, setRemote] = useState<BlogPost[] | null>(BLOGGER_URL ? null : []);

  useEffect(() => {
    if (!BLOGGER_URL) return;
    let cancelled = false;
    const giveUp = window.setTimeout(() => !cancelled && setRemote((r) => r ?? []), 8000);
    fetchBloggerPosts(BLOGGER_URL)
      .then((p) => !cancelled && setRemote(p))
      .catch(() => !cancelled && setRemote([]));
    return () => {
      cancelled = true;
      window.clearTimeout(giveUp);
    };
  }, []);

  const loading = remote === null;
  const posts = mergePosts(localPosts, remote ?? []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />
      <PageHero
        title="Educational Insights & Expert Advice"
        subtitle="Career guidance, workplace insights and perspectives from the ACES team."
      />

      <section className="py-20 md:py-28 bg-[#F5F7FA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[0, 1, 2].map((i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : posts.length === 0 ? (
            <p className="text-center text-lg text-gray-700 py-10">
              Our first articles are coming soon. Please check back shortly.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <Reveal key={post.id} delay={(i % 3) * 90} className="h-full">
                  <PostCard post={post} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
