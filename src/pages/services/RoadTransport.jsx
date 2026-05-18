import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, MapPin, Globe, ShieldCheck, CheckCircle2, ArrowRight, Activity } from 'lucide-react';

const RoadTransport = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1920" 
          alt="Road Transport" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F5C]/90 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-4 block">Surface Logistics</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">Road Transport</h1>
            <p className="text-xl text-blue-100 font-medium leading-relaxed mb-8">
              Seamless nationwide and cross-border trucking solutions. We own the last mile and every mile in between.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-12 py-4">Request a Road Quote</Link>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] mb-8 uppercase">Reliability on the Road</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our extensive fleet and partner network ensure your cargo is always moving. From small delivery vans to heavy-duty trailers, we provide the right vehicle for every shipment, ensuring safe and timely delivery to any doorstep.
              </p>
              <div className="space-y-4">
                {[
                  'Full Truckload (FTL)',
                  'Less-than-Truckload (LTL)',
                  'Specialized Heavy Haulage',
                  'Cross-Border Transport',
                  'Last-Mile Urban Delivery'
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
                <Truck className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Diverse Fleet</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <MapPin className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Nationwide Coverage</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <Activity className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Real-time Tracking</h4>
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
          <h2 className="text-3xl font-black text-[var(--primary)] mb-8 uppercase">Ready to Hit the Road?</h2>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Book Road Transport <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RoadTransport;
