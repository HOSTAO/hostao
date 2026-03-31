import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Team | Hostao Blog",
  description: "Meet the writers, editors, and reviewers behind Hostao's hosting guides and tutorials.",
};

const TEAM = [
  { slug: "reji", name: "Reji Modiyil", role: "Publisher & CEO", bio: "Founder and CEO of Hostao with 25+ years in web technology, hosting infrastructure, and SaaS product development. Oversees editorial standards and publishing decisions.", avatar: "RM" },
  { slug: "alen", name: "Alen George", role: "Technical Writer", bio: "Technical content specialist focusing on hosting infrastructure, performance optimization, and emerging web technologies.", avatar: "AG" },
  { slug: "gayathry", name: "Gayathry", role: "Content Editor", bio: "Content strategist and editor specializing in web hosting guides, digital marketing, and business growth strategies.", avatar: "GA" },
  { slug: "rojin", name: "Rojin Raju", role: "Technology Writer", bio: "As a BCA graduate with a passion for technology and innovation, committed to leveraging technical knowledge to craft insightful and engaging content.", avatar: "RR" },
  { slug: "vishnu-r", name: "Vishnu R", role: "Technical Reviewer", bio: "Expert in web hosting technologies, server management, and technical documentation with extensive experience in the hosting industry.", avatar: "VR" },
  { slug: "hostao-team", name: "Hostao Team", role: "Editorial Team", bio: "Hosting experts, engineers, and growth writers at Hostao. We publish practical guides on domains, reseller hosting, VPS, and performance.", avatar: "HT" },
];

export default function AuthorListingPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-extrabold sm:text-4xl">Meet Our Editorial Team</h1>
          <p className="mt-4 text-lg text-blue-100">
            The experts behind Hostao&#39;s hosting guides, tutorials, and industry insights.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <div
              key={member.slug}
              className="flex flex-col border border-gray-200 rounded-2xl p-6 bg-white"
            >
              {/* Avatar */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0056A7] text-white font-bold text-lg">
                {member.avatar}
              </div>

              {/* Name & Role */}
              <h2 className="mt-4 font-bold text-gray-900">{member.name}</h2>
              <p className="mt-1 text-xs font-semibold text-[#0056A7]">{member.role}</p>

              {/* Bio */}
              <p className="mt-3 text-sm text-gray-600 line-clamp-3">{member.bio}</p>

              {/* Profile link */}
              <Link
                href={`/author/${member.slug}`}
                className="mt-4 inline-block text-xs font-semibold text-[#0056A7] hover:underline"
              >
                View Profile &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
