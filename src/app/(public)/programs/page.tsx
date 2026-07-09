import Program from '@/src/components/sections/Programs/Program';
import Link from 'next/link';

// const upcomingEvents = [
//   {
//     id: 'leadership-summit-2024',
//     date: '24',
//     month: 'MAY',
//     title: 'Campus Leadership Summit 2024',
//     time: '10:00 AM - 2:00 PM',
//     location: 'University of Lagos',
//     href: '/events/leadership-summit-2024',
//   },
//   {
//     id: 'career-webinar',
//     date: '15',
//     month: 'JUN',
//     title: 'Career Development Webinar',
//     time: '6:00 PM - 8:00 PM',
//     location: 'Virtual (Zoom)',
//     href: '/events/career-development-webinar',
//   },
//   {
//     id: 'annual-conference',
//     date: '10',
//     month: 'AUG',
//     title: 'NSS Annual Student Conference',
//     time: '9:00 AM - 4:00 PM',
//     location: 'Abeokuta, Nigeria',
//     href: '/events/nss-annual-conference',
//   },
// ];

export default function Page() {
  return (
    <main className="bg-neutral-50 text-sm text-neutral-700">
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[.25em] text-green-600">Programs & Events</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Discover inspiring programs and events designed to educate, empower, and engage students.
          </h1>
          <p className="mt-4 text-base leading-7 text-neutral-600">
            Explore upcoming opportunities for growth and community impact, then revisit the moments that helped shape our network.
          </p>
        </div>

        <div className="mt-12">
          <Program hideHeader />
        </div>

        {/* <div
          className="mt-12 overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm"
          style={{ backgroundColor: 'var(--color-background)' }}
        >
          <div className="border-b border-neutral-200 bg-neutral-50 px-6 py-5 sm:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-green-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-green-700">
                  Upcoming Events
                </span>
                <span className="rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                  Past Events
                </span>
              </div>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 transition hover:text-green-800"
              >
                View all events →
              </Link>
            </div>
          </div>

          <div className="space-y-4 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
            {upcomingEvents.map((event) => (
              <article
                key={event.id}
                className="grid gap-4 rounded-[1.25rem] border border-neutral-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:grid-cols-[96px_minmax(0,_1fr)_auto] sm:items-center"
                style={{ backgroundColor: 'var(--color-surface)' }}
              >
                <div className="flex h-24 w-24 flex-col items-center justify-center rounded-[1.25rem] bg-green-50 text-center text-neutral-900 sm:h-28 sm:w-28">
                  <span className="text-3xl font-semibold leading-none">{event.date}</span>
                  <span className="mt-1 text-xs font-semibold tracking-[0.2em] uppercase text-green-700">{event.month}</span>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <Link href={event.href} className="text-xl font-semibold text-neutral-900 transition hover:text-green-700">
                        {event.title}
                      </Link>
                      <p className="mt-2 text-sm leading-6 text-neutral-600">Be part of focused sessions, networking, and student-led initiatives.</p>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-500">⏰</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-500">📍</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <Link
                    href={event.href}
                    className="inline-flex rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
                    style={{ backgroundColor: 'var(--color-ink)' }}
                  >
                    Register
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div> */}
      </section>
    </main>
  );
}
