export const metadata = {
  title: "Vaccine Policy | Hostao",
  description: "Hostao workplace vaccine policy outlining health, safety, local compliance, and accommodations.",
};

export default function VaccinePolicyPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">💉 Vaccine Policy</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Vaccine Policy</h1>
          <p className="text-white/85 text-lg">A safety-focused policy aligned with local law and respectful accommodations.</p>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none">
          <h2>Policy Objective</h2>
          <p>Hostao aims to maintain a safe working environment for employees, contractors, visitors, and customers while respecting applicable laws and individual circumstances.</p>

          <h2>General Approach</h2>
          <ul>
            <li>Follow local public-health guidance in jurisdictions where we operate</li>
            <li>Apply role-based safety requirements for on-site operations</li>
            <li>Respect medical and legally protected accommodations</li>
          </ul>

          <h2>On-Site Roles</h2>
          <p>Employees in data center or office access roles may be subject to additional health and safety requirements based on partner facility policies and local regulations.</p>

          <h2>Accommodations</h2>
          <p>Reasonable accommodations are available for eligible medical, disability, or other legally protected reasons. Requests are handled confidentially by HR.</p>

          <h2>Privacy</h2>
          <p>Any health-related documentation is handled with strict confidentiality and retained only as required by law and internal retention standards.</p>

          <h2>Non-Retaliation</h2>
          <p>Hostao prohibits retaliation against employees who request accommodations or raise policy concerns in good faith.</p>

          <p className="text-sm text-gray-500 mt-8">Last updated: March 2026</p>
        </div>
      </section>
    </div>
  );
}
