'use client';

import { Sparkles, Users, Award, Compass, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { leaders } from './data';
import LeadershipGrid from './LeadershipGrid';

export default function Leadership() {
  return (
    <section 
      className="relative px-4 py-16 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: 'var(--color-surface, #ffffff)' }}
      id="leadership"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border"
              style={{
                backgroundColor: 'var(--color-neutral-100, #f3f4f6)',
                borderColor: 'var(--color-border, #e5e7eb)',
                color: 'var(--color-primary, #16a34a)',
              }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              Empowering Student Visionaries
            </div>
            
            <h2 
              className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3"
              style={{ color: 'var(--color-ink, #111827)' }}
            >
              Leadership Team
            </h2>
            
            <p 
              className="text-lg leading-relaxed"
              style={{ color: 'var(--color-ink-muted, #4b5563)' }}
            >
              Meet the passionate student leaders driving NSS forward, building opportunities, and fostering space science education across Nigeria.
            </p>
          </div>
        </div>

        {/* Leadership Grid */}
        <LeadershipGrid leaders={leaders} />

        {/* CTA Footer Banner */}
        <div 
          className="mt-16 rounded-2xl p-8 md:p-10 border text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
          style={{
            background: 'linear-gradient(135deg, var(--color-surface, #ffffff) 0%, var(--color-neutral-50, #f9fafb) 100%)',
            borderColor: 'var(--color-border, #e5e7eb)',
          }}
        >
          <div className="max-w-xl">
            <h3 
              className="text-xl font-bold mb-2 flex items-center justify-center md:justify-start gap-2"
              style={{ color: 'var(--color-ink, #111827)' }}
            >
              <Compass className="h-5 w-5 text-emerald-600" />
              Interested in joining NSS Leadership?
            </h3>
            <p 
              className="text-sm leading-relaxed"
              style={{ color: 'var(--color-ink-muted, #4b5563)' }}
            >
              We are constantly seeking passionate student leaders, campus ambassadors, and event coordinators to join our mission.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white shadow-md transition-all duration-200 hover:shadow-lg active:scale-95 whitespace-nowrap"
            style={{ backgroundColor: 'var(--color-primary, #16a34a)' }}
          >
            Get In Touch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

