import { Leader } from './types';
import LeaderCard from './LeaderCard';

interface LeadershipGridProps {
  leaders: Leader[];
  onSelectLeader?: (leader: Leader) => void;
}

export default function LeadershipGrid({ leaders, onSelectLeader }: LeadershipGridProps) {
  if (!leaders || leaders.length === 0) {
    return (
      <div 
        className="rounded-2xl p-12 text-center border"
        style={{
          backgroundColor: 'var(--color-surface, #ffffff)',
          borderColor: 'var(--color-border, #e5e7eb)',
        }}
      >
        <p className="text-lg font-medium" style={{ color: 'var(--color-ink-muted, #6b7280)' }}>
          No team members match your criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {leaders.map((leader) => (
        <LeaderCard 
          key={leader.id || leader.name} 
          leader={leader} 
          onSelect={onSelectLeader} 
        />
      ))}
    </div>
  );
}

