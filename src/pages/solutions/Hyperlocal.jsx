import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, MapPin, ShieldCheck, CheckCircle2, ArrowRight, Bike, Clock } from 'lucide-react';
import ScrollReveal from '../../components/common/ScrollReveal';

const Hyperlocal = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="relative min-h-[70vh] py-28 md:py-36 flex items-center text-white overflow-hidden bg-[var(--navy-dark)]">
        {/* Background Image with Hover Scale Zoom Effect & Smooth Transition */}
        <div className="absolute inset-0 w-full h-full transition-transform duration-10000 ease-out scale-105 hover:scale-100">
          <img 
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1920" 
            alt="Professional Express Delivery Vehicle in Modern City" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Gradient Overlay for Sleek Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-dark)] via-[var(--navy-dark)]/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-dark)]/50 via-transparent to-black/35"></div>
        
        {/* Subtle Tech Grid Overlay for Micro-Aesthetics */}
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            {/* Glowing Tech Tag */}
            <div className="inline-flex items-center gap-2 bg-[var(--accent)]/15 border border-[var(--accent)]/30 px-3.5 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-ping"></span>
              <span className="text-[var(--accent)] font-black uppercase tracking-widest text-[11px]">
                Ultra-Fast Urban Logistics
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tight leading-none text-white drop-shadow-md">
              Hyperlocal <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[#ff8c5a]">
                Delivery
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 font-medium leading-relaxed mb-8 max-w-2xl">
              Move parcels across the city in under 60 minutes. We provide the speed and agility that modern urban life demands.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-base font-bold px-10 py-4 shadow-xl shadow-[var(--accent)]/20 hover:shadow-[var(--accent)]/35 text-center transition-all duration-300">
                Send a Parcel Now
              </Link>
              <Link to="/contact" className="btn-secondary text-base font-bold px-10 py-4 text-center transition-all duration-300 backdrop-blur-sm hover:border-[var(--accent)] hover:text-white">
                Consult an Expert
              </Link>
            </div>
          </div>
        </div>
        
        {/* Soft Neon Accent Glow in bottom right corner */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--accent)]/10 blur-[150px] rounded-full pointer-events-none z-0 hidden lg:block"></div>
      </section>

      {/* Details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
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
            </ScrollReveal>
            <div className="grid grid-cols-2 gap-6">
              <ScrollReveal direction="left" delay={0}>
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center h-full">
                  <Zap className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                  <h4 className="font-black text-[var(--primary)] uppercase text-sm">Ultra Fast</h4>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="down" delay={100}>
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center h-full">
                  <Bike className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                  <h4 className="font-black text-[var(--primary)] uppercase text-sm">Biker Fleet</h4>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="up" delay={200}>
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center h-full">
                  <MapPin className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                  <h4 className="font-black text-[var(--primary)] uppercase text-sm">Urban Coverage</h4>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={300}>
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 text-center h-full">
                  <Clock className="mx-auto mb-4 text-[var(--accent)]" size={40} />
                  <h4 className="font-black text-[var(--primary)] uppercase text-sm">Under 60 Mins</h4>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-black text-[var(--primary)] mb-8 uppercase">Need it There Now?</h2>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Start Delivery <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Hyperlocal;
