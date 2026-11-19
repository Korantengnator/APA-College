import { Link, useParams } from "react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import PageHero from "../components/PageHero";
import { localPosts } from "../data/posts";
import { formatPostDate } from "./BlogPage";
import { usePageTitle } from "../lib/usePageTitle";
import React from "react";

// Full article page for posts that have `body` text in data/posts.ts
export default function BlogPostPage() {
  const { slug } = useParams();
  const post = localPosts.find((p) => p.slug === slug && p.body);
  usePageTitle(post ? post.title : "Article not found", post?.excerpt);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <WhatsAppButton />
      {post ? (
        <>
          <PageHero
            title={post.title}
            subtitle={[post.author, formatPostDate(post.date)].filter(Boolean).join(" · ") || undefined}
          />
          <article className="py-16 md:py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-gray-700 text-lg leading-relaxed">
              {post.body!.map((line, i) =>
                line.startsWith("## ") ? (
                  <h2 key={i} className="text-2xl font-bold text-[#0D3B66] pt-4">
                    {line.slice(3)}
                  </h2>
                ) : (
                  <p key={i}>{line}</p>
                )
              )}
              {post.source && post.url && (
                <p className="pt-6 text-base">
                  Also published on{" "}
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[#0D3B66] hover:text-[#1F5CBA] underline underline-offset-4"
                  >
                    {post.source} <ExternalLink size={14} />
                  </a>
                </p>
              )}
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 font-semibold text-[#0D3B66] hover:text-[#1F5CBA]"
              >
                <ArrowLeft size={16} /> Back to all articles
              </Link>
            </div>
          </article>
        </>
      ) : (
        <>
          <PageHero title="Article not found" subtitle="This article may have moved." />
          <div className="py-16 text-center">
            <Link to="/blog" className="font-semibold text-[#0D3B66] hover:text-[#1F5CBA] underline underline-offset-4">
              Back to the blog
            </Link>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}
