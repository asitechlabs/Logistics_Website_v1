import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Ship, Plane, Truck, Box, FileText, Globe, CheckCircle2, ArrowRight, ArrowDownToLine, ArrowUpFromLine } from 'lucide-react';
import GlobalTradeMap from '../../components/GlobalTradeMap';

const ImportExportManagement = () => {
  const [activeTab, setActiveTab] = useState('import');

  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] py-28 md:py-32 flex items-center text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8ed7c663e0?auto=format&fit=crop&q=80&w=1920" 
          alt="Import & Export Management" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-dark)]/90 to-[var(--navy-dark)]/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-4 block">International Transport</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">Import & Export<br/>Management</h1>
            <p className="text-xl text-blue-100 font-medium leading-relaxed mb-8">
              Comprehensive international trade solutions — from global procurement to worldwide distribution, all managed under one seamless logistics platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary text-lg px-12 py-4">Request a Quote</Link>
              <a href="#services-detail" className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--navy-dark)] text-lg px-12 py-4 transition-all duration-300">Explore Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Stats Band */}
      <section className="bg-[var(--primary)] py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-black">30+</div>
              <div className="text-xs font-bold uppercase tracking-[0.15em] opacity-70 mt-2">Import Origins</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black">45+</div>
              <div className="text-xs font-bold uppercase tracking-[0.15em] opacity-70 mt-2">Export Destinations</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black">3</div>
              <div className="text-xs font-bold uppercase tracking-[0.15em] opacity-70 mt-2">Transport Modes</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black">24/7</div>
              <div className="text-xs font-bold uppercase tracking-[0.15em] opacity-70 mt-2">Tracking & Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Import / Export Detail Section */}
      <section className="py-24 bg-white" id="services-detail">
        <div className="container mx-auto px-6">

          {/* Tab Switcher */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-gray-100 rounded-2xl p-1.5 border border-gray-200">
              <button
                onClick={() => setActiveTab('import')}
                className={`flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wide transition-all duration-300 ${
                  activeTab === 'import'
                    ? 'bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/25'
                    : 'text-gray-500 hover:text-[var(--primary)]'
                }`}
              >
                <ArrowDownToLine size={18} />
                Import Services
              </button>
              <button
                onClick={() => setActiveTab('export')}
                className={`flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-black uppercase tracking-wide transition-all duration-300 ${
                  activeTab === 'export'
                    ? 'bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/25'
                    : 'text-gray-500 hover:text-[var(--primary)]'
                }`}
              >
                <ArrowUpFromLine size={18} />
                Export Services
              </button>
            </div>
          </div>

          {/* Import Content */}
          <div className={`transition-all duration-500 ${activeTab === 'import' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <ArrowDownToLine className="text-green-600" size={24} />
                  </div>
                  <span className="text-green-600 font-bold uppercase tracking-widest text-sm">Import Services</span>
                </div>
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
                      <CheckCircle2 className="text-green-500" size={20} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-green-50 rounded-3xl border border-green-100 text-center hover:-translate-y-1 transition-transform duration-300">
                  <Ship className="mx-auto mb-4 text-green-600" size={40} />
                  <h4 className="font-black text-[var(--primary)] uppercase text-sm">Sea Freight</h4>
                  <p className="text-xs text-gray-500 mt-2">Bulk cargo via ocean routes</p>
                </div>
                <div className="p-8 bg-green-50 rounded-3xl border border-green-100 text-center hover:-translate-y-1 transition-transform duration-300">
                  <Plane className="mx-auto mb-4 text-green-600" size={40} />
                  <h4 className="font-black text-[var(--primary)] uppercase text-sm">Air Freight</h4>
                  <p className="text-xs text-gray-500 mt-2">Express air cargo delivery</p>
                </div>
                <div className="p-8 bg-green-50 rounded-3xl border border-green-100 text-center hover:-translate-y-1 transition-transform duration-300">
                  <Truck className="mx-auto mb-4 text-green-600" size={40} />
                  <h4 className="font-black text-[var(--primary)] uppercase text-sm">Land Transport</h4>
                  <p className="text-xs text-gray-500 mt-2">Cross-border road freight</p>
                </div>
                <div className="p-8 bg-green-50 rounded-3xl border border-green-100 text-center hover:-translate-y-1 transition-transform duration-300">
                  <CheckCircle2 className="mx-auto mb-4 text-green-600" size={40} />
                  <h4 className="font-black text-[var(--primary)] uppercase text-sm">Customs Clear</h4>
                  <p className="text-xs text-gray-500 mt-2">Complete documentation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Export Content */}
          <div className={`transition-all duration-500 ${activeTab === 'export' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 hidden'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <ArrowUpFromLine className="text-blue-600" size={24} />
                  </div>
                  <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Export Services</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] mb-8 uppercase">Reliable Export Solutions</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Export logistics focuses on the secure and timely transportation of goods from local businesses to international destinations. Our export services are designed to support manufacturers, suppliers, and organizations by managing cargo preparation, shipment coordination, customs documentation, and international delivery processes with efficiency and reliability.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  The export process includes cargo packaging, shipment scheduling, customs clearance, transportation management, and delivery coordination to ensure products reach global markets safely. We provide structured logistics solutions that help businesses manage international shipping requirements while maintaining compliance with export procedures and documentation standards.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Our platform is built to enhance shipment visibility, improve operational efficiency, and support smooth global distribution. By integrating tracking systems, logistics coordination, and shipment management tools, we help businesses simplify export operations and maintain reliable international supply chain performance.
                </p>
                <div className="space-y-4">
                  {[
                    'Cargo Packaging & Prep',
                    'Customs Documentation',
                    'Shipment Scheduling',
                    'Global Distribution'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-gray-800 font-bold">
                      <CheckCircle2 className="text-blue-500" size={20} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center hover:-translate-y-1 transition-transform duration-300">
                  <Box className="mx-auto mb-4 text-blue-600" size={40} />
                  <h4 className="font-black text-[var(--primary)] uppercase text-sm">Packaging</h4>
                  <p className="text-xs text-gray-500 mt-2">Secure cargo preparation</p>
                </div>
                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center hover:-translate-y-1 transition-transform duration-300">
                  <FileText className="mx-auto mb-4 text-blue-600" size={40} />
                  <h4 className="font-black text-[var(--primary)] uppercase text-sm">Documentation</h4>
                  <p className="text-xs text-gray-500 mt-2">Export compliance docs</p>
                </div>
                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center hover:-translate-y-1 transition-transform duration-300">
                  <Globe className="mx-auto mb-4 text-blue-600" size={40} />
                  <h4 className="font-black text-[var(--primary)] uppercase text-sm">Global Reach</h4>
                  <p className="text-xs text-gray-500 mt-2">Worldwide distribution</p>
                </div>
                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center hover:-translate-y-1 transition-transform duration-300">
                  <CheckCircle2 className="mx-auto mb-4 text-blue-600" size={40} />
                  <h4 className="font-black text-[var(--primary)] uppercase text-sm">Compliance</h4>
                  <p className="text-xs text-gray-500 mt-2">Regulatory adherence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison */}
      <section className="py-20 bg-[var(--alt-bg)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] uppercase">Import vs Export at a Glance</h2>
            <div className="w-20 h-1.5 bg-[var(--accent)] mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Import Card */}
            <div className="bg-white rounded-3xl p-10 border border-green-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
                  <ArrowDownToLine className="text-green-600" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[var(--primary)] uppercase">Import</h3>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Inbound Logistics</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  'Supplier coordination & pickup',
                  'Cargo consolidation at origin',
                  'International freight (Air, Sea, Land)',
                  'Customs clearance & documentation',
                  'Warehouse handling & storage',
                  'Last-mile delivery to destination',
                  'Real-time shipment tracking',
                  'Inventory management support'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={16} />
                    <span className="text-sm font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Export Card */}
            <div className="bg-white rounded-3xl p-10 border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <ArrowUpFromLine className="text-blue-600" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[var(--primary)] uppercase">Export</h3>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Outbound Logistics</p>
                </div>
              </div>
              <ul className="space-y-4">
                {[
                  'Cargo packaging & preparation',
                  'Export documentation & compliance',
                  'Shipment scheduling & routing',
                  'Multi-modal freight forwarding',
                  'International customs clearance',
                  'Global destination delivery',
                  'End-to-end shipment visibility',
                  'Trade compliance management'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={16} />
                    <span className="text-sm font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Single Shared Global Trade Map */}
      <GlobalTradeMap />

      {/* CTA */}
      <section className="bg-[var(--primary)] py-20">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase">Ready to Import or Export?</h2>
          <p className="text-blue-200 mb-8 text-lg max-w-2xl mx-auto">Whether you're bringing goods into the country or shipping to global markets, our team is ready to deliver tailored logistics solutions.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-lg px-10 py-4">
              Get a Custom Quote <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--primary)] text-lg px-10 py-4 transition-all duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImportExportManagement;
