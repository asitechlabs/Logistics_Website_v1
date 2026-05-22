import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingCart, Truck, Route, DoorOpen, PackageCheck,
  ArrowRight, CheckCircle2, Clock, Shield, MapPin,
  PhoneCall, Box, Zap, RefreshCw, HeadphonesIcon
} from 'lucide-react';
import ScrollReveal from '../../components/common/ScrollReveal';

// ─── Process Steps ────────────────────────────────────────────────────────────
const processSteps = [
  {
    id: 1,
    title: 'Place Your Order',
    desc: 'Submit a pickup request through our platform or call our team. Provide item details, pickup address, and delivery destination.',
    icon: <ShoppingCart size={32} />,
    color: 'bg-blue-50 text-blue-600 border-blue-100',
    accent: 'bg-blue-600',
  },
  {
    id: 2,
    title: 'We Pick It Up',
    desc: "Our rider or freight agent arrives at your location at the scheduled time and safely collects your package or cargo.",
    icon: <Truck size={32} />,
    color: 'bg-green-50 text-green-600 border-green-100',
    accent: 'bg-green-600',
  },
  {
    id: 3,
    title: 'Sorting & Dispatch',
    desc: 'Packages are processed at our sortation hub, assigned to the correct route, and dispatched without delay.',
    icon: <Route size={32} />,
    color: 'bg-purple-50 text-purple-600 border-purple-100',
    accent: 'bg-purple-600',
  },
  {
    id: 4,
    title: 'Last-Mile Delivery',
    desc: "Our trained delivery agent carries your shipment directly to the recipient's door — no middlemen, no delays.",
    icon: <DoorOpen size={32} />,
    color: 'bg-orange-50 text-orange-600 border-orange-100',
    accent: 'bg-orange-500',
  },
  {
    id: 5,
    title: 'Confirmation & COD',
    desc: 'Delivery is confirmed with proof of delivery (POD). Cash-on-delivery (COD) is collected where applicable.',
    icon: <PackageCheck size={32} />,
    color: 'bg-teal-50 text-teal-600 border-teal-100',
    accent: 'bg-teal-600',
  },
];

// ─── Service Features ─────────────────────────────────────────────────────────
const features = [
  {
    icon: <Zap size={24} />,
    title: 'Express Delivery',
    desc: 'Same-day and next-day delivery options available for urgent shipments across supported zones.',
    color: 'text-yellow-500 bg-yellow-50',
  },
  {
    icon: <Shield size={24} />,
    title: 'Insured Cargo',
    desc: 'Every shipment is covered with cargo insurance, giving you full peace of mind from pickup to drop-off.',
    color: 'text-blue-500 bg-blue-50',
  },
  {
    icon: <MapPin size={24} />,
    title: 'Real-Time Tracking',
    desc: 'Live GPS-powered tracking lets you and your recipient follow the shipment at every step of the journey.',
    color: 'text-green-500 bg-green-50',
  },
  {
    icon: <RefreshCw size={24} />,
    title: 'Flexible Scheduling',
    desc: 'Choose from multiple pickup time windows that fit your schedule — morning, afternoon, or evening slots.',
    color: 'text-purple-500 bg-purple-50',
  },
  {
    icon: <HeadphonesIcon size={24} />,
    title: '24/7 Support',
    desc: 'Our logistics support team is available around the clock to assist with any shipment queries or concerns.',
    color: 'text-rose-500 bg-rose-50',
  },
  {
    icon: <Box size={24} />,
    title: 'All Package Sizes',
    desc: 'From small parcels and documents to bulk cargo — we handle all sizes with appropriate vehicles and packaging.',
    color: 'text-orange-500 bg-orange-50',
  },
];

// ─── Coverage Zones ───────────────────────────────────────────────────────────
const coverageZones = [
  { zone: 'Domestic', label: 'Within Nepal', areas: ['Kathmandu Valley', 'Pokhara', 'Biratnagar', 'Birgunj', 'Butwal', 'Dharan', 'Hetauda'], color: 'border-green-200 bg-green-50', badge: 'bg-green-600' },
  { zone: 'Regional', label: 'South Asia', areas: ['India (Major Cities)', 'Bangladesh', 'Sri Lanka', 'Bhutan', 'Pakistan'], color: 'border-blue-200 bg-blue-50', badge: 'bg-blue-600' },
  { zone: 'International', label: 'Global Delivery', areas: ['United States', 'United Kingdom', 'Australia', 'UAE', 'China', 'Germany', 'Japan'], color: 'border-purple-200 bg-purple-50', badge: 'bg-purple-600' },
];

