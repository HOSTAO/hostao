export const metadata = {
  title: "Publishing Principles | Hostao",
  description: "Hostao publishing principles for accuracy, transparency, source quality, and responsible updates across website and customer content.",
};

export default function PublishingPrinciplesPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">📰 Publishing Principles</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Publishing Principles</h1>
          <p className="text-white/85 text-lg">Our standards for clear, accurate, and trustworthy published content.</p>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none">
          <h2>1. Accuracy First</h2>
          <p>We aim to publish accurate, verifiable information. Technical claims and pricing details should match current product reality.</p>

          <h2>2. Clear Language</h2>
          <p>We write in plain, practical language. We avoid vague claims, unnecessary jargon, and misleading comparisons.</p>

          <h2>3. Transparency</h2>
          <p>Promotions, limitations, and eligibility criteria must be clearly disclosed. Material terms should be visible before purchase.</p>

          <h2>4. Responsible Updates</h2>
          <p>When major information changes, we update affected pages promptly and maintain correction notes where needed.</p>

          <h2>5. Source Quality</h2>
          <p>Published guidance should rely on internal product documentation, trusted technical references, and verified operational data.</p>

          <h2>6. Customer Impact Review</h2>
          <p>Any high-impact content (pricing, guarantees, security claims) is reviewed by relevant teams before publication.</p>

          <h2>7. Accountability</h2>
          <p>Each content area has an owner responsible for ongoing accuracy, freshness, and policy compliance.</p>

          <p className="text-sm text-gray-500 mt-8">Last updated: March 2026</p>
        </div>
      </section>
    </div>
  );
}
