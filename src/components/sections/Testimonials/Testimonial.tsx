import { testimonials } from './data';
import TestimonialGrid from './TestimonialGrid';

export default function Testimonial() {
  return (
    <section 
      className="px-4 py-16 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:text-left">
          <h2 
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: 'var(--color-ink)' }}
          >
            What Our Members Say
          </h2>
          <p 
            className="text-lg"
            style={{ color: 'var(--color-ink-muted)' }}
          >
            Hear from students and alumni about their growth and journey in the NSS community
          </p>
        </div>

        <TestimonialGrid testimonials={testimonials} />
      </div>
    </section>
  );
}
