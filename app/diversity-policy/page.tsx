export const metadata = {
  title: "Diversity Policy | Hostao",
  description: "Hostao diversity policy covering inclusive hiring, equitable career growth, and respectful workplace expectations.",
};

export default function DiversityPolicyPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">🌍 Diversity Policy</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Diversity Policy</h1>
          <p className="text-white/85 text-lg">We build teams that reflect the communities and customers we serve.</p>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none">
          <h2>Policy Statement</h2>
          <p>Hostao values diversity across backgrounds, identities, perspectives, and experiences. We believe diverse teams produce better products and decisions.</p>

          <h2>Scope</h2>
          <p>This policy applies to hiring, promotions, compensation, performance reviews, leadership development, and workplace conduct.</p>

          <h2>Commitments</h2>
          <ul>
            <li>Inclusive hiring practices with structured interviews</li>
            <li>Bias-aware evaluation criteria and reviewer training</li>
            <li>Equal pay for equal work principles</li>
            <li>Accessible communication and work environments</li>
            <li>Zero tolerance for discrimination and harassment</li>
          </ul>

          <h2>Accountability</h2>
          <p>Leaders are expected to set inclusion goals, track representation metrics, and address barriers to advancement.</p>

          <h2>Reporting Concerns</h2>
          <p>Employees may report concerns confidentially through HR or designated reporting channels without fear of retaliation.</p>

          <h2>Continuous Improvement</h2>
          <p>We review this policy annually and update programs based on outcomes, employee feedback, and legal requirements.</p>

          <p className="text-sm text-gray-500 mt-8">Last updated: March 2026</p>
        </div>
      </section>
    </div>
  );
}
