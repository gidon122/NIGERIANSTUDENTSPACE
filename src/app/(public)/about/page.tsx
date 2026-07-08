'use client';

import { User, Target, Award, TrendingUp } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: User,
      title: 'Our Vision',
      description: 'To raise a generation of responsible students with the mindset to serve.',
    },
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower students through programs, workshops, and opportunities.',
    },
    {
      icon: Award,
      title: 'Our Values',
      description: 'Excellence, Integrity, Community, Respect for human dignity and life.',
    },
    {
      icon: TrendingUp,
      title: 'Our Impact',
      description: 'Building better students and transforming communities nationwide.',
    },
  ];

  const teamMembers = [
    { name: 'Faith A.', title: 'Founder / Patron', initials: 'FA' },
    { name: 'Jude', title: 'President', initials: 'JU' },
    { name: 'Deborah O.', title: 'Programs Director', initials: 'DO' },
    { name: 'Blessing A.', title: 'Communications Lead', initials: 'BA' },
  ];

  return (
    <>
      <main>
        {/* Hero Section */}
        <section 
          className="px-4 py-12 sm:px-6 lg:px-8"
          style={{ backgroundColor: 'var(--color-surface)' }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              {/* Left: Image Placeholder */}
              <div 
                className="flex items-center justify-center h-64 md:h-80 rounded-lg"
                style={{ backgroundColor: 'var(--color-neutral-100)' }}
              >
                <svg
                  className="h-24 w-24"
                  style={{ color: 'var(--color-border)' }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>

              {/* Right: Content */}
              <div className="space-y-6">
                <div>
                  <h1 
                    className="text-3xl md:text-4xl font-bold mb-3"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    About Nigerian <br /> Students Space
                  </h1>
                  <p 
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: 'var(--color-ink-muted)' }}
                  >
                    NSS is a vibrant community dedicated to empowering engineering students with the mindset, skills, opportunities, and support they need to build academically and in life.
                  </p>
                </div>

                <button
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white rounded-lg shadow-sm transition-all duration-200 hover:shadow-md active:scale-95"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
                >
                  Our Story
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section 
          className="px-4 py-16 sm:px-6 lg:px-8"
          style={{ backgroundColor: 'var(--color-background)' }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="text-center p-6 rounded-lg transition-all duration-200 hover:shadow-md"
                    style={{ backgroundColor: 'var(--color-surface)' }}
                  >
                    <div className="flex justify-center mb-4">
                      <div 
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: 'var(--color-green-50)' }}
                      >
                        <Icon 
                          className="h-6 w-6"
                          style={{ color: 'var(--color-primary)' }}
                        />
                      </div>
                    </div>
                    <h3 
                      className="text-lg font-semibold mb-2"
                      style={{ color: 'var(--color-ink)' }}
                    >
                      {feature.title}
                    </h3>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--color-ink-muted)' }}
                    >
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section 
          className="px-4 py-16 sm:px-6 lg:px-8"
          style={{ backgroundColor: 'var(--color-surface)' }}
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <h2 
                className="text-3xl font-bold mb-2"
                style={{ color: 'var(--color-ink)' }}
              >
                Leadership Team
              </h2>
              <p 
                className="text-lg"
                style={{ color: 'var(--color-ink-muted)' }}
              >
                Meet the passionate leaders driving NSS forward
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-lg transition-all duration-200 hover:shadow-md"
                  style={{ backgroundColor: 'var(--color-background)' }}
                >
                  {/* Avatar */}
                  <div 
                    className="h-20 w-20 rounded-full flex items-center justify-center mb-4 text-2xl font-semibold text-white"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    {member.initials}
                  </div>

                  {/* Name */}
                  <h3 
                    className="text-lg font-semibold mb-1"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {member.name}
                  </h3>

                  {/* Title */}
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--color-ink-muted)' }}
                  >
                    {member.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
