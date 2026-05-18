import React from 'react';
import { Link } from 'react-router-dom';
import { Ship, Anchor, Globe, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

const OceanFreight = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1920" 
          alt="Ocean Freight" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-dark)]/90 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-4 block">Sea Logistics</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">Ocean Freight</h1>
            <p className="text-xl text-blue-100 font-medium leading-relaxed mb-8">
              Reliable and cost-effective sea transport solutions for global commerce. We connect continents through strategic port partnerships.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-12 py-4">Request a Sea Quote</Link>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] mb-8 uppercase">Global Maritime Excellence</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our ocean freight services provide the most economical way to move large volumes of cargo across the globe. With ASI Logistics, you benefit from flexible scheduling and competitive rates through our network of premium carriers.
              </p>
              <div className="space-y-4">
                {[
                  'Full Container Load (FCL)',
                  'Less-than-Container Load (LCL)',
                  'Reefer & Temperature Controlled',
                  'Break Bulk & Project Cargo',
                  'Port-to-Port & Door-to-Door'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-gray-800 font-bold">
                    <CheckCircle2 className="text-[var(--accent)]" size={20} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <Ship className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Mega Vessels</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <Anchor className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Port Handling</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <Globe className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Global Routes</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <ShieldCheck className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Secure Transit</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[var(--primary)] mb-8 uppercase">Ready to Ship via Ocean?</h2>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get a Custom Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OceanFreight;
