export const metadata = {
  title: "Ethics Policy | Hostao",
  description: "Hostao ethics policy covering integrity, anti-bribery, conflicts of interest, data responsibility, and fair business conduct.",
};

export default function EthicsPolicyPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">⚖️ Ethics Policy</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Ethics Policy</h1>
          <p className="text-white/85 text-lg">Integrity, transparency, and accountability guide all Hostao decisions.</p>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none">
          <h2>Core Principles</h2>
          <ul>
            <li>Act honestly and in good faith</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Prioritize customer trust and data protection</li>
            <li>Avoid conflicts of interest</li>
          </ul>

          <h2>Anti-Bribery & Corruption</h2>
          <p>Hostao prohibits bribery, kickbacks, facilitation payments, and improper gifts in all business dealings.</p>

          <h2>Fair Competition</h2>
          <p>We compete fairly and never engage in deceptive marketing, false claims, or anti-competitive practices.</p>

          <h2>Responsible Data Handling</h2>
          <p>Employees must access customer data only when necessary for authorized business purposes and in line with security policies.</p>

          <h2>Conflicts of Interest</h2>
          <p>Employees must disclose personal or financial interests that may influence business decisions.</p>

          <h2>Speak-Up Protection</h2>
          <p>Concerns raised in good faith are protected from retaliation. Reports are reviewed confidentially and investigated promptly.</p>

          <h2>Enforcement</h2>
          <p>Policy violations may result in disciplinary action, including termination and legal escalation where appropriate.</p>

          <p className="text-sm text-gray-500 mt-8">Last updated: March 2026</p>
        </div>
      </section>
    </div>
  );
}
