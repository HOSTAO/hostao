import Link from "next/link";

export default function FeatureLanding({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white">
      <section className="hero-gradient text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="section-label bg-white/15 text-white border-white/25">Hostao Features</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{title}</h1>
          <p className="text-white/85 text-lg">{desc}</p>
        </div>
      </section>
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-6">This feature page is now active and linked from the Features menu.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-primary px-8 py-3">Talk to Sales</Link>
            <a href="https://my.hostao.com/cart.php?a=add&pid=7" target="_blank" rel="noopener noreferrer" className="btn-hostao-outline px-8 py-3">Get Started</a>
          </div>
        </div>
      </section>
    </div>
  );
}
