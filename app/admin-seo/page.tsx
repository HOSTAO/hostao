import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Rankings Dashboard | Hostao Admin",
  robots: { index: false, follow: false },
};

export default function SEODashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              SEO Rankings Dashboard
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Powered by Google Search Console
            </p>
          </div>
          <Link href="/admin" className="btn-blue px-4 py-2 text-sm">
            Content Admin →
          </Link>
        </div>

        {/* GSC Setup Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h2 className="font-bold text-[#0056A7] mb-2">
            🔗 Connect Google Search Console
          </h2>
          <p className="text-gray-700 text-sm mb-4">
            To see live rankings, clicks, and impressions from your hostao.com
            GSC account (social@hostao.com), add your GSC API credentials to
            the environment variables.
          </p>
          <div className="bg-white rounded-lg p-4 font-mono text-xs text-gray-700 border border-blue-100">
            <p className="mb-1">Add to Vercel environment variables:</p>
            <p className="text-green-600">GSC_SITE_URL=https://hostao.com/</p>
            <p className="text-green-600">
              GOOGLE_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
            </p>
            <p className="text-green-600">
              GOOGLE_PRIVATE_KEY=&quot;-----BEGIN PRIVATE KEY-----\n...&quot;
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
          {[
            { label: "Total Clicks (30d)", value: "—", icon: "👆", desc: "Connect GSC" },
            { label: "Total Impressions (30d)", value: "—", icon: "👁️", desc: "Connect GSC" },
            { label: "Avg. CTR", value: "—", icon: "📊", desc: "Connect GSC" },
            { label: "Avg. Position", value: "—", icon: "📍", desc: "Connect GSC" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white border border-gray-200 rounded-xl p-5"
            >
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="text-2xl font-extrabold text-gray-400 mb-1">
                {s.value}
              </div>
              <div className="text-xs font-medium text-gray-900 mb-0.5">
                {s.label}
              </div>
              <div className="text-xs text-gray-400">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="font-bold text-gray-900">Top Ranking Keywords</h2>
            <p className="text-xs text-gray-500">
              Connect Google Search Console to see live data
            </p>
          </div>
          <div className="p-8 text-center">
            <div className="text-5xl mb-4">📈</div>
            <h3 className="font-bold text-gray-900 mb-2">
              SEO Rankings Ready to Connect
            </h3>
            <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
              Add your GSC service account credentials to see live keyword
              rankings, clicks, impressions, and position data for all
              hostao.com pages.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 text-sm text-left max-w-lg mx-auto">
              <p className="font-semibold text-gray-800 mb-2">
                Quick Setup (5 steps):
              </p>
              <ol className="text-gray-600 space-y-1 list-decimal list-inside text-xs">
                <li>Go to console.cloud.google.com</li>
                <li>Create project → Enable Search Console API</li>
                <li>Create Service Account → Download JSON key</li>
                <li>Add service account email to GSC as a user</li>
                <li>Add credentials to Vercel env variables</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
