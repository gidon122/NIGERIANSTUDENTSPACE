import { Metadata } from 'next';
import Leadership from '../../../components/sections/Leadership/Leadership';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Leadership Team | Nigerian Students Space',
  description: 'Meet the executive leadership and team members driving innovation, science, and community at Nigerian Students Space.',
};

export default function LeadershipPage() {
  return (
    <main className="min-h-screen">
      {/* Page Hero Header */}
      <section 
        className="relative border-b px-4 py-12 sm:px-6 lg:px-8"
        style={{
          backgroundColor: 'var(--color-surface-dark, #111827)',
          borderColor: 'var(--color-border, #1f2937)',
          color: 'var(--color-neutral-0, #ffffff)',
        }}
      >
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb navigation */}
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-emerald-400 font-medium">Leadership</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
              NSS Executive Leadership
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Guided by vision, integrity, and a passion for student excellence. Learn more about the student innovators leading the Nigerian Students Space initiative nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Component Section */}
      <Leadership />
    </main>
  );
}
