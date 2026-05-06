export default function RatingeReviewsWidget() {
  const reviews = [
    {
      name: "Hosting customers",
      text: "Fast hosting, quick migration help, and practical support for everyday business websites.",
    },
    {
      name: "Reseller partners",
      text: "Reliable reseller plans with WHM/cPanel, NVMe storage, and support paths that are easy to reach.",
    },
    {
      name: "Small businesses",
      text: "A simple way to manage domains, hosting, SSL, and growth without juggling too many vendors.",
    },
  ];

  return (
    <div className="rounded-3xl bg-[#071225] px-5 py-10 text-white shadow-xl md:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8fbaf2]">Customer feedback</p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Trusted hosting support without the extra page weight</h2>
        <p className="mt-4 text-sm leading-7 text-[#b8c4d6] md:text-base">
          Hostao keeps the homepage fast and still points visitors to live support, reviews, and plan guidance when they need it.
        </p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {reviews.map((review) => (
          <article key={review.name} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-lg">
            <div className="flex items-center gap-1 text-[#facc15]" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} aria-hidden="true">★</span>
              ))}
            </div>
            <h3 className="mt-4 text-base font-bold">{review.name}</h3>
            <p className="mt-2 text-sm leading-6 text-[#cbd5e1]">{review.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href="https://go.ratinge.com/hostao" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[#046bd2]/60 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#046bd2]/20">
          View more Hostao reviews
        </a>
      </div>
    </div>
  );
}
