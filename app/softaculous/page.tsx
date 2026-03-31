import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Softaculous Auto Installer | 400+ Scripts | Hostao",
  description: "Get Softaculous auto installer with 400+ scripts including WordPress, Joomla, Drupal, and more. One-click installation with all Hostao hosting plans.",
};

export default function Softaculous() {
  return (
    <div className="bg-hostao-light min-h-screen">
      {/* Hero Section */}
      <section className="bg-hostao-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              400+ SCRIPTS INCLUDED
            </div>
            <h1 className="text-4xl font-bold text-hostao-dark mb-4">
              Softaculous Auto Installer
            </h1>
            <p className="text-xl text-hostao-medium mb-8 max-w-3xl mx-auto">
              Install popular applications like WordPress, Joomla, Drupal, and 400+ other scripts 
              with just one click. Included free with all Hostao hosting plans.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="/shared-hosting" className="btn-hostao-primary">
                View Hosting Plans
              </a>
              <a href="/contact" className="btn-hostao-outline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Applications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hostao-dark mb-4">
              Popular One-Click Applications
            </h2>
            <p className="text-hostao-medium">
              Install these popular applications in just a few clicks
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "WordPress", category: "CMS", description: "World's most popular CMS", logo: "📝" },
              { name: "Joomla", category: "CMS", description: "Flexible content management", logo: "🔧" },
              { name: "Drupal", category: "CMS", description: "Enterprise CMS solution", logo: "🛡️" },
              { name: "Magento", category: "E-commerce", description: "Powerful online store", logo: "🛒" },
              { name: "PrestaShop", category: "E-commerce", description: "E-commerce platform", logo: "💳" },
              { name: "phpBB", category: "Forum", description: "Community forum software", logo: "💬" },
              { name: "Moodle", category: "Education", description: "Learning management system", logo: "🎓" },
              { name: "MediaWiki", category: "Wiki", description: "Wiki software", logo: "📚" },
            ].map((app) => (
              <div key={app.name} className="bg-hostao-white rounded-lg shadow-sm border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{app.logo}</div>
                <h3 className="text-lg font-semibold text-hostao-dark mb-2">{app.name}</h3>
                <div className="text-xs text-hostao-primary font-semibold bg-blue-50 px-2 py-1 rounded-full mb-2 inline-block">
                  {app.category}
                </div>
                <p className="text-sm text-hostao-medium">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-hostao-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hostao-dark mb-4">
              400+ Scripts in Every Category
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Content Management",
                count: "50+",
                description: "WordPress, Joomla, Drupal, TYPO3, and more",
                icon: "📄"
              },
              {
                category: "E-commerce",
                count: "40+", 
                description: "Magento, PrestaShop, OpenCart, WooCommerce",
                icon: "🛒"
              },
              {
                category: "Forums & Communities",
                count: "25+",
                description: "phpBB, vBulletin, MyBB, Simple Machines",
                icon: "💬"
              },
              {
                category: "Blogs",
                count: "20+",
                description: "WordPress, Ghost, Serendipity, Nucleus",
                icon: "✍️"
              },
              {
                category: "Image Galleries",
                count: "15+",
                description: "Gallery, Coppermine, 4Images, TinyWebGallery",
                icon: "🖼️"
              },
              {
                category: "Wikis",
                count: "10+",
                description: "MediaWiki, TikiWiki, DokuWiki, PmWiki",
                icon: "📚"
              },
              {
                category: "Social Networking",
                count: "15+",
                description: "Dolphin, HumHub, Elgg, BuddyPress",
                icon: "👥"
              },
              {
                category: "Project Management",
                count: "20+",
                description: "ProjectSend, Feng Office, dotProject",
                icon: "📊"
              },
              {
                category: "Customer Support",
                count: "12+",
                description: "osTicket, HESK, Support Incident Tracker",
                icon: "🎫"
              },
            ].map((cat) => (
              <div key={cat.category} className="text-center p-6">
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="text-xl font-semibold text-hostao-dark mb-2">{cat.category}</h3>
                <div className="text-hostao-primary font-bold text-lg mb-2">{cat.count} Scripts</div>
                <p className="text-hostao-medium text-sm">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hostao-dark mb-4">
              Softaculous Features
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-hostao-dark mb-6">
                Easy Installation & Management
              </h3>
              <ul className="space-y-4">
                {[
                  "One-click installation of 400+ scripts",
                  "Automatic updates and security patches",
                  "Easy backup and restore functionality",
                  "Clone applications to staging environments",
                  "Custom installation directory support",
                  "Database prefix customization",
                  "Admin account auto-creation",
                  "Automatic email configuration"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">✓</span>
                    <span className="text-hostao-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-hostao-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h4 className="text-xl font-bold text-hostao-dark mb-4">Installation Process</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-hostao-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <span className="text-hostao-medium">Choose application</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-hostao-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <span className="text-hostao-medium">Configure settings</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-hostao-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <span className="text-hostao-medium">Click install</span>
                </div>
                <div className="text-center pt-4">
                  <span className="text-green-600 font-semibold">Ready in 60 seconds!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-hostao-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hostao-dark mb-4">
              Why Choose Softaculous?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Save Time",
                description: "Install complex applications in minutes instead of hours",
                icon: "⏰"
              },
              {
                title: "No Technical Skills",
                description: "No need to download, upload, or configure files manually",
                icon: "🎯"
              },
              {
                title: "Always Updated",
                description: "Get the latest versions with security patches automatically",
                icon: "🔄"
              },
              {
                title: "Backup & Restore",
                description: "Create backups before updates and restore if needed",
                icon: "💾"
              },
              {
                title: "Multiple Versions",
                description: "Install different versions for testing compatibility",
                icon: "🔧"
              },
              {
                title: "Free Updates",
                description: "Automatic application updates included at no extra cost",
                icon: "🆓"
              },
            ].map((benefit) => (
              <div key={benefit.title} className="text-center p-6">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-hostao-dark mb-3">{benefit.title}</h3>
                <p className="text-hostao-medium">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-hostao-dark mb-4">
            Start Installing Applications Today
          </h2>
          <p className="text-xl text-hostao-medium mb-8">
            Softaculous auto installer is included free with all Hostao hosting plans.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/shared-hosting" className="btn-hostao-primary">
              View Hosting Plans
            </a>
            <a href="/contact" className="btn-hostao-outline">
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}