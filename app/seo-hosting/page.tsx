import Link from "next/link";

export const metadata = { title: "SEO Hosting — Multiple C-Class IP Hosting | Hostao", description: "SEO hosting with different C-Class IPs for link building and PBN management. Multiple server locations worldwide." };

const PLANS = [
  { name: "SEO Starter", price: "$5", ips: "5 C-Class IPs", servers: "5 Different Servers", storage: "5GB NVMe SSD", bandwidth: "50GB/mo", features: ["5 Different C-Class IPs","5 Different Server Locations","Free SSL per Domain","cPanel per Account","99.9% Uptime","24/7 Support"], href: "https://my.hostao.com/cart.php?a=add&pid=10" },
  { name: "SEO Pro", price: "$15", ips: "20 C-Class IPs", servers: "20 Different Servers", storage: "20GB NVMe SSD", bandwidth: "200GB/mo", features: ["20 Different C-Class IPs","20 Different Server Locations","Free SSL per Domain","cPanel per Account","99.9% Uptime","Priority Support","Dedicated IP Option"], href: "https://my.hostao.com/cart.php?a=add&pid=11", popular: true },
  { name: "SEO Enterprise", price: "$40", ips: "100 C-Class IPs", servers: "100 Different Servers", storage: "100GB NVMe SSD", bandwidth: "1TB/mo", features: ["100 Different C-Class IPs","Global Server Network","Free SSL per Domain","cPanel per Account","99.9% Uptime","Dedicated Account Manager","Custom IP Ranges"], href: "https://my.hostao.com/cart.php?a=add&pid=12" },
];

