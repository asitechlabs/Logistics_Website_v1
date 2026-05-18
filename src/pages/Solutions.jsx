import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Truck, Home, Zap, ShoppingBag, 
  Building2, Puzzle, CheckCircle, 
  ArrowRight, ShieldCheck, Clock, 
  BarChart3, Globe
} from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      title: "On-Demand Transport",
      desc: "Instant access to a fleet of vehicles for your immediate shipping needs. No long-term contracts, just reliable transport when you need it most.",
      icon: <Truck className="text-blue-600" />,
      features: ["Real-time Booking", "GPS Tracking", "Transparent Pricing"]
    },
    {
      title: "House Moving",
      desc: "Professional, stress-free relocation services for homes and offices. Our expert team handles packing, loading, and secure transit with care.",
      icon: <Home className="text-emerald-600" />,
      features: ["Safe Packing", "Expert Handling", "Insurance Coverage"]
    },
    {
      title: "Hyperlocal Delivery",
      desc: "The fastest way to move parcels across the city. Designed for speed and accuracy in high-density urban areas.",
      icon: <Zap className="text-amber-600" />,
      features: ["60-Min Delivery", "Biker Network", "Live Status"]
    },
    {
      title: "E-Commerce Fulfillment",
      desc: "Complete end-to-end solutions for online businesses. From storage at our Pepsicola hub to last-mile delivery and COD.",
      icon: <ShoppingBag className="text-purple-600" />,
      features: ["Inventory Sync", "COD Management", "Easy Returns"]
    },
    {
      title: "Corporate Logistics",
      desc: "Tailored services for businesses, including document secure delivery, corporate gifting, and scheduled bulk shipments.",
      icon: <Building2 className="text-slate-600" />,
      features: ["Priority Support", "Bulk Discounts", "Dedicated Account Manager"]
    },
    {
      title: "API & Tech Integration",
      desc: "Connect your platform directly to our intelligence engine. Automate order placement and tracking within your own software.",
      icon: <Puzzle className="text-red-600" />,
      features: ["Plug & Play API", "Webhook Alerts", "Developer Support"]
    }
  ];

  return (
    <div className="w-full bg-white overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#001F5C] min-h-[60vh] flex items-center text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[var(--accent)] font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Strategic Logistics</span>
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight uppercase tracking-tighter">
              Customized <br/>
              <span className="text-blue-300">Solutions</span> for Your Business
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-medium leading-relaxed mb-10">
              Beyond simple shipping, we build complex logistics frameworks that adapt to your specific operational requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary text-lg px-12 py-4">Request a Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SOLUTIONS GRID */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {solutions.map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 group flex flex-col">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 text-3xl group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-[var(--primary)] mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">{item.desc}</p>
                <div className="space-y-3 mb-8">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-bold text-gray-700">
                      <CheckCircle className="text-[var(--accent)]" size={14} />
                      {feature}
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="text-[var(--accent)] font-bold text-sm flex items-center gap-2 uppercase tracking-widest hover:gap-4 transition-all">
                  Get Started <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CASE STUDY / IMPACT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-[var(--primary)] rounded-[60px] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">SOLVING REAL-WORLD <br/>LOGISTICS HURDLES</h2>
                <p className="text-lg text-blue-100 mb-10 leading-relaxed">
                  We don't just deliver packages; we solve bottlenecks. Whether it's optimizing Last-Mile delivery for e-commerce giants or managing cold-chain for pharma, our solutions are data-driven and impact-focused.
                </p>
                <div className="flex gap-12">
                  <div>
                    <div className="text-4xl font-black text-[var(--accent)]">30%</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-blue-200 mt-2">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-[var(--accent)]">2X</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-blue-200 mt-2">Faster Delivery</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm">
                   <Clock className="text-[var(--accent)] mb-4" />
                   <h4 className="font-bold mb-2">99.9% Uptime</h4>
                   <p className="text-xs text-blue-100">Our tech systems are always active, ensuring your orders never stall.</p>
                 </div>
                 <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm mt-8">
                   <ShieldCheck className="text-[var(--accent)] mb-4" />
                   <h4 className="font-bold mb-2">Secure Chain</h4>
                   <p className="text-xs text-blue-100">End-to-end encryption for all digital documentation and tracking.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHO WE SERVE SECTION */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] uppercase tracking-tight">Tailored for Every Industry</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Retail", icon: <ShoppingBag /> },
              { name: "Healthcare", icon: <ShieldCheck /> },
              { name: "E-Commerce", icon: <Globe /> },
              { name: "Real Estate", icon: <Home /> },
              { name: "Technology", icon: <Zap /> },
              { name: "FMCG", icon: <BarChart3 /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl text-center border border-gray-100 hover:border-[var(--accent)] transition-all group cursor-default">
                 <div className="text-2xl text-gray-400 group-hover:text-[var(--accent)] transition-colors mb-4 flex justify-center">
                   {item.icon}
                 </div>
                 <h4 className="font-bold text-[var(--primary)] text-sm">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-6xl font-black text-[var(--primary)] uppercase">Ready to Optimize Your Logistics?</h2>
            <p className="text-xl text-gray-600 font-medium">Connect with our solution architects to design a framework that fits your business scale and complexity.</p>
            <Link to="/contact" className="btn-primary text-lg px-12 py-4 inline-block">Consult with an Expert</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Solutions;
