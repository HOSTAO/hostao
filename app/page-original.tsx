import Link from "next/link";
import { createClient } from "@libsql/client";
import DomainSearch from "@/components/DomainSearch";

export default async function HomePage() {
  return (
    <div className="bg-white">
      {/* Text Color Change Header */}
      <div className="text-center py-2 text-sm text-gray-600">
        <p>Text Color Change</p>
      </div>

      {/* Hero Section - Exact Match */}
      <section className="bg-gradient-to-b from-[#e6f2ff] to-[#d9ecff] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 text-[#1e293b]">
            Best hosting and domain
          </h1>
          <p className="text-[#334155] text-lg max-w-3xl mx-auto mb-8">
            Elevate your website's performance with our Low cost reseller hosting solution. 
            Say goodbye to losing clients due to sluggish hosting speeds. Secure your hosting package today!
          </p>
          
          <DomainSearch />
          
          <p className="text-[#334155] mt-4 mb-8">
            Reserve your domain today before someone take it.
          </p>
        </div>
      </section>

      {/* Exciting Reseller Discount Section */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#1e293b]">
            Exciting Reseller Discount at Hostao.com!
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">50% Off Reseller Discount</h3>
            <ul className="text-left space-y-2 mb-6">
              <li>• 2GB RAM - 1CPU CORE</li>
              <li>• 20GB NVMe SSD</li>
              <li>• 1 Dedicated IP</li>
              <li>• 1TB Bandwidth</li>
              <li>• Fast 1Gbps Uplink</li>
              <li>• Linux OS</li>
            </ul>
            <div className="text-4xl font-bold text-blue-600 mb-2">$7</div>
            <div className="text-gray-600 mb-4">/mo</div>
            <p className="text-sm text-gray-500">*must have a reseller account with us</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#f8fbff] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-2">
            <p className="text-gray-600 text-sm uppercase tracking-wider">PRICING PLAN</p>
          </div>
          
          <h2 className="text-4xl font-bold text-center mb-4 text-[#1e293b]">
            Choose the Best Plan to Grow<br />Your Business
          </h2>
          
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            For individuals and small businesses, our affordable Low cost shared hosting plans 
            start at just $3, ensuring reliable website hosting with 24/7 support and various 
            features. A cost-effective and reliable hosting solution.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Basic Plan</h3>
              <p className="text-gray-600 mb-4">Little teams and startups</p>
              <div className="text-4xl font-bold text-blue-600 mb-2">$3</div>
              <p className="text-gray-600 mb-6">Per Month*</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 1GB SSD Disk Space</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 100GB/m Bandwidth</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 10 E-mail Account's</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 5 Subdomain's</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 1 Domain Usable</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Softaculous One-click Installer</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 99.9% Uptime Guarantee</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Lifetime Free SSL Certificate</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> NVMe SSD Hosting. 2X Faster</li>
              </ul>
              <a href="https://my.hostao.com/cart.php?a=add&pid=1" 
                 className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700">
                Order Now
              </a>
            </div>

            {/* Professional Plan */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional Plan</h3>
              <p className="text-gray-600 mb-4">Big teams and members</p>
              <div className="text-4xl font-bold text-blue-600 mb-2">$4.5</div>
              <p className="text-gray-600 mb-6">Per Month*</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 5GB SSD Disk Space</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 150GB/m Bandwidth</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 50 E-mail Account's</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 10 Subdomain's</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 5 Domain Usable</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Softaculous One-click Installer</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 99.9% Uptime Guarantee</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Lifetime Free SSL Certificate</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> NVMe SSD Hosting. 2X Faster</li>
              </ul>
              <a href="https://my.hostao.com/cart.php?a=add&pid=2" 
                 className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700">
                Order Now
              </a>
            </div>

            {/* Business Plan */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Business Plan</h3>
              <p className="text-gray-600 mb-4">Large companies</p>
              <div className="text-4xl font-bold text-blue-600 mb-2">$6</div>
              <p className="text-gray-600 mb-6">Per Month*</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 10GB SSD Disk Space</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 200GB/m Bandwidth</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 100 E-mail Account's</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 20 Subdomain's</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 10 Domain Usable</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Softaculous One-click Installer</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 99.9% Uptime Guarantee</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Lifetime Free SSL Certificate</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> NVMe SSD Hosting. 2X Faster</li>
              </ul>
              <a href="https://my.hostao.com/cart.php?a=add&pid=3" 
                 className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Domain Offer */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#1e293b]">Exclusive Domain Offer</h2>
          <p className="text-gray-600 mb-8">
            Get great deals on domain registrations! Find the perfect web address for your 
            business or project at discounted prices. Don't miss our limited-time offers 
            and secure your online identity today!
          </p>
        </div>
      </section>

      {/* 50% Off Reseller */}
      <section className="bg-blue-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#1e293b]">50% Off Reseller Discount!</h2>
          <p className="text-gray-600 mb-8">
            Hostao.com provides an exceptional opportunity for individuals interested in 
            becoming a reseller. Upon signing up, you can receive a substantial 50% 
            discount on your purchases.
          </p>
        </div>
      </section>

      {/* Introducing Hostao Designs */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 text-[#1e293b]">
            Introducing Hostao Designs
          </h2>
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-700">
            Bring Your Business to Life Instantly
          </h3>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Make a lasting impression with a stunning website design from Hostao Design. 
            Our expert designers will create a website that reflects your brand and meets 
            your goals with a Low cost hosting Service
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Home Page */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-lg p-6 mb-4">
                <h4 className="text-xl font-semibold mb-2">Home Page</h4>
                <p className="text-gray-600">
                  Your website's digital storefront showcases your brand's unique value 
                  proposition and invites visitors to learn more.
                </p>
              </div>
            </div>

            {/* About Page */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-lg p-6 mb-4">
                <h4 className="text-xl font-semibold mb-2">About Page</h4>
                <p className="text-gray-600">
                  Where you tell your brand's story, highlight your team's expertise, 
                  and build trust and credibility with your audience.
                </p>
              </div>
            </div>

            {/* Product/Service Page */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-lg p-6 mb-4">
                <h4 className="text-xl font-semibold mb-2">Product / Service Page</h4>
                <p className="text-gray-600">
                  Where you showcase your offerings in detail, including pricing, 
                  specifications, and features, and convince visitors to convert to customers.
                </p>
              </div>
            </div>
          </div>

          {/* Hostao Design Package */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 max-w-md mx-auto text-center shadow-lg">
            <h4 className="text-xl font-semibold mb-4">Hostao Design</h4>
            <p className="text-gray-600 mb-6">All You'll Ever Need is Right Here</p>
            <div className="text-5xl font-bold text-blue-600 mb-2">$300</div>
            <p className="text-gray-600 mb-6">One Time Payment</p>
            <ul className="text-left space-y-2 mb-8">
              <li>• Basic Web Hosting</li>
              <li>• Free .Com Domain</li>
              <li>• Premium Design</li>
              <li>• 6 Page Dynamic Website</li>
              <li>• Content Creation</li>
              <li>• Image / Video Gallery</li>
              <li>• Admin Dashboard</li>
              <li>• 100% Responsive Design</li>
              <li>• Social Media Integration</li>
              <li>• Location Map Integration</li>
              <li>• Page SEO Optimization</li>
              <li>• 24/7 Technical support</li>
            </ul>
            <a href="https://my.hostao.com" 
               className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
              Get Started
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Contact Page */}
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">Contact Page</h4>
                <p className="text-gray-600 text-sm">
                  Where you provide visitors with a way to get in touch with you, 
                  including your email address, phone number, and physical location.
                </p>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">Terms and Conditions Page</h4>
                <p className="text-gray-600 text-sm">
                  The legal agreement between your brand and your customers covers 
                  areas such as refunds, warranties, and liability.
                </p>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-2">Privacy Policy Page</h4>
                <p className="text-gray-600 text-sm">
                  Where you inform visitors about how you collect, use, and protect 
                  their personal data, in accordance with privacy regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className="bg-[#e6f2ff] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-600 text-sm uppercase tracking-wider mb-2">
            WHAT WE PROVIDE
          </p>
          <h2 className="text-4xl font-bold text-center mb-8 text-[#1e293b]">
            We Provide Secure & Powerful<br />Features
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            With our Low cost hosting services, you can enjoy secure and powerful website 
            features that guarantee a seamless online experience. From security to performance, 
            we've got you covered.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Reliable Servers</h3>
              <p className="text-gray-600">
                Hostao's servers are optimized for speed and performance, ensuring that 
                your website loads quickly and operates smoothly.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Website Migration</h3>
              <p className="text-gray-600">
                Hostao offers free website migration services, making it easy to transfer 
                your existing website to our platform without any downtime or data loss.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Loading Speed</h3>
              <p className="text-gray-600">
                Hostao's optimized servers and advanced caching technology ensure fast 
                website loading speeds for an improved user experience.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Data Security</h3>
              <p className="text-gray-600">
                Hostao prioritizes the security and safety of client websites with trained 
                professionals monitoring data center server locations and performance.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Data Center Locations</h3>
              <p className="text-gray-600">
                Hostao has multiple data center locations across the world, allowing you 
                to choose a server location that is closest to your target audience.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Security Features</h3>
              <p className="text-gray-600">
                Hostao provides advanced security features, including SSL certificates, 
                firewalls, and malware scanning, to keep your website and data safe from threats.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}