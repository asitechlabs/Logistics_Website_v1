import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Clock, ShieldCheck, CheckCircle2, ArrowRight, Smartphone } from 'lucide-react';

const OnDemand = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=1920" 
          alt="On-Demand Transport" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F5C]/90 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-4 block">Instant Logistics</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">On-Demand Transport</h1>
            <p className="text-xl text-blue-100 font-medium leading-relaxed mb-8">
              Need a truck now? Our on-demand fleet is ready to move your cargo at a moment's notice with real-time tracking and zero commitments.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-12 py-4">Book a Vehicle Now</Link>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] mb-8 uppercase">Flexibility at Your Fingertips</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Gone are the days of complex logistics planning for small shipments. Our on-demand solution connects you with a professional driver and the right vehicle size instantly. Perfect for ad-hoc business needs or urgent personal deliveries.
              </p>
              <div className="space-y-4">
                {[
                  'Instant Driver Assignment',
                  'Multiple Vehicle Sizes (Pickups to Trucks)',
                  'Real-time GPS Tracking',
                  'Digital Proof of Delivery',
                  'Flexible, Pay-per-Trip Pricing'
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
                <Clock className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Instant Booking</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <Smartphone className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">App Integrated</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <Truck className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">On-Call Fleet</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <ShieldCheck className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Verified Drivers</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[var(--primary)] mb-8 uppercase">Ready to Move?</h2>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OnDemand;
