const steps = [
  {
    number: 1,
    title: 'Application',
    description: 'Submit building details, blueprints & compliance documents online',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: 'Verification',
    description: 'Automated scrutiny and initial regulatory document review',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M4.2 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 016.23-.693" />
      </svg>
    ),
  },
  {
    number: 3,
    title: 'Provisional NOC',
    description: 'Fast issuance of provisional clearance for construction and fit-out',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
      </svg>
    ),
  },
  {
    number: 4,
    title: 'Inspection',
    description: 'On-site verification conducted by Municipal Fire Safety Officers',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: 5,
    title: 'Final NOC',
    description: 'Digitally signed, QR-verifiable official Fire Safety Certificate issued',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-red-700"></div>
            <span className="text-xs font-bold text-red-700 uppercase tracking-widest">Seamless Regulatory Journey</span>
            <div className="h-px w-8 bg-red-700"></div>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '-0.02em' }}
          >
            From Application to Final Certification in 5 Clear Steps
          </h2>
        </div>

        {/* Desktop: Horizontal flow */}
        <div className="hidden lg:flex items-start gap-0">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-start flex-1">
              {/* Step node */}
              <div className="flex flex-col items-center flex-1">
                {/* Number circle + icon */}
                <div className={`relative w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-sm ${
                  index === 4
                    ? 'bg-red-700 text-white'
                    : 'bg-white border-2 border-red-200 text-red-700'
                }`}>
                  {step.icon}
                  <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    index === 4
                      ? 'bg-white text-red-700'
                      : 'bg-red-700 text-white'
                  }`}>
                    {step.number}
                  </div>
                </div>
                {/* Content */}
                <div className="text-center px-2">
                  <h3
                    className="text-sm font-bold text-slate-900 mb-1.5"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="flex items-center mt-7 mx-1">
                  <div className="w-6 h-px bg-red-200"></div>
                  <svg className="w-4 h-4 text-red-300 -ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: Vertical flow */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-4">
              {/* Left: line + circle */}
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${
                  index === 4
                    ? 'bg-red-700 text-white'
                    : 'bg-white border-2 border-red-200 text-red-700'
                }`}>
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px h-12 bg-red-100 mt-2"></div>
                )}
              </div>
              {/* Right: content */}
              <div className="pb-8 pt-1.5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-red-700">Step {step.number}</span>
                </div>
                <h3
                  className="text-sm font-bold text-slate-900 mb-1"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
