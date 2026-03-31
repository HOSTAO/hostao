import Link from "next/link";
import Image from "next/image";
import DomainSearch from "@/components/DomainSearch";
import RatingeReviewsWidget from "@/components/RatingeReviewsWidget";
import TrustBar from "@/components/TrustBar";

export const metadata = {
  title: "Latest Exclusive Offers — Unbeatable Deals on Web Hosting | Hostao",
  description: "Explore our exclusive offer page at Hostao LLC for unbeatable deals on web hosting solutions. Enjoy scalable plans, top-notch security, and an easy-to-use control panel. Enhance your online presence with Hostao LLC today!"
};

export default function LatestOffersPage() {
  return (
    <div className="bg-white">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="py-14 px-4 text-center" style={{ background: "#d9ecff" }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0c1434]">Latest Exclusive Offers</h1>
          <p className="text-[#1f2b4d] max-w-3xl mx-auto text-lg leading-relaxed">
            Explore our exclusive offer page at Hostao LLC for unbeatable deals on web hosting solutions. 
            Enjoy scalable plans, top-notch security, and an easy-to-use control panel. 
            Enhance your online presence with Hostao LLC today!
          </p>
        </div>
      </section>

      {/* ── TRUSTED PARTNER HEADING ─────────────────────────── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">YOUR TRUSTED PARTNER IN WEB HOSTING AND DOMAIN REGISTRATION!</h2>
        </div>
      </section>

      {/* ── NIXI ACCREDITED EXCELLENCE ─────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <Image
              src="https://hostao.com/wp-content/uploads/2024/01/NIXI-Registrar.png"
              alt="NIXI Accredited Excellence"
              width={400}
              height={400}
              className="w-full max-w-md h-auto"
              unoptimized
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">NIXI Accredited Excellence</h2>
            <p className="text-gray-700 leading-relaxed">
              At Hostao LLC, we are proud to be recognized as a NIXI (National Internet Exchange of India) accredited registrar, 
              setting us apart as a leader in the web hosting and domain registration industry. This prestigious accreditation 
              underscores our commitment to excellence, security, and reliability, providing you with the assurance that your 
              online presence is in capable hands.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE HOSTAO ───────────────────────────────── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed mb-6">
            Are you ready to elevate your online presence? Look no further! Hostao LLC is here to offer you unparalleled 
            web hosting and domain registration services. As the Best Web Hosting and Web Designing Company of 2023, 
            we take pride in delivering top-notch solutions to meet all your digital needs.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Hostao?</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">NIXI Accreditation:</h4>
              <p className="text-gray-700">
                Hostao is proud to be accredited and registered under NIXI (National Internet Exchange of India), 
                ensuring the highest standards of reliability, security, and performance for your online assets.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Reliable Hosting Infrastructure:</h4>
              <p className="text-gray-700">
                Our robust hosting infrastructure is designed to provide you with a seamless online experience. 
                With industry-leading hardware and software solutions, we guarantee 99.9% uptime, keeping your website 
                accessible to your audience around the clock.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Unmatched Security Measures:</h4>
              <p className="text-gray-700">
                Your data's security is our top priority. Hostao employs cutting-edge security protocols, 
                including SSL encryption, firewalls, and regular security audits, to safeguard your website 
                and sensitive information from potential threats.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">24/7 Customer Support:</h4>
              <p className="text-gray-700">
                We understand that your business never sleeps, and neither do we. Our dedicated support team 
                is available 24/7 to assist you with any queries, concerns, or technical issues. Your success is our priority.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">User-Friendly Control Panel:</h4>
              <p className="text-gray-700">
                Managing your website has never been easier. Hostao provides an intuitive and user-friendly 
                control panel, allowing you to have complete control over your hosting environment, domain settings, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── .IN DOMAIN OFFER ────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">GET A .IN DOMAIN AND HOSTING FOR ONLY USD 30!</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <Image
                src="https://hostao.com/wp-content/uploads/2024/01/GET-A-.IN-DOMAIN-AND-HOSTING-FOR-ONLY-USD-30.png"
                alt="GET A .IN DOMAIN AND HOSTING FOR ONLY USD 30!"
                width={500}
                height={400}
                className="w-full max-w-lg h-auto"
                unoptimized
              />
            </div>
            
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Looking to establish a strong online presence for your business? Look no further! Hostao LLC is delighted 
                to bring you an exclusive promotion. Purchase a .in domain and receive our top-notch hosting package at an 
                unbeatable price of just <strong>USD 30</strong>.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                With our reliable hosting services, your website will enjoy lightning-fast loading speeds, maximum uptime, 
                and robust security measures. Our team of experts is committed to providing exceptional support, ensuring 
                a seamless hosting experience for your business.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Don't miss this incredible opportunity to secure a .in domain and professional hosting at an unbelievable value. 
                Take your business to new heights with Hostao LLC. Act now, as this offer won't last forever!
              </p>
              
              <p className="text-gray-500 text-sm mb-6">*Terms and conditions apply. Offer valid for a limited time only.</p>
              
              <a 
                href="https://my.hostao.com/store/shared-hosting/limited-time-offer"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-block bg-[#0056A7] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#004085] transition-colors"
              >
                Click Here to Get This Offer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEST COMPANY AWARD 2023 ─────────────────────────── */}
      <section className="py-16 px-4 bg-[#EAF4FF]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">BEST WEB HOSTING AND WEB DESIGNING COMPANY 2023</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                In the dynamic world of digital entrepreneurship, the endorsement of industry leaders speaks volumes about 
                the quality and excellence of a service provider. Hostao LLC takes immense pride in being recognized as the 
                Best Web Hosting and Web Designing Company of 2023, a title bestowed upon us by none other than Mr. Reji Modiyil, 
                a prominent Indian entrepreneur.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Innovative Solutions:</h4>
                  <p className="text-gray-700">
                    Hostao's commitment to innovation and staying at the forefront of technological advancements aligns 
                    seamlessly with the vision of entrepreneurs like Reji Modiyil. We provide cutting-edge web hosting 
                    and web designing solutions that empower businesses to thrive in the digital era.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Reliability and Trust:</h4>
                  <p className="text-gray-700">
                    The endorsement by a visionary entrepreneur like Reji Modiyil underscores Hostao's reputation for 
                    reliability and trust. We prioritize the success of our clients, offering a secure and dependable 
                    foundation for their online ventures.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Customer-Centric Approach:</h4>
                  <p className="text-gray-700">
                    Hostao's customer-centric approach resonates with entrepreneurs who value a partner that goes beyond 
                    just services. We are dedicated to understanding and addressing the unique needs of our clients, 
                    ensuring their online success.
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mt-6">
                As we proudly bear the title of the Best Web Hosting and Web Designing Company of 2023, Hostao remains 
                committed to delivering exceptional services that set industry standards.
              </p>
            </div>
            
            <div className="flex justify-center">
              <Image
                src="https://hostao.com/wp-content/uploads/2024/01/Award.png"
                alt="Award"
                width={400}
                height={400}
                className="w-full max-w-md h-auto"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FREE .SHOP DOMAIN OFFER ─────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">BUY OR TRANSFER .COM DOMAIN AND GET .SHOP DOMAIN FOR FREE!</h2>
          
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            Are you looking to establish a powerful online presence for your business or personal brand? 
            Hostao LLC has an exciting offer for you! When you buy or transfer a .com domain with us, 
            you'll receive a .shop domain for free! This special promotion allows you to expand your online 
            identity and reach a wider audience.
          </p>
          
          <div className="mb-8">
            <Image
              src="https://hostao.com/wp-content/uploads/2024/01/SHOP-DOMAIN.png"
              alt="SHOP DOMAIN"
              width={600}
              height={300}
              className="mx-auto h-auto max-w-full"
              unoptimized
            />
          </div>
          
          <Link 
            href="/domain-registration" 
            className="inline-block bg-[#0056A7] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#004085] transition-colors"
          >
            Get Free .shop Domain
          </Link>
        </div>
      </section>

      {/* ── DOMAIN SEARCH ───────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#171734]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#0056A7] text-xs font-bold uppercase tracking-widest mb-3 text-white/50">Domain Registration</div>
          <h2 className="text-3xl font-bold text-white mb-3">Find Your New Domain</h2>
          <p className="text-white/60 mb-6 text-sm">Discover the perfect online identity with our domain search. Easily find your wanted domain and secure it today for a strong online presence.</p>
          <p className="text-white/50 text-xs mb-6">Reserve your domain today before someone takes it.</p>
          <DomainSearch />
          <div className="mt-6">
            <Image
              src="https://hostao.com/wp-content/uploads/2024/01/Domain-Extension.png"
              alt="Domain Extensions"
              width={400}
              height={60}
              className="mx-auto h-auto max-w-full"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────── */}
      <section className="py-16 px-4 bg-[#EAF4FF]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <Image
              src="https://hostao.com/wp-content/uploads/2024/04/corporate-man-35-767x1024.png"
              alt="Low cost hosting"
              width={400}
              height={500}
              className="w-full max-w-md h-auto"
              unoptimized
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">WHY CHOOSE US</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Grow Faster By Using Our Hosting Services</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Choose Hostao for reliable and secure hosting services that are tailored to your specific needs. 
                Our advanced technology, 24/7 support, and affordable pricing make us the ideal choice for individuals 
                and businesses looking to grow their online presence.
              </p>
              <p>Experience the Hostao difference today.</p>
            </div>
            <div className="mt-6">
              <Link href="/about-us" className="inline-flex items-center gap-2 bg-[#0056A7] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#004085] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CUSTOMER REVIEWS ────────────────────────────────── */}
      <section className="py-10 px-4" style={{background: "#F0F5FA"}}>
        <div className="max-w-6xl mx-auto">
          <RatingeReviewsWidget />
        </div>
      </section>

      {/* ── TRUST BAR ──────────────────────────────────────── */}
      <TrustBar />

    </div>
  );
}