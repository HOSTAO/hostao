"use client";
import { useState, useEffect, useCallback } from "react";

const REVIEWS = [
  {
    name: "Rajesh Kumar",
    role: "E-commerce Store Owner",
    location: "Mumbai, India",
    avatar: "RK",
    color: "bg-blue-600",
    rating: 5,
    text: "Switched to Hostao 2 years ago and never looked back. My WooCommerce store loads in under 1.2 seconds — customers actually stay now. Sales increased 40% after the migration.",
  },
  {
    name: "Priya Nair",
    role: "WordPress Blogger",
    location: "Kochi, India",
    avatar: "PN",
    color: "bg-purple-600",
    rating: 5,
    text: "Free migration was smooth and the team moved 8 years of blog data without losing a single post. NVMe hosting is genuinely faster. My Google PageSpeed went from 54 to 91.",
  },
  {
    name: "Ahmed Al Farsi",
    role: "Web Agency, 50+ Clients",
    location: "Bahrain",
    avatar: "AA",
    color: "bg-emerald-600",
    rating: 5,
    text: "Managing 50 client websites on Hostao's reseller plan. Best decision I made for my agency. White-label, reliable uptime, and their support team resolves tickets in under 2 hours.",
  },
  {
    name: "Sarah Johnson",
    role: "SaaS Founder",
    location: "USA",
    avatar: "SJ",
    color: "bg-rose-600",
    rating: 5,
    text: "Migrated from a big-name host and saved 60% with better performance. Hostao's VPS handles our app traffic without breaking a sweat. Best hosting decision we made.",
  },
  {
    name: "Mohammed Hassan",
    role: "Digital Marketing Agency",
    location: "UAE",
    avatar: "MH",
    color: "bg-amber-600",
    rating: 5,
    text: "The SEO hosting with C-class IPs is exactly what we needed for our PBN. Multiple server locations, clean IPs, and the price is unbeatable compared to competitors.",
  },
  {
    name: "Anjali Sharma",
    role: "Online Tutor",
    location: "Delhi, India",
    avatar: "AS",
    color: "bg-teal-600",
    rating: 5,
    text: "I'm not technical at all but Hostao's cPanel and 1-click WordPress install made it so easy. When I had questions, live chat support explained everything patiently.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent(c => (c + 1) % REVIEWS.length), []);
  const prev = () => setCurrent(c => (c - 1 + REVIEWS.length) % REVIEWS.length);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [paused, next]);

  // Show 3 cards on desktop
  const visible = [0, 1, 2].map(i => REVIEWS[(current + i) % REVIEWS.length]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {visible.map((r, i) => (
          <div key={r.name + i}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm card-hover transition-all duration-500">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full ${r.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {r.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{r.name}</div>
                  <div className="text-xs text-gray-500">{r.role}</div>
                  <div className="text-xs text-gray-400">{r.location}</div>
                </div>
              </div>
              <StarRating count={r.rating} />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed italic">&ldquo;{r.text}&rdquo;</p>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <button onClick={prev} className="w-9 h-9 rounded-full border-2 border-[#0056A7] text-[#0056A7] flex items-center justify-center hover:bg-[#0056A7] hover:text-white transition-all">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
        </button>
        <div className="flex gap-1.5">
          {REVIEWS.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-[#0056A7] w-5" : "bg-gray-300 hover:bg-gray-400"}`}/>
          ))}
        </div>
        <button onClick={next} className="w-9 h-9 rounded-full border-2 border-[#0056A7] text-[#0056A7] flex items-center justify-center hover:bg-[#0056A7] hover:text-white transition-all">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  );
}
