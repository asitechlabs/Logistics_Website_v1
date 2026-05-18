import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, MapPin, ShieldCheck, CheckCircle2, ArrowRight, Bike, Clock } from 'lucide-react';

const Hyperlocal = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] py-28 md:py-32 flex items-center text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1590400541334-3cfa0673d574?auto=format&fit=crop&q=80&w=1920" 
          alt="Hyperlocal Delivery" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-dark)]/90 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-4 block">Ultra-Fast Urban Logistics</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">Hyperlocal Delivery</h1>
            <p className="text-xl text-blue-100 font-medium leading-relaxed mb-8">
              Move parcels across the city in under 60 minutes. We provide the speed and agility that modern urban life demands.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-12 py-4">Send a Parcel Now</Link>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] mb-8 uppercase">City-Wide Speed</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our hyperlocal network is powered by an extensive fleet of bikers and light vehicles strategically stationed across the city. Whether it's an urgent legal document, a hot meal, or a forgotten set of keys, we bridge the distance in record time.
              </p>
              <div className="space-y-4">
                {[
                  'Average 45-Minute Delivery',
                  'Live Biker Location Tracking',
                  'Contactless Delivery Options',
                  'Instant Electronic Confirmation',
                  'Multi-Stop Route Optimization'
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
                <Bike className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Biker Fleet</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <MapPin className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Urban Coverage</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <Clock className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Under 60 Mins</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[var(--primary)] mb-8 uppercase">Need it There Now?</h2>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Start Delivery <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hyperlocal;
