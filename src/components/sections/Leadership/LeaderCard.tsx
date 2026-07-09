import { Leader } from './types';

interface LeaderCardProps {
  leader: Leader;
}

export default function LeaderCard({ leader }: LeaderCardProps) {
  return (
    <div 
      className="flex flex-col items-center text-center p-6 rounded-lg transition-all duration-200 hover:shadow-md"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Avatar */}
      <div 
        className="h-20 w-20 rounded-full flex items-center justify-center mb-4 text-2xl font-semibold text-white"
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        {leader.initials}
      </div>

      {/* Name */}
      <h3 
        className="text-lg font-semibold mb-1"
        style={{ color: 'var(--color-ink)' }}
      >
        {leader.name}
      </h3>

      {/* Title */}
      <p 
        className="text-sm"
        style={{ color: 'var(--color-ink-muted)' }}
      >
        {leader.title}
      </p>
    </div>
  );
}
