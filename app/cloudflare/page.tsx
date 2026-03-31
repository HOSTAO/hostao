import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CloudFlare CDN Integration | Free CDN Service | Hostao",
  description: "Get free CloudFlare CDN integration with Hostao hosting. Improve website speed, security, and global performance with our CloudFlare partnership.",
};

export default function CloudFlare() {
  return (
    <div className="bg-hostao-light min-h-screen">
      {/* Hero Section */}
      <section className="bg-hostao-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              FREE WITH ALL PLANS
            </div>
            <h1 className="text-4xl font-bold text-hostao-dark mb-4">
              CloudFlare CDN Integration
            </h1>
            <p className="text-xl text-hostao-medium mb-8 max-w-3xl mx-auto">
              Get free CloudFlare CDN integration with all Hostao hosting plans. 
              Improve website speed, security, and global performance automatically.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="/shared-hosting" className="btn-hostao-primary">
                View Hosting Plans
              </a>
              <a href="/contact" className="btn-hostao-outline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is CloudFlare Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-hostao-dark mb-6">
                What is CloudFlare CDN?
              </h2>
              <p className="text-hostao-medium mb-6">
                CloudFlare is a global content delivery network (CDN) that accelerates and protects your website. 
                With data centers in 200+ cities worldwide, it delivers your content from the location closest to your visitors.
              </p>
              <ul className="space-y-3">
                {[
                  "Lightning-fast website loading speeds",
                  "Global content delivery network",
                  "DDoS protection and security",
                  "Free SSL certificate",
                  "Bandwidth savings up to 60%",
                  "Improved SEO rankings",
                  "24/7 uptime monitoring",
                  "Easy one-click activation"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">✓</span>
                    <span className="text-hostao-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-hostao-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-hostao-dark mb-4">Speed Improvement</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-hostao-medium">Without CloudFlare</span>
                  <span className="text-red-600 font-semibold">3.2s load time</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-hostao-medium">With CloudFlare CDN</span>
                  <span className="text-green-600 font-semibold">0.8s load time</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b-2 border-hostao-primary">
                  <span className="text-hostao-medium font-semibold">Speed Improvement</span>
                  <span className="text-hostao-primary font-bold text-xl">4x Faster</span>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <span className="text-green-800 font-bold">75% faster loading!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-hostao-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hostao-dark mb-4">
              CloudFlare CDN Features
            </h2>
            <p className="text-hostao-medium max-w-2xl mx-auto">
              Comprehensive performance and security features included with your hosting
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Global CDN Network",
                description: "200+ data centers worldwide for fastest content delivery",
                icon: "🌐"
              },
              {
                title: "DDoS Protection",
                description: "Advanced protection against malicious attacks",
                icon: "🛡️"
              },
              {
                title: "Web Application Firewall",
                description: "Block malicious traffic before it reaches your server",
                icon: "🔥"
              },
              {
                title: "SSL Encryption",
                description: "Free SSL certificates with automatic renewal",
                icon: "🔒"
              },
              {
                title: "Bandwidth Optimization",
                description: "Reduce bandwidth usage and hosting costs",
                icon: "📊"
              },
              {
                title: "Image Optimization",
                description: "Automatic image compression and optimization",
                icon: "🖼️"
              },
              {
                title: "Analytics & Insights",
                description: "Detailed traffic analytics and performance metrics",
                icon: "📈"
              },
              {
                title: "Mobile Optimization",
                description: "Optimized delivery for mobile devices",
                icon: "📱"
              },
              {
                title: "Always Online",
                description: "Keep your site available even during server downtime",
                icon: "⚡"
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-hostao-dark mb-3">{feature.title}</h3>
                <p className="text-hostao-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hostao-dark mb-4">
              Why Use CloudFlare CDN?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-hostao-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-hostao-dark mb-6">Performance Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Faster page loading speeds globally",
                  "Reduced server load and bandwidth",
                  "Better SEO rankings from speed",
                  "Improved user experience",
                  "Lower bounce rates",
                  "Higher conversion rates"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">⚡</span>
                    <span className="text-hostao-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-hostao-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-hostao-dark mb-6">Security Benefits</h3>
              <ul className="space-y-4">
                {[
                  "DDoS attack protection",
                  "Web Application Firewall",
                  "Bot management and filtering",
                  "SSL/TLS encryption",
                  "Origin server IP protection",
                  "Zero-day vulnerability protection"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">🔒</span>
                    <span className="text-hostao-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-hostao-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hostao-dark mb-4">
              How CloudFlare CDN Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Visitor Requests Page",
                description: "When someone visits your website, their request is automatically routed to CloudFlare's network"
              },
              {
                step: "2", 
                title: "CloudFlare Processes",
                description: "CloudFlare checks its global cache for your content and applies security filtering"
              },
              {
                step: "3",
                title: "Fast Content Delivery",
                description: "Content is delivered from the nearest data center, providing lightning-fast loading speeds"
              }
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-hostao-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-hostao-dark mb-3">{step.title}</h3>
                <p className="text-hostao-medium">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-hostao-dark mb-4">
            Get Free CloudFlare CDN Today
          </h2>
          <p className="text-xl text-hostao-medium mb-8">
            All Hostao hosting plans include free CloudFlare CDN integration. Start accelerating your website now.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/shared-hosting" className="btn-hostao-primary">
              View Hosting Plans
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