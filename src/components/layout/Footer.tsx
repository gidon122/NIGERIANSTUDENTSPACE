'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="border-t"
      style={{ 
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-surface-dark)',
        color: 'var(--color-ink-muted)'
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand section */}
          <div className="space-y-6 xl:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div 
                className="flex h-9 w-9 items-center justify-center font-bold text-white shadow-md"
                style={{ 
                  backgroundColor: 'var(--color-primary)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                NSS
              </div>
              <span className="text-lg font-bold tracking-tight" style={{ color: 'var(--color-neutral-0)' }}>
                NSS <span style={{ color: 'var(--color-green-400)' }}>Portal</span>
              </span>
            </Link>
            <p className="text-sm max-w-xs">
              A community dedicated to empowering student with the knowledge, opprtunities, and support they need to succed academically and beyound.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="transition-all duration-200" 
                aria-label="Twitter"
                style={{ color: 'var(--color-ink-muted)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ink-muted)'}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a 
                href="#" 
                className="transition-all duration-200" 
                aria-label="Facebook"
                style={{ color: 'var(--color-ink-muted)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ink-muted)'}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/></svg>
              </a>
              <a 
                href="#" 
                className="transition-all duration-200" 
                aria-label="LinkedIn"
                style={{ color: 'var(--color-ink-muted)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ink-muted)'}
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
              </a>
            </div>
          </div>

          {/* Quick links & Resources & Portal sections */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase" style={{ color: 'var(--color-neutral-0)' }}>Scheme</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link 
                    href="/about" 
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--color-ink-muted)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-neutral-0)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ink-muted)'}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/leadership" 
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--color-ink-muted)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-neutral-0)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ink-muted)'}
                  >
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/events" 
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--color-ink-muted)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-neutral-0)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ink-muted)'}
                  >
                    Events & News
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/gallery" 
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--color-ink-muted)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-neutral-0)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ink-muted)'}
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase" style={{ color: 'var(--color-neutral-0)' }}>Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link 
                    href="/opportunities" 
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--color-ink-muted)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-neutral-0)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ink-muted)'}
                  >
                    Opportunities
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/resources" 
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--color-ink-muted)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-neutral-0)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ink-muted)'}
                  >
                    Download Center
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/nuggets" 
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--color-ink-muted)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-neutral-0)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ink-muted)'}
                  >
                    NSS Nuggets
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/faq" 
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--color-ink-muted)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-neutral-0)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ink-muted)'}
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase" style={{ color: 'var(--color-neutral-0)' }}>Portal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link 
                    href="/login" 
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--color-ink-muted)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-neutral-0)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ink-muted)'}
                  >
                    Personnel Login
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/register" 
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--color-ink-muted)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-neutral-0)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ink-muted)'}
                  >
                    Registration
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/dashboard" 
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--color-ink-muted)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-neutral-0)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ink-muted)'}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/admin" 
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--color-ink-muted)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-neutral-0)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ink-muted)'}
                  >
                    Admin Console
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="mt-12" style={{ borderColor: 'var(--color-neutral-800)' }} />
        
        <div className="mt-8 md:flex md:items-center md:justify-between gap-4 flex-wrap">
          <p className="text-sm">
            &copy; {currentYear} NSS Portal. All rights reserved. Developed for National Service Scheme.
          </p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <a 
              href="#" 
              className="text-sm transition-colors duration-200"
              style={{ color: 'var(--color-ink-muted)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ink-muted)'}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-sm transition-colors duration-200"
              style={{ color: 'var(--color-ink-muted)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-ink-muted)'}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
