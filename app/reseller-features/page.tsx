import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Standard Features | Reseller Hosting Features | Hostao",
  description: "Complete list of standard features included with Hostao reseller hosting plans. Free WHMCS, WHM/cPanel, SSD storage, and much more.",
};

export default function ResellerFeatures() {
  return (
    <div className="bg-hostao-light min-h-screen">
      {/* Hero Section */}
      <section className="bg-hostao-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-hostao-dark mb-4">
              Standard Reseller Hosting Features
            </h1>
            <p className="text-xl text-hostao-medium mb-8 max-w-3xl mx-auto">
              Every Hostao reseller hosting plan includes these powerful features to help you succeed in the hosting business.
            </p>
            <a href="/reseller-hosting" className="btn-hostao-primary">
              View Reseller Plans
            </a>
          </div>
        </div>
      </section>

      {/* Control Panel Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hostao-dark mb-4">
              Control Panel & Management
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "WHM Control Panel",
                description: "Full root access with Web Host Manager for complete control",
                included: true
              },
              {
                title: "cPanel for End Users",
                description: "Industry-standard cPanel for your customers",
                included: true
              },
              {
                title: "Free WHMCS License",
                description: "Complete billing and automation software included",
                included: true
              },
              {
                title: "Softaculous Auto-Installer",
                description: "400+ scripts including WordPress, Joomla, Drupal",
                included: true
              },
              {
                title: "White Label Hosting",
                description: "Your brand, your logo, your business",
                included: true
              },
              {
                title: "Private Name Servers",
                description: "Custom nameservers with your domain name",
                included: true
              },
            ].map((feature, index) => (
              <div key={index} className="bg-hostao-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                    feature.included ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                  }`}>
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-hostao-dark mb-2">{feature.title}</h3>
                    <p className="text-hostao-medium text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Features */}
      <section className="bg-hostao-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hostao-dark mb-4">
              Performance & Reliability
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "NVMe SSD Storage",
                description: "Ultra-fast NVMe SSD drives for maximum performance",
              },
              {
                title: "99.9% Uptime Guarantee",
                description: "Reliable hosting with SLA-backed uptime guarantee",
              },
              {
                title: "CloudFlare CDN",
                description: "Global content delivery network for faster loading",
              },
              {
                title: "LiteSpeed Web Server",
                description: "High-performance web server for faster websites",
              },
              {
                title: "Multiple Data Centers",
                description: "USA, UK, Singapore, Netherlands, and more locations",
              },
              {
                title: "Daily Backups",
                description: "Automated daily backups for data protection",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-hostao-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-hostao-dark mb-3">{feature.title}</h3>
                <p className="text-hostao-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hostao-dark mb-4">
              Security & Protection
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-hostao-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-hostao-dark mb-6">Security Features</h3>
              <ul className="space-y-4">
                {[
                  "Free SSL Certificates",
                  "DDoS Protection",
                  "ModSecurity Firewall",
                  "Malware Scanning",
                  "Spam Protection",
                  "Two-Factor Authentication",
                  "IP Whitelisting",
                  "Secure FTP (SFTP)"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">✓</span>
                    <span className="text-hostao-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-hostao-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-hostao-dark mb-6">Developer Tools</h3>
              <ul className="space-y-4">
                {[
                  "PHP 7.4 - 8.3 Support",
                  "MySQL/MariaDB Databases",
                  "Git Integration",
                  "SSH Access",
                  "Cron Jobs",
                  "API Access",
                  "Custom Error Pages",
                  "Log File Access"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">✓</span>
                    <span className="text-hostao-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="bg-hostao-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hostao-dark mb-4">
              Support & Training
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              {
                title: "24/7 Support",
                description: "Round-the-clock technical support",
                icon: "🛠️"
              },
              {
                title: "Knowledge Base",
                description: "Comprehensive documentation and tutorials",
                icon: "📚"
              },
              {
                title: "Video Training",
                description: "Step-by-step video guides",
                icon: "🎥"
              },
              {
                title: "Migration Service",
                description: "Free website migration assistance",
                icon: "🚀"
              },
            ].map((feature, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-hostao-dark mb-3">{feature.title}</h3>
                <p className="text-hostao-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-hostao-dark mb-4">
            Ready to Start Your Reseller Business?
          </h2>
          <p className="text-xl text-hostao-medium mb-8">
            Get all these features and more with our affordable reseller hosting plans.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/reseller-hosting" className="btn-hostao-primary">
              View Reseller Plans
            </a>
            <a href="/contact" className="btn-hostao-outline">
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}