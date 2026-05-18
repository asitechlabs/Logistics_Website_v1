import React from 'react';
import { Link } from 'react-router-dom';
import { Warehouse, Boxes, ShieldCheck, CheckCircle2, ArrowRight, Package } from 'lucide-react';

const Warehousing = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920" 
          alt="Warehousing" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F5C]/90 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-4 block">Storage & Assets</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">Warehousing</h1>
            <p className="text-xl text-blue-100 font-medium leading-relaxed mb-8">
              Strategically located storage facilities with state-of-the-art security and inventory management systems.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-12 py-4">Inquire About Storage</Link>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] mb-8 uppercase">Modern Infrastructure</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our 18,000+ sq ft fulfillment center in Kathmandu is just the beginning. We provide secure, organized, and scalable storage solutions for businesses of all sizes, ensuring your stock is safe and ready for immediate dispatch.
              </p>
              <div className="space-y-4">
                {[
                  '24/7 CCTV Monitoring',
                  'Inventory Management (WMS)',
                  'Pick, Pack & Fulfillment',
                  'Temperature Controlled Storage',
                  'Cross-Docking Facilities'
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
                <Warehouse className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Secure Facility</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <Boxes className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Organized Storage</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <Package className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Stock Management</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <ShieldCheck className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Fully Insured</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[var(--primary)] mb-8 uppercase">Need Space?</h2>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Explore Storage Solutions <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Warehousing;
