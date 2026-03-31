export const metadata = {
  title: "Ownership & Corporate Information | Hostao",
  description: "Ownership and corporate information for Hostao, including governance, management responsibility, and editorial accountability.",
};

export default function OwnershipPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">🏢 Ownership</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Ownership & Corporate Information</h1>
          <p className="text-white/85 text-lg">Transparent ownership and accountability standards for Hostao operations.</p>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none">
          <h2>Company Ownership</h2>
          <p>Hostao is operated by a privately held company. Ownership and executive leadership are responsible for strategic decisions, compliance, and service quality.</p>

          <h2>Operational Responsibility</h2>
          <ul>
            <li>Infrastructure reliability and security</li>
            <li>Customer support quality and escalation handling</li>
            <li>Billing transparency and policy compliance</li>
            <li>Content and product information accuracy</li>
          </ul>

          <h2>Governance</h2>
          <p>Hostao maintains internal controls for financial oversight, risk management, and legal/regulatory adherence across jurisdictions where we operate.</p>

          <h2>Editorial & Content Accountability</h2>
          <p>Marketing and informational content is reviewed by designated teams for clarity, accuracy, and compliance with publishing principles and corrections standards.</p>

          <h2>Conflict Disclosure</h2>
          <p>Potential conflicts of interest affecting product recommendations, partnerships, or promotions must be disclosed and documented internally.</p>

          <h2>Contact</h2>
          <p>For formal corporate inquiries, legal notices, or ownership questions, contact Hostao through the official contact channels listed on the website.</p>

          <p className="text-sm text-gray-500 mt-8">Last updated: March 2026</p>
        </div>
      </section>
    </div>
  );
}
