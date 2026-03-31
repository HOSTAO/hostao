export const metadata = {
  title: "Corrections Policy | Hostao",
  description: "Hostao corrections policy for fixing factual errors in published content, product information, and announcements.",
};

export default function CorrectionsPolicyPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">✅ Corrections Policy</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Corrections Policy</h1>
          <p className="text-white/85 text-lg">Accuracy matters. We correct errors quickly and transparently.</p>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none">
          <h2>Our Commitment</h2>
          <p>Hostao is committed to publishing accurate information across website pages, documentation, pricing, and announcements.</p>

          <h2>What We Correct</h2>
          <ul>
            <li>Factual inaccuracies in product specifications or claims</li>
            <li>Pricing or offer detail mistakes</li>
            <li>Incorrect legal/policy references</li>
            <li>Misleading or ambiguous wording that impacts customer decisions</li>
          </ul>

          <h2>Correction Process</h2>
          <ol>
            <li>Receive issue report via support or contact form</li>
            <li>Verify the claim against source systems</li>
            <li>Apply correction and review for completeness</li>
            <li>Annotate material changes where appropriate</li>
          </ol>

          <h2>Time to Resolution</h2>
          <p>Critical errors are corrected as quickly as possible, typically within 24 hours. Standard corrections are usually completed within 3 business days.</p>

          <h2>Transparency</h2>
          <p>For significant corrections that could affect customer decisions, we include an update note indicating what changed and when.</p>

          <h2>How to Report an Error</h2>
          <p>Contact support with the page URL, screenshot (if available), and a brief description of the issue.</p>

          <p className="text-sm text-gray-500 mt-8">Last updated: March 2026</p>
        </div>
      </section>
    </div>
  );
}
