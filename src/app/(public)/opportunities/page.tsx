export default function Page() {
  return (
    <main className="bg-neutral-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="inline-flex rounded-full bg-green-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-green-700">
                Opportunities Hub
              </p>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
                Find scholarships, internships,
                <span className="block text-green-600">fellowships and more opportunities.</span>
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
                Search verified programs, filter by category, and save the best opportunities that match your goals.
              </p>
            </div>
            <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-4 shadow-sm sm:p-5">
              <div className="flex items-center gap-3 rounded-3xl bg-white px-4 py-3 shadow-sm">
                <svg className="h-5 w-5 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="search"
                  placeholder="Search opportunities..."
                  className="w-full border-0 bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {['All', 'Scholarships', 'Internships', 'Fellowships', 'Competitions'].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    className={
                      tab === 'All'
                        ? 'inline-flex rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700'
                        : 'inline-flex rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-50'
                    }
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'MTN Foundation Scholarship 2024',
                category: 'Scholarship',
                location: 'Nigeria',
                deadline: '30 May 2024',
              },
              {
                title: 'Google Africa Developer Scholarship',
                category: 'Scholarship',
                location: 'Africa',
                deadline: '15 June 2024',
              },
              {
                title: 'UN Youth Leadership Program 2024',
                category: 'Fellowship',
                location: 'International',
                deadline: '1 July 2024',
              },
            ].map((item) => (
              <article key={item.title} className="group overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
                    {item.category}
                  </span>
                  <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-neutral-400 transition hover:border-green-600 hover:text-green-600">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                    </svg>
                  </button>
                </div>
                <h2 className="mt-6 text-xl font-semibold text-neutral-900">{item.title}</h2>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-neutral-500">
                  <span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-2 text-neutral-600">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {item.location}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-2 text-neutral-600">
                    <svg className="h-4 w-4 text-neutral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 7V3h8v4" />
                      <path d="M5 11h14M6 7h12" />
                      <path d="M7 11v10h10V11" />
                    </svg>
                    Deadline: {item.deadline}
                  </span>
                </div>
                <div className="mt-8 flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-neutral-600">Open for applications</span>
                  <button type="button" className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700">
                    Apply now
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-6 sm:flex-row">
            <p className="text-sm text-neutral-500">Showing the most popular opportunities for students and young professionals.</p>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-green-600 bg-white px-5 py-3 text-sm font-semibold text-green-600 shadow-sm transition hover:bg-green-50"
            >
              View all opportunities
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
