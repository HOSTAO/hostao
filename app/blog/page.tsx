export const dynamic = "force-static";
export const revalidate = 86400; // revalidate once per day

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hostao Blog - Hosting Tips, Tutorials & News",
  description:
    "Expert guides on web hosting, WordPress, performance optimization, and growing your online presence.",
};

type BlogCard = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: { name: string; avatar: string; slug: string };
};

const FALLBACK_POSTS: BlogCard[] = [
  {
    slug: "shared-vs-reseller-hosting-which-is-right-for-you",
    title: "Shared vs Reseller Hosting: Which is Right for You?",
    excerpt: "Not sure whether to pick shared or reseller hosting? We break down the key differences, costs, and when to upgrade.",
    category: "Hosting Guide",
    date: "Mar 5, 2025",
    readTime: "5 min",
    image: "https://hostao.com/wp-content/uploads/2025/02/Sharedvs.ResellerHostingWhichisRightforYou.jpeg",
    author: { name: "Hostao Team", avatar: "HT", slug: "hostao-team" },
  },
  {
    slug: "choosing-the-right-hosting-plan-for-startup",
    title: "How to Choose the Right Hosting Plan for Your Startup",
    excerpt: "Choosing hosting for your startup? Here's exactly what to look for and which plan fits your growth stage.",
    category: "Business",
    date: "Mar 10, 2025",
    readTime: "6 min",
    image: "https://hostao.com/wp-content/uploads/2025/02/HowtoChoosetheRightHostingPlanforYourStartu.jpeg",
    author: { name: "Hostao Team", avatar: "HT", slug: "hostao-team" },
  },
  {
    slug: "maximizing-profit-how-to-build-a-successful-hosting-business-with-reseller-hosting",
    title: "Maximizing Profit: How to Build a Successful Hosting Business with Reseller Hosting",
    excerpt: "Step-by-step guide to launching a profitable hosting business using Hostao's reseller plans.",
    category: "Reseller",
    date: "Mar 10, 2025",
    readTime: "8 min",
    image: "https://hostao.com/wp-content/uploads/2024/09/Hosta.jpeg",
    author: { name: "Hostao Team", avatar: "HT", slug: "hostao-team" },
  },
  {
    slug: "the-most-expensive-domain-sales-of-all-time",
    title: "The Most Expensive Domain Sales of All Time",
    excerpt: "From voice.com to sex.com - the jaw-dropping prices paid for premium domains throughout history.",
    category: "Domain",
    date: "Mar 18, 2025",
    readTime: "5 min",
    image: "https://hostao.com/wp-content/uploads/2025/01/10MostExpensiveDomainSalesofAllTim.jpeg",
    author: { name: "Hostao Team", avatar: "HT", slug: "hostao-team" },
  },
  {
    slug: "the-dos-and-donts-of-reseller-hosting-business",
    title: "The Dos and Don'ts of Reseller Hosting Business",
    excerpt: "Starting a reseller hosting business? Avoid these common mistakes and follow the proven best practices.",
    category: "Reseller",
    date: "Mar 24, 2025",
    readTime: "7 min",
    image: "https://hostao.com/wp-content/uploads/2025/03/resellerhostingbusines.jpeg",
    author: { name: "Hostao Team", avatar: "HT", slug: "hostao-team" },
  },
  {
    slug: "singapore-vps-hosting-why-choose-it-for-your-business",
    title: "Singapore VPS Hosting: Why Choose It for Your Business?",
    excerpt: "Why Singapore is the top choice for VPS hosting in Southeast Asia - latency, infrastructure, and reliability.",
    category: "VPS",
    date: "Apr 10, 2025",
    readTime: "6 min",
    image: "https://hostao.com/wp-content/uploads/2024/09/Hostao.jpeg",
    author: { name: "Hostao Team", avatar: "HT", slug: "hostao-team" },
  },
  {
    slug: "get-started-with-unlimited-reseller-hosting-and-free-whmcs",
    title: "Get Started with Unlimited Reseller Hosting and Free WHMCS",
    excerpt: "Everything you need to know about launching unlimited reseller hosting with WHMCS billing included.",
    category: "Reseller",
    date: "Apr 12, 2025",
    readTime: "5 min",
    image: "https://hostao.com/wp-content/uploads/2024/08/Get-Started-with-Unlimited-Reseller-Hosting-and-Free-WHMCS.jpeg",
    author: { name: "Hostao Team", avatar: "HT", slug: "hostao-team" },
  },
  {
    slug: "best-wordpress-hosting-providers-2024",
    title: "Best WordPress Hosting Providers in 2024",
    excerpt: "Complete guide to choosing the best WordPress hosting for speed, security, and support in 2024.",
    category: "WordPress",
    date: "Feb 15, 2025",
    readTime: "8 min",
    image: "https://hostao.com/wp-content/uploads/2024/02/WordPress-Tricks.png",
    author: { name: "Alen George", avatar: "AG", slug: "alen" },
  },
  {
    slug: "vps-vs-shared-hosting-complete-comparison",
    title: "VPS vs Shared Hosting: Complete Comparison Guide",
    excerpt: "Deciding between VPS and shared hosting? Here's everything you need to know about performance, cost, and scalability.",
    category: "VPS",
    date: "Feb 20, 2025",
    readTime: "7 min",
    image: "https://hostao.com/wp-content/uploads/2024/12/VPSvsSharedHostingCompleteComparisonGuide.jpeg",
    author: { name: "Vishnu R", avatar: "VR", slug: "vishnu-r" },
  },
  {
    slug: "website-speed-optimization-ultimate-guide",
    title: "Website Speed Optimization: Ultimate Guide",
    excerpt: "Learn how to make your website faster with proven techniques for better user experience and SEO rankings.",
    category: "Performance",
    date: "Feb 28, 2025",
    readTime: "10 min",
    image: "https://hostao.com/wp-content/uploads/2024/02/Hosting.png",
    author: { name: "Alen George", avatar: "AG", slug: "alen" },
  },
  {
    slug: "ssl-certificates-explained-beginners-guide",
    title: "SSL Certificates Explained: Beginner's Guide",
    excerpt: "Everything you need to know about SSL certificates, HTTPS, and website security for beginners.",
    category: "Security",
    date: "Jan 25, 2025",
    readTime: "6 min",
    image: "https://hostao.com/wp-content/uploads/2024/02/Hosting.png",
    author: { name: "Rojin Raju", avatar: "RR", slug: "rojin" },
  },
  {
    slug: "domain-name-selection-best-practices",
    title: "Domain Name Selection: Best Practices",
    excerpt: "How to choose the perfect domain name for your business, including SEO tips and branding considerations.",
    category: "Domain",
    date: "Jan 15, 2025",
    readTime: "5 min",
    image: "https://hostao.com/wp-content/uploads/2024/08/DomainNameSelectionBestPractices.jpeg",
    author: { name: "Gayathry", avatar: "GA", slug: "gayathry" },
  },
  {
    slug: "email-hosting-business-guide",
    title: "Professional Email Hosting for Business: Complete Guide",
    excerpt: "Set up professional email hosting for your business with custom domains, security features, and team collaboration.",
    category: "Email",
    date: "Jan 10, 2025",
    readTime: "8 min",
    image: "https://hostao.com/wp-content/uploads/2024/03/Professional-Email-Hosting-for-Business.jpeg",
    author: { name: "Hostao Team", avatar: "HT", slug: "hostao-team" },
  },
  {
    slug: "backup-and-restore-best-practices",
    title: "Website Backup and Restore: Best Practices",
    excerpt: "Essential backup strategies to protect your website data and ensure quick recovery from disasters.",
    category: "Security",
    date: "Dec 20, 2024",
    readTime: "7 min",
    image: "https://hostao.com/wp-content/uploads/2024/04/Website-Backup-and-Restore-Best-Practices.jpeg",
    author: { name: "Hostao Team", avatar: "HT", slug: "hostao-team" },
  },
  {
    slug: "dedicated-server-vs-cloud-hosting",
    title: "Dedicated Server vs Cloud Hosting: Which to Choose?",
    excerpt: "Compare dedicated servers and cloud hosting to find the best solution for your high-performance applications.",
    category: "Dedicated",
    date: "Dec 15, 2024",
    readTime: "9 min",
    image: "https://hostao.com/wp-content/uploads/2024/02/Hosting.png",
    author: { name: "Vishnu R", avatar: "VR", slug: "vishnu-r" },
  },
  {
    slug: "wordpress-performance-optimization-guide",
    title: "WordPress Performance Optimization: Complete Guide",
    excerpt: "Speed up your WordPress site with proven optimization techniques for better user experience and SEO.",
    category: "WordPress",
    date: "Dec 10, 2024",
    readTime: "12 min",
    image: "https://hostao.com/wp-content/uploads/2024/07/WordPressPerformanceOptimizationCompleteGuide.jpeg",
    author: { name: "Alen George", avatar: "AG", slug: "alen" },
  },
  {
    slug: "hosting-security-best-practices-2024",
    title: "Web Hosting Security Best Practices for 2024",
    excerpt: "Essential security measures to protect your website and hosting account from cyber threats.",
    category: "Security",
    date: "Dec 5, 2024",
    readTime: "8 min",
    image: "https://hostao.com/wp-content/uploads/2024/09/Web-Hosting-Security-Best-Practices-2024.jpeg",
    author: { name: "Rojin Raju", avatar: "RR", slug: "rojin" },
  },
  {
    slug: "cpanel-vs-plesk-hosting-control-panels",
    title: "cPanel vs Plesk: Which Hosting Control Panel is Better?",
    excerpt: "Compare the two most popular hosting control panels to choose the right one for your needs.",
    category: "Control Panels",
    date: "Nov 28, 2024",
    readTime: "6 min",
    image: "https://hostao.com/wp-content/uploads/2024/06/cPanelvsPleskvechoiceofthecorrect.jpeg",
    author: { name: "Gayathry", avatar: "GA", slug: "gayathry" },
  },
  {
    slug: "domain-transfer-complete-guide",
    title: "How to Transfer Your Domain: Complete Step-by-Step Guide",
    excerpt: "Transfer your domain safely between registrars without downtime with our comprehensive guide.",
    category: "Domain",
    date: "Nov 25, 2024",
    readTime: "7 min",
    image: "https://hostao.com/wp-content/uploads/2024/02/Hosting.png",
    author: { name: "Alen George", avatar: "AG", slug: "alen" },
  },
  {
    slug: "ecommerce-hosting-requirements",
    title: "E-commerce Hosting Requirements: What You Need to Know",
    excerpt: "Essential hosting features and requirements for running a successful online store.",
    category: "E-commerce",
    date: "Nov 20, 2024",
    readTime: "9 min",
    image: "https://hostao.com/wp-content/uploads/2024/05/E-commerceHostingRequirementsWhatYouNeedtoKnow.jpeg",
    author: { name: "Vishnu R", avatar: "VR", slug: "vishnu-r" },
  },
  {
    slug: "database-management-hosting-guide",
    title: "Database Management in Web Hosting: MySQL vs PostgreSQL",
    excerpt: "Choose the right database for your web application and learn management best practices.",
    category: "Database",
    date: "Nov 15, 2024",
    readTime: "10 min",
    image: "https://hostao.com/wp-content/uploads/2024/02/Hosting.png",
    author: { name: "Rojin Raju", avatar: "RR", slug: "rojin" },
  },
  {
    slug: "content-delivery-network-cdn-guide",
    title: "Content Delivery Networks (CDN): Complete Guide for Beginners",
    excerpt: "Understand how CDNs work and how they can dramatically improve your website's performance.",
    category: "Performance",
    date: "Nov 10, 2024",
    readTime: "8 min",
    image: "https://hostao.com/wp-content/uploads/2024/02/Hosting.png",
    author: { name: "Gayathry", avatar: "GA", slug: "gayathry" },
  },
  {
    slug: "server-monitoring-alerting-guide",
    title: "Server Monitoring and Alerting: Essential Tools and Strategies",
    excerpt: "Set up comprehensive monitoring for your hosting infrastructure to prevent downtime.",
    category: "Server Management",
    date: "Nov 5, 2024",
    readTime: "11 min",
    image: "https://hostao.com/wp-content/uploads/2024/02/Hosting.png",
    author: { name: "Alen George", avatar: "AG", slug: "alen" },
  },
  {
    slug: "migrate-website-new-host-guide",
    title: "How to Migrate Your Website to a New Host Without Downtime",
    excerpt: "Step-by-step website migration guide with tips to avoid common pitfalls and downtime.",
    category: "Migration",
    date: "Oct 30, 2024",
    readTime: "12 min",
    image: "https://hostao.com/wp-content/uploads/2024/05/How-to-Migrate-Your-Website-to-New-Host.jpeg",
    author: { name: "Vishnu R", avatar: "VR", slug: "vishnu-r" },
  },
  {
    slug: "hosting-uptime-sla-explained",
    title: "Hosting Uptime and SLA: What 99.9% Really Means",
    excerpt: "Understand hosting uptime guarantees, SLA terms, and what to expect from your hosting provider.",
    category: "Hosting Guide",
    date: "Oct 25, 2024",
    readTime: "6 min",
    image: "https://hostao.com/wp-content/uploads/2024/06/Hosting-Uptime-and-SLA-Explained.jpeg",
    author: { name: "Rojin Raju", avatar: "RR", slug: "rojin" },
  },
  {
    slug: "php-versions-hosting-compatibility",
    title: "PHP Versions and Hosting Compatibility: What You Need to Know",
    excerpt: "Choose the right PHP version for your applications and understand hosting compatibility issues.",
    category: "Development",
    date: "Oct 20, 2024",
    readTime: "7 min",
    image: "https://hostao.com/wp-content/uploads/2024/07/PHP-Versions-and-Hosting-Compatibility.jpeg",
    author: { name: "Gayathry", avatar: "GA", slug: "gayathry" },
  },
  {
    slug: "dns-records-explained-beginners",
    title: "DNS Records Explained: A Beginner's Guide to A, CNAME, MX, and More",
    excerpt: "Understand different types of DNS records and how they work to connect domains to websites.",
    category: "DNS",
    date: "Oct 15, 2024",
    readTime: "9 min",
    image: "https://hostao.com/wp-content/uploads/2024/08/DNS-Records-Explained-Beginners-Guide.jpeg",
    author: { name: "Alen George", avatar: "AG", slug: "alen" },
  },

];

