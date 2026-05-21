import React from 'react';
import { Link } from 'react-router-dom';
import { Ship, Plane, Truck, CheckCircle2, ArrowRight } from 'lucide-react';
import GlobalTradeMap from '../../components/GlobalTradeMap';

const ImportManagement = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] py-28 md:py-32 flex items-center text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8ed7c663e0?auto=format&fit=crop&q=80&w=1920" 
          alt="Import Management" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-dark)]/90 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-4 block">International Transport</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">Import Management</h1>
            <p className="text-xl text-blue-100 font-medium leading-relaxed mb-8">
              Simplifying global procurement with secure and efficient supply chain operations from origin to destination.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-12 py-4">Request a Quote</Link>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] mb-8 uppercase">Seamless Import Logistics</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Import logistics involves the transportation of goods from international suppliers into the country through secure and efficient supply chain operations. Our import services are designed to simplify global procurement by handling cargo movement, customs coordination, documentation, and delivery management. We ensure that imported goods are processed smoothly from origin to destination while maintaining transparency, reliability, and timely updates throughout the shipment journey.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our platform supports multiple modes of transportation including air freight, sea freight, and land transportation to meet different business requirements. From supplier pickup and cargo consolidation to customs clearance and warehouse handling, every stage of the import process is carefully managed to provide safe and efficient delivery solutions for businesses and individuals.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We focus on reducing delays, improving shipment visibility, and ensuring proper handling of international cargo. With real-time tracking, organized shipment records, and professional logistics support, our import management solutions help businesses streamline operations and maintain efficient international trade processes.
              </p>
              <div className="space-y-4">
                {[
                  'Air, Sea & Land Transport',
                  'Supplier Pickup & Consolidation',
                  'Customs Coordination',
                  'Real-time Tracking'
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
                <Ship className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Sea Freight</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <Plane className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Air Freight</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <Truck className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Land Transport</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <CheckCircle2 className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Customs Clear</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GlobalTradeMap />

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[var(--primary)] mb-8 uppercase">Ready to Import?</h2>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get a Custom Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ImportManagement;