export default function SeoHostingPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25">📈 SEO Hosting</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Multiple C-Class IP Hosting for SEO</h1>
          <p className="text-white/85 text-lg mb-6">Host your network of websites on different C-Class IPs across multiple server locations. Essential for SEO link building strategies and private blog networks.</p>
          <a href="#plans" className="btn-accent px-8 py-3.5 text-base">View SEO Hosting Plans ↓</a>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Why C-Class IP Hosting Matters for SEO</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: "🌐", title: "Diverse IP Footprint", desc: "Links from different C-Class IPs look natural to Google. Avoid footprint penalties that can tank your rankings." },
              { icon: "🔗", title: "Powerful Link Building", desc: "Host your PBN or link network on geographically and IP-diverse servers for maximum SEO impact." },
              { icon: "📍", title: "Multiple Locations", desc: "Servers in USA, UK, India, UAE, Singapore, Germany and more — genuine geographical diversity." },
            ].map(i => (
              <div key={i.title} className="bg-white border border-gray-200 rounded-xl p-6 card-hover">
                <div className="text-3xl mb-3">{i.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{i.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white" id="plans">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">SEO Hosting Plans</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Choose Your SEO Hosting Package</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANS.map(plan => (
              <div key={plan.name} className={`relative flex flex-col rounded-2xl p-7 bg-white transition-all ${"popular" in plan && plan.popular ? "border-2 border-[#0056A7] plan-popular" : "border border-gray-200 card-hover"}`}>
                {"popular" in plan && plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0056A7] text-white text-xs font-bold px-5 py-1.5 rounded-full">✦ Most Popular</div>}
                <div className="text-5xl font-extrabold text-[#171734] mb-1">{plan.price}<span className="text-lg text-gray-400">/mo</span></div>
                <div className="font-bold text-lg text-gray-900 mt-2 mb-1">{plan.name}</div>
                <div className="bg-blue-50 text-[#0056A7] text-sm font-bold rounded-lg px-3 py-1.5 mb-4 text-center">{plan.ips} — {plan.servers}</div>
                <ul className="flex-1 space-y-2.5 mb-7">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <svg className="w-4 h-4 text-[#0056A7] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={plan.href} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-center py-3">Order Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">What is SEO Hosting?</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">SEO Hosting Explained</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Understanding the difference between regular hosting and SEO-optimized hosting infrastructure.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-7 card-hover">
              <h3 className="font-bold text-gray-900 text-lg mb-3">🖥️ Regular Web Hosting</h3>
              <ul className="space-y-2.5 text-sm text-gray-600 leading-relaxed">
                <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">•</span>All your websites share the same IP address</li>
                <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">•</span>Single server location for all domains</li>
                <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">•</span>Search engines can easily detect site relationships</li>
                <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">•</span>Cross-linking between your sites carries less weight</li>
                <li className="flex items-start gap-2"><span className="text-gray-400 mt-0.5">•</span>Leaves a clear hosting footprint in WHOIS and DNS</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-[#0056A7] rounded-xl p-7 shadow-sm">
              <h3 className="font-bold text-[#0056A7] text-lg mb-3">🚀 SEO Hosting with Hostao</h3>
              <ul className="space-y-2.5 text-sm text-gray-700 leading-relaxed">
                <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#0056A7] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>Each website gets a unique C-Class IP address</li>
                <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#0056A7] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>Sites hosted across different physical servers worldwide</li>
                <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#0056A7] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>Websites appear completely unrelated to search engines</li>
                <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#0056A7] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>Cross-links pass maximum link equity and authority</li>
                <li className="flex items-start gap-2"><svg className="w-4 h-4 text-[#0056A7] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>Zero detectable footprint — fully diversified hosting</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-500 text-sm text-center mt-8 leading-relaxed max-w-3xl mx-auto">SEO hosting is a specialized hosting strategy where each website in your network is assigned a unique C-Class IP address from a different server. This makes every site appear independently hosted, which is critical when building backlink networks that search engines trust.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">IP Classes Explained</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Understanding C-Class IPs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A quick technical breakdown of how IP addresses work and why the C-Class octet matters for SEO.</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-7 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">How an IP Address is Structured</h3>
            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4 text-center">
              <div className="font-mono text-lg md:text-xl text-gray-800 mb-2">
                <span className="bg-gray-100 px-2 py-1 rounded">192</span>
                <span className="text-gray-400 mx-1">.</span>
                <span className="bg-gray-100 px-2 py-1 rounded">168</span>
                <span className="text-gray-400 mx-1">.</span>
                <span className="bg-blue-100 text-[#0056A7] font-bold px-2 py-1 rounded border border-blue-200">1</span>
                <span className="text-gray-400 mx-1">.</span>
                <span className="bg-gray-100 px-2 py-1 rounded">100</span>
              </div>
              <div className="flex justify-center gap-2 md:gap-6 text-xs text-gray-500 mt-3">
                <span>A-Class</span>
                <span>B-Class</span>
                <span className="text-[#0056A7] font-bold">C-Class</span>
                <span>D-Class</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">An IPv4 address has four octets (e.g., <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">A.B.C.D</code>). The <strong>C-Class</strong> is the third octet. When two IPs share the same A, B, and C octets (e.g., 192.168.<strong>1</strong>.100 and 192.168.<strong>1</strong>.200), search engines recognize them as being on the same network block. For SEO purposes, you need IPs with <strong>different C-Class values</strong> so each site appears to be on a completely separate network.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: "⚠️", title: "Same C-Class = Risk", desc: "Sites on 103.21.58.x all share the same C-Class. Links between them are easily flagged as a network by search engine algorithms." },
              { icon: "✅", title: "Different C-Class = Safe", desc: "Sites on 103.21.58.x, 198.54.112.x, and 45.33.74.x have unique C-Classes. Links look natural and carry full SEO value." },
              { icon: "🔍", title: "How Google Detects", desc: "Google checks IP neighborhoods. If many domains linking to each other share the same C-Class, it devalues those links or may penalize the network." },
            ].map(i => (
              <div key={i.title} className="bg-white border border-gray-200 rounded-xl p-6 card-hover">
                <div className="text-2xl mb-3">{i.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{i.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Use Cases</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Who Needs SEO Hosting?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From solo webmasters to large agencies — here is how professionals use C-Class IP hosting.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "🕸️", title: "PBN Management", desc: "Host your private blog network on fully diversified IPs. Each PBN site gets a unique C-Class so your network stays undetectable and your money site gets clean, powerful backlinks." },
              { icon: "🔗", title: "Link Building Networks", desc: "Build and manage link wheels, tiered link structures, and authority networks. Different C-Class IPs ensure every link passes maximum equity without triggering footprint detection." },
              { icon: "📊", title: "Multi-Site SEO", desc: "Run multiple niche sites, affiliate projects, or regional pages on separate IPs. Ideal for SEOs managing a portfolio of content sites that interlink for topical authority." },
              { icon: "🏢", title: "Agency Portfolios", desc: "Agencies managing SEO for multiple clients can host each client project on a distinct C-Class IP — keeping campaigns isolated and protecting against cross-contamination risks." },
            ].map(i => (
              <div key={i.title} className="bg-white border border-gray-200 rounded-xl p-6 card-hover flex flex-col">
                <div className="text-3xl mb-3">{i.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{i.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">More Features</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Everything You Need for SEO Success</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our SEO hosting plans come packed with features designed for serious search engine optimization.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🔒", title: "Free SSL Certificates", desc: "Every domain gets a free Let's Encrypt SSL certificate. HTTPS is a confirmed Google ranking factor — and it is included at no extra cost." },
              { icon: "⚡", title: "NVMe SSD Storage", desc: "All plans run on blazing-fast NVMe solid-state drives. Faster page loads mean better Core Web Vitals and higher rankings in search results." },
              { icon: "🛡️", title: "Clean IP Records", desc: "We monitor IP reputation continuously. Every C-Class IP assigned to your account is verified clean with no spam or blacklist history." },
              { icon: "🌍", title: "Global Server Network", desc: "Servers across USA, UK, Germany, India, Singapore, UAE, and more. Genuine geographical diversity for a natural-looking hosting footprint." },
              { icon: "🖥️", title: "cPanel Per Account", desc: "Full cPanel access for each hosting account. Manage domains, emails, databases, and files independently with an industry-standard control panel." },
              { icon: "📞", title: "24/7 Expert Support", desc: "Our SEO hosting specialists are available around the clock. Get help with IP setup, DNS configuration, and migration — anytime you need it." },
            ].map(i => (
              <div key={i.title} className="bg-gray-50 border border-gray-200 rounded-xl p-6 card-hover">
                <div className="text-2xl mb-3">{i.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{i.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hero-gradient text-white py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Boost Your SEO Rankings Today</h2>
          <p className="text-white/80 mb-6">Diverse IPs, multiple locations, clean records. Everything your SEO strategy needs.</p>
          <Link href="/contact" className="bg-white text-[#0056A7] font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 text-sm inline-block">Talk to Our SEO Hosting Expert</Link>
        </div>
      </section>
    </div>
  );
}
