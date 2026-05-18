import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Link as LinkIcon, ShieldCheck, CheckCircle2, ArrowRight, Puzzle, Terminal } from 'lucide-react';

const MeroUpaya = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1920" 
          alt="Mero Upaya Integration" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F5C]/90 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-4 block">Tech Synergy</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">Mero Upaya Integration</h1>
            <p className="text-xl text-blue-100 font-medium leading-relaxed mb-8">
              Seamlessly connect your business with ASI Logistics through our advanced Mero Upaya API ecosystem. Automation at its finest.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-12 py-4">Request API Access</Link>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] mb-8 uppercase">Automated Intelligence</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Mero Upaya is our proprietary integration platform designed to bridge the gap between your e-commerce or ERP system and our logistics network. Automate order placements, track shipments in real-time, and generate invoices without manual intervention.
              </p>
              <div className="space-y-4">
                {[
                  'RESTful API Endpoints',
                  'Webhook Event Notifications',
                  'Bulk Order Automation',
                  'Real-time Inventory Sync',
                  'Automated Digital Invoicing'
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
                <Code className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Developer Friendly</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <LinkIcon className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Direct Sync</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <Puzzle className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Plug & Play</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <Terminal className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Robust Docs</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[var(--primary)] mb-8 uppercase">Ready to Automate?</h2>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Talk to a Tech Expert <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MeroUpaya;
