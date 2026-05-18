import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShip, FaPlane, FaTruck, FaWarehouse, FaBoxes, FaLink, FaGlobe, FaChevronRight, FaLeaf, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { images } from '../data/images';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import herobg from '../assets/Background.mp4';

const Home = () => {
  const [content, setContent] = useState({
    hero: {
      headline: 'Moving Your World Forward',
      subheading: 'Enterprise-grade logistics solutions connecting your business to the global market with precision and trust.',
      imageUrl: herobg,
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
      <section className="relative h-[85vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {content.hero.imageUrl?.endsWith('.mp4') ? (
            <video 
              src={content.hero.imageUrl} 
              autoPlay muted loop playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={content.hero.imageUrl}
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001F5C]/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white">
              {content.hero.headline.split('\n').map((line, i) => (
                <React.Fragment key={i}>{line}<br /></React.Fragment>
              ))}
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed font-medium">
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

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
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

      {/* TRUST / SUSTAINABILITY */}
      <section className="py-24 bg-[var(--alt-bg)] border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-2 block">{content.sus_label}</span>
              <h2 className="text-4xl font-black text-[var(--primary)] mb-8">{content.sus_heading}</h2>
              <p className="text-lg text-[var(--text-light)] mb-8">
                {content.sus_text}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <FaLeaf className="text-3xl text-green-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-[var(--primary)]">Environment</h4>
                    <p className="text-sm text-[var(--text-light)]">Committed to carbon neutrality by 2050.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <FaShieldAlt className="text-3xl text-blue-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-[var(--primary)]">Governance</h4>
                    <p className="text-sm text-[var(--text-light)]">Highest standards of ethical business.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={content.sus_img} alt="Sustainability" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-[var(--primary)] rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
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


