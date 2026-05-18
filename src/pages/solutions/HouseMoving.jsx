import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Boxes, ShieldCheck, CheckCircle2, ArrowRight, Truck } from 'lucide-react';

const HouseMoving = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1920" 
          alt="House Moving" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-dark)]/90 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-4 block">Relocation Services</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">House Moving</h1>
            <p className="text-xl text-blue-100 font-medium leading-relaxed mb-8">
              Professional, stress-free relocation for your home or office. We handle your belongings with the care they deserve.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-12 py-4">Request Moving Quote</Link>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] mb-8 uppercase">Hassle-Free Relocation</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Moving to a new space should be exciting, not exhausting. Our expert team provides a full-service experience—from premium packing and careful loading to secure transport and organized unloading. We treat every item as if it were our own.
              </p>
              <div className="space-y-4">
                {[
                  'Premium Packing Materials',
                  'Skilled Professional Movers',
                  'Secure Transit Insurance',
                  'Furniture Assembly/Disassembly',
                  'De-cluttering & Disposal Services'
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
                <Boxes className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Expert Packing</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <Truck className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Safe Transit</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <Home className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Office & Home</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <ShieldCheck className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text text-[var(--primary)] uppercase text-sm">Full Insurance</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[var(--primary)] mb-8 uppercase">Plan Your Move Today</h2>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Schedule a Survey <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HouseMoving;
