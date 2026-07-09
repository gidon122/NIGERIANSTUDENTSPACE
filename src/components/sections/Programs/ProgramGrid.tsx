import { Program } from './types';
import ProgramCard from './ProgramCard';

interface ProgramGridProps {
  programs?: Program[];
}

export default function ProgramGrid({ programs = [] }: ProgramGridProps) {
  if (!programs.length) {
    return (
      <div className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50 p-8 text-center text-neutral-600 shadow-sm">
        No programs match this selection yet. Check back soon for updates.
      </div>
    );
  }

  return (
    <div className="grid gap-5">
      {programs.map((program) => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </div>
  );
}
