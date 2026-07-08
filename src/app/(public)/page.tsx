import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        {/* Background Decorative Gradients */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-green-50),white)] opacity-70" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-800 ring-1 ring-green-600/20">
                WELCOME TO NIGERIAN STUDENT SPACE
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                Thriving on Campus: <br />
                <span className="text-green-600">Building the Mindset, Skills, and Balance for Academic and Life Success</span>
              </h1>
              <p className="text-lg text-neutral-600 max-w-2xl leading-relaxed">
                A community dedicated to empowering student with the knowledge, opprtunities, and support they need to succed academically and beyound.</p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center rounded-xl bg-green-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-green-600/10 transition-all hover:bg-green-700 hover:shadow-green-700/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Join NSS Today
                </Link>
                <Link
                  href="/opportunities"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-6 py-3.5 text-base font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
                >
                  Explore Opportunities
                </Link>
              </div>
            </div>

            {/* Feature Highlights/Visual side */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl sm:p-8">
                <h3 className="text-lg font-bold text-neutral-900 border-b border-neutral-100 pb-3">Quick Services Portal</h3>
                
                <div className="mt-4 space-y-4">
                  <Link href="/login" className="group flex items-start gap-4 rounded-xl p-3 hover:bg-neutral-50 transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900 group-hover:text-green-600 transition-colors">Placement Checker</h4>
                      <p className="mt-1 text-xs text-neutral-500">Access and download your service posting letters instantly.</p>
                    </div>
                  </Link>

                  <Link href="/resources" className="group flex items-start gap-4 rounded-xl p-3 hover:bg-neutral-50 transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900 group-hover:text-green-600 transition-colors">Document Center</h4>
                      <p className="mt-1 text-xs text-neutral-500">Download evaluation forms, guidebooks and directives.</p>
                    </div>
                  </Link>

                  <Link href="/opportunities" className="group flex items-start gap-4 rounded-xl p-3 hover:bg-neutral-50 transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900 group-hover:text-green-600 transition-colors">Post-Service Jobs</h4>
                      <p className="mt-1 text-xs text-neutral-500">Browse job postings and skill acquisition opportunities.</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section (Learn / Connect / Grow / Impact) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-12 relative overflow-hidden  sm:py-24"> 
        <div className="features-panel">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="feature-card">
              <div className="feature-icon h-12 w-12 flex items-center justify-center rounded-md bg-green-100 text-green-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0118 20.5a12.08 12.08 0 01-6 1.5 12.08 12.08 0 01-6-1.5 12.083 12.083 0 01-.16-9.922L12 14z" />
                </svg>
              </div>
              <div>
                <h4 className="feature-title text-sm font-semibold text-neutral-900">Learn</h4>
                <p className="feature-desc mt-1 text-xs text-neutral-500">Access resources and development content.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon h-12 w-12 flex items-center justify-center rounded-md bg-green-100 text-green-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5V10a2 2 0 00-2-2h-3" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 20h5V10a2 2 0 00-2-2H2v12zM7 8l5-5 5 5" />
                </svg>
              </div>
              <div>
                <h4 className="feature-title text-sm font-semibold text-neutral-900">Connect</h4>
                <p className="feature-desc mt-1 text-xs text-neutral-500">Build meaningful relationships.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon h-12 w-12 flex items-center justify-center rounded-md bg-green-100 text-green-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a9 9 0 10-14.8 0" />
                </svg>
              </div>
              <div>
                <h4 className="feature-title text-sm font-semibold text-neutral-900">Grow</h4>
                <p className="feature-desc mt-1 text-xs text-neutral-500">Develop leadership and life skills.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon h-12 w-12 flex items-center justify-center rounded-md bg-green-100 text-green-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="feature-title text-sm font-semibold text-neutral-900">Impact</h4>
                <p className="feature-desc mt-1 text-xs text-neutral-500">Create positive change in your community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      
  
    
    </div>
  );
}
