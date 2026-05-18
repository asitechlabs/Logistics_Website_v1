import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { nepalDistricts, countries } from '../data/delivery';
import { db, emailsCollection } from '../firebase';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import backgroundVideo from '../assets/Background.mp4';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    locationType: '',
    fromLocation: '',
    toLocation: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', msg: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(form).some(val => !val)) {
      setStatus({ type: 'error', msg: 'Please fill all fields ❌' });
      return;
    }

    setLoading(true);
    setStatus({ type: 'info', msg: 'Sending your inquiry...' });

    emailjs
      .send(
        'service_v46keqo',
        'template_7c7afhc',
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          locationType: form.locationType,
          fromLocation: form.fromLocation,
          toLocation: form.toLocation,
          message: form.message,
        },
        'AtoLUlc898Wti45To',
      )
      .then(() => {
        setStatus({ type: 'success', msg: 'Message sent successfully! Our team will contact you shortly.' });
        setLoading(false);

        addDoc(emailsCollection, {
          sender: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          locationType: form.locationType,
          fromLocation: form.fromLocation,
          toLocation: form.toLocation,
          subject: `Service inquiry: ${form.service} (${form.locationType})`,
          message: form.message,
          status: 'Unread',
          createdAt: serverTimestamp(),
        }).catch((err) => console.error('Firestore save failed:', err));

        setForm({
          name: '',
          email: '',
          phone: '',
          service: '',
          locationType: '',
          fromLocation: '',
          toLocation: '',
          message: '',
        });
      })
      .catch(() => {
        setStatus({ type: 'error', msg: 'Failed to send message. Please try again later.' });
        setLoading(false);
      });
  };

  return (
    <div className="w-full bg-[var(--alt-bg)]">
      {/* Hero Header */}
      <section className="relative min-h-[40vh] flex items-center text-center text-white py-28 overflow-hidden bg-[var(--primary)] w-full">
        <div className="absolute inset-0 z-0">
          <video 
            src={backgroundVideo} 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-black/45"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 uppercase tracking-tight text-white">Get a Quote</h1>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto">Expert logistics advice and tailored solutions for your business needs.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-black text-[var(--primary)] mb-8 uppercase tracking-tight border-b border-gray-100 pb-4">Contact Details</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--primary)] uppercase text-xs tracking-widest mb-1">Our Location</h4>
                      <p className="text-sm text-[var(--text-light)]">Bagdol, Lalitpur, Nepal</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center shrink-0">
                      <FaPhoneAlt size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--primary)] uppercase text-xs tracking-widest mb-1">Call Us</h4>
                      <p className="text-sm text-[var(--text-light)] font-bold">+977 1 4XXXXXX</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                      <FaEnvelope size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--primary)] uppercase text-xs tracking-widest mb-1">Email Us</h4>
                      <p className="text-sm text-[var(--text-light)]">info@asilogistics.com</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center shrink-0">
                      <FaClock size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--primary)] uppercase text-xs tracking-widest mb-1">Working Hours</h4>
                      <p className="text-sm text-[var(--text-light)]">Sun - Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Mockup */}
              <div className="rounded-3xl overflow-hidden shadow-xl h-[300px] border border-white">
                 <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4205.188293260595!2d85.29831437611418!3d27.672097576202777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa4ab8369e1e172d%3A0xc8cd87e8ab9e1ada!2sASI%20logistics!5e1!3m2!1sen!2snp!4v1776407836596!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2 bg-white p-6 sm:p-10 md:p-16 rounded-3xl shadow-2xl border border-gray-50">
              <div className="mb-10">
                <h2 className="text-3xl font-black text-[var(--primary)] mb-2 uppercase tracking-tight">Request a Personalized Quote</h2>
                <p className="text-[var(--text-light)] font-medium">Fill out the form below and our logistics experts will get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. John Doe"
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--primary)] outline-none text-sm font-bold"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. john@company.com"
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--primary)] outline-none text-sm font-bold"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+977-XXXXXXXXXX"
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--primary)] outline-none text-sm font-bold"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Required Service</label>
                    <select
                      name="service"
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--primary)] outline-none text-sm font-bold"
                      value={form.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Service</option>
                      <option value="door_to_door">Door to Door</option>
                      <option value="sea_freight">Sea Freight</option>
                      <option value="road_freight">Road Freight</option>
                      <option value="air_freight">Air Freight</option>
                      <option value="express_delivery">Express Delivery</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-50">
                  <h4 className="text-sm font-black text-[var(--primary)] uppercase tracking-widest">Shipment Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Delivery Type</label>
                      <select
                        name="locationType"
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--primary)] outline-none text-sm font-bold"
                        value={form.locationType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Type</option>
                        <option value="national">National</option>
                        <option value="global">Global</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">From</label>
                      <select
                        name="fromLocation"
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--primary)] outline-none text-sm font-bold disabled:opacity-50"
                        value={form.fromLocation}
                        onChange={handleChange}
                        required
                        disabled={!form.locationType}
                      >
                        <option value="">Origin</option>
                        {form.locationType === 'national' ? 
                          nepalDistricts.map((d, i) => <option key={i} value={d}>{d}</option>) :
                          countries.map((c, i) => <option key={i} value={c}>{c}</option>)
                        }
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">To</label>
                      <select
                        name="toLocation"
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--primary)] outline-none text-sm font-bold disabled:opacity-50"
                        value={form.toLocation}
                        onChange={handleChange}
                        required
                        disabled={!form.locationType}
                      >
                        <option value="">Destination</option>
                        {form.locationType === 'national' ? 
                          nepalDistricts.map((d, i) => <option key={i} value={d}>{d}</option>) :
                          countries.map((c, i) => <option key={i} value={c}>{c}</option>)
                        }
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-widest">Your Message / Cargo Details</label>
                  <textarea
                    name="message"
                    placeholder="Provide details about your cargo (weight, dimensions, etc.)"
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[var(--primary)] outline-none text-sm font-bold resize-none"
                    value={form.message}
                    onChange={handleChange}
                    rows="4"
                    required
                  />
                </div>

                {status.msg && (
                  <div className={`p-4 rounded-xl flex items-center gap-3 text-sm font-bold ${
                    status.type === 'success' ? 'bg-emerald-50 text-emerald-600' : 
                    status.type === 'error' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {status.type === 'success' ? <FaCheckCircle /> : status.type === 'error' ? <FaExclamationCircle /> : null}
                    {status.msg}
                  </div>
                )}

                <button 
                  type="submit" 
                  className={`btn-primary w-full py-4 text-lg uppercase tracking-widest flex items-center justify-center gap-3 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Submit Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

