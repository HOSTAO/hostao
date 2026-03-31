import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domain Reseller Program | Sell Domains with WHMCS | Hostao",
  description: "Join Hostao's domain reseller program and start selling domains at wholesale prices. Integrated with WHMCS billing software for automated operations.",
};

export default function DomainReseller() {
  return (
    <div className="bg-hostao-light min-h-screen">
      {/* Hero Section */}
      <section className="bg-hostao-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-hostao-dark mb-4">
              Domain Reseller Program
            </h1>
            <p className="text-xl text-hostao-medium mb-8 max-w-3xl mx-auto">
              Start your own domain registration business with our domain reseller program. 
              Sell domains at wholesale prices with full WHMCS integration.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="https://my.hostao.com/cart.php?a=add&pid=101" className="btn-hostao-primary">
                Get Started
              </a>
              <a href="/contact" className="btn-hostao-outline">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hostao-dark mb-4">
              Domain Reseller Features
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Wholesale Pricing",
                description: "Get the best wholesale prices on all domain extensions",
                icon: "💰"
              },
              {
                title: "WHMCS Integration",
                description: "Fully integrated with WHMCS billing software",
                icon: "⚙️"
              },
              {
                title: "API Access",
                description: "Complete API for custom domain management tools",
                icon: "🔧"
              },
              {
                title: "White Label Solution",
                description: "Sell domains under your own brand name",
                icon: "🏷️"
              },
              {
                title: "200+ Extensions",
                description: "Sell popular and new domain extensions",
                icon: "🌐"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock technical support",
                icon: "🛠️"
              },
            ].map((feature) => (
              <div key={feature.title} className="bg-hostao-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-hostao-dark mb-3">{feature.title}</h3>
                <p className="text-hostao-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-hostao-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hostao-dark mb-4">
              Popular Domain Extensions
            </h2>
            <p className="text-hostao-medium">
              Competitive wholesale pricing on the most popular domain extensions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { ext: ".com", price: "$8.99", renewal: "$10.99" },
              { ext: ".net", price: "$12.99", renewal: "$13.99" },
              { ext: ".org", price: "$11.99", renewal: "$12.99" },
              { ext: ".info", price: "$2.99", renewal: "$15.99" },
              { ext: ".biz", price: "$14.99", renewal: "$15.99" },
              { ext: ".us", price: "$7.99", renewal: "$8.99" },
              { ext: ".co", price: "$29.99", renewal: "$31.99" },
              { ext: ".io", price: "$59.99", renewal: "$64.99" },
            ].map((domain) => (
              <div key={domain.ext} className="border border-gray-200 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-hostao-dark mb-2">{domain.ext}</div>
                <div className="text-hostao-primary font-semibold text-lg mb-1">{domain.price}/year</div>
                <div className="text-sm text-hostao-medium">Renewal: {domain.renewal}/year</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-hostao-dark mb-6">
                Why Choose Hostao Domain Reseller?
              </h2>
              <ul className="space-y-4">
                {[
                  "Lowest wholesale prices in the industry",
                  "Instant domain activation and management",
                  "Free DNS management tools",
                  "Domain theft protection included",
                  "Easy domain transfers",
                  "Bulk domain registration tools",
                  "Custom nameservers",
                  "Advanced domain management API"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">✓</span>
                    <span className="text-hostao-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-hostao-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-hostao-dark mb-4">Get Started Today</h3>
              <p className="text-hostao-medium mb-6">
                Join hundreds of successful domain resellers who trust Hostao for their domain business.
              </p>
              <div className="space-y-4">
                <a href="https://my.hostao.com/cart.php?a=add&pid=101" className="btn-hostao-primary w-full text-center block">
                  Start Reselling Domains
                </a>
                <a href="/contact" className="btn-hostao-outline w-full text-center block">
                  Request Custom Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-hostao-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-hostao-dark mb-4">
            Ready to Start Your Domain Business?
          </h2>
          <p className="text-xl text-hostao-medium mb-8">
            Join our domain reseller program and start earning with domains today.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="https://my.hostao.com/cart.php?a=add&pid=101" className="btn-hostao-primary">
              Get Started Now
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