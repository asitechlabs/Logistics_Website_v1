import React from 'react';
import { Link } from 'react-router-dom';
import { Box, FileText, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

const ExportManagement = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] py-28 md:py-32 flex items-center text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1920" 
          alt="Export Management" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-dark)]/90 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-4 block">International Transport</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">Export Management</h1>
            <p className="text-xl text-blue-100 font-medium leading-relaxed mb-8">
              Secure and timely transportation of goods to global markets with full visibility.
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
                    <CheckCircle2 className="text-[var(--accent)]" size={20} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <Box className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Packaging</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <FileText className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Documentation</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <Globe className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Global Reach</h4>
              </div>
              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center">
                <CheckCircle2 className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                <h4 className="font-black text-[var(--primary)] uppercase text-sm">Compliance</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[var(--primary)] mb-8 uppercase">Ready to Export?</h2>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get a Custom Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ExportManagement;
