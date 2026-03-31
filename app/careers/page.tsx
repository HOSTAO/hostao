import Link from "next/link";

export const metadata = {
  title: "Careers at Hostao — Join Our Team | Hostao",
  description: "Join the Hostao team. We're hiring for engineering, support, sales, and marketing roles. Remote-friendly, competitive pay, great culture.",
};

const OPENINGS = [
  { title: "Senior Linux System Administrator", dept: "Infrastructure", type: "Full-Time", location: "Remote", desc: "Manage and optimize our global server infrastructure. 5+ years experience with Linux, cPanel/WHM, networking." },
  { title: "Customer Success Specialist", dept: "Support", type: "Full-Time", location: "Remote", desc: "Help our customers succeed with their hosting. Technical knowledge of web hosting, domains, and cPanel required." },
  { title: "Full-Stack Developer", dept: "Engineering", type: "Full-Time", location: "Remote", desc: "Build and improve our customer portal, APIs, and automation tools. React, Node.js, and PHP experience preferred." },
  { title: "Sales Development Representative", dept: "Sales", type: "Full-Time", location: "Remote", desc: "Drive new business by qualifying leads and booking demos. B2B SaaS or web hosting sales experience a plus." },
  { title: "Digital Marketing Manager", dept: "Marketing", type: "Full-Time", location: "Remote", desc: "Manage SEO, PPC, and content marketing to drive growth. Hosting/tech industry experience preferred." },
  { title: "Network Operations Center (NOC) Engineer", dept: "Infrastructure", type: "Full-Time", location: "Remote", desc: "24/7 monitoring of our global network. Networking certifications (CCNA+) and datacenter experience required." },
];

const VALUES = [
  { icon: "🌍", title: "Remote First", desc: "Work from anywhere. We have team members across 15+ countries." },
  { icon: "📈", title: "Grow Fast", desc: "Hostao is growing 100%+ year over year. Your career grows with us." },
  { icon: "🤝", title: "Real Ownership", desc: "You own your work. No micro-management, no bureaucracy." },
  { icon: "🎓", title: "Learning Budget", desc: "$1,000/year learning budget for courses, books, and conferences." },
  { icon: "💪", title: "Competitive Pay", desc: "Market-rate salaries with performance bonuses and equity options." },
  { icon: "🏥", title: "Health Benefits", desc: "Comprehensive health, dental, and vision coverage for you and family." },
];

export default function CareersPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25 mb-4 inline-block">💼 Careers at Hostao</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Build the Future of Web Hosting With Us</h1>
          <p className="text-white/85 text-lg mb-8">We&apos;re a fast-growing hosting company on a mission to make professional web hosting accessible to everyone. Join a remote-first team that&apos;s passionate about the internet.</p>
          <Link href="#openings" className="btn-accent px-8 py-3.5">View Open Positions 🚀</Link>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Why Hostao?</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Life at Hostao</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map(v => (
              <div key={v.title} className="bg-white border border-gray-200 rounded-xl p-5 card-hover">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4" id="openings">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Open Positions</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Current Openings</h2>
            <p className="text-gray-600">Don&apos;t see a perfect fit? Send us a general application — we&apos;re always looking for great people.</p>
          </div>
          <div className="space-y-4">
            {OPENINGS.map(job => (
              <div key={job.title} className="bg-white border border-gray-200 rounded-2xl p-6 card-hover">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs bg-blue-100 text-[#0056A7] font-semibold px-2 py-1 rounded-full">{job.dept}</span>
                      <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-1 rounded-full">{job.type}</span>
                      <span className="text-xs bg-gray-100 text-gray-600 font-semibold px-2 py-1 rounded-full">📍 {job.location}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{job.desc}</p>
                  </div>
                  <Link href="/contact" className="btn-blue text-sm px-4 py-2 flex-shrink-0 whitespace-nowrap">Apply Now</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hero-gradient text-white py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Don&apos;t See Your Role?</h2>
          <p className="text-white/80 mb-8">We&apos;re always interested in talented people. Send us your resume and tell us how you&apos;d contribute to Hostao&apos;s mission.</p>
          <Link href="/contact" className="btn-accent px-8 py-3.5">Send General Application →</Link>
        </div>
      </section>
    </div>
  );
}
