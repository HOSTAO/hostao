import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi Location Hosting | cPanel Web Hosting | Hostao",
  description: "Get multi-location cPanel web hosting with global data centers. Choose from USA, UK, Singapore, and more locations for optimal performance.",
};

export default function CpanelWebHosting() {
  return (
    <div className="bg-hostao-light min-h-screen">
      {/* Hero Section */}
      <section className="bg-hostao-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-hostao-dark mb-4">
              Multi Location Web Hosting
            </h1>
            <p className="text-xl text-hostao-medium mb-8 max-w-3xl mx-auto">
              Choose from global data center locations including USA, UK, Singapore, Netherlands, and more. 
              Get faster loading speeds for your target audience with our multi-location hosting.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="https://my.hostao.com/cart.php?a=add&pid=1" className="btn-hostao-primary">
                Order Now
              </a>
              <a href="/contact" className="btn-hostao-outline">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hostao-dark mb-4">
              Choose Your Data Center Location
            </h2>
            <p className="text-hostao-medium max-w-2xl mx-auto">
              Select the location closest to your target audience for optimal performance and faster loading speeds.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "USA", location: "United States", flag: "🇺🇸", latency: "Low latency for North American visitors" },
              { name: "UK", location: "United Kingdom", flag: "🇬🇧", latency: "Optimal for European visitors" },
              { name: "Singapore", location: "Singapore", flag: "🇸🇬", latency: "Best for Asian traffic" },
              { name: "Netherlands", location: "Netherlands", flag: "🇳🇱", latency: "Central European location" },
              { name: "Germany", location: "Germany", flag: "🇩🇪", latency: "GDPR compliant hosting" },
              { name: "Australia", location: "Australia", flag: "🇦🇺", latency: "Oceania region coverage" },
            ].map((location) => (
              <div key={location.name} className="bg-hostao-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-4xl mb-4">{location.flag}</div>
                  <h3 className="text-xl font-semibold text-hostao-dark mb-2">{location.location}</h3>
                  <p className="text-hostao-medium text-sm mb-4">{location.latency}</p>
                  <a href={`https://my.hostao.com/cart.php?a=add&pid=1&billingcycle=annually&location=${location.name.toLowerCase()}`} 
                     className="btn-hostao-primary w-full">
                    Choose {location.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-hostao-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hostao-dark mb-4">
              Multi Location Hosting Features
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Global CDN",
                description: "Built-in content delivery network for faster global loading",
                icon: "🌐"
              },
              {
                title: "cPanel Control Panel",
                description: "Industry-standard cPanel for easy website management",
                icon: "⚙️"
              },
              {
                title: "SSD Storage",
                description: "High-performance NVMe SSD storage for faster websites",
                icon: "💾"
              },
              {
                title: "Free SSL Certificate",
                description: "Lifetime free SSL certificate for all domains",
                icon: "🔒"
              },
              {
                title: "99.9% Uptime",
                description: "Guaranteed 99.9% uptime with SLA protection",
                icon: "⚡"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock technical support from hosting experts",
                icon: "🛠️"
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

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-hostao-dark mb-4">
            Ready to Get Started with Multi Location Hosting?
          </h2>
          <p className="text-xl text-hostao-medium mb-8">
            Choose your preferred data center location and get your website online today.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="https://my.hostao.com/cart.php?a=add&pid=1" className="btn-hostao-primary">
              View Hosting Plans
            </a>
            <a href="/contact" className="btn-hostao-outline">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}