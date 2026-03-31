import Link from "next/link";
import DomainSearch from "@/components/DomainSearch";

export default async function HomePage() {
  return (
    <div className="bg-white">
      {/* Text Color Change Header - hidden but for SEO */}
      <div className="text-center py-1 text-xs text-gray-500">
        <p>Text Color Change</p>
      </div>

      {/* Hero Section - EXACT MATCH with blue gradient background */}
      <section className="relative bg-gradient-to-b from-[#d9ecff] via-[#e6f2ff] to-[#f0f5ff] py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-3 text-[#0c1434]">
            Best <span className="text-[#046bd2]">hosting</span> and <span className="text-[#046bd2]">domain</span>
          </h1>
          
          {/* Typing animation for "For your Business" */}
          <div className="text-2xl md:text-3xl font-medium mb-6 text-[#1f2b4d] h-10">
            For your Busin<span className="animate-pulse">|</span>
          </div>
          
          <p className="text-[#334155] text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            Elevate your website&apos;s performance with our Low cost reseller hosting solution. 
            Say goodbye to losing clients due to sluggish hosting speeds. Secure your hosting package today!
          </p>
          
          <DomainSearch />
          
          <p className="text-[#334155] text-sm mt-4 mb-6">
            Reserve your domain today before someone take it.
          </p>
          
          {/* Domain Extension Image */}
          <img 
            src="https://hostao.com/wp-content/uploads/2024/01/Domain-Extension.png" 
            alt="Domain Extensions" 
            className="mx-auto max-w-full h-auto"
          />
        </div>
      </section>

      {/* Exciting Reseller Discount Section - Purple/dark background */}
      <section className="relative bg-gradient-to-br from-[#1a1b3a] to-[#2d2e5f] py-16 px-4 text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-yellow-400">
            Exciting Reseller Discount at Hostao.com!
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-red-500">
                50% Off Reseller Discount
              </h3>
              
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">2GB RAM - 1CPU CORE</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">1TB Bandwidth</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">20GB NVMe SSD</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Fast 1Gbps Uplink</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">1 Dedicated IP</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Linux OS</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-7xl font-bold text-white mb-2">$7</div>
              <div className="text-xl text-gray-300 mb-6">/mo</div>
              
              <Link href="https://hostao.com/vps-dedicated-server-reseller/" 
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-md text-lg transition-colors shadow-lg">
                Claim Deal
              </Link>
              
              {/* Countdown Timer */}
              <div className="mt-8 flex justify-center gap-4">
                <div className="bg-white/10 backdrop-blur rounded-lg p-3 min-w-[70px]">
                  <div className="text-2xl font-bold text-yellow-400">&quot;27&quot;</div>
                  <div className="text-xs text-gray-300">Days</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-3 min-w-[70px]">
                  <div className="text-2xl font-bold text-yellow-400">&quot;16&quot;</div>
                  <div className="text-xs text-gray-300">Hours</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-3 min-w-[70px]">
                  <div className="text-2xl font-bold text-yellow-400">&quot;31&quot;</div>
                  <div className="text-xs text-gray-300">Minutes</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-3 min-w-[70px]">
                  <div className="text-2xl font-bold text-yellow-400">&quot;28&quot;</div>
                  <div className="text-xs text-gray-300">Seconds</div>
                </div>
              </div>
              
              <p className="text-sm text-gray-400 mt-4">*must have a reseller account with us</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING PLAN Section */}
      <section className="bg-[#f8fbff] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-2">
            <p className="text-gray-600 text-sm uppercase tracking-widest font-medium">PRICING PLAN</p>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#0c1434]">
            Choose the Best Plan to Grow<br />Your Business
          </h2>
          
          <p className="text-center text-[#334155] max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
            For individuals and small businesses, our affordable Low cost shared hosting plans 
            start at just $3, ensuring reliable website hosting with 24/7 support and various 
            features. A cost-effective and reliable hosting solution.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-[#0c1434]">Basic Plan</h3>
                <p className="text-gray-600 mb-6">Little teams and startups</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-[#046bd2]">$3</span>
                  <span className="text-gray-600 ml-2">Per Month*</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">1GB SSD Disk Space</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">100GB/m Bandwidth</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">10 E-mail Account&apos;s</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">5 Subdomain&apos;s</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">1 Domain Usable</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">Softaculous One-click Installer</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">99.9% Uptime Guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">Lifetime Free SSL Certificate</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">NVMe SSD Hosting. 2X Faster</span>
                  </li>
                </ul>
                
                <Link href="https://my.hostao.com/cart.php?a=add&pid=9" 
                      className="block w-full bg-[#046bd2] hover:bg-[#045cb4] text-white text-center py-3 rounded-md font-semibold transition-colors">
                  Order Now
                </Link>
                
                <p className="text-center mt-4">
                  <Link href="https://hostao.com/shared-hosting/#discount" className="text-blue-600 text-sm hover:underline">
                    yearly payment discounts
                  </Link>
                </p>
              </div>
            </div>

            {/* Professional Plan - Most Popular */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-[#046bd2] relative">
              <div className="absolute top-0 left-0 right-0 bg-[#046bd2] text-white text-center py-2 text-sm font-semibold">
                Most Popular
              </div>
              <div className="p-8 pt-12">
                <h3 className="text-2xl font-bold mb-2 text-[#0c1434]">Professional Plan</h3>
                <p className="text-gray-600 mb-6">Big teams and members</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-[#046bd2]">$4.5</span>
                  <span className="text-gray-600 ml-2">Per Month*</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">5GB SSD Disk Space</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">150GB/m Bandwidth</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">50 E-mail Account&apos;s</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">10 Subdomain&apos;s</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">5 Domain Usable</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">Softaculous One-click Installer</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">99.9% Uptime Guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">Lifetime Free SSL Certificate</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">NVMe SSD Hosting. 2X Faster</span>
                  </li>
                </ul>
                
                <Link href="https://my.hostao.com/cart.php?a=add&pid=10" 
                      className="block w-full bg-[#046bd2] hover:bg-[#045cb4] text-white text-center py-3 rounded-md font-semibold transition-colors">
                  Order Now
                </Link>
                
                <p className="text-center mt-4">
                  <Link href="https://hostao.com/shared-hosting/#discount" className="text-blue-600 text-sm hover:underline">
                    yearly payment discounts
                  </Link>
                </p>
              </div>
            </div>

            {/* Business Plan */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2 text-[#0c1434]">Business Plan</h3>
                <p className="text-gray-600 mb-6">Large companies</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-[#046bd2]">$6</span>
                  <span className="text-gray-600 ml-2">Per Month*</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">10GB SSD Disk Space</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">200GB/m Bandwidth</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">100 E-mail Account&apos;s</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">20 Subdomain&apos;s</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">10 Domain Usable</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">Softaculous One-click Installer</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">99.9% Uptime Guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">Lifetime Free SSL Certificate</span>
                  </li>
                  <li className="flex items-start">
                    <img src="https://hostao.com/wp-content/uploads/2022/12/check.png" alt="✓" className="w-5 h-5 mr-3 mt-0.5" />
                    <span className="text-gray-700">NVMe SSD Hosting. 2X Faster</span>
                  </li>
                </ul>
                
                <Link href="https://my.hostao.com/cart.php?a=add&pid=11" 
                      className="block w-full bg-[#046bd2] hover:bg-[#045cb4] text-white text-center py-3 rounded-md font-semibold transition-colors">
                  Order Now
                </Link>
                
                <p className="text-center mt-4">
                  <Link href="https://hostao.com/shared-hosting/#discount" className="text-blue-600 text-sm hover:underline">
                    yearly payment discounts
                  </Link>
                </p>
              </div>
            </div>
          </div>
          
          {/* Banner Image */}
          <div className="text-center">
            <img 
              src="https://hostao.com/wp-content/uploads/2024/01/banner.png" 
              alt="Hosting Banner"
              className="mx-auto max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Two Column Offers Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Exclusive Domain Offer */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#0c1434]">Exclusive Domain Offer</h2>
            <p className="text-gray-600 mb-6">
              Get great deals on domain registrations! Find the perfect web address for your 
              business or project at discounted prices. Don&apos;t miss our limited-time offers 
              and secure your online identity today!
            </p>
            <Link href="https://hostao.com/offers/" 
                  className="inline-block bg-[#046bd2] hover:bg-[#045cb4] text-white font-semibold py-3 px-8 rounded-md transition-colors">
              Get Offer
            </Link>
          </div>
          
          {/* 50% Off Reseller */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#0c1434]">50% Off Reseller Discount!</h2>
            <p className="text-gray-600 mb-6">
              Hostao.com provides an exceptional opportunity for individuals interested in 
              becoming a reseller. Upon signing up, you can receive a substantial 50% 
              discount on your purchases.
            </p>
            <Link href="https://hostao.com/vps-dedicated-server-reseller/" 
                  className="inline-block bg-[#046bd2] hover:bg-[#045cb4] text-white font-semibold py-3 px-8 rounded-md transition-colors">
              Get Discount
            </Link>
          </div>
        </div>
      </section>

      {/* Introducing Hostao Designs Section */}
      <section className="bg-gradient-to-br from-[#f0f5ff] to-[#e6f2ff] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-3 text-[#0c1434]">
            Introducing Hostao Designs
          </h2>
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-700">
            Bring Your Business to Life Instantly
          </h3>
          
          <div className="text-center mb-12">
            <Link href="https://design.hostao.com/" 
                  className="inline-block bg-[#046bd2] hover:bg-[#045cb4] text-white font-semibold py-3 px-8 rounded-md transition-colors">
              Visit Hostao Designs
            </Link>
          </div>
          
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Make a lasting impression with a stunning website design from Hostao Design. 
            Our expert designers will create a website that reflects your brand and meets 
            your goals with a Low cost hosting Service
          </p>

          {/* Page Descriptions Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold mb-2 text-[#0c1434]">Home Page</h4>
                <p className="text-gray-600">
                  Your website&apos;s digital storefront showcases your brand&apos;s unique value 
                  proposition and invites visitors to learn more.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-2 text-[#0c1434]">About Page</h4>
                <p className="text-gray-600">
                  Where you tell your brand&apos;s story, highlight your team&apos;s expertise, 
                  and build trust and credibility with your audience.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-2 text-[#0c1434]">Product / Service Page</h4>
                <p className="text-gray-600">
                  Where you showcase your offerings in detail, including pricing, 
                  specifications, and features, and convince visitors to convert to customers.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold mb-2 text-[#0c1434]">Contact Page</h4>
                <p className="text-gray-600">
                  Where you provide visitors with a way to get in touch with you, 
                  including your email address, phone number, and physical location.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-2 text-[#0c1434]">Terms and Conditions Page</h4>
                <p className="text-gray-600">
                  The legal agreement between your brand and your customers covers 
                  areas such as refunds, warranties, and liability.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-2 text-[#0c1434]">Privacy Policy Page</h4>
                <p className="text-gray-600">
                  Where you inform visitors about how you collect, use, and protect 
                  their personal data, in accordance with privacy regulations.
                </p>
              </div>
            </div>
          </div>
          
          {/* Hostao Design Package */}
          <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-2xl shadow-xl p-10 max-w-lg mx-auto text-center">
            <h4 className="text-2xl font-bold mb-2 text-[#0c1434]">Hostao Design</h4>
            <p className="text-gray-600 mb-6 text-lg">All You&apos;ll Ever Need is Right Here</p>
            
            <div className="text-6xl font-bold text-[#046bd2] mb-2">$300</div>
            <p className="text-gray-600 mb-8 text-lg">One Time Payment</p>
            
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-start">
                <span className="text-[#046bd2] mr-3 text-xl">•</span>
                <span className="text-gray-700">Basic Web Hosting</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#046bd2] mr-3 text-xl">•</span>
                <span className="text-gray-700">Free .Com Domain</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#046bd2] mr-3 text-xl">•</span>
                <span className="text-gray-700">Premium Design</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#046bd2] mr-3 text-xl">•</span>
                <span className="text-gray-700">6 Page Dynamic Website</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#046bd2] mr-3 text-xl">•</span>
                <span className="text-gray-700">Content Creation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#046bd2] mr-3 text-xl">•</span>
                <span className="text-gray-700">Image / Video Gallery</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#046bd2] mr-3 text-xl">•</span>
                <span className="text-gray-700">Admin Dashboard</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#046bd2] mr-3 text-xl">•</span>
                <span className="text-gray-700">100% Responsive Design</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#046bd2] mr-3 text-xl">•</span>
                <span className="text-gray-700">Social Media Integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#046bd2] mr-3 text-xl">•</span>
                <span className="text-gray-700">Location Map Integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#046bd2] mr-3 text-xl">•</span>
                <span className="text-gray-700">Page SEO Optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#046bd2] mr-3 text-xl">•</span>
                <span className="text-gray-700">24/7 Technical support</span>
              </li>
            </ul>
            
            <Link href="https://my.hostao.com" 
                  className="block w-full bg-[#046bd2] hover:bg-[#045cb4] text-white py-4 rounded-md font-bold text-lg transition-colors shadow-lg">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className="bg-[#e6f2ff] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-600 text-sm uppercase tracking-widest font-medium mb-2">
            WHAT WE PROVIDE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#0c1434]">
            We Provide Secure & Powerful<br />Features
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
            With our Low cost hosting services, you can enjoy secure and powerful website 
            features that guarantee a seamless online experience. From security to performance, 
            we&apos;ve got you covered.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-[#0c1434]">Reliable Servers</h3>
              <p className="text-gray-600">
                Hostao&apos;s servers are optimized for speed and performance, ensuring that 
                your website loads quickly and operates smoothly.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-[#0c1434]">Website Migration</h3>
              <p className="text-gray-600">
                Hostao offers free website migration services, making it easy to transfer 
                your existing website to our platform without any downtime or data loss.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-[#0c1434]">Loading Speed</h3>
              <p className="text-gray-600">
                Hostao&apos;s optimized servers and advanced caching technology ensure fast 
                website loading speeds for an improved user experience.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-[#0c1434]">Data Security</h3>
              <p className="text-gray-600">
                Hostao prioritizes the security and safety of client websites with trained 
                professionals monitoring data center server locations and performance.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-[#0c1434]">Data Center Locations</h3>
              <p className="text-gray-600">
                Hostao has multiple data center locations across the world, allowing you 
                to choose a server location that is closest to your target audience.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-[#0c1434]">Security Features</h3>
              <p className="text-gray-600">
                Hostao provides advanced security features, including SSL certificates, 
                firewalls, and malware scanning, to keep your website and data safe from threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with WordPress-style accordions */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#0c1434]">
            Frequently Asked Questions about Web Hosting
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg leading-relaxed">
            Hostao offers low cost web hosting services to make websites accessible globally 
            by storing files on dependable servers. With various options, such as shared hosting 
            for affordability and dedicated servers for optimal performance, Hostao caters to 
            different needs, empowering businesses, organizations, and individuals to establish 
            an online presence, exhibit their offerings, and engage with a worldwide audience.
          </p>
          
          <div className="space-y-4">
            {[
              {
                q: "What is web hosting?",
                a: "Web hosting is a service that allows individuals or organizations to make their websites accessible on the internet. It involves storing website files on servers connected to the internet, making the website available for users to access and view."
              },
              {
                q: "What are the different types of web hosting?",
                a: "There are several types of web hosting, including shared hosting, virtual private server (VPS) hosting, dedicated server hosting, cloud hosting, and reseller hosting. Each type offers different levels of resources, control, and scalability."
              },
              {
                q: "What is shared hosting?",
                a: "Shared hosting is a type of hosting where multiple websites are hosted on the same server. It is an affordable option as the server resources are shared among different users. However, the performance and resources may be limited compared to other hosting types."
              },
              {
                q: "What is VPS hosting?",
                a: "VPS hosting, or Virtual Private Server hosting, provides a dedicated portion of a physical server to a single user. It offers better performance and control compared to shared hosting. Users have their own virtual environment with allocated resources and root access."
              },
              {
                q: "What is dedicated server hosting?",
                a: "Dedicated server hosting involves leasing an entire physical server for a single website or organization. It provides maximum control, customization, and performance. Users have exclusive access to all server resources, but it is typically more expensive."
              },
              {
                q: "What is Low cost reseller hosting?",
                a: "Low cost reseller hosting allows individuals or companies to sell web hosting services using resources allocated to them by a hosting provider. It enables entrepreneurs to start their own web hosting business without having to manage the infrastructure."
              },
              {
                q: "What is bandwidth and disk space in web hosting?",
                a: "Bandwidth refers to the amount of data transferred between your website and its visitors. It affects the speed and responsiveness of your website. Disk space, on the other hand, is the amount of storage space available for your website files, databases, emails, and other content."
              },
              {
                q: "What security measures should I expect from a web hosting provider?",
                a: "A good web hosting provider should offer security features such as SSL certificates for encrypted connections, regular backups, firewalls, malware scanning, and DDoS protection. It is important to choose a provider that prioritizes the security of their servers and customer data."
              },
              {
                q: "What is uptime and why is it important?",
                a: "Uptime refers to the amount of time a server or website is operational and accessible to visitors. It is usually measured as a percentage, with higher percentages indicating better uptime. Uptime is crucial for ensuring that your website is available to users at all times and that potential revenue or traffic losses are minimized."
              },
              {
                q: "Can I host multiple websites on a single hosting account?",
                a: "Yes, depending on the type of hosting plan you choose, you can often host multiple websites on a single hosting account. Shared hosting plans typically allow hosting of multiple websites, whereas some providers may limit the number of websites you can host on lower-tier plans. VPS and dedicated server hosting plans offer greater flexibility, allowing you to host multiple websites with separate domains and configurations. It's important to review the hosting provider's specifications and features to determine if hosting multiple websites is supported."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between group">
                  <span className="font-semibold text-[#0c1434]">{faq.q}</span>
                  <svg className="w-5 h-5 text-gray-500 group-hover:text-gray-700 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="px-6 py-4 bg-white border-t border-gray-200 hidden">
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-br from-[#f0f5ff] to-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 text-sm uppercase tracking-widest font-medium mb-2">
                WHY CHOOSE US
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0c1434]">
                Grow Faster By Using<br />Our Hosting Services
              </h2>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                Choose Hostao for reliable and secure Low cost hosting services that are tailored 
                to your specific needs. Our advanced technology, 24/7 support, and affordable 
                pricing make us the ideal choice for individuals and businesses looking to grow 
                their online presence.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                Experience the Hostao difference today.
              </p>
              <Link href="https://hostao.com/about-us/" 
                    className="inline-flex items-center gap-3 bg-[#046bd2] hover:bg-[#045cb4] text-white font-semibold py-3 px-8 rounded-md transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About Us
              </Link>
            </div>
            
            <div>
              <img 
                src="https://hostao.com/wp-content/uploads/2024/01/Low-cost-hosting.webp" 
                alt="Low cost hosting" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#0c1434]">
            What Our Customers Say
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Read what our satisfied customers have to say about their experience with 
            Hostao&apos;s Low cost hosting services
          </p>
          
          {/* Testimonials Widget Placeholder */}
          <div className="text-center">
            <div className="bg-gray-50 rounded-lg p-12 inline-block">
              <p className="text-gray-600">Customer testimonials widget loads here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="bg-[#f8fbff] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <img src="https://hostao.com/wp-content/uploads/2024/01/cloudfare.webp" alt="Cloudflare" className="h-12 object-contain" />
            <img src="https://hostao.com/wp-content/uploads/2024/01/lightspeed.webp" alt="LiteSpeed" className="h-12 object-contain" />
            <img src="https://hostao.com/wp-content/uploads/2024/01/jetbackup.webp" alt="JetBackup" className="h-12 object-contain" />
            <img src="https://hostao.com/wp-content/uploads/2024/01/google-cloud.webp" alt="Google Cloud" className="h-12 object-contain" />
            <img src="https://hostao.com/wp-content/uploads/2024/01/Wordpress.webp" alt="WordPress" className="h-12 object-contain" />
          </div>
        </div>
      </section>

    </div>
  );
}