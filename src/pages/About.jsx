import React from 'react';
import { Link } from 'react-router-dom';
import { aboutData, valuesData } from '../data/about';
import { FaPlay, FaHistory, FaBullseye, FaEye } from 'react-icons/fa';

const About = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-[var(--primary)] py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">About ASI Logistics</h1>
          <p className="text-xl text-blue-100 max-w-2xl">{aboutData.subHeader}</p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--accent)] opacity-10 skew-x-12 translate-x-1/2"></div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-[var(--alt-bg)] rounded-2xl -z-10 rotate-2"></div>
              <img
                src={aboutData.image}
                alt="Our Company"
                className="rounded-2xl w-full h-[500px] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[var(--accent)] text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <span className="text-4xl font-black block">15+</span>
                <span className="text-sm font-bold uppercase tracking-widest">Years Experience</span>
              </div>
            </div>

            <div className="space-y-8">
              <span className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-black text-[var(--primary)] leading-tight">
                {aboutData.companyName}
              </h2>
              <div className="w-20 h-2 bg-[var(--accent)]"></div>
              <div className="text-lg text-[var(--text-light)] leading-relaxed space-y-6">
                {aboutData.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-[var(--alt-bg)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[var(--primary)] mb-4">Visualizing Our Excellence</h2>
            <p className="text-[var(--text-light)] max-w-2xl mx-auto">Take a deeper look into how we operate and deliver value across the globe.</p>
          </div>

          <div className="max-w-5xl mx-auto relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-[32px] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/MMyZ9Pu01RI?autoplay=1&mute=1&loop=1&playlist=MMyZ9Pu01RI&controls=0&rel=0"
                title="About Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuesData.map((section, idx) => (
              <div key={idx} className="bg-[var(--alt-bg)] p-10 rounded-3xl border border-gray-100 hover:border-[var(--primary)] transition-colors group">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-2xl text-white shadow-lg ${idx === 0 ? 'bg-blue-600' : idx === 1 ? 'bg-red-600' : 'bg-emerald-600'}`}>
                   {idx === 0 ? <FaHistory /> : idx === 1 ? <FaBullseye /> : <FaEye />}
                </div>
                <h3 className="text-2xl font-black text-[var(--primary)] mb-6 uppercase tracking-tight">{section.title}</h3>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <span className="text-[var(--accent)] font-bold">{item.id}.</span>
                      <p className="text-sm text-[var(--text-light)] leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--primary)] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8">Join Our Global Network</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Discover career opportunities or partner with us for your next logistics challenge.</p>
          <div className="flex justify-center gap-4">
            <Link to="/contact" className="btn-primary">Work with Us</Link>
            <Link to="/services" className="btn-secondary border-white text-white">Our Solutions</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

