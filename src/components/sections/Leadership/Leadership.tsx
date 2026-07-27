'use client';

import { useState, useMemo } from 'react';
import { Search, Sparkles, Users, Award, Compass, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { leaders } from './data';
import LeadershipGrid from './LeadershipGrid';

export default function Leadership() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');

  // Extract unique tags across all leaders
  const availableTags = useMemo(() => {
    const tagSet = new Set<string>();
    leaders.forEach((leader) => {
      leader.tags?.forEach((t) => tagSet.add(t));
    });
    return ['All', ...Array.from(tagSet)];
  }, []);

  // Filter leaders based on search query and selected tag
  const filteredLeaders = useMemo(() => {
    return leaders.filter((leader) => {
      const matchesSearch =
        leader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        leader.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        leader.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (leader.school && leader.school.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTag =
        selectedTag === 'All' || (leader.tags && leader.tags.includes(selectedTag));

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

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

          {/* Quick Stats Badges */}
          <div className="flex flex-wrap gap-4 pt-2 md:pt-0">
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl border bg-slate-50/50 dark:bg-neutral-900/50">
              <Users className="h-5 w-5 text-emerald-600" />
              <div className="text-left">
                <p className="text-xs text-neutral-500 font-medium">Team Size</p>
                <p className="text-sm font-bold text-neutral-900 dark:text-neutral-100">{leaders.length} Members</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl border bg-slate-50/50 dark:bg-neutral-900/50">
              <Award className="h-5 w-5 text-emerald-600" />
              <div className="text-left">
                <p className="text-xs text-neutral-500 font-medium">Governance</p>
                <p className="text-sm font-bold text-neutral-900 dark:text-neutral-100">100% Student-Led</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Tag Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                  selectedTag === tag
                    ? 'text-white shadow-md scale-105'
                    : 'hover:bg-neutral-200 dark:hover:bg-neutral-800'
                }`}
                style={{
                  backgroundColor:
                    selectedTag === tag
                      ? 'var(--color-primary, #16a34a)'
                      : 'var(--color-neutral-100, #f3f4f6)',
                  color:
                    selectedTag === tag
                      ? '#ffffff'
                      : 'var(--color-ink-muted, #4b5563)',
                }}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search team members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border pl-10 pr-4 py-2 text-xs transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
              style={{
                backgroundColor: 'var(--color-background, #ffffff)',
                borderColor: 'var(--color-border, #d1d5db)',
                color: 'var(--color-ink, #111827)',
              }}
            />
          </div>
        </div>

        {/* Leadership Grid */}
        <LeadershipGrid leaders={filteredLeaders} />

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

