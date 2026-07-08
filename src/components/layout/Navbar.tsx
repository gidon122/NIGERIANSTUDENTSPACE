'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Nuggets', href: '/nuggets' },
    { name: 'Opportunities', href: '/opportunities' },
    { name: 'Resources', href: '/resources' },
    { name: 'Community', href: '/community' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-background)', backdropFilter: 'blur(12px)' }}>
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div 
            className="flex h-9 w-9 items-center justify-center font-bold text-white shadow-md transition-transform hover:scale-105"
            style={{ 
              backgroundColor: 'var(--color-primary)',
              borderRadius: 'var(--radius-md)'
            }}
          >
            NSS
          </div>
          <span className="text-lg font-bold tracking-tight" style={{ color: 'var(--color-ink)' }}>
            NSS <span style={{ color: 'var(--color-primary)' }}>Portal</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-all duration-200 relative group"
                style={{ 
                  color: isActive ? 'var(--color-primary)' : 'var(--color-ink-muted)',
                  fontWeight: isActive ? '600' : '500'
                }}
              >
                {link.name}
                <span 
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center px-4 py-2.5 text-sm font-semibold text-white rounded-md transition-all duration-200"
                style={{ backgroundColor: 'var(--color-primary)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
              >
                Join NSS Today
              </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border md:hidden transition-colors duration-200"
          style={{ 
            borderColor: 'var(--color-border)',
            color: 'var(--color-ink-muted)'
          }}
          aria-expanded={isOpen}
          aria-label="Toggle Navigation"
        >
          {isOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div 
          className="border-t px-4 py-4 md:hidden animate-in fade-in slide-in-from-top-2 duration-200"
          style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-surface)' }}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium transition-all duration-200 px-3 py-2 rounded-md"
                  style={{ 
                    color: isActive ? 'var(--color-primary)' : 'var(--color-ink-muted)',
                    backgroundColor: isActive ? 'var(--color-green-50)' : 'transparent',
                    fontWeight: isActive ? '600' : '500'
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
            <hr className="my-3" style={{ borderColor: 'var(--color-border)' }} />
            <div className="flex flex-col gap-2 pt-2">
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center px-4 py-2.5 text-sm font-semibold text-white rounded-md transition-all duration-200"
                style={{ backgroundColor: 'var(--color-primary)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
              >
                Join NSS Today
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
