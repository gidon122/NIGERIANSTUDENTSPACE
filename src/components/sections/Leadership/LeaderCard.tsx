'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Building2, Quote } from 'lucide-react';
import { Leader } from './types';

interface LeaderCardProps {
  leader: Leader;
  onSelect?: (leader: Leader) => void;
}

export default function LeaderCard({ leader, onSelect }: LeaderCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="group relative flex flex-col h-full overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{
        backgroundColor: 'var(--color-surface, #ffffff)',
        borderColor: 'var(--color-border, #e5e7eb)',
      }}
    >
      {/* Decorative Top Accent Bar */}
      <div 
        className="h-2 w-full transition-all duration-300 group-hover:h-2.5"
        style={{
          background: 'linear-gradient(90deg, var(--color-primary, #16a34a) 0%, var(--color-green-400, #4ade80) 100%)',
        }}
      />

      <div className="flex flex-col flex-1 p-6 text-center">
        {/* Avatar Container */}
        <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full p-1 ring-2 transition-transform duration-300 group-hover:scale-105"
             style={{
               background: 'linear-gradient(135deg, var(--color-primary, #16a34a), var(--color-green-300, #86efac))',
             }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-full bg-white dark:bg-neutral-900">
            {!imageError && leader.image ? (
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                sizes="96px"
                className="object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div 
                className="flex h-full w-full items-center justify-center font-bold text-xl text-white"
                style={{
                  background: 'linear-gradient(135deg, var(--color-primary, #16a34a) 0%, #15803d 100%)',
                }}
              >
                {leader.initials || leader.name.slice(0, 2).toUpperCase()}
              </div>
            )}
          </div>
        </div>

        {/* Name & Title */}
        <h3 
          className="text-xl font-bold tracking-tight mb-1"
          style={{ color: 'var(--color-ink, #111827)' }}
        >
          {leader.name}
        </h3>

        <p 
          className="text-sm font-medium mb-3"
          style={{ color: 'var(--color-primary, #16a34a)' }}
        >
          {leader.title}
        </p>

        {/* School & Location Info */}
        {(leader.school || leader.location) && (
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs mb-4"
               style={{ color: 'var(--color-ink-muted, #6b7280)' }}
          >
            {leader.school && (
              <span className="inline-flex items-center gap-1">
                <Building2 className="h-3.5 w-3.5" />
                {leader.school}
              </span>
            )}
            {leader.location && (
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {leader.location}
              </span>
            )}
          </div>
        )}

        {/* Tags */}
        {leader.tags && leader.tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-1.5 mb-4">
            {leader.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                style={{
                  backgroundColor: 'var(--color-neutral-100, #f3f4f6)',
                  color: 'var(--color-ink-muted, #4b5563)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Bio */}
        <p 
          className="text-sm leading-relaxed mb-4 flex-1"
          style={{ color: 'var(--color-ink-muted, #4b5563)' }}
        >
          {leader.bio}
        </p>

        {/* Quote */}
        {leader.quote && (
          <div 
            className="relative p-3 rounded-xl mb-5 text-left text-xs italic border-l-2"
            style={{
              backgroundColor: 'var(--color-neutral-50, #f9fafb)',
              borderColor: 'var(--color-primary, #16a34a)',
              color: 'var(--color-ink, #374151)',
            }}
          >
            <Quote className="h-3 w-3 inline-block mr-1 opacity-50 text-emerald-600" />
            &ldquo;{leader.quote}&rdquo;
          </div>
        )}

        {/* Contact Links */}
        <div className="mt-auto flex flex-wrap justify-center gap-2 pt-2 border-t"
             style={{ borderColor: 'var(--color-border, #f3f4f6)' }}
        >
          {leader.email && (
            <a
              href={`mailto:${leader.email}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full text-white transition-all duration-200 hover:opacity-90 active:scale-95 shadow-sm"
              style={{ backgroundColor: 'var(--color-primary, #16a34a)' }}
              title={`Email ${leader.name}`}
            >
              <Mail className="h-3.5 w-3.5" />
              Email
            </a>
          )}
          {leader.phone && (
            <a
              href={`tel:${leader.phone}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 active:scale-95"
              style={{
                borderColor: 'var(--color-border, #d1d5db)',
                color: 'var(--color-ink, #374151)',
              }}
              title={`Call ${leader.name}`}
            >
              <Phone className="h-3.5 w-3.5" />
              Phone
            </a>
          )}
          {leader.linkedin && (
            <a
              href={leader.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 active:scale-95"
              style={{
                borderColor: 'var(--color-border, #d1d5db)',
                color: 'var(--color-ink, #374151)',
              }}
              title={`${leader.name} on LinkedIn`}
            >
              {/* Custom SVG for LinkedIn */}
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );
}