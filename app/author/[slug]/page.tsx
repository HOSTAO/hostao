import Link from "next/link";
import { notFound } from "next/navigation";

const AUTHORS: Record<string, { name: string; role: string; bio: string; avatar: string }> = {
  "hostao-team": {
    name: "Hostao Team",
    role: "Editorial Team",
    bio: "Hosting experts, engineers, and growth writers at Hostao. We publish practical guides on domains, reseller hosting, VPS, and performance.",
    avatar: "HT",
  },
  "alen": {
    name: "Alen George",
    role: "Technical Writer",
    bio: "Technical content specialist focusing on hosting infrastructure, performance optimization, and emerging web technologies.",
    avatar: "AG",
  },
  "gayathry": {
    name: "Gayathry",
    role: "Content Editor",
    bio: "Content strategist and editor specializing in web hosting guides, digital marketing, and business growth strategies.",
    avatar: "GA",
  },
  "rojin": {
    name: "Rojin Raju",
    role: "Technology Writer",
    bio: "As a BCA graduate with a passion for technology and innovation, committed to leveraging technical knowledge to craft insightful and engaging content that resonates with a wide audience.",
    avatar: "RR",
  },
  "vishnu-r": {
    name: "Vishnu R",
    role: "Technical Reviewer",
    bio: "Expert in web hosting technologies, server management, and technical documentation with extensive experience in the hosting industry.",
    avatar: "VR",
  },
  "reji": {
    name: "Reji Modiyil",
    role: "Publisher & CEO",
    bio: "Founder and CEO of Hostao with 25+ years in web technology, hosting infrastructure, and SaaS product development. Oversees editorial standards and publishing decisions.",
    avatar: "RM",
  },
};

const AUTHOR_POSTS: Record<string, string[]> = {
  "alen": [
    "shared-vs-reseller-hosting-which-is-right-for-you",
    "best-wordpress-hosting-providers-2024",
    "website-speed-optimization-ultimate-guide",
    "rank-math-vs-yoast-seo-plugin-review",
    "create-a-website-and-earn-money-with-these-simple-tips",
    "website-with-top-wordpress-tricks",
    "why-use-laravel-understanding-the-benefits-of-the-framework",
    "how-to-start-making-money-with-invideo-1",
    "which-one-is-best-for-your-project-rust-vs-python",
    "domain-transfer-complete-guide",
    "server-monitoring-alerting-guide",
    "dns-records-explained-beginners",
    "wordpress-performance-optimization-guide",
  ],
  "gayathry": [
    "choosing-the-right-hosting-plan-for-startup",
    "scaling-your-business-with-reseller-hosting-south-africa-edition",
    "best-hosting-plan-for-websites-how-to-measure-in-2022",
    "domain-name-extensions",
    "switch-to-openphone",
    "why-its-important-to-reevaluate-your-business-goals-regularly",
    "cpanel-vs-plesk-hosting-control-panels",
    "domain-name-selection-best-practices",
    "content-delivery-network-cdn-guide",
    "php-versions-hosting-compatibility",
    "5-simple-seo-checklist-for-new-websites",
    "pabbly-connect-lifetime-deal-grow-business-with-the-best-automation-hostao",
  ],
  "rojin": [
    "the-most-expensive-domain-sales-of-all-time",
    "ssl-certificates-explained-beginners-guide",
    "top-10-security-features-your-website-needs-in-2025",
    "recover-a-stolen-domain-how-to-regain-your-hijacked-domain",
    "search-engine-optimization",
    "how-to-resolve-domain-disputes-understanding-udrp",
    "how-to-fix-the-aw-snap-error-in-chrome-8-methods",
    "hosting-security-best-practices-2024",
    "hosting-uptime-sla-explained",
    "database-management-hosting-guide",
  ],
  "vishnu-r": [
    "the-dos-and-donts-of-reseller-hosting-business",
    "scaling-an-e-commerce-startup-smoothly-on-hostaos-singapore-vps",
    "ultimate-guide-to-reseller-hosting-types",
    "10-factors-for-choosing-wordpress-hosting-plans",
    "the-state-of-cloud-computing-in-europe-and-the-uk",
    "resolving-the-most-common-wordpress-issues",
    "ecommerce-hosting-requirements",
    "migrate-website-new-host-guide",
    "dedicated-server-vs-cloud-hosting",
  ],
  "hostao-team": [
    "maximizing-profit-how-to-build-a-successful-hosting-business-with-reseller-hosting",
    "singapore-vps-hosting-why-choose-it-for-your-business",
    "get-started-with-unlimited-reseller-hosting-and-free-whmcs",
    "hostao-makes-a-powerful-habitat-for-your-web-world-goodfirms",
    "email-hosting-business-guide",
    "backup-and-restore-best-practices",
  ],
  "reji": [],
};

function slugToTitle(slug: string): string {
  return slug
    .replace(/-/g, " ")
    .replace(/^\w/, (c) => c.toUpperCase());
}

export function generateStaticParams() {
  return Object.keys(AUTHORS).map((slug) => ({ slug }));
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = AUTHORS[slug];
  if (!author) notFound();

  const posts = AUTHOR_POSTS[slug] || [];

  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-14 px-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[#0056A7] flex items-center justify-center font-extrabold text-xl text-white">
            {author.avatar}
          </div>
          <div>
            <h1 className="text-3xl font-extrabold">{author.name}</h1>
            <p className="text-white/80 text-sm">{author.role}</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <p className="text-gray-700 mb-8">{author.bio}</p>

        <h2 className="text-xl font-bold text-gray-900 mb-4">Posts by this author</h2>
        {posts.length > 0 ? (
          <ul className="space-y-2 mb-8">
            {posts.map((postSlug) => (
              <li key={postSlug}>
                <Link href={`/${postSlug}`} className="text-[#0056A7] hover:underline">
                  {slugToTitle(postSlug)}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 mb-8">This team member serves in an editorial capacity.</p>
        )}

        <div className="flex items-center gap-6">
          <Link href="/blog" className="text-[#0056A7] font-semibold hover:underline">← Back to Blog</Link>
          <Link href="/author" className="text-[#0056A7] font-semibold hover:underline">Meet the Team →</Link>
        </div>
      </section>
    </div>
  );
}
