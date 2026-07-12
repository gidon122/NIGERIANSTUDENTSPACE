import Hero from '../../components/sections/Hero/hero';
import Program from '@/src/components/sections/Programs/Program';
import Testimonial from '@/src/components/sections/Testimonials/Testimonial';

export default function Page() {
  return (
    <div className="flex flex-col">
      <Hero />
      
      {/* Features Section (Learn / Connect / Grow / Impact) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-12 relative overflow-hidden  sm:py-24"> 
        <div className="features-panel">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="feature-card">
              <div className="feature-icon h-12 w-12 flex items-center justify-center rounded-md bg-green-100 text-green-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0118 20.5a12.08 12.08 0 01-6 1.5 12.08 12.08 0 01-6-1.5 12.083 12.083 0 01-.16-9.922L12 14z" />
                </svg>
              </div>
              <div>
                <h4 className="feature-title text-sm font-semibold text-neutral-900">Learn</h4>
                <p className="feature-desc mt-1 text-xs text-neutral-500">Access resources and development content.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon h-12 w-12 flex items-center justify-center rounded-md bg-green-100 text-green-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5V10a2 2 0 00-2-2h-3" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2 20h5V10a2 2 0 00-2-2H2v12zM7 8l5-5 5 5" />
                </svg>
              </div>
              <div>
                <h4 className="feature-title text-sm font-semibold text-neutral-900">Connect</h4>
                <p className="feature-desc mt-1 text-xs text-neutral-500">Build meaningful relationships.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon h-12 w-12 flex items-center justify-center rounded-md bg-green-100 text-green-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a9 9 0 10-14.8 0" />
                </svg>
              </div>
              <div>
                <h4 className="feature-title text-sm font-semibold text-neutral-900">Grow</h4>
                <p className="feature-desc mt-1 text-xs text-neutral-500">Develop leadership and life skills.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon h-12 w-12 flex items-center justify-center rounded-md bg-green-100 text-green-600">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="feature-title text-sm font-semibold text-neutral-900">Impact</h4>
                <p className="feature-desc mt-1 text-xs text-neutral-500">Create positive change in your community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Program />

      <Testimonial />

      

      
  
    
    </div>
  );
}
