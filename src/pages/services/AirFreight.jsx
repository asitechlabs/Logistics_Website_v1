import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Zap, Globe, ShieldCheck, CheckCircle2, ArrowRight, Clock } from 'lucide-react';

const AirFreight = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] py-28 md:py-32 flex items-center text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&q=80&w=1920" 
          alt="Air Freight" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-dark)]/90 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-4 block">Aviation Logistics</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">Air Freight</h1>
            <p className="text-xl text-blue-100 font-medium leading-relaxed mb-8">
              High-speed transportation for time-sensitive cargo. We ensure your products reach their destination with maximum efficiency.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-12 py-4">Request an Air Quote</Link>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] mb-8 uppercase">Velocity & Precision</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                When time is the primary constraint, our air freight solutions provide the speed and reliability you need. We offer a range of services from express small parcels to full charter flights for oversized machinery.
              </p>
              <div className="space-y-4">
                {[
                  'Express Air Delivery',
                  'Next-Flight-Out (NFO)',
                  'Consolidated Air Shipments',
                  'Temperature Sensitive Cargo',
                  'Full & Part Charter'
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
                <Zap className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Ultra Fast</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <Clock className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">On-Time Always</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <Plane className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Global Flight Network</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <ShieldCheck className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Safe Handling</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[var(--primary)] mb-8 uppercase">Need Speed?</h2>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Book Air Freight <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AirFreight;
