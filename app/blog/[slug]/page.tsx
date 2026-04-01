import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  categories: string;
  content: string;
};

function loadPosts(): BlogPost[] {
  try {
    const file = path.join(process.cwd(), "posts-data", "posts-clean.json");
    return JSON.parse(fs.readFileSync(file, "utf-8"));
  } catch {
    return [];
  }
}

function getPost(slug: string): BlogPost | undefined {
  return loadPosts().find((p) => p.slug === slug);
}

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return loadPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Hostao Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://hostao.com/blog/${post.slug}/`,
      siteName: "Hostao",
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: { canonical: `https://hostao.com/blog/${post.slug}/` },
  };
}

function markdownToHtml(md: string): string {
  return md
    // Headings
    .replace(/^###### (.+)$/gm, "<h6>$1</h6>")
    .replace(/^##### (.+)$/gm, "<h5>$1</h5>")
    .replace(/^#### (.+)$/gm, "<h4>$1</h4>")
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    // Bold + italic
    .replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    // Inline code
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    // Unordered list items
    .replace(/^\s*[-*] (.+)$/gm, "<li>$1</li>")
    // Ordered list items
    .replace(/^\s*\d+\. (.+)$/gm, "<li>$1</li>")
    // Blockquotes
    .replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>")
    // Horizontal rules
    .replace(/^---$/gm, "<hr/>")
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#046bd2] hover:underline">$1</a>')
    // Line breaks to paragraphs (simple approach)
    .split(/\n\n+/)
    .map((block) => {
      if (/^<(h[1-6]|li|blockquote|hr|ul|ol)/.test(block.trim())) return block;
      if (block.includes("<li>")) {
        return `<ul>${block}</ul>`;
      }
      if (block.trim()) return `<p>${block.replace(/\n/g, " ")}</p>`;
      return "";
    })
    .join("\n");
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const allPosts = loadPosts();
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const html = markdownToHtml(post.content);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Hostao",
      url: "https://hostao.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Hostao LLC",
      logo: { "@type": "ImageObject", url: "https://hostao.com/wp-content/uploads/2024/01/Dark-new.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://hostao.com/blog/${post.slug}/` },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-[#046bd2] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog/" className="hover:text-[#046bd2] transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-gray-900 truncate max-w-[200px]">{post.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Main article */}
          <article className="lg:col-span-3">
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs bg-blue-50 text-[#046bd2] font-semibold px-3 py-1 rounded-full">
                  Hosting Guide
                </span>
                <span className="text-sm text-gray-500">{formatDate(post.date)}</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                {post.title}
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>

              <div className="flex items-center gap-3 pb-6 border-b border-gray-200">
                <div className="w-10 h-10 rounded-full bg-[#046bd2] flex items-center justify-center text-white font-bold text-sm">
                  HT
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">Hostao Team</div>
                  <div className="text-xs text-gray-500">Web Hosting Experts · hostao.com</div>
                </div>
              </div>
            </header>

            {/* Blog content */}
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            {/* CTA */}
            <div className="mt-12 bg-gradient-to-r from-[#046bd2] to-[#0056A7] rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6">
                Try Hostao hosting from just $3/month. Free SSL, cPanel, and 99.9% uptime guaranteed.
              </p>
              <a
                href="https://my.hostao.com/cart.php?a=add&pid=9"
                className="inline-block bg-white text-[#046bd2] font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Start Hosting Today →
              </a>
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {["web hosting", "India", "reseller hosting", "cPanel", "NVMe SSD"].map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Back link */}
            <div className="mt-8">
              <Link href="/blog/" className="text-[#046bd2] text-sm font-semibold hover:underline">
                ← Back to Blog
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Quick links */}
            <div className="bg-[#f0f5fa] rounded-xl p-5 mb-6">
              <h3 className="font-bold text-gray-900 mb-4 text-sm">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { label: "Shared Hosting", href: "/shared-hosting/" },
                  { label: "Reseller Hosting", href: "/reseller-hosting/" },
                  { label: "VPS Hosting", href: "/vps/" },
                  { label: "Domain Registration", href: "/domain-registration/" },
                  { label: "Get Started", href: "https://my.hostao.com" },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[#046bd2] text-sm hover:underline flex items-center gap-1">
                      → {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related posts */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-4 text-sm">More Articles</h3>
              <ul className="space-y-4">
                {related.map((rp) => (
                  <li key={rp.slug}>
                    <Link
                      href={`/blog/${rp.slug}/`}
                      className="text-sm text-gray-700 hover:text-[#046bd2] leading-snug block"
                    >
                      {rp.title}
                    </Link>
                    <span className="text-xs text-gray-400">{formatDate(rp.date)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