// ─── Component ────────────────────────────────────────────────────────────────
const DoorToDoor = () => {
  const [activeCoverage, setActiveCoverage] = useState(0);

  return (
    <div className="w-full bg-white">

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] py-28 md:py-32 flex items-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&q=80&w=1920"
          alt="Door to Door Delivery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-dark)]/90 to-[var(--navy-dark)]/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-4 block">
              End-to-End Delivery
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">
              Door to Door<br />Delivery
            </h1>
            <p className="text-xl text-blue-100 font-medium leading-relaxed mb-8">
              Complete pickup-to-delivery logistics — we collect from your location and deliver directly to the recipient's door, locally or internationally.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary text-lg px-12 py-4">
                Book a Pickup
              </Link>
              <a
                href="#how-it-works"
                className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--navy-dark)] text-lg px-12 py-4 transition-all duration-300"
              >
                How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Band ── */}
      <section className="bg-[var(--primary)] py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-black">Same Day</div>
              <div className="text-xs font-bold uppercase tracking-[0.15em] opacity-70 mt-2">Express Option</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black">75+</div>
              <div className="text-xs font-bold uppercase tracking-[0.15em] opacity-70 mt-2">Delivery Zones</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black">99%</div>
              <div className="text-xs font-bold uppercase tracking-[0.15em] opacity-70 mt-2">On-Time Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black">24/7</div>
              <div className="text-xs font-bold uppercase tracking-[0.15em] opacity-70 mt-2">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Is Door to Door ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-4 block">
                About This Service
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] mb-8 uppercase">
                What Is Door to Door Delivery?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Door-to-door delivery is a complete end-to-end logistics service where we manage the entire journey of your shipment — from picking it up at the sender's address to delivering it directly at the recipient's doorstep. No third-party handoffs, no drop-off points, no confusion.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Whether you're shipping a small parcel across the city or a commercial freight consignment to another country, our door-to-door service eliminates the complexity of multi-party coordination. We assign a dedicated logistics team to handle pickup scheduling, packing support, transit, customs (for international), and final delivery.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                With real-time tracking, proof of delivery, and 24/7 customer support, every shipment is handled with full visibility and accountability from start to finish.
              </p>
              <div className="space-y-4">
                {[
                  "Pickup from sender's address",
                  "Direct delivery to recipient's door",
                  'No drop-off or transit hubs required',
                  'Real-time tracking at every stage',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-gray-800 font-bold">
                    <CheckCircle2 className="text-[var(--accent)] shrink-0" size={20} />
                    {item}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-[420px] relative group">
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=900"
                  alt="Door to Door Delivery"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/30 to-transparent"></div>
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-5 py-3 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Delivery Time</p>
                    <p className="text-sm font-black text-[var(--primary)]">As Fast as Same Day</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 5-Step How It Works ── */}
      <section className="py-24 bg-[var(--alt-bg)] overflow-hidden" id="how-it-works">
        <div className="container mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-20">
              <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-4 block">
                Simple Process
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] uppercase">
                How It Works
              </h2>
              <div className="w-20 h-1.5 bg-[var(--accent)] mx-auto mt-4"></div>
              <p className="text-gray-500 mt-6 font-medium text-base max-w-xl mx-auto">
                From booking to delivery confirmation — here's exactly what happens when you choose our door-to-door service.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="absolute top-[52px] left-0 w-full h-0.5 bg-[var(--primary)]/10 hidden lg:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-4">
              {processSteps.map((step, i) => {
                const directions = ['left', 'down', 'up', 'down', 'right'];
                return (
                  <ScrollReveal
                    key={i}
                    direction={directions[i % directions.length]}
                    delay={i * 100}
                    className="relative z-10 text-center group"
                  >
                    {/* Step number badge */}
                    <div className={`w-8 h-8 rounded-full ${step.accent} text-white flex items-center justify-center font-black text-sm mx-auto mb-4 shadow-md`}>
                      {step.id}
                    </div>
                    {/* Icon circle */}
                    <div className={`w-20 h-20 rounded-full border-2 ${step.color} flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}>
                      {step.icon}
                    </div>
                    <h4 className="text-base font-black text-[var(--primary)] mb-2 uppercase tracking-tight">
                      {step.title}
                    </h4>
                    <p className="text-gray-500 text-xs font-medium leading-relaxed px-2">
                      {step.desc}
                    </p>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] uppercase">
                Service Features
              </h2>
              <div className="w-20 h-1.5 bg-[var(--accent)] mx-auto mt-4"></div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, i) => {
              const directions = ['left', 'up', 'right', 'left', 'down', 'right'];
              return (
                <ScrollReveal
                  key={i}
                  direction={directions[i % directions.length]}
                  delay={(i % 3) * 100}
                >
                  <div className="card-hover p-8 group bg-white h-full border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300">
                    <div className={`w-14 h-14 rounded-xl ${feat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {feat.icon}
                    </div>
                    <h3 className="text-lg font-black mb-3 text-[var(--primary)] uppercase tracking-tight">
                      {feat.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Coverage Zones ── */}
      <section className="py-24 bg-[var(--alt-bg)]">
        <div className="container mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-4 block">
                Delivery Reach
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] uppercase">
                Coverage Zones
              </h2>
              <div className="w-20 h-1.5 bg-[var(--accent)] mx-auto mt-4"></div>
            </div>
          </ScrollReveal>

          {/* Tab switcher */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-2xl p-1.5 border border-gray-200 shadow-sm">
              {coverageZones.map((zone, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCoverage(i)}
                  className={`px-6 py-3 rounded-xl text-sm font-black uppercase tracking-wide transition-all duration-300 ${
                    activeCoverage === i
                      ? 'bg-[var(--primary)] text-white shadow-lg'
                      : 'text-gray-500 hover:text-[var(--primary)]'
                  }`}
                >
                  {zone.zone}
                </button>
              ))}
            </div>
          </div>

          {/* Zone content */}
          <div className="max-w-2xl mx-auto">
            {coverageZones.map((zone, i) => (
              <div
                key={i}
                className={`transition-all duration-300 ${activeCoverage === i ? 'block' : 'hidden'}`}
              >
                <div className={`rounded-3xl border p-10 ${zone.color}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`${zone.badge} text-white text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full`}>
                      {zone.zone}
                    </span>
                    <span className="text-gray-500 font-bold text-sm">{zone.label}</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {zone.areas.map((area, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100"
                      >
                        <MapPin size={14} className="text-[var(--accent)] shrink-0" />
                        <span className="text-sm font-semibold text-gray-800">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Is It For ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-4 block">
                Ideal For
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] uppercase">
                Who Uses This Service..?
              </h2>
              <div className="w-20 h-1.5 bg-[var(--accent)] mx-auto mt-4"></div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'E-Commerce Sellers',
                desc: 'Deliver orders directly to customers without managing your own fleet.',
                img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=400',
              },
              {
                title: 'Businesses & SMEs',
                desc: 'Send documents, samples, or products to partners and clients reliably.',
                img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400',
              },
              {
                title: 'Individuals',
                desc: 'Send gifts, parcels, or personal items to friends and family anywhere.',
                img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=400',
              },
              {
                title: 'Importers & Exporters',
                desc: 'Manage international cargo with customs clearance and door delivery handled for you.',
                img: 'https://plus.unsplash.com/premium_photo-1682145409553-75a35479e3cc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 80}>
                <div className="relative h-64 overflow-hidden rounded-2xl group cursor-pointer shadow-sm">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-bold uppercase text-sm tracking-tight">{item.title}</h4>
                  </div>
                  <div className="absolute inset-0 bg-[var(--primary)]/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-5 text-center">
                    <p className="text-white text-xs font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[var(--primary)] py-20">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase">
            Ready for Hassle-Free Delivery?
          </h2>
          <p className="text-blue-200 mb-8 text-lg max-w-2xl mx-auto">
            Book a pickup today and let us handle the rest — from your door to theirs, with full tracking and guaranteed care.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-lg px-10 py-4"
            >
              Book a Pickup Service <ArrowRight size={18} />
            </Link>
            <Link
              to="/services"
              className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--primary)] text-lg px-10 py-4 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DoorToDoor;