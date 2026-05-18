import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { 
  Cpu, Target, Maximize, BrainCircuit, 
  Globe2, Rocket, Code, Laptop, Smartphone, 
  Server, Layers, Terminal, CheckCircle, Loader2 
} from 'lucide-react';

const Industries = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    hero: {
      headline: 'Powered by Intelligence',
      subheading: 'Our technology wing is the driving force behind modernizing Nepal’s logistics through world-class engineering and continuous innovation.'
    },
    vision: {
      text: "Built on international software standards, ASI's tech division follows agile methodologies and robust DevOps practices. We assemble the finest engineering minds to blend global best practices with local logistics insight.",
      quote: "Technology isn’t just a tool at ASI—it’s the foundation for smarter, faster, and more connected logistics solutions."
    },
    focusAreas: [
      'Logistics Automation & Optimization',
      'AI & Machine Learning Implementation',
      'Predictive Data Analytics',
      'Enhanced Customer Experience Portals'
    ],
    foundation: [
      {
        title: 'Impact Driven',
        desc: 'Every line of code serves a specific purpose. We plan deliberately and measure success by the real value delivered to vendors, customers, and partners.'
      },
      {
        title: 'Simple & Scalable',
        desc: 'From architecture to UI, we build with clarity. Simple enough to understand, yet robust enough to handle millions of events without friction.'
      },
      {
        title: 'AI-Led Shift',
        desc: 'We use AI to fundamentally reshape how we operate. With agentic development, technology is no longer the constraint.'
      }
    ],
    successStories: [
      {
        location: 'Thimphu, Bhutan',
        title: "Bhutan's First Tech-Enabled Logistics",
        desc: "Through a strategic Technology Transfer, ASI Logistics partnered with leading local firms to launch a one-stop on-demand platform."
      },
      {
        location: 'Sri Lanka',
        title: "Hyperlocal Expansion",
        desc: "In partnership with major financial institutions, we launched an end-to-end hyperlocal delivery platform with real-time tracking."
      }
    ],
    hubs: [
      { category: 'Central Node', title: 'Main Headquarters', desc: 'Thapagaun, Kathmandu — The central intelligence and command center.' },
      { category: 'Logistics Hub', title: 'Fulfillment Center', desc: 'Pepsicola, Kathmandu — Advanced sorting and last-mile distribution.' },
      { category: 'Fleet Center', title: 'Transport Hub', desc: 'Sanobharyang, Kathmandu — Base of operations for heavy transport.' },
      { category: 'National Network', title: 'Outside Valley', desc: 'Strategic presence in 4,000+ locations across all provinces.' }
    ]
  });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const docRef = doc(db, 'site_content', 'industries');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data());
        }
      } catch (err) {
        console.error('Error fetching industries content:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="animate-spin text-[var(--primary)]" size={48} />
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      {/* 1. HERO SECTION */}
      <section className="bg-[var(--primary)] py-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[var(--accent)] font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Intelligence Division</span>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mb-8 leading-tight uppercase tracking-tighter">
              {data.hero.headline.split(' ').map((word, i) => i === data.hero.headline.split(' ').length - 1 ? <React.Fragment key={i}><br/><span className="text-blue-300">{word}</span></React.Fragment> : word + ' ')}
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-blue-100 font-medium leading-relaxed mb-10">
              {data.hero.subheading}
            </p>
            <Link to="/contact" className="btn-primary text-lg px-12 py-4">Explore Our Tech</Link>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 translate-x-1/4"></div>
      </section>

      {/* 2. VISION & MISSION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] uppercase">Innovation at Scale</h2>
              <div className="w-20 h-2 bg-[var(--accent)]"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {data.vision.text}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-bold italic">
                "{data.vision.quote}"
              </p>
            </div>
            <div className="bg-[var(--alt-bg)] p-12 rounded-[40px] border border-gray-100 relative overflow-hidden group">
               <div className="relative z-10">
                 <h4 className="text-xl font-black text-[var(--primary)] mb-6 uppercase tracking-wider">Our Focus Areas</h4>
                 <ul className="space-y-4">
                   {data.focusAreas.map((item, i) => (
                     <li key={i} className="flex items-center gap-4 text-[var(--primary)] font-bold">
                       <CheckCircle className="text-[var(--accent)] shrink-0" size={20} />
                       {item}
                     </li>
                   ))}
                 </ul>
               </div>
               <BrainCircuit className="absolute -right-10 -bottom-10 text-[200px] text-gray-200 group-hover:text-[var(--accent)]/10 transition-colors duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL FOUNDATION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] uppercase tracking-tight">Our Technical Foundation</h2>
            <p className="text-gray-500 mt-4 font-bold uppercase tracking-widest text-sm">How we build the future of logistics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.foundation.map((card, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                  {i === 0 ? <Target size={32} /> : i === 1 ? <Maximize size={32} /> : <BrainCircuit size={32} />}
                </div>
                <h3 className="text-2xl font-black text-[var(--primary)] mb-6 uppercase">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SUCCESS STORIES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] uppercase">Global Footprint</h2>
            <p className="text-[var(--accent)] font-bold mt-2 uppercase tracking-[0.2em] text-sm">Technology Transfer & Partnerships</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {data.successStories.map((story, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-lg p-12 ${i % 2 === 0 ? 'bg-[var(--primary)] text-white' : 'bg-[var(--alt-bg)] text-[var(--primary)] border border-gray-100'}`}>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <Globe2 className="text-[var(--accent)]" size={24} />
                      <span className="font-bold uppercase tracking-widest text-sm">{story.location}</span>
                    </div>
                    <h3 className="text-3xl font-black mb-6 uppercase leading-tight">{story.title}</h3>
                    <p className={`leading-relaxed mb-8 ${i % 2 === 0 ? 'text-blue-100' : 'text-gray-600'}`}>
                      {story.desc}
                    </p>
                  </div>
                  <Link to="/contact" className="flex items-center gap-2 font-bold text-[var(--accent)] uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform">
                    Inquire Now <Rocket size={14} />
                  </Link>
                </div>
                {i % 2 === 0 && <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECH STACK */}
      <section className="py-24 bg-[var(--primary)] text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black mb-8 uppercase leading-tight">Our Modern <br/><span className="text-[var(--accent)]">Tech Stack</span></h2>
              <p className="text-lg text-blue-100 mb-10 leading-relaxed">
                By leveraging a wide range of cutting-edge technologies—from cloud-based infrastructure to real-time messaging—we reduce operational costs and significantly enhance customer satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center"><Laptop size={20} /></div>
                  <span className="font-bold text-sm">ReactJS Web</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center"><Smartphone size={20} /></div>
                  <span className="font-bold text-sm">Native Mobile</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center"><Server size={20} /></div>
                  <span className="font-bold text-sm">Cloud Infra</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center"><BrainCircuit size={20} /></div>
                  <span className="font-bold text-sm">R&D & AI</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px]">
               <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-2xl border border-gray-700 h-full font-mono text-sm overflow-hidden">
                 <div className="flex gap-2 mb-4">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 </div>
                 <div className="space-y-2 text-green-400 opacity-80">
                   <p>$ npm install @asi/intelligence-core</p>
                   <p className="text-white"> ASI Intelligence Engine v4.2.0 initialized...</p>
                   <p className="text-blue-400 ml-4">› Scanning logistics nodes...</p>
                   <p className="text-blue-400 ml-4">› Optimizing 4,000+ routes in Nepal...</p>
                   <p className="text-emerald-400 ml-4">› AI Agent 01: Active</p>
                   <p className="text-white pt-4"> System Healthy. Ready for global scale.</p>
                   <div className="w-full h-px bg-gray-800 my-4"></div>
                   <p className="text-yellow-400"> ASI Logistics © 2026 - Innovation First</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. REGIONAL PRESENCE */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] uppercase">Strategic Hubs & Presence</h2>
            <div className="w-20 h-1.5 bg-[var(--accent)] mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.hubs.map((hub, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm group hover:border-[var(--primary)] transition-all">
                <div className="text-[var(--accent)] mb-4 font-black uppercase text-xs tracking-widest italic">{hub.category}</div>
                <h4 className="text-xl font-black text-[var(--primary)] mb-2 uppercase">{hub.title}</h4>
                <p className="text-sm text-gray-500">{hub.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. JOIN US */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-[var(--alt-bg)] p-16 rounded-[60px] border border-gray-100 shadow-sm relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-[var(--primary)] mb-8 uppercase">Join the Disruptors</h2>
                <p className="text-xl text-gray-600 mb-10 font-medium">We’re hiring creative minds who want to build the future of logistics in Nepal and beyond.</p>
                <Link to="/contact" className="btn-primary text-lg px-12 py-4 inline-block">View All Openings</Link>
             </div>
             <Terminal className="absolute -left-10 -bottom-10 text-[200px] text-gray-200 opacity-20 rotate-12" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;

