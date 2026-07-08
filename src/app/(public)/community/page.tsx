import Link from 'next/link';

const communityHighlights = [
  {
    title: 'Student Testimonials',
    description: 'Real stories from members who found mentorship, support, and growth with NSS.',
  },
  {
    title: 'Success Stories',
    description: 'Student journeys that show how community, opportunity, and consistency create momentum.',
  },
  {
    title: 'Student Spotlights',
    description: 'Profiles of graduates, leaders, and changemakers from across our network.',
  },
];

const stats = [
  { label: 'Students', value: '5,000+' },
  { label: 'Campuses', value: '50+' },
  { label: 'Events Held', value: '100+' },
  { label: 'Partners', value: '20+' },
];

const testimonials = [
  {
    quote: 'NSS gave me a platform to discover my passion and connect with others.',
    author: 'Blessing K., University of Lagos',
  },
  {
    quote: 'Through NSS, I got a scholarship and mentorship that changed my life.',
    author: 'Joseph A., University of Benin',
  },
  {
    quote: 'The community helped me build the confidence to lead in my campus chapter.',
    author: 'Chidera O., Covenant University',
  },
];

export default function Page() {
  return (
    <main className="bg-neutral-50 text-neutral-900">
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="inline-flex rounded-full bg-green-50 px-4 py-1.5 text-sm font-semibold tracking-wide text-green-700 ring-1 ring-green-600/20">
                Our Community
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Stories that prove connection, growth, and impact happen here.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-neutral-600">
                Join a community where students find mentorship, build skills, and turn ambitions into real opportunity.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center rounded-xl bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-green-600/10 transition hover:bg-green-700"
                >
                  Become a Member
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-3 text-base font-semibold text-neutral-900 hover:bg-neutral-100 transition"
                >
                  Explore Events
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-neutral-200 bg-green-50 p-8 shadow-xl shadow-green-100/40">
              <div className="space-y-5">
                <div>
                  <p className="text-sm font-semibold uppercase text-green-700">Community impact</p>
                  <h2 className="mt-3 text-3xl font-bold text-neutral-900">4 in 5 members feel more prepared for campus leadership</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {stats.map((item) => (
                    <div key={item.label} className="rounded-3xl bg-white p-5 shadow-sm">
                      <p className="text-2xl font-bold text-neutral-900">{item.value}</p>
                      <p className="mt-2 text-sm text-neutral-600">{item.label}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-3xl bg-white p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Why members stay</p>
                  <p className="mt-3 text-base leading-7 text-neutral-700">
                    Because NSS creates a place where every student can access support, partner with peers, and turn ideas into events, opportunities, and practical skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-green-700">Community focus</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Built for every student experience</h2>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {communityHighlights.map((item) => (
                <div key={item.title} className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-semibold text-neutral-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-green-700">Student voices</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">What our members are saying</h2>
            </div>
            <Link
              href="/community"
              className="inline-flex items-center justify-center rounded-full border border-green-600 bg-green-50 px-5 py-2.5 text-sm font-semibold text-green-700 transition hover:bg-green-100"
            >
              View all stories
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <div key={index} className="feature-card rounded-[1.5rem] bg-surface p-6 shadow-sm">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-green-100 text-green-700 text-xl font-semibold">
                  “
                </div>
                <p className="text-base leading-7 text-neutral-700">{item.quote}</p>
                <p className="mt-6 text-sm font-semibold text-neutral-900">{item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