function stripHtml(s: string) {
  return s
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

async function fetchWpPosts(): Promise<BlogCard[]> {
  try {
    // Fetch multiple pages to get more posts
    const allPosts: any[] = [];
    const perPage = 50;

    for (let page = 1; page <= 2; page++) {
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 5000); // 5s hard timeout
        const res = await fetch(
          `https://hostao.com/wp-json/wp/v2/posts?per_page=${perPage}&page=${page}&_fields=id,slug,title,excerpt,content,date,categories,_links&_embed=wp:term,author`,
          {
            signal: controller.signal,
            next: { revalidate: 86400 },
            headers: {
              'User-Agent': 'Mozilla/5.0 (compatible; Hostao Blog Sync)',
              'Accept': 'application/json'
            }
          }
        );
        clearTimeout(timer);
        if (!res.ok) break;
        const data: any[] = await res.json();
        if (data.length === 0) break;
        allPosts.push(...data);
        if (data.length < perPage) break; // Last page
      } catch {
        break;
      }
    }

    return allPosts.map((p) => {
      const title = stripHtml(p?.title?.rendered || "Untitled");
      const excerpt = stripHtml(p?.excerpt?.rendered || "");
      const words = stripHtml(p?.content?.rendered || "").split(" ").filter(Boolean).length;
      const mins = Math.max(3, Math.round(words / 220));
      // Get featured image with better fallback
      let image = "https://hostao.com/wp-content/uploads/2024/02/Hosting.png";
      try {
        if (p?._embedded?.["wp:featuredmedia"]?.[0]?.source_url) {
          image = p._embedded["wp:featuredmedia"][0].source_url;
        }
      } catch (e) {
        console.warn('Image fetch error for post:', p.slug);
      }
      const category = p?._embedded?.["wp:term"]?.[0]?.[0]?.name || "Blog";

      // Map real authors from WordPress
      let author = { name: "Hostao Team", avatar: "HT", slug: "hostao-team" };
      if (p?._embedded?.["author"]?.[0]) {
        const wpAuthor = p._embedded.author[0];
        const authorSlug = wpAuthor.slug;
        const authorName = wpAuthor.name;

        // Map known authors
        const authorMap: Record<string, { name: string; avatar: string; slug: string }> = {
          "alen": { name: "Alen George", avatar: "AG", slug: "alen" },
          "gayathry": { name: "Gayathry", avatar: "GA", slug: "gayathry" },
          "rojin": { name: "Rojin Raju", avatar: "RR", slug: "rojin" },
          "vishnu-r": { name: "Vishnu R", avatar: "VR", slug: "vishnu-r" },
        };

        if (authorMap[authorSlug]) {
          author = authorMap[authorSlug];
        } else {
          // Use author name from WP if not in our map
          const initials = authorName.split(' ').map((n: string) => n[0]).join('').toUpperCase();
          author = { name: authorName, avatar: initials, slug: authorSlug };
        }
      }

      return {
        slug: p.slug,
        title,
        excerpt,
        category,
        date: formatDate(p.date),
        readTime: `${mins} min`,
        image,
        author,
      } as BlogCard;
    });
  } catch (error) {
    console.warn('WordPress API fetch failed:', error);
    return [];
  }
}

