import { Testimonial } from './types';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div 
      className="flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg w-[320px] sm:w-[380px] shrink-0"
      style={{ 
        backgroundColor: 'var(--color-background)',
        borderColor: 'var(--color-border)'
      }}
    >
      <div className="space-y-4">
        {/* Quote Icon */}
        <div 
          className="h-10 w-10 rounded-xl flex items-center justify-center"
          style={{ 
            backgroundColor: 'var(--color-green-50)',
            color: 'var(--color-primary)' 
          }}
        >
          <Quote className="h-5 w-5" />
        </div>

        {/* Quote Content */}
        <p 
          className="text-sm sm:text-base leading-relaxed font-medium"
          style={{ color: 'var(--color-ink)' }}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      {/* Author Details */}
      <div className="flex items-center gap-3 mt-6">
        {/* Initials Avatar */}
        <div 
          className="h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0"
          style={{ 
            backgroundColor: 'var(--color-green-100)',
            color: 'var(--color-primary)'
          }}
        >
          {testimonial.initials || testimonial.author.slice(0, 2).toUpperCase()}
        </div>

        <div>
          {/* Author Name */}
          <h4 
            className="text-sm font-bold"
            style={{ color: 'var(--color-ink)' }}
          >
            {testimonial.author}
          </h4>
          {/* Role/University */}
          {testimonial.role && (
            <p 
              className="text-xs"
              style={{ color: 'var(--color-ink-muted)' }}
            >
              {testimonial.role}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
