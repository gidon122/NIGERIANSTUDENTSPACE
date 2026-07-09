import Link from 'next/link';
import { Program } from './types';

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <article className="grid gap-4 rounded-[1.25rem] border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md sm:grid-cols-[96px_minmax(0,_1fr)_auto] sm:items-center">
      <div className="flex h-24 w-24 flex-col items-center justify-center rounded-[1.25rem] bg-green-50 text-center text-neutral-900 sm:h-28 sm:w-28">
        <span className="text-3xl font-semibold leading-none">{program.date}</span>
        <span className="mt-1 text-xs font-semibold tracking-[0.2em] uppercase text-green-700">{program.month}</span>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href={program.href} className="text-xl font-semibold text-neutral-900 transition hover:text-green-700">
              {program.title}
            </Link>
            <p className="mt-2 text-sm leading-6 text-neutral-600">{program.description}</p>
          </div>
          <span className="inline-flex rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
            {program.category ?? 'Program'}
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-500">⏰</span>
            <span>{program.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-500">📍</span>
            <span>{program.location}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end">
        <Link
          href={program.href}
          className="inline-flex rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
          style={{ backgroundColor: 'var(--color-ink)' }}
        >
          Learn more
        </Link>
      </div>
    </article>
  );
}
