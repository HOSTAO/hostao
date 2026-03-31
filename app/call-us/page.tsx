import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Have Questions | Hostao LLC",
  description: "Get in touch with Hostao. Chat with our team, request a callback, or find our contact details.",
};

export default function CallUsPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="hero-gradient-bg py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4">Call Us</h1>
          <p className="text-xl text-[#334155]">Get in Touch with Us</p>
        </div>
      </section>

      {/* Chat Now + Request a Call */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Chat Now */}
          <div className="border-2 border-[#e2e8f0] rounded-2xl p-8 text-center hover:border-[#046bd2] hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-[#046bd2]/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-[#046bd2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#1e293b] mb-3">Chat Now</h2>
            <p className="text-[#334155] mb-6">You can chat with our sales and support team to get quick answers about our product features, pricing, and more.</p>
            <a href="https://wa.me/+917470111222" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Request a Call */}
          <div className="border-2 border-[#e2e8f0] rounded-2xl p-8 text-center hover:border-[#046bd2] hover:shadow-lg transition-all">
            <div className="w-16 h-16 bg-[#046bd2]/10 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-[#046bd2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#1e293b] mb-3">Request a Call</h2>
            <p className="text-[#334155] mb-6">Skip the wait time and request a call back from us.</p>
            <a href="mailto:contact@hostao.com"
              className="inline-flex items-center gap-2 bg-[#046bd2] hover:bg-[#045cb4] text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Request Callback
            </a>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-16 px-4 bg-[#F0F5FA]">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[#334155] text-sm uppercase tracking-widest font-medium mb-2">CONTACT US</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e293b] mb-12">
            Need assistance or just want to get in touch with us?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* USA HQ */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">🇺🇸</span>
                <h3 className="text-xl font-bold text-[#1e293b]">Headquarters USA</h3>
              </div>
              <div className="space-y-3 text-[#334155]">
                <p className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#046bd2] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Ste 1200, 1309 Coffeen Ave, Sheridan, WY 82801, United States
                </p>
                <a href="tel:+13237447383" className="flex items-center gap-3 hover:text-[#046bd2] transition-colors">
                  <svg className="w-5 h-5 text-[#046bd2] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 (323) 744-7383
                </a>
              </div>
            </div>

            {/* India HQ */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">🇮🇳</span>
                <h3 className="text-xl font-bold text-[#1e293b]">Headquarters India</h3>
              </div>
              <div className="space-y-3 text-[#334155]">
                <p className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#046bd2] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Peniel Puram, Oonnukal P O, Pathanamthitta, Kerala 689647
                </p>
                <a href="tel:+919647000111" className="flex items-center gap-3 hover:text-[#046bd2] transition-colors">
                  <svg className="w-5 h-5 text-[#046bd2] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 964 700 0111
                </a>
                <a href="mailto:contact@hostao.com" className="flex items-center gap-3 hover:text-[#046bd2] transition-colors">
                  <svg className="w-5 h-5 text-[#046bd2] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@hostao.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
