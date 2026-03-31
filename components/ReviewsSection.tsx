"use client";
import Link from "next/link";

const REVIEWS = [
  { name: "James Wilson", avatar: "JW", color: "bg-[#046bd2]", text: "Hostao has been a game changer for my reseller business. Reliable uptime and fast servers!" },
  { name: "Sarah Ahmed",  avatar: "SA", color: "bg-emerald-600", text: "Best affordable hosting I've found. Support team is responsive and helpful 24/7." },
  { name: "Ravi Kumar",   avatar: "RK", color: "bg-rose-600",    text: "Switched from another host and couldn't be happier. NVMe SSD makes a huge difference." },
  { name: "Lisa Chen",    avatar: "LC", color: "bg-purple-600",  text: "Excellent reseller plans at unbeatable prices. My clients are very satisfied." },
];

function StarIcon({ size = "w-4 h-4" }: { size?: string }) {
  return (
    <svg className={`${size} text-yellow-400`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

interface ReviewsSectionProps {
  ctaText?: string;       // CTA button label
  ctaHref?: string;       // CTA button URL
  planLabel?: string;     // e.g. "Hosting plans from $3/mo" — pass per page, empty = hide
}

export default function ReviewsSection({
  ctaText = "Get Started Today",
  ctaHref = "/shared-hosting",
  planLabel = "Hosting plans from $3/mo",
}: ReviewsSectionProps) {
  return (
    <section className="bg-white py-14 px-4 border-t border-[#D1D5DB]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1,2,3,4,5].map(i => <StarIcon key={i} size="w-5 h-5" />)}
            <span className="text-lg font-bold text-[#1e293b] ml-2">5.0</span>
          </div>
          <p className="text-[#334155] text-sm">Based on 525+ verified reviews</p>
          <h3 className="text-3xl md:text-4xl font-bold text-[#1e293b] mt-2">What Our Customers Say</h3>
          <p className="text-[#334155] mt-2 text-sm max-w-lg mx-auto">
            Trusted by thousands of businesses and individuals worldwide.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {REVIEWS.map((r) => (
            <div key={r.name} className="bg-[#F0F5FA] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow border border-[#e2ecf8]">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full ${r.color} text-white flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                  {r.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#1e293b] text-sm">{r.name}</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[1,2,3,4,5].map(s => <StarIcon key={s} />)}
                  </div>
                </div>
              </div>
              <p className="text-[#334155] text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>

        {/* Sale Close CTA */}
        <div className="text-center bg-gradient-to-r from-[#d9ecff] to-[#e6f2ff] rounded-2xl py-8 px-6">
          <h4 className="text-2xl font-bold text-[#1e293b] mb-2">Ready to get started?</h4>
          {planLabel && (
            <p className="text-[#334155] text-sm mb-5">{planLabel}</p>
          )}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href={ctaHref}
              className="bg-[#046bd2] hover:bg-[#045cb4] text-white font-semibold px-7 py-3 rounded-full text-sm transition-colors w-full sm:w-auto text-center"
            >
              {ctaText}
            </Link>
            <a
              href="https://go.ratinge.com/hostao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#046bd2] hover:text-[#045cb4] text-sm font-medium inline-flex items-center gap-1"
            >
              View all reviews on RatingE →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