// ALL blog posts from original hostao.com (31 total) - ensuring zero broken links
const AVAILABLE_POST_SLUGS = new Set([
  "shared-vs-reseller-hosting-which-is-right-for-you",
  "choosing-the-right-hosting-plan-for-startup",
  "maximizing-profit-how-to-build-a-successful-hosting-business-with-reseller-hosting",
  "the-most-expensive-domain-sales-of-all-time",
  "the-dos-and-donts-of-reseller-hosting-business",
  "singapore-vps-hosting-why-choose-it-for-your-business",
  "get-started-with-unlimited-reseller-hosting-and-free-whmcs",
  "best-wordpress-hosting-providers-2024",
  "website-speed-optimization-ultimate-guide",
  "ssl-certificates-explained-beginners-guide",
  "scaling-an-e-commerce-startup-smoothly-on-hostaos-singapore-vps",
  "scaling-your-business-with-reseller-hosting-south-africa-edition",
  "switch-to-openphone",
  "rank-math-vs-yoast-seo-plugin-review",
  "top-10-security-features-your-website-needs-in-2025",
  "ultimate-guide-to-reseller-hosting-types",
  "5-simple-seo-checklist-for-new-websites",
  "how-to-start-making-money-with-invideo-1",
  "best-hosting-plan-for-websites-how-to-measure-in-2022",
  "search-engine-optimization",
  "why-its-important-to-reevaluate-your-business-goals-regularly",
  "the-state-of-cloud-computing-in-europe-and-the-uk",
  "which-one-is-best-for-your-project-rust-vs-python",
  "hostao-makes-a-powerful-habitat-for-your-web-world-goodfirms",
  "create-a-website-and-earn-money-with-these-simple-tips",
  "10-factors-for-choosing-wordpress-hosting-plans",
  "how-to-fix-the-aw-snap-error-in-chrome-8-methods",
  "recover-a-stolen-domain-how-to-regain-your-hijacked-domain",
  "how-to-resolve-domain-disputes-understanding-udrp",
  "domain-name-extensions",
  "pabbly-connect-lifetime-deal-grow-business-with-the-best-automation-hostao",
  "website-with-top-wordpress-tricks",
  "resolving-the-most-common-wordpress-issues",
  "why-use-laravel-understanding-the-benefits-of-the-framework",
]);

