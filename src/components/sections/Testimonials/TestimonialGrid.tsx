'use client';

import { Testimonial } from './types';
import TestimonialCard from './TestimonialCard';

interface TestimonialGridProps {
  testimonials: Testimonial[];
}

export default function TestimonialGrid({ testimonials }: TestimonialGridProps) {
  // To create a seamless infinite loop, we duplicate the array.
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Fade gradients on the sides for a premium look */}
      <div 
        className="absolute inset-y-0 left-0 w-12 sm:w-24 z-10 pointer-events-none" 
        style={{
          background: 'linear-gradient(to right, var(--color-surface), transparent)'
        }}
      />
      <div 
        className="absolute inset-y-0 right-0 w-12 sm:w-24 z-10 pointer-events-none" 
        style={{
          background: 'linear-gradient(to left, var(--color-surface), transparent)'
        }}
      />

      {/* Marquee Container */}
      <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] py-2">
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={`${testimonial.id}-${index}`} 
            testimonial={testimonial} 
          />
        ))}
      </div>

      {/* Scoped CSS for the marquee animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
