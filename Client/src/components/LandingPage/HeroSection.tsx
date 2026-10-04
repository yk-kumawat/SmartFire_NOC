import { Link } from 'react-router-dom';

const HeroDashboardCard = () => (
  <div className="relative bg-white rounded-2xl shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] border border-slate-200 overflow-hidden">
    {/* Card Header */}
    <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/60">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">NOC Application</span>
        </div>
        <span className="text-xs text-slate-400 font-mono">#NOC-2025-8841</span>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-800" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          Commercial High-Rise — Tower B
        </h3>
        <span className="px-2.5 py-0.5 text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 rounded-full">
          Provisional NOC
        </span>
      </div>
    </div>

    {/* Progress Section */}
    <div className="px-5 py-4 border-b border-slate-100">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-slate-600">Fire Safety Readiness</span>
        <span className="text-xs font-bold text-red-700">94%</span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-red-700 to-orange-500"
          style={{ width: '94%' }}
        ></div>
      </div>
    </div>

    {/* Compliance Items */}
    <div className="px-5 py-4 border-b border-slate-100 space-y-2.5">
      {[
        { label: 'Hydrant & Sprinkler System', status: 'Compliant', color: 'green' },
        { label: 'Evacuation Layout', status: 'Verified', color: 'green' },
        { label: 'Field Inspection', status: 'Scheduled', color: 'orange' },
      ].map((item) => (
        <div key={item.label} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${
              item.color === 'green' ? 'bg-emerald-500' : 'bg-orange-400'
            }`}></div>
            <span className="text-xs text-slate-600">{item.label}</span>
          </div>
          <span className={`text-xs font-semibold ${
            item.color === 'green' ? 'text-emerald-600' : 'text-orange-600'
          }`}>
            {item.status}
          </span>
        </div>
      ))}
    </div>

    {/* Stage Tracker */}
    <div className="px-5 py-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-slate-600">Application Journey</span>
        <span className="text-xs text-slate-400">Phase 4 of 5</span>
      </div>
      <div className="flex items-center gap-1">
        {['Apply', 'Verify', 'P-NOC', 'Inspect', 'Final'].map((step, i) => (
          <div key={step} className="flex items-center">
            <div className={`flex flex-col items-center gap-1`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                i < 4
                  ? 'bg-red-700 text-white'
                  : 'bg-slate-100 text-slate-400 border border-slate-200'
              }`}>
                {i < 3 ? (
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span>{i + 1}</span>
                )}
              </div>
              <span className="text-[9px] font-medium text-slate-500 whitespace-nowrap">{step}</span>
            </div>
            {i < 4 && (
              <div className={`h-0.5 w-4 mx-0.5 mb-3 ${i < 3 ? 'bg-red-300' : 'bg-slate-200'}`}></div>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Floating badge */}
    <div className="absolute -top-3 -right-3 w-12 h-12 bg-red-700 rounded-full flex items-center justify-center shadow-lg">
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-50/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-50/80 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, #0f172a 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div>
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-50 border border-red-100 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
              <span className="text-xs font-semibold text-red-700 tracking-wide">
                Municipal Fire Safety & Regulatory Compliance Platform
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-tight tracking-tight mb-5"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '-0.025em' }}
            >
              Smarter Fire Safety.{' '}
              <span className="text-red-700">Simpler NOC</span>{' '}
              Management.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
              An intelligent digital platform designed to streamline Fire Department inspections,
              NoC applications, compliance verification, and the journey from Provisional NOC to Final NOC.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-700 text-white text-sm font-semibold rounded-lg hover:bg-red-800 transition-all shadow-sm hover:shadow-md"
              >
                Apply for NOC
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/signin"
                className="inline-flex items-center gap-2 px-6 py-3 text-slate-700 text-sm font-semibold border border-slate-300 rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all"
              >
                Sign In
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Trust metrics */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                { icon: '✓', text: '100% Digital Audit Trail' },
                { icon: '✓', text: 'Instant Status Tracking' },
                { icon: '✓', text: 'Official Municipal Standard' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold text-sm">{item.icon}</span>
                  <span className="text-xs font-medium text-slate-500">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard Card Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative rings behind */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 rounded-full border border-red-100/60 absolute"></div>
              <div className="w-96 h-96 rounded-full border border-slate-100/80 absolute"></div>
            </div>
            <div className="relative w-full max-w-sm">
              <HeroDashboardCard />
              {/* Floating status indicator */}
              <div className="absolute -left-8 top-16 bg-white rounded-xl shadow-[0_8px_24px_-8px_rgba(15,23,42,0.12)] border border-slate-200 px-3.5 py-2.5 hidden sm:flex items-center gap-2.5">
                <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Docs Verified</p>
                  <p className="text-[10px] text-slate-400">2 min ago</p>
                </div>
              </div>
              {/* Floating scheduling tag */}
              <div className="absolute -right-6 bottom-16 bg-white rounded-xl shadow-[0_8px_24px_-8px_rgba(15,23,42,0.12)] border border-slate-200 px-3.5 py-2.5 hidden sm:flex items-center gap-2.5">
                <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Inspection Set</p>
                  <p className="text-[10px] text-slate-400">Tomorrow 10:30 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
