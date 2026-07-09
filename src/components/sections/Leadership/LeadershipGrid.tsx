import { Leader } from './types';
import LeaderCard from './LeaderCard';

interface LeadershipGridProps {
  leaders: Leader[];
}

export default function LeadershipGrid({ leaders }: LeadershipGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
      {leaders.map((leader, index) => (
        <LeaderCard key={index} leader={leader} />
      ))}
    </div>
  );
}
