import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 lg:py-24 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white rounded-2xl border border-slate-200 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.08)] overflow-hidden px-8 py-14 sm:px-16 text-center">
          {/* Subtle decorative accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-700 via-red-600 to-orange-500 rounded-t-2xl"></div>
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-red-50 rounded-full opacity-60 pointer-events-none"></div>
          <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-orange-50 rounded-full opacity-50 pointer-events-none"></div>

          <div className="relative">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-12 h-12 bg-red-50 border border-red-100 rounded-xl mb-5">
              <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>

            {/* Heading */}
            <h2
              className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '-0.02em' }}
            >
              Building a Smarter Fire NOC Process
            </h2>

            {/* Supporting text */}
            <p className="text-base text-slate-500 max-w-lg mx-auto leading-relaxed mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Enabling municipalities, architects, and building owners to achieve the highest fire safety
              standards with frictionless, fully digital workflows.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 px-7 py-3 bg-red-700 text-white text-sm font-semibold rounded-lg hover:bg-red-800 transition-all shadow-sm hover:shadow-md"
              >
                Apply for NOC
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/signin"
                className="inline-flex items-center gap-2 px-7 py-3 text-slate-700 text-sm font-semibold border border-slate-300 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
