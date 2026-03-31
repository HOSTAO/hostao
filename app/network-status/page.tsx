export const metadata = { title: "Network Status — Hostao Infrastructure", description: "Real-time status of all Hostao data centers and services worldwide." };
const DCS = [
  { name: "USA — New York", status: "operational" },
  { name: "USA — Dallas", status: "operational" },
  { name: "India — Mumbai", status: "operational" },
  { name: "India — Delhi", status: "operational" },
  { name: "UK — London", status: "operational" },
  { name: "UAE — Dubai", status: "operational" },
  { name: "Singapore", status: "operational" },
  { name: "Germany — Frankfurt", status: "operational" },
  { name: "Japan — Tokyo", status: "operational" },
  { name: "Bahrain", status: "operational" },
  { name: "Australia — Sydney", status: "operational" },
  { name: "Canada — Toronto", status: "operational" },
  { name: "Netherlands — Amsterdam", status: "operational" },
  { name: "South Africa — Johannesburg", status: "operational" },
];
const SERVICES = [
  { name: "Shared Hosting", status: "operational" },
  { name: "Reseller Hosting", status: "operational" },
  { name: "VPS Servers", status: "operational" },
  { name: "Dedicated Servers", status: "operational" },
  { name: "DNS Resolution", status: "operational" },
  { name: "Email Services", status: "operational" },
  { name: "Control Panel (cPanel)", status: "operational" },
  { name: "Client Area (WHMCS)", status: "operational" },
  { name: "SSL Certificates", status: "operational" },
  { name: "CDN Network", status: "operational" },
];
function StatusBadge({ status }: { status: string }) {
  return status === "operational"
    ? <span className="flex items-center gap-1.5 text-emerald-600 text-xs font-semibold"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"/>Operational</span>
    : <span className="flex items-center gap-1.5 text-amber-600 text-xs font-semibold"><span className="w-2 h-2 rounded-full bg-amber-500"/>Issue Detected</span>;
}
export default function NetworkStatusPage() {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-14 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-3">Network Status</h1>
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-white text-sm font-semibold px-5 py-2 rounded-full">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"/>
            All Systems Operational
          </div>
        </div>
      </section>
      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-5">🌍 Data Centers</h2>
            <div className="space-y-2">
              {DCS.map(dc => (
                <div key={dc.name} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl bg-white">
                  <span className="text-sm font-medium text-gray-800">{dc.name}</span>
                  <StatusBadge status={dc.status} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-5">⚙️ Services</h2>
            <div className="space-y-2">
              {SERVICES.map(s => (
                <div key={s.name} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl bg-white">
                  <span className="text-sm font-medium text-gray-800">{s.name}</span>
                  <StatusBadge status={s.status} />
                </div>
              ))}
            </div>
            <div className="mt-6 p-5 bg-blue-50 border border-blue-100 rounded-xl text-sm text-gray-700">
              <strong className="text-[#0056A7]">Scheduled Maintenance:</strong> No maintenance scheduled. Last updated: real-time.<br/>
              For issues, <a href="https://my.hostao.com/submitticket.php" target="_blank" rel="noopener noreferrer" className="text-[#0056A7] underline">open a support ticket</a>.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
