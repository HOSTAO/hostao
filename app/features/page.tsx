import Link from "next/link";
import Image from "next/image";
import DomainSearch from "@/components/DomainSearch";
import RatingeReviewsWidget from "@/components/RatingeReviewsWidget";
import TrustBar from "@/components/TrustBar";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata = { 
  title: "Features — We Provide Secure & Powerful Features | Hostao", 
  description: "Discover what makes Hostao special. NVMe SSD storage, free SSL certificates, cPanel control panel, 24/7 support, and enterprise security — all included in every plan." 
};

const FEATURE_CATEGORIES = [
  {
    category: "Performance Features",
    icon: "⚡",
    features: [
      {
        title: "NVMe SSD Storage",
        description: "Lightning-fast NVMe SSD storage provides 2X faster performance than traditional SSD drives. Your websites load faster, improving user experience and search rankings.",
        icon: "💾"
      },
      {
        title: "LiteSpeed Web Server",
        description: "Industry-leading LiteSpeed web server delivers up to 3X better performance than Apache. Optimized for WordPress and dynamic content.",
        icon: "⚡"
      },
      {
        title: "HTTP/3 Support",
        description: "Latest HTTP/3 protocol with QUIC for faster, more reliable connections. Reduces latency and improves mobile performance.",
        icon: "🚀"
      },
      {
        title: "Free CloudFlare CDN",
        description: "Global content delivery network accelerates your website worldwide. Cached content served from 200+ locations globally.",
        icon: "🌐"
      }
    ]
  },
  {
    category: "Security Features", 
    icon: "🛡️",
    features: [
      {
        title: "Free SSL Certificates",
        description: "Lifetime free SSL certificates for all domains. Automatic installation and renewal with Let's Encrypt. HTTPS everywhere.",
        icon: "🔒"
      },
      {
        title: "DDoS Protection",
        description: "Enterprise-grade DDoS protection shields your website from volumetric attacks. Multi-layered defense keeps you online.",
        icon: "🛡️"
      },
      {
        title: "Malware Scanning",
        description: "Daily automated malware scans detect and remove threats. Proactive security monitoring protects your reputation.",
        icon: "🔍"
      },
      {
        title: "Firewall Protection",
        description: "Advanced firewall rules block malicious traffic. Real-time threat detection prevents attacks before they reach your site.",
        icon: "🔥"
      }
    ]
  },
  {
    category: "Management Tools",
    icon: "🛠️", 
    features: [
      {
        title: "cPanel Control Panel",
        description: "Industry-standard cPanel interface trusted by millions. Manage domains, email, databases, and files with ease.",
        icon: "⚙️"
      },
      {
        title: "Softaculous Auto-Installer",
        description: "One-click installation of WordPress, Joomla, Drupal, and 400+ applications. Set up websites in seconds.",
        icon: "📦"
      },
      {
        title: "File Manager",
        description: "Web-based file manager for uploading, editing, and organizing files. No FTP client needed.",
        icon: "📁"
      },
      {
        title: "Database Management",
        description: "Create and manage MySQL databases with phpMyAdmin. Import/export data, run queries, manage users.",
        icon: "🗄️"
      }
    ]
  },
  {
    category: "Email Services",
    icon: "📧",
    features: [
      {
        title: "Professional Email",
        description: "Create unlimited email accounts with your domain name. Professional addresses like you@yourdomain.com.",
        icon: "📧"
      },
      {
        title: "Webmail Access",
        description: "Access email from any browser with Roundcube, Horde, and SquirrelMail. No software installation required.",
        icon: "💻"
      },
      {
        title: "Spam Protection",
        description: "Advanced SpamAssassin filtering blocks spam and viruses. Clean inbox with customizable filter rules.",
        icon: "🚫"
      },
      {
        title: "Email Forwarding",
        description: "Forward emails to external accounts, set auto-responders, create mailing lists, and manage aliases.",
        icon: "➡️"
      }
    ]
  },
  {
    category: "Reliability & Support",
    icon: "🤝",
    features: [
      {
        title: "99.9% Uptime SLA",
        description: "Service level agreement guarantees 99.9% uptime. Compensation provided if we don't meet our commitment.",
        icon: "✅"
      },
      {
        title: "Daily Backups",
        description: "Automatic daily backups with 7-day retention. One-click restore from cPanel anytime.",
        icon: "💾"
      },
      {
        title: "24/7 Live Support",
        description: "Real hosting experts available 24/7 via live chat, tickets, and phone. Not outsourced — our own team.",
        icon: "🎧"
      },
      {
        title: "Free Migration",
        description: "We migrate your existing website for free. Files, databases, emails — everything transferred with zero downtime.",
        icon: "📦"
      }
    ]
  }
];

const FAQ_ITEMS = [
  {
    question: "What is web hosting?",
    answer: "Web hosting is a service that allows individuals and businesses to publish their websites on the internet. Hosting providers like Hostao store your website files on powerful servers connected to the internet, making your site accessible to visitors worldwide 24/7."
  },
  {
    question: "What are the different types of web hosting?",
    answer: "Main types include: Shared Hosting (multiple sites on one server, most affordable), VPS Hosting (virtual private server with dedicated resources), Dedicated Servers (entire server for your use), and Reseller Hosting (sell hosting services to others)."
  },
  {
    question: "What is shared hosting?",
    answer: "Shared hosting means multiple websites share resources on the same server. It's the most cost-effective option for small to medium websites. Despite sharing resources, each account is isolated for security."
  },
  {
    question: "What is VPS hosting?",
    answer: "VPS (Virtual Private Server) hosting provides dedicated resources within a shared environment. You get guaranteed RAM, CPU, and storage that can't be used by other accounts. More powerful than shared hosting."
  },
  {
    question: "What is dedicated server hosting?",
    answer: "Dedicated hosting gives you an entire server for your exclusive use. Maximum performance, security, and control. Ideal for high-traffic websites, large databases, and resource-intensive applications."
  },
  {
    question: "What is reseller hosting?",
    answer: "Reseller hosting lets you create and sell hosting packages to others. You get wholesale pricing and tools like WHMCS for billing. Perfect for web designers, agencies, and entrepreneurs wanting to start a hosting business."
  },
  {
    question: "What is bandwidth and disk space in web hosting?",
    answer: "Disk space is storage for your files (HTML, images, videos, databases). Bandwidth is monthly data transfer - how much content visitors can download. More traffic requires more bandwidth."
  },
  {
    question: "What security measures should I expect from a web hosting provider?",
    answer: "Look for: Free SSL certificates, malware scanning, DDoS protection, firewalls, regular backups, security monitoring, and prompt security updates. Hostao includes all these in every plan."
  },
  {
    question: "What is uptime and why is it important?",
    answer: "Uptime is the percentage of time your website is accessible online. 99.9% uptime means less than 9 hours of downtime per year. Higher uptime means better user experience and search engine rankings."
  },
  {
    question: "Can I host multiple websites on a single hosting account?",
    answer: "Yes! Most Hostao plans support multiple domains. You can host completely separate websites or create subdomains. Each site can have its own email accounts and databases."
  }
];

export default function FeaturesPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="py-14 px-4 text-center" style={{ background: "#d9ecff" }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0c1434]">We Provide Secure & Powerful Features</h1>
          <p className="text-[#1f2b4d] max-w-3xl mx-auto text-lg leading-relaxed">
            Every Hostao hosting plan includes enterprise-grade features at affordable prices. 
            No hidden costs, no upsells — everything you need is included.
          </p>
        </div>
      </section>

      {/* ── WHAT WE PROVIDE ─────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#0056A7] mb-3">WHAT WE PROVIDE</h2>
            <h3 className="text-3xl font-bold text-gray-900">Complete Hosting Features Included</h3>
          </div>

          <div className="space-y-16">
            {FEATURE_CATEGORIES.map((category, i) => (
              <div key={i}>
                <div className="text-center mb-8">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.features.map((feature, j) => (
                    <div key={j} className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100">
                      <div className="text-3xl mb-3">{feature.icon}</div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOMAIN SEARCH ───────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#171734]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#0056A7] text-xs font-bold uppercase tracking-widest mb-3 text-white/50">Domain Registration</div>
          <h2 className="text-3xl font-bold text-white mb-3">Find Your New Domain</h2>
          <p className="text-white/60 mb-6 text-sm">Discover the perfect online identity with our domain search. Easily find your wanted domain and secure it today for a strong online presence.</p>
          <p className="text-white/50 text-xs mb-6">Reserve your domain today before someone takes it.</p>
          <DomainSearch />
          <div className="mt-6">
            <Image
              src="https://hostao.com/wp-content/uploads/2024/01/Domain-Extension.png"
              alt="Domain Extensions"
              width={400}
              height={60}
              className="mx-auto h-auto max-w-full"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#EAF4FF]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <Image
              src="https://hostao.com/wp-content/uploads/2024/04/corporate-man-35-767x1024.png"
              alt="Low cost hosting"
              width={400}
              height={500}
              className="w-full max-w-md h-auto"
              unoptimized
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">WHY CHOOSE US</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Grow Faster By Using Our Hosting Services</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Choose Hostao for reliable and secure hosting services that are tailored to your specific needs. 
                Our advanced technology, 24/7 support, and affordable pricing make us the ideal choice for individuals 
                and businesses looking to grow their online presence.
              </p>
              <p>Experience the Hostao difference today.</p>
            </div>
            <div className="mt-6">
              <Link href="/about-us" className="inline-flex items-center gap-2 bg-[#0056A7] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#004085] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ─────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions about Web Hosting</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hostao offers web hosting services to make websites accessible globally by storing files on dependable servers. 
              With various options, such as shared hosting for affordability and dedicated servers for optimal performance, 
              Hostao caters to different needs, empowering businesses, organizations, and individuals to establish an online presence.
            </p>
          </div>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* ── CUSTOMER REVIEWS ────────────────────────────────── */}
      <section className="py-10 px-4" style={{background: "#F0F5FA"}}>
        <div className="max-w-6xl mx-auto">
          <RatingeReviewsWidget />
        </div>
      </section>

      {/* ── TRUST BAR ──────────────────────────────────────── */}
      <TrustBar />

    </div>
  );
}