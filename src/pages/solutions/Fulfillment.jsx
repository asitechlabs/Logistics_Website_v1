import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Box, ShieldCheck, CheckCircle2, ArrowRight, Warehouse, Layers } from 'lucide-react';

const Fulfillment = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1920" 
          alt="Fulfillment Services" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-dark)]/90 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-4 block">E-Commerce Backbone</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">Fulfillment Services</h1>
            <p className="text-xl text-blue-100 font-medium leading-relaxed mb-8">
              Focus on selling, we'll handle the rest. Complete end-to-end fulfillment solutions from warehousing to the customer's doorstep.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-12 py-4">Scale Your Business</Link>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] mb-8 uppercase">The Engine of Growth</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our fulfillment solutions are built for the modern e-commerce landscape. We provide strategic storage at our Pepsicola hub, automated order processing, meticulous picking and packing, and reliable last-mile delivery with full COD management.
              </p>
              <div className="space-y-4">
                {[
                  'Automated Inventory Management',
                  'Precision Picking & Packing',
                  'Same-Day Order Dispatch',
                  'Comprehensive COD Management',
                  'Efficient Reverse Logistics (Returns)'
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
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Strategic Hub</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <Layers className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Scalable Storage</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <Box className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Pick & Pack</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <ShieldCheck className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Insured Stock</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[var(--primary)] mb-8 uppercase">Ready to Automate Your Store?</h2>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Inquire Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Fulfillment;