export default async function BlogPage() {
  const wpPosts = await fetchWpPosts();
  const bySlug = new Map<string, BlogCard>();

  // Add WordPress posts (with working content)
  wpPosts.forEach((p) => {
    if (!bySlug.has(p.slug)) bySlug.set(p.slug, p);
  });

  // Add only fallback posts that have corresponding pages (to avoid broken links)
  FALLBACK_POSTS.forEach((p) => {
    if (AVAILABLE_POST_SLUGS.has(p.slug) && !bySlug.has(p.slug)) {
      bySlug.set(p.slug, p);
    }
  });

  const posts = Array.from(bySlug.values());

  // Sort by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Display all available posts (no arbitrary limit)
  const displayPosts = posts;

  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25">
            📝 Hostao Blog
          </span>
          <h1 className="text-4xl font-extrabold mb-3">
            Hosting Tips, Tutorials &amp; News
          </h1>
          <p className="text-white/80">
            Expert guides on web hosting, WordPress, performance, and growing your online presence.
          </p>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayPosts.map((p) => (
              <article
                key={p.slug}
                className="border border-gray-200 rounded-2xl overflow-hidden card-hover hover:border-[#0056A7]/30"
              >
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-blue-50 text-[#0056A7] font-semibold px-2.5 py-0.5 rounded-full">
                      {p.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {p.date} · {p.readTime} read
                    </span>
                  </div>

                  <h2 className="font-bold text-gray-900 mb-2 text-sm leading-snug line-clamp-2">
                    {p.title}
                  </h2>

                  <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-3">
                    {p.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#0056A7] flex items-center justify-center text-white text-xs font-bold">
                        {p.author.avatar}
                      </div>
                      <Link href={`/author/${p.author.slug}`} className="text-xs text-gray-500 hover:text-[#0056A7]">
                        {p.author.name}
                      </Link>
                    </div>
                    <Link
                      href={`/blog/${p.slug}/`}
                      className="text-[#0056A7] text-xs font-semibold hover:underline"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Team */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Our Editorial Team</h2>
          <p className="text-gray-600 text-sm mb-6">Expert writers and reviewers behind every article</p>
          <div className="flex justify-center gap-3 mb-6">
            {[
              { avatar: "RM", name: "Reji Modiyil" },
              { avatar: "AG", name: "Alen George" },
              { avatar: "GA", name: "Gayathry" },
              { avatar: "RR", name: "Rojin Raju" },
              { avatar: "VR", name: "Vishnu R" },
              { avatar: "HT", name: "Hostao Team" },
            ].map((m) => (
              <div key={m.avatar} className="w-10 h-10 rounded-full bg-[#0056A7] flex items-center justify-center text-white text-xs font-bold" title={m.name}>
                {m.avatar}
              </div>
            ))}
          </div>
          <Link href="/author" className="text-[#0056A7] font-semibold text-sm hover:underline">
            Meet our writers →
          </Link>
        </div>
      </section>
    </div>
  );
}
