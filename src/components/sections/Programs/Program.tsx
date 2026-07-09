'use client';

import { useMemo, useState } from 'react';
import { programs } from './data';
import ProgramGrid from './ProgramGrid';
import { ProgramStatus } from './types';

const tabs: { label: string; value: ProgramStatus | 'all' }[] = [
  { label: 'Upcoming Programs', value: 'upcoming' },
  { label: 'Past Programs', value: 'past' },
  { label: 'All Programs', value: 'all' },
];

interface ProgramProps {
  hideHeader?: boolean;
}

export default function Program({ hideHeader = false }: ProgramProps) {
  const [activeTab, setActiveTab] = useState<ProgramStatus | 'all'>('upcoming');

  const filteredPrograms = useMemo(() => {
    if (activeTab === 'all') {
      return programs;
    }

    return programs.filter((program) => program.status === activeTab);
  }, [activeTab]);

  return (
    <section 
      className={hideHeader ? "" : "px-4 py-16 sm:px-6 lg:px-8"} 
      style={hideHeader ? {} : { backgroundColor: 'var(--color-surface)' }}
    >
      <div className="mx-auto max-w-7xl">
        {!hideHeader && (
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-700">Programs</p>
            <h2 className="mt-4 text-3xl font-bold text-neutral-900">Explore our programs</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
              Discover upcoming learning experiences, community initiatives, and past highlights. Choose the tab to filter programs by status.
            </p>
          </div>
        )}

        <div className="overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
          <div className="border-b border-neutral-200 bg-neutral-50 px-6 py-5 sm:px-8">
            <div className="flex flex-wrap gap-3">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.value;
                return (
                  <button
                    key={tab.value}
                    type="button"
                    onClick={() => setActiveTab(tab.value)}
                    className={
                      isActive
                        ? 'inline-flex items-center rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700'
                        : 'inline-flex items-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600 transition hover:bg-neutral-50'
                    }
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-4 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
            <ProgramGrid programs={filteredPrograms} />
          </div>
        </div>
      </div>
    </section>
  );
}

