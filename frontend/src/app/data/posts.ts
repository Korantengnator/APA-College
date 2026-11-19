import type { BlogPost } from "../lib/blogger";

// Articles saved on the website itself. They show immediately (and if Blogger is ever unreachable).
// New Blogger posts are added automatically and do NOT need to be listed here.
// A post that is also on Blogger is matched by its `url`, and the live Blogger version is used.
export const localPosts: BlogPost[] = [
  {
    id: "educator-does-five-jobs",
    title: "An Educator Does Five Jobs: How Many Are You Delivering?",
    date: "2026-10-27",
    excerpt:
      "Teaching is only one of five roles. Discover how an educator also facilitates, instructs, guides and coaches, and what that means for developing outstanding educators.",
    url: "https://theacesjournal.blogspot.com/2026/10/an-educator-does-five-jobs-how-many-are.html",
    image: "/images/educator-five-jobs.jpg",
    labels: ["Education"],
  },
];
