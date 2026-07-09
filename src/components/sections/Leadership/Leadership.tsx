import { leaders } from './data';
import LeadershipGrid from './LeadershipGrid';

export default function Leadership() {
  return (
    <section 
      className="px-4 py-16 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 
            className="text-3xl font-bold mb-2"
            style={{ color: 'var(--color-ink)' }}
          >
            Leadership Team
          </h2>
          <p 
            className="text-lg"
            style={{ color: 'var(--color-ink-muted)' }}
          >
            Meet the passionate leaders driving NSS forward
          </p>
        </div>

        <LeadershipGrid leaders={leaders} />
      </div>
    </section>
  );
}
