import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkIcon, BarChart3, Globe, ShieldCheck, CheckCircle2, ArrowRight, Puzzle } from 'lucide-react';

const SupplyChain = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] py-28 md:py-32 flex items-center text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=1920" 
          alt="Supply Chain" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-dark)]/90 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-4 block">End-to-End Orchestration</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">Supply Chain</h1>
            <p className="text-xl text-blue-100 font-medium leading-relaxed mb-8">
              Integrated logistics management to optimize your entire value chain, from procurement to the final mile.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-12 py-4">Optimize Your Chain</Link>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] mb-8 uppercase">Strategic Integration</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We don't just move cargo; we manage information and flow. Our supply chain solutions provide visibility, efficiency, and resilience, helping you navigate global complexities with confidence and data-driven insights.
              </p>
              <div className="space-y-4">
                {[
                  'Supply Chain Optimization',
                  'Inventory Visibility & Control',
                  'Vendor Management Logistics',
                  'Risk Management & Resilience',
                  'Sustainability Reporting'
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
                <BarChart3 className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Data Insights</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <Puzzle className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Custom Fit</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <LinkIcon className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Connected Flow</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <Globe className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Global Scale</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[var(--primary)] mb-8 uppercase">Ready to Optimize?</h2>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Consult Our Experts <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SupplyChain;
