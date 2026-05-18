import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, DoorOpen, Globe, ShieldCheck, CheckCircle2, ArrowRight, Route } from 'lucide-react';
import distributionImg from '../../assets/images/distribution.jpeg';

const Distribution = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] py-28 md:py-32 flex items-center text-white overflow-hidden">
        <img 
          src={distributionImg} 
          alt="Distribution" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-dark)]/90 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-4 block">Last-Mile Fulfillment</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">Distribution</h1>
            <p className="text-xl text-blue-100 font-medium leading-relaxed mb-8">
              Efficient multi-channel distribution networks connecting your products to the end-consumer seamlessly.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-12 py-4">Scale Your Distribution</Link>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] mb-8 uppercase">Reach Every Door</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our distribution network is designed for high-density urban environments and remote regional areas alike. We handle the complexity of sorting, routing, and delivery so you can focus on growing your brand.
              </p>
              <div className="space-y-4">
                {[
                  'B2B & B2C Distribution',
                  'Hyperlocal Last-Mile Delivery',
                  'E-commerce Order Fulfillment',
                  'Reverse Logistics (Returns)',
                  'Real-time Proof of Delivery'
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
                <ShoppingCart className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">E-com Ready</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <DoorOpen className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Door-to-Door</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <Route className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Smart Routing</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <Globe className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Wide Network</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[var(--primary)] mb-8 uppercase">Ready to Grow?</h2>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Design Your Network <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Distribution;
