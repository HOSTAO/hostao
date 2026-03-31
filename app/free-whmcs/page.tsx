import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free WHMCS License with Every Reseller Plan | Save $180/year | Hostao",
  description: "Get a completely free WHMCS license worth $180/year with every Hostao reseller hosting plan. Automate billing, client management, and support tickets. No hidden costs.",
  keywords: ["free WHMCS license", "WHMCS reseller hosting", "WHMCS free", "billing software hosting", "WHMCS included"],
  alternates: { canonical: "https://hostao.com/free-whmcs" },
  openGraph: {
    title: "Free WHMCS License with Reseller Hosting | Hostao",
    description: "Save $180/year with a free WHMCS license included in every Hostao reseller hosting plan.",
    url: "https://hostao.com/free-whmcs",
  }
};

export default function FreeWHMCS() {
  return (
    <div className="bg-hostao-light min-h-screen">
      {/* Hero Section */}
      <section className="bg-hostao-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              SAVE $180/YEAR
            </div>
            <h1 className="text-4xl font-bold text-hostao-dark mb-4">
              Free WHMCS License Included with Every Reseller Plan
            </h1>
            <p className="text-xl text-hostao-medium mb-8 max-w-3xl mx-auto">
              Get a free WHMCS license worth $180/year with every Hostao reseller hosting plan. 
              Complete billing, support, and automation software at no additional cost.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="/reseller-hosting" className="btn-hostao-primary">
                View Reseller Plans
              </a>
              <a href="/contact" className="btn-hostao-outline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is WHMCS Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-hostao-dark mb-6">
                What is WHMCS?
              </h2>
              <p className="text-hostao-medium mb-6">
                WHMCS (Web Host Manager Complete Solution) is the world's leading web hosting automation platform. 
                It handles billing, support tickets, client management, and automates your entire hosting business.
              </p>
              <ul className="space-y-3">
                {[
                  "Automated billing and invoicing",
                  "Client management portal",
                  "Support ticket system",
                  "Domain registration integration",
                  "Payment gateway integration",
                  "Server management automation",
                  "Customizable themes and templates",
                  "Comprehensive reporting"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">✓</span>
                    <span className="text-hostao-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-hostao-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-hostao-dark mb-4">WHMCS Value</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-hostao-medium">WHMCS Standard License</span>
                  <span className="text-hostao-dark font-semibold">$15.95/month</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-hostao-medium">Annual Cost</span>
                  <span className="text-hostao-dark font-semibold">$191.40/year</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b-2 border-hostao-primary">
                  <span className="text-hostao-medium font-semibold">Your Cost with Hostao</span>
                  <span className="text-hostao-primary font-bold text-xl">FREE</span>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <span className="text-green-800 font-bold">Save $191.40 every year!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHMCS Features */}
      <section className="bg-hostao-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hostao-dark mb-4">
              Complete Business Automation
            </h2>
            <p className="text-hostao-medium max-w-2xl mx-auto">
              WHMCS handles every aspect of your hosting business automatically
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Billing & Invoicing",
                description: "Automatic invoice generation, payment processing, and subscription management",
                icon: "💰"
              },
              {
                title: "Client Portal",
                description: "Professional client area for account management and support",
                icon: "👤"
              },
              {
                title: "Support System",
                description: "Integrated help desk with ticket management and knowledge base",
                icon: "🎫"
              },
              {
                title: "Domain Management",
                description: "Automatic domain registration, renewal, and transfer processing",
                icon: "🌐"
              },
              {
                title: "Server Automation",
                description: "Automatic account creation, suspension, and termination",
                icon: "⚙️"
              },
              {
                title: "Payment Processing",
                description: "Integration with 60+ payment gateways worldwide",
                icon: "💳"
              },
              {
                title: "Custom Themes",
                description: "Professional templates and custom branding options",
                icon: "🎨"
              },
              {
                title: "Reporting",
                description: "Detailed analytics and financial reporting",
                icon: "📊"
              },
              {
                title: "Mobile Ready",
                description: "Responsive design works perfectly on all devices",
                icon: "📱"
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

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hostao-dark mb-4">
              How to Get Your Free WHMCS License
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Order Reseller Hosting",
                description: "Choose any Hostao reseller hosting plan that fits your needs"
              },
              {
                step: "2", 
                title: "Automatic Setup",
                description: "We'll automatically install and configure WHMCS on your account"
              },
              {
                step: "3",
                title: "Start Your Business",
                description: "Begin selling hosting services with professional billing software"
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
      <section className="bg-hostao-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-hostao-dark mb-4">
            Start Your Hosting Business Today
          </h2>
          <p className="text-xl text-hostao-medium mb-8">
            Get free WHMCS license worth $191.40/year with any reseller hosting plan.
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