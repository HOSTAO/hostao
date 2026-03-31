import Link from "next/link";

export const metadata = {
  title: "Our Technology Partners | Hostao",
  description: "Hostao partners with the world's leading technology companies. Cloudflare, LiteSpeed, cPanel, and more to deliver the best hosting experience.",
};

const PARTNERS = [
  { name: "Cloudflare", category: "CDN & Security", logo: "☁️", desc: "Global CDN, DDoS protection, and DNS services. Every Hostao customer benefits from Cloudflare's network of 300+ data centers worldwide.", url: "https://cloudflare.com" },
  { name: "LiteSpeed", category: "Web Server", logo: "⚡", desc: "LiteSpeed Web Server — the world's fastest web server, 6x faster than Apache. Powers all our shared hosting plans.", url: "https://litespeedtech.com" },
  { name: "cPanel", category: "Control Panel", logo: "🖥️", desc: "Industry-standard cPanel/WHM control panel. Powers millions of hosting accounts worldwide. Included with all reseller plans.", url: "https://cpanel.net" },
  { name: "WHMCS", category: "Billing & Automation", logo: "💼", desc: "WHMCS is the leading billing, provisioning, and customer management platform for web hosting businesses.", url: "https://whmcs.com" },
  { name: "Imunify360", category: "Security", logo: "🛡️", desc: "AI-powered security platform providing real-time malware scanning, intrusion detection, and proactive defense.", url: "https://imunify360.com" },
  { name: "Softaculous", category: "App Installer", logo: "📦", desc: "One-click installer for 400+ apps including WordPress, Joomla, Magento, and more. Included free with cPanel.", url: "https://softaculous.com" },
  { name: "JetBackup", category: "Backup", logo: "💾", desc: "Enterprise backup solution. Automated daily backups with granular restore capabilities for every account.", url: "https://jetbackup.com" },
  { name: "KernelCare", category: "Security Updates", logo: "🔧", desc: "Live kernel patching — server kernels stay patched without downtime or reboots. Maximum security, zero interruption.", url: "https://tuxcare.com/live-patching-services/kernelcare-enterprise/" },
  { name: "Equinix", category: "Data Centers", logo: "🏢", desc: "We colocate in Equinix data centers globally — the most trusted carrier-neutral colocation provider.", url: "https://equinix.com" },
  { name: "Let's Encrypt", category: "SSL Certificates", logo: "🔒", desc: "Free, automated SSL/TLS certificates. Every Hostao hosted website gets free SSL via Let's Encrypt.", url: "https://letsencrypt.org" },
  { name: "Stripe", category: "Payments", logo: "💳", desc: "Secure payment processing via Stripe. PCI-compliant, supports cards, PayPal, and local payment methods.", url: "https://stripe.com" },
  { name: "PayPal", category: "Payments", logo: "🅿️", desc: "PayPal payment integration for customers who prefer to pay via PayPal. Fully integrated in our billing portal.", url: "https://paypal.com" },
];

export default function OurPartnersPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">🤝 Our Partners</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Powered by the Best in the Industry</h1>
          <p className="text-white/85 text-lg mb-8">Hostao partners with world-class technology companies to deliver exceptional hosting performance, security, and reliability. Our stack is built on industry leaders.</p>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Technology Stack</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Partner Ecosystem</h2>
            <p className="text-gray-600">Every component of our hosting stack is powered by industry-leading partners.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARTNERS.map(partner => (
              <div key={partner.name} className="bg-white border border-gray-200 rounded-2xl p-6 card-hover">
                <div className="flex items-start gap-4 mb-3">
                  <span className="text-3xl">{partner.logo}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{partner.name}</h3>
                    <span className="text-xs text-[#0056A7] font-semibold bg-blue-50 px-2 py-0.5 rounded-full">{partner.category}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <span className="section-label">Become a Partner</span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner With Hostao</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Are you a technology company interested in partnering with Hostao? We&apos;re always looking for solutions that improve our customers&apos; hosting experience.</p>
          <Link href="/contact" className="btn-blue px-8 py-3.5">Contact Our Partnerships Team</Link>
        </div>
      </section>

      <section className="hero-gradient text-white py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Experience Our Partner-Powered Hosting</h2>
          <p className="text-white/80 mb-8">Cloudflare CDN, LiteSpeed servers, cPanel — all bundled into affordable hosting plans.</p>
          <a href="https://my.hostao.com/cart.php?a=add&pid=7" target="_blank" rel="noopener noreferrer" className="btn-accent px-8 py-3.5">Start Hosting Today →</a>
        </div>
      </section>
    </div>
  );
}
