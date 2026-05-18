import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShip, FaPlane, FaTruck, FaWarehouse, FaBoxes, FaLink, FaGlobe, FaChevronRight, FaLeaf, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { images } from '../data/images';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import homeVideo from '../assets/home.mp4';

const Home = () => {
  const [content, setContent] = useState({
    hero: {
      headline: 'Moving Your World Forward',
      subheading: 'Enterprise-grade logistics solutions connecting your business to the global market with precision and trust.',
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920',
    },
    stats: [
      { label: 'Countries', value: '46' },
      { label: 'Offices', value: '650+' },
      { label: 'Experience', value: 'Decades' },
      { label: 'Employees', value: '24,000+' }
    ],
    services: [],
    industries: [],
    services_label: 'Our Expertise',
    services_heading: 'Global Logistics Services',
    industries_label: 'Who We Serve',
    industries_heading: 'Industries We Empower',
    sus_label: 'Our Commitment',
    sus_heading: 'Building a Sustainable Future',
    sus_text: 'As a global logistics leader, we take our responsibility to the planet and society seriously.',
    sus_img: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=800',
    cta_heading: 'Ready to Optimize Your Supply Chain?',
    cta_subtext: 'Connect with our global network of experts and discover how we can drive your business forward.',
    cta_btn_text: 'Get Your Quote Today',
    cta_btn_link: '/contact'
  });

  const getIcon = (name) => {
    const icons = {
      FaShip: <FaShip />, FaPlane: <FaPlane />, FaTruck: <FaTruck />, 
      FaWarehouse: <FaWarehouse />, FaBoxes: <FaBoxes />, FaLink: <FaLink />,
      FaGlobe: <FaGlobe />, FaLeaf: <FaLeaf />, FaShieldAlt: <FaShieldAlt />, FaUsers: <FaUsers />
    };
    return icons[name] || <FaLink />;
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const docRef = doc(db, 'site_content', 'homepage');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setContent(prev => ({ ...prev, ...docSnap.data() }));
        }
      } catch (err) {
        console.error('Error fetching content:', err);
      }
    };
    fetchContent();
  }, []);

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] sm:h-[85vh] w-full flex items-center py-28 sm:py-0 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {content.hero.imageUrl && !content.hero.imageUrl.endsWith('.mp4') && !content.hero.imageUrl.includes('Background.mp4') ? (
            <img
              src={content.hero.imageUrl}
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920"
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001F5C]/95 via-[#001F5C]/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight text-white uppercase tracking-tighter">
              {content.hero.headline.split('\n').map((line, i) => (
                <React.Fragment key={i}>{line}<br /></React.Fragment>
              ))}
            </h1>
            <p className="text-base sm:text-lg md:text-2xl mb-10 text-gray-200 leading-relaxed font-medium">
              {content.hero.subheading}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn-primary flex items-center gap-2">
                Our Services <FaChevronRight className="text-xs" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--accent)] animate-shimmer"></div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-[var(--alt-bg)]">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-2 block">{content.services_label}</span>
            <h2 className="section-heading">{content.services_heading}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.services?.map((s, i) => (
              <div key={i} className="card-hover p-8 group">
                <div className="text-4xl text-[var(--primary)] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(s.icon_name)}
                </div>
                <h3 className="text-xl font-black mb-4 text-[var(--primary)] uppercase tracking-tight">{s.name}</h3>
                <p className="text-[var(--text-light)] mb-6">{s.desc}</p>
                <Link to="/services" className="text-[var(--accent)] font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  Learn More <FaChevronRight className="text-xs" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL REACH / STATS */}
      <section className="relative py-20 bg-[var(--primary)] text-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {content.stats?.map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl md:text-5xl font-black text-[var(--accent)]">{stat.value}</div>
                <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-2 block">{content.industries_label}</span>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--primary)]">{content.industries_heading}</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {content.industries?.map((ind, i) => (
              <div key={i} className="relative h-64 overflow-hidden rounded-lg group cursor-pointer">
                <img src={ind.img} alt={ind.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold uppercase text-sm tracking-tight">{ind.name}</h4>
                </div>
                <div className="absolute inset-0 bg-[var(--primary)]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
                  <p className="text-white text-xs font-medium">{ind.desc || `Expert solutions tailored for ${ind.name} logistics.`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATIONS VIDEO SHOWCASE SECTION */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm block">ASI In Action</span>
              <h2 className="text-4xl md:text-5xl font-black text-[var(--primary)] uppercase tracking-tight leading-tight">
                Global Operations <br/>
                <span className="text-[var(--accent)]">Synchronized</span>
              </h2>
              <div className="w-20 h-1.5 bg-[var(--accent)]"></div>
              <p className="text-lg text-[var(--text-light)] leading-relaxed">
                Watch how we orchestrate seamless freight networks across road, air, and sea routes. From our high-tech Kathmandu sorting facilities to international trade lanes, we bring modern, high-fidelity tracking and routing to every shipment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-red-50 text-[var(--accent)] flex items-center justify-center font-bold text-sm shrink-0 shadow-sm group-hover:bg-[var(--accent)] group-hover:text-white transition-all">
                    ✓
                  </div>
                  <span className="font-bold text-[var(--primary)] text-base">Frictionless cross-border logistics lanes</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[var(--primary)] flex items-center justify-center font-bold text-sm shrink-0 shadow-sm group-hover:bg-[var(--primary)] group-hover:text-white transition-all">
                    ✓
                  </div>
                  <span className="font-bold text-[var(--primary)] text-base">24/7 dedicated fleet command and tracking</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm shrink-0 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    ✓
                  </div>
                  <span className="font-bold text-[var(--primary)] text-base">Optimized sorting and last-mile operations</span>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Video Container */}
            <div className="order-1 lg:order-2 relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-[40px] blur opacity-15 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative rounded-3xl lg:rounded-[36px] overflow-hidden shadow-2xl border border-white h-[250px] sm:h-[350px] lg:h-[450px]">
                <video 
                  src={homeVideo}
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY EDGE & SECURITY SECTION */}
      <section className="py-24 bg-[var(--alt-bg)] border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-2 block">The Tech Advantage</span>
              <h2 className="text-4xl font-black text-[var(--primary)] mb-8 uppercase tracking-tight">Smart Logistics Ecosystem</h2>
              <p className="text-lg text-[var(--text-light)] mb-8 leading-relaxed">
                We integrate advanced tracking software, intelligent route optimization, and secure warehousing to provide complete supply chain transparency and maximum transit speed.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 text-[var(--primary)] flex items-center justify-center shrink-0 shadow-sm">
                    <FaGlobe className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--primary)] text-lg mb-1 uppercase tracking-tight">Real-Time GPS Tracking</h4>
                    <p className="text-sm text-[var(--text-light)] leading-relaxed">Follow your cargo at every milestone with high-fidelity live tracking and status updates.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-xl bg-red-50 text-[var(--accent)] flex items-center justify-center shrink-0 shadow-sm">
                    <FaShieldAlt className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--primary)] text-lg mb-1 uppercase tracking-tight">Secure Logistics</h4>
                    <p className="text-sm text-[var(--text-light)] leading-relaxed">Every shipment is protected by advanced security protocols and fully insured for ultimate peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl lg:rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 h-[250px] sm:h-[350px] lg:h-[450px] relative group">
              <img 
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1200" 
                alt="Smart Logistics" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-[var(--primary)] rounded-3xl md:rounded-[40px] p-6 sm:p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8">{content.cta_heading}</h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                {content.cta_subtext}
              </p>
              <Link to={content.cta_btn_link} className="btn-primary inline-block text-lg px-12">
                {content.cta_btn_text}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


