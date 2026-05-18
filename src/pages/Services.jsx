import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Truck, Wallet, Warehouse, MapPin, Headset, 
  ShoppingCart, PackageCheck, Route, DoorOpen, 
  ShieldCheck, CheckCircle2, Code2, Zap, 
  Map, ClipboardCheck, ArrowRight, Activity
} from 'lucide-react';

const Services = () => {
  const whyChoose = [
    { title: 'Simple COD Management', desc: 'We handle cash collection on delivery, so you focus on selling, not chasing payments.', icon: <Wallet className="text-emerald-600" /> },
    { title: 'Inventory & Warehousing', desc: 'Store, organize, and manage your stock at our secure facility — ready to ship when you are.', icon: <Warehouse className="text-blue-600" /> },
    { title: 'Live Package Tracking', desc: 'Follow your shipment at every stage through our easy-to-use tracking platform.', icon: <MapPin className="text-red-600" /> },
    { title: 'Responsive Support Team', desc: 'Our dedicated team is available to resolve queries quickly and keep your deliveries on track.', icon: <Headset className="text-purple-600" /> },
  ];

  const processSteps = [
    { id: 1, title: 'Place Your Order', desc: 'Submit a pickup request through our platform in minutes.', icon: <ShoppingCart /> },
    { id: 2, title: 'We Pick It Up', desc: 'Our rider arrives at your location and brings the package to our sortation hub.', icon: <Truck /> },
    { id: 3, title: 'Sorting & Dispatch', desc: 'Packages are sorted by destination and assigned to the right delivery route.', icon: <Route /> },
    { id: 4, title: 'Last-Mile Delivery', desc: 'Our rider delivers directly to your customer\'s door.', icon: <DoorOpen /> },
    { id: 5, title: 'COD & POD', desc: 'We collect payment where applicable and send you delivery confirmation.', icon: <PackageCheck /> },
  ];

  const mainServices = [
    { title: 'Same-Day Delivery', desc: 'Get your packages to customers within the same day — speed when it matters most.', icon: <Zap /> },
    { title: 'Door-to-Door Delivery', desc: 'Convenient pickup from your location, delivered straight to your customer.', icon: <MapPin /> },
    { title: 'Branch-to-Branch', desc: 'Reliable transfers between your business hubs and offices.', icon: <Activity /> },
    { title: 'Secure Code Delivery', desc: 'Every delivery verified by a unique passcode — guaranteed to reach the right hands.', icon: <ShieldCheck /> },
    { title: 'Proof of Delivery', desc: 'Real-time confirmation that your goods arrived safely and on time.', icon: <CheckCircle2 /> },
    { title: 'API Integration', desc: 'Connect your existing platform directly with our system for seamless order placement.', icon: <Code2 /> },
    { title: 'Warehousing', desc: 'Centrally located storage with round-the-clock security and trained staff.', icon: <Warehouse /> },
  ];

  return (
    <div className="w-full bg-white overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#001F5C] min-h-[60vh] flex items-center text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://img.freepik.com/free-vector/map-nepal-vector-design-illustration_46706-965.jpg" 
            alt="Nepal Map" 
            className="w-full h-full object-contain scale-150 grayscale invert"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight animate-fade-in uppercase tracking-tighter">
              Your End-to-End <br/>
              <span className="text-[var(--accent)]">Delivery Partner</span> Across Nepal
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-blue-100 font-medium leading-relaxed">
              Built for businesses and individuals who need fast, reliable, and transparent shipping solutions. 
              From door-to-door parcel delivery to warehousing and COD management, we handle the full journey so you don't have to.
              With coverage across <span className="text-white font-bold">4,000+ destinations</span> nationwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary text-lg px-12 py-4">Start Shipping</Link>
              <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-[#001F5C] text-lg px-12 py-4">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE ASI LOGISTICS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[28px] md:text-[36px] font-black text-[var(--primary)] uppercase tracking-tight">Why Choose ASI Logistics</h2>
            <div className="w-20 h-1.5 bg-[var(--accent)] mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-[var(--primary)] mb-3 uppercase leading-tight">{item.title}</h3>
                <p className="text-[var(--text-light)] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (Timeline) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] uppercase">Simple 5-Step Process</h2>
            <p className="text-gray-500 mt-4 font-medium uppercase tracking-widest text-sm">How we handle your shipments</p>
          </div>
          
          <div className="relative">
            {/* Timeline Line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 hidden lg:block -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-4">
              {processSteps.map((step, i) => (
                <div key={i} className="relative z-10 text-center group">
                  <div className="w-20 h-20 bg-white border-4 border-gray-50 text-[var(--accent)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:border-[var(--accent)] transition-all duration-300">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div className="lg:absolute lg:-top-12 lg:left-1/2 lg:-translate-x-1/2 bg-[var(--accent)] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-4 lg:mb-0">
                    {step.id}
                  </div>
                  <h4 className="text-lg font-black text-[var(--primary)] mb-2 uppercase tracking-tight">{step.title}</h4>
                  <p className="text-[var(--text-light)] text-xs font-medium px-4">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES GRID */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] uppercase">Comprehensive Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mainServices.map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
                <div className="text-[var(--accent)] mb-6 text-4xl group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-lg font-black text-[var(--primary)] mb-3 uppercase tracking-tight">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                <div className="w-8 h-1 bg-gray-100 group-hover:w-full group-hover:bg-[var(--accent)] transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WAREHOUSING SECTION */}
      <section className="bg-[#001F5C] text-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-4 block">Our Infrastructure</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">18,000+ SQ FT OF <br/>SECURE STORAGE</h2>
              <p className="text-lg text-blue-100 mb-10 leading-relaxed">
                ASI Logistics operates a centrally located warehouse facility strategically positioned for easy access across the valley. Equipped with modern infrastructure, round-the-clock monitoring, and trained staff.
              </p>
              <ul className="space-y-4">
                {[
                  '18,000+ sq ft of organized storage space',
                  '24/7 CCTV monitoring and on-site security',
                  'Trained and equipped warehouse personnel',
                  'Full goods insurance for added peace of mind'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="text-[var(--accent)] shrink-0" />
                    <span className="font-bold text-gray-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 rounded-[40px] overflow-hidden shadow-2xl h-[400px] lg:h-[550px]">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Warehouse" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. STATS / NUMBERS BAND */}
      <section className="bg-[var(--accent)] py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
            <div className="space-y-2">
              <div className="text-6xl font-black">90%</div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] opacity-80">Successful Delivery Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-6xl font-black">80%</div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] opacity-80">Delivered Within 30 Hours</div>
            </div>
            <div className="space-y-2">
              <div className="text-6xl font-black">4,000+</div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] opacity-80">Locations Across Nepal</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT / GET STARTED SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Who We Serve */}
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl font-black text-[var(--primary)] mb-6 uppercase">Ready to Simplify Your Logistics?</h2>
                <p className="text-lg text-gray-600 font-medium">Whether you're an e-commerce seller, a corporate team, or an individual — ASI Logistics has a solution for you.</p>
              </div>
              <div className="space-y-6">
                <h4 className="text-[var(--accent)] font-black uppercase tracking-widest text-sm">We deliver for:</h4>
                <ul className="space-y-4">
                  {[
                    'E-commerce and online businesses',
                    'Verified and secure deliveries',
                    'Corporate gifting, invitations, and merchandise',
                    'Personal parcels and packages'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-blue-50 text-[var(--primary)] flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-white transition-all">
                        <ArrowRight size={14} />
                      </div>
                      <span className="font-bold text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Minimal Form */}
            <div className="bg-gray-50 p-10 md:p-12 rounded-[40px] border border-gray-100 shadow-sm">
              <form className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. John Doe"
                    className="w-full p-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[var(--primary)] outline-none text-sm font-bold"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@company.com"
                      className="w-full p-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[var(--primary)] outline-none text-sm font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Phone</label>
                    <input 
                      type="tel" 
                      placeholder="+977"
                      className="w-full p-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[var(--primary)] outline-none text-sm font-bold"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Your Requirements</label>
                  <textarea 
                    rows="3"
                    placeholder="How can we help your business?"
                    className="w-full p-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[var(--primary)] outline-none text-sm font-bold resize-none"
                  ></textarea>
                </div>
                <button className="btn-primary w-full py-4 text-lg font-black uppercase tracking-widest">Send Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
