export default function Page() {
  return (
    <main className="bg-neutral-50 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="inline-flex rounded-full bg-green-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-green-700">
            Contact Us
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
            We&rsquo;d love to hear from you.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-neutral-600">
            Reach out with questions, ideas, or partnership requests. Our team is ready to support your service journey and respond as quickly as possible.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900">Get in touch</h2>
                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  Whether you need help with registration, events, or resources, we are here to assist. Send a message and we&rsquo;ll get back to you soon.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="flex items-start gap-4 rounded-3xl border border-neutral-200 bg-neutral-50 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-green-100 text-green-700">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16v16H4z" />
                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">Email</p>
                    <p className="mt-1 text-sm text-neutral-600">hello@nigerianstudents.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-3xl border border-neutral-200 bg-neutral-50 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-green-100 text-green-700">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92V21a1 1 0 0 1-1.09 1A19.91 19.91 0 0 1 3 5.09 1 1 0 0 1 4 4h3.09a1 1 0 0 1 1 .75c.12.55.3 1.09.54 1.61a1 1 0 0 1-.23 1.05L7.21 8.21a16 16 0 0 0 8.58 8.58l.81-.19a1 1 0 0 1 1.05.24c.5.5 1.05.92 1.6 1.05a1 1 0 0 1 .75 1z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">Phone</p>
                    <p className="mt-1 text-sm text-neutral-600">+234 902 125 4687</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-3xl border border-neutral-200 bg-neutral-50 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-green-100 text-green-700">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">Location</p>
                    <p className="mt-1 text-sm text-neutral-600">Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-3xl border border-neutral-200 bg-neutral-50 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-green-100 text-green-700">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12.79A9 9 0 0 1 11.21 3m-1.33 4.81a3 3 0 0 0-4.24 4.24m5.67-1.77a3 3 0 0 0-4.24 4.24M7.07 16.93L3 21" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">WhatsApp</p>
                    <p className="mt-1 text-sm text-neutral-600">Join our community</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">Follow Us</p>
                <div className="mt-4 flex gap-3">
                  {['F', 'T', 'I', 'L'].map((label) => (
                    <span
                      key={label}
                      className="flex h-10 w-10 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-sm font-semibold text-neutral-600 transition hover:border-green-600 hover:text-green-700"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm sm:p-10">
            <form className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-neutral-700">
                  Your Name
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-3xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-100"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm text-neutral-700">
                  Email Address
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-3xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-100"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2 text-sm text-neutral-700">
                Subject
                <input
                  type="text"
                  placeholder="How can we help you?"
                  className="w-full rounded-3xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-100"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-neutral-700">
                Your Message
                <textarea
                  rows={6}
                  placeholder="Tell us more about your request."
                  className="w-full resize-none rounded-3xl border border-neutral-200 bg-neutral-50 px-4 py-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-100"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-3xl bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
