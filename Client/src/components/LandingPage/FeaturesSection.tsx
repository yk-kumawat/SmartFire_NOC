interface Feature {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    name: 'Dynamic NOC Checklist',
    description:
      'Auto-generated safety checklists tailored to occupancy type, building height, and hazard classification.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1 1 .03 2.7-1.41 2.7H4.209c-1.44 0-2.41-1.7-1.41-2.7L4.2 15.3" />
      </svg>
    ),
    name: 'AI Document Verification',
    description:
      'Automated validation of architectural submissions, structural safety certificates, and fire retardant specifications.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM7.5 6h.008v.008H7.5V6zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    name: 'Drawing & Floor Plan Analysis',
    description:
      'Intelligent blueprint inspection that highlights emergency egress paths, fire doors, and extinguisher zones.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    name: 'Provisional → Final NOC Tracking',
    description:
      'Real-time stage transitions with clear milestone alerts keeping applicants and inspecting officers aligned.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
    ),
    name: 'Smart Inspection Scheduling',
    description:
      'Automated dispatch and calendar coordination for Fire Officers with GPS-tagged inspection reporting.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    name: 'Digital Audit Trail',
    description:
      'Tamper-evident logs and cryptographic verification for every certificate, officer sign-off, and document revision.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-red-700"></div>
            <span className="text-xs font-bold text-red-700 uppercase tracking-widest">System Capabilities</span>
            <div className="h-px w-8 bg-red-700"></div>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '-0.02em' }}
          >
            Intelligent Features for Modern NOC Management
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Engineered to reduce approval turnaround times while elevating fire code safety compliance standards.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group bg-white rounded-xl border border-slate-200 p-6 hover:border-red-200 hover:shadow-[0_8px_24px_-8px_rgba(185,28,28,0.12)] transition-all duration-200 cursor-default"
            >
              {/* Icon */}
              <div className="w-11 h-11 bg-red-50 rounded-lg flex items-center justify-center mb-4 text-red-700 group-hover:bg-red-700 group-hover:text-white transition-colors duration-200">
                {feature.icon}
              </div>
              {/* Content */}
              <h3
                className="text-sm font-bold text-slate-900 mb-2 leading-snug"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {feature.name}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
