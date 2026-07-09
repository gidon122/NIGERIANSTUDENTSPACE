import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-green-50),white)] opacity-70" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
      </div>
    </section>
  );
}
