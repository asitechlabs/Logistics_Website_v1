import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { db } from '../../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { 
    Save, Loader2, Image as ImageIcon, Type, Layout, 
    List, Globe, Target, Maximize, BrainCircuit, 
    MapPin, CheckCircle, Plus, Trash2, Sparkles,
    LayoutDashboard, FileText, ChevronRight
} from 'lucide-react';

const ContentManager = () => {
    const [activePage, setActivePage] = useState('home');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    
    const [homeData, setHomeData] = useState({
        hero: { headline: '', subheading: '', imageUrl: '' },
        stats: [],
        services: [],
        industries: [],
        services_label: '',
        services_heading: '',
        industries_label: '',
        industries_heading: '',
        sus_label: '',
        sus_heading: '',
        sus_text: '',
        sus_img: '',
        cta_heading: '',
        cta_subtext: '',
        cta_btn_text: '',
        cta_btn_link: ''
    });

    const [industriesData, setIndustriesData] = useState({
        hero: { headline: '', subheading: '' },
        vision: { text: '', quote: '' },
        focusAreas: [],
        foundation: [],
        successStories: [],
        hubs: []
    });

    useEffect(() => {
        const fetchAllContent = async () => {
            setLoading(true);
            try {
                const homeSnap = await getDoc(doc(db, 'site_content', 'homepage'));
                if (homeSnap.exists()) setHomeData(homeSnap.data());

                const industriesSnap = await getDoc(doc(db, 'site_content', 'industries'));
                if (industriesSnap.exists()) setIndustriesData(industriesSnap.data());
                
            } catch (err) {
                console.error('Error fetching content:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchAllContent();
    }, []);

    const handleSave = async () => {
        setSaving(true);
        try {
            if (activePage === 'home') {
                await setDoc(doc(db, 'site_content', 'homepage'), homeData);
            } else {
                await setDoc(doc(db, 'site_content', 'industries'), industriesData);
            }
            // Success feedback would go here (toast/alert)
            alert('Settings synchronized with live site!');
        } catch (err) {
            console.error('Error saving content:', err);
            alert('Failed to update live content.');
        } finally {
            setSaving(false);
        }
    };

    const updateField = (page, section, field, value) => {
        if (page === 'home') {
            setHomeData(prev => ({ ...prev, [section]: { ...prev[section], [field]: value } }));
        } else {
            setIndustriesData(prev => ({ ...prev, [section]: { ...prev[section], [field]: value } }));
        }
    };

    const updateArrayField = (page, section, index, field, value) => {
        if (page === 'home') {
            const newArr = [...homeData[section]];
            newArr[index][field] = value;
            setHomeData(prev => ({ ...prev, [section]: newArr }));
        } else {
            const newArr = [...industriesData[section]];
            newArr[index][field] = value;
            setIndustriesData(prev => ({ ...prev, [section]: newArr }));
        }
    };

    const addItem = (page, section, defaultItem) => {
        if (page === 'home') {
            setHomeData(prev => ({ ...prev, [section]: [...prev[section], defaultItem] }));
        } else {
            setIndustriesData(prev => ({ ...prev, [section]: [...prev[section], defaultItem] }));
        }
    };

    const removeItem = (page, section, index) => {
        if (page === 'home') {
            setHomeData(prev => ({ ...prev, [section]: prev[section].filter((_, i) => i !== index) }));
        } else {
            setIndustriesData(prev => ({ ...prev, [section]: prev[section].filter((_, i) => i !== index) }));
        }
    };

    if (loading) {
        return (
            <AdminLayout>
                <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
                    <div className="relative">
                        <div className="w-16 h-16 border-4 border-slate-100 border-t-[var(--primary)] rounded-full animate-spin"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Sparkles className="text-[var(--primary)] animate-pulse" size={20} />
                        </div>
                    </div>
                    <p className="text-slate-400 font-black uppercase tracking-widest text-xs">Syncing with Cloud Database...</p>
                </div>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout>
            <div className="max-w-6xl mx-auto space-y-8 pb-32">
                
                {/* --- STICKY HEADER --- */}
                <div className="sticky top-4 z-40 flex flex-col md:flex-row justify-between items-center gap-6 bg-white/80 backdrop-blur-xl p-6 rounded-[32px] border border-white shadow-2xl shadow-slate-200/50">
                    <div className="flex items-center gap-6">
                        <div className="hidden sm:flex bg-slate-100 p-1.5 rounded-2xl">
                            <button 
                                onClick={() => setActivePage('home')}
                                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-black transition-all duration-300 ${activePage === 'home' ? 'bg-white text-[var(--primary)] shadow-lg shadow-slate-200' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                <LayoutDashboard size={16} /> Homepage
                            </button>
                            <button 
                                onClick={() => setActivePage('industries')}
                                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-black transition-all duration-300 ${activePage === 'industries' ? 'bg-white text-[var(--primary)] shadow-lg shadow-slate-200' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                <FileText size={16} /> Industries
                            </button>
                        </div>
                        <div className="h-8 w-px bg-slate-200 hidden md:block"></div>
                        <div>
                            <h2 className="text-xl font-black text-slate-800 uppercase tracking-tighter leading-none">
                                {activePage === 'home' ? 'Global Home' : 'Intelligence Hub'}
                            </h2>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Status: Operational</p>
                        </div>
                    </div>
                    
                    <button 
                        onClick={handleSave}
                        disabled={saving}
                        className="btn-primary flex items-center justify-center gap-3 px-12 py-4 w-full md:w-auto shadow-xl shadow-red-200/40"
                    >
                        {saving ? <Loader2 size={20} className="animate-spin" /> : <Save size={20} />}
                        <span className="uppercase tracking-widest font-black text-sm">
                            {saving ? 'Synchronizing...' : 'Publish to Live'}
                        </span>
                    </button>
                </div>

                {/* --- CONTENT AREA --- */}
                <div className="animate-fade-in space-y-10">
                    
                    {/* HOMEPAGE MODULES */}
                    {activePage === 'home' && (
                        <div className="space-y-10">
                            {/* 1. Hero Section */}
                            <section className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 group">
                                <div className="flex items-center gap-4 mb-10 border-b border-slate-50 pb-6">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shadow-inner">
                                        <Layout size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Hero Narrative</h3>
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Master Brand Identity Section</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Main Headline</label>
                                            <textarea className="admin-input h-32" value={homeData.hero.headline} onChange={(e) => updateField('home', 'hero', 'headline', e.target.value)} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Supporting Context</label>
                                            <textarea className="admin-input h-40" value={homeData.hero.subheading} onChange={(e) => updateField('home', 'hero', 'subheading', e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Background Asset (URL)</label>
                                            <input className="admin-input" value={homeData.hero.imageUrl} onChange={(e) => updateField('home', 'hero', 'imageUrl', e.target.value)} />
                                        </div>
                                        <div className="aspect-video rounded-3xl bg-slate-50 overflow-hidden border border-slate-200">
                                            {homeData.hero.imageUrl?.endsWith('.mp4') ? (
                                                <video src={homeData.hero.imageUrl} muted autoPlay loop className="w-full h-full object-cover" />
                                            ) : (
                                                <img src={homeData.hero.imageUrl} className="w-full h-full object-cover" alt="Hero Preview" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 2. Services Section */}
                            <section className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
                                <div className="flex justify-between items-center mb-10 border-b border-slate-50 pb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center shadow-inner">
                                            <List size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Services Framework</h3>
                                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Main Expertise Grid</p>
                                        </div>
                                    </div>
                                    <button onClick={() => addItem('home', 'services', { name: 'New Service', desc: 'Description...', icon_name: 'FaShip' })} className="p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-rose-50 hover:text-rose-600 transition-all">
                                        <Plus size={24} />
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Section Label</label>
                                        <input className="admin-input" value={homeData.services_label || ''} onChange={(e) => setHomeData({...homeData, services_label: e.target.value})} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Section Heading</label>
                                        <input className="admin-input" value={homeData.services_heading || ''} onChange={(e) => setHomeData({...homeData, services_heading: e.target.value})} />
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    {homeData.services?.map((service, i) => (
                                        <div key={i} className="group relative p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:bg-white hover:border-rose-200 transition-all flex flex-col lg:flex-row gap-6">
                                            <button onClick={() => removeItem('home', 'services', i)} className="absolute top-4 right-4 p-2 text-slate-300 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-all">
                                                <Trash2 size={16} />
                                            </button>
                                            <div className="w-24 shrink-0 space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Icon ID</label>
                                                <input className="admin-input text-center font-bold" value={service.icon_name || 'FaShip'} onChange={(e) => updateArrayField('home', 'services', i, 'icon_name', e.target.value)} />
                                            </div>
                                            <div className="flex-1 space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Service Title</label>
                                                <input className="admin-input font-black" value={service.name} onChange={(e) => updateArrayField('home', 'services', i, 'name', e.target.value)} />
                                            </div>
                                            <div className="flex-[2] space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Description</label>
                                                <input className="admin-input" value={service.desc} onChange={(e) => updateArrayField('home', 'services', i, 'desc', e.target.value)} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 3. Performance Metrics */}
                            <section className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
                                <div className="flex justify-between items-center mb-10 border-b border-slate-50 pb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-inner">
                                            <Target size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Performance Metrics</h3>
                                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Global Reach Data Points</p>
                                        </div>
                                    </div>
                                    <button onClick={() => addItem('home', 'stats', { label: 'Metric', value: '0+' })} className="p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-emerald-50 hover:text-emerald-600 transition-all">
                                        <Plus size={24} />
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {homeData.stats?.map((stat, i) => (
                                        <div key={i} className="group relative p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:bg-white hover:border-emerald-200 transition-all">
                                            <button onClick={() => removeItem('home', 'stats', i)} className="absolute top-4 right-4 p-2 text-slate-300 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-all">
                                                <Trash2 size={16} />
                                            </button>
                                            <input className="bg-transparent border-none w-full p-0 text-3xl font-black text-emerald-600 focus:ring-0 mb-2" value={stat.value} onChange={(e) => updateArrayField('home', 'stats', i, 'value', e.target.value)} />
                                            <input className="bg-transparent border-none w-full p-0 text-xs font-bold text-slate-400 uppercase tracking-widest focus:ring-0" value={stat.label} onChange={(e) => updateArrayField('home', 'stats', i, 'label', e.target.value)} />
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 4. Industries Section */}
                            <section className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
                                <div className="flex justify-between items-center mb-10 border-b border-slate-50 pb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shadow-inner">
                                            <Globe size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Industries Empowered</h3>
                                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Vertical Markets Portfolio</p>
                                        </div>
                                    </div>
                                    <button onClick={() => addItem('home', 'industries', { name: 'Industry', img: '', desc: 'Expert solutions...' })} className="p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-amber-50 hover:text-amber-600 transition-all">
                                        <Plus size={24} />
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Section Label</label>
                                        <input className="admin-input" value={homeData.industries_label || ''} onChange={(e) => setHomeData({...homeData, industries_label: e.target.value})} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Section Heading</label>
                                        <input className="admin-input" value={homeData.industries_heading || ''} onChange={(e) => setHomeData({...homeData, industries_heading: e.target.value})} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {homeData.industries?.map((ind, i) => (
                                        <div key={i} className="group relative p-6 bg-slate-50 rounded-[32px] border border-slate-200 hover:bg-white hover:border-amber-200 transition-all space-y-4">
                                            <button onClick={() => removeItem('home', 'industries', i)} className="absolute top-4 right-4 p-2 text-slate-300 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-all">
                                                <Trash2 size={16} />
                                            </button>
                                            <div className="aspect-square rounded-2xl bg-slate-100 overflow-hidden border border-slate-200">
                                                <img src={ind.img} className="w-full h-full object-cover" alt="" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Industry Name</label>
                                                <input className="admin-input font-bold" value={ind.name} onChange={(e) => updateArrayField('home', 'industries', i, 'name', e.target.value)} />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Image URL</label>
                                                <input className="admin-input text-xs" value={ind.img} onChange={(e) => updateArrayField('home', 'industries', i, 'img', e.target.value)} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 5. Sustainability Module */}
                            <section className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
                                <div className="flex items-center gap-4 mb-10 border-b border-slate-50 pb-6">
                                    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shadow-inner">
                                        <Sparkles size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Sustainability Hub</h3>
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Commitment & ESG Narrative</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Module Label</label>
                                            <input className="admin-input" value={homeData.sus_label || ''} onChange={(e) => setHomeData({...homeData, sus_label: e.target.value})} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Main Heading</label>
                                            <input className="admin-input font-black" value={homeData.sus_heading || ''} onChange={(e) => setHomeData({...homeData, sus_heading: e.target.value})} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Narrative Content</label>
                                            <textarea className="admin-input h-48" value={homeData.sus_text || ''} onChange={(e) => setHomeData({...homeData, sus_text: e.target.value})} />
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Featured Image URL</label>
                                            <input className="admin-input" value={homeData.sus_img || ''} onChange={(e) => setHomeData({...homeData, sus_img: e.target.value})} />
                                        </div>
                                        <div className="aspect-[4/3] rounded-[32px] bg-slate-50 overflow-hidden border border-slate-200">
                                            <img src={homeData.sus_img} className="w-full h-full object-cover" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 6. CTA Module */}
                            <section className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
                                <div className="flex items-center gap-4 mb-10 border-b border-slate-50 pb-6">
                                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shadow-inner">
                                        <Sparkles size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Conversion Center</h3>
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Call to Action Configuration</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">CTA Heading</label>
                                            <input className="admin-input font-black text-xl" value={homeData.cta_heading || ''} onChange={(e) => setHomeData({...homeData, cta_heading: e.target.value})} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Supporting Text</label>
                                            <input className="admin-input" value={homeData.cta_subtext || ''} onChange={(e) => setHomeData({...homeData, cta_subtext: e.target.value})} />
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Button Narrative</label>
                                            <input className="admin-input font-bold" value={homeData.cta_btn_text || ''} onChange={(e) => setHomeData({...homeData, cta_btn_text: e.target.value})} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Button Destination Link</label>
                                            <input className="admin-input" value={homeData.cta_btn_link || ''} onChange={(e) => setHomeData({...homeData, cta_btn_link: e.target.value})} />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}

                    {/* INDUSTRIES MODULES */}
                    {activePage === 'industries' && (
                        <>
                            {/* Industries Hero */}
                            <section className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shadow-inner">
                                        <Globe size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Innovation Hero</h3>
                                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Technology Division Entry</p>
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Main Headline</label>
                                        <input className="admin-input font-black text-xl" value={industriesData.hero.headline} onChange={(e) => updateField('industries', 'hero', 'headline', e.target.value)} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Supporting Text</label>
                                        <textarea className="admin-input h-32" value={industriesData.hero.subheading} onChange={(e) => updateField('industries', 'hero', 'subheading', e.target.value)} />
                                    </div>
                                </div>
                            </section>

                            {/* Vision & Focus */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <section className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
                                    <h4 className="text-lg font-black text-slate-800 uppercase mb-8 border-b border-slate-50 pb-4">Visionary Statement</h4>
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Narrative Text</label>
                                            <textarea className="admin-input h-48" value={industriesData.vision.text} onChange={(e) => updateField('industries', 'vision', 'text', e.target.value)} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Hero Quote</label>
                                            <input className="admin-input italic border-l-4 border-blue-500" value={industriesData.vision.quote} onChange={(e) => updateField('industries', 'vision', 'quote', e.target.value)} />
                                        </div>
                                    </div>
                                </section>
                                <section className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
                                    <div className="flex justify-between items-center mb-8 border-b border-slate-50 pb-4">
                                        <h4 className="text-lg font-black text-slate-800 uppercase">Focus Pillars</h4>
                                        <button onClick={() => addItem('industries', 'focusAreas', 'New Tech Pillar')} className="p-2 text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100">
                                            <Plus size={20} />
                                        </button>
                                    </div>
                                    <div className="space-y-4">
                                        {industriesData.focusAreas.map((item, i) => (
                                            <div key={i} className="group flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-indigo-200"></div>
                                                <input 
                                                    className="admin-input font-bold" 
                                                    value={item} 
                                                    onChange={(e) => {
                                                        const newArr = [...industriesData.focusAreas];
                                                        newArr[i] = e.target.value;
                                                        setIndustriesData({...industriesData, focusAreas: newArr});
                                                    }} 
                                                />
                                                <button onClick={() => removeItem('industries', 'focusAreas', i)} className="p-3 text-slate-300 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-all">
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            {/* Success Stories CRUD */}
                            <section className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
                                <div className="flex justify-between items-center mb-10 border-b border-slate-50 pb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shadow-inner">
                                            <Globe size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Global Case Studies</h3>
                                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">International Success Narrative</p>
                                        </div>
                                    </div>
                                    <button onClick={() => addItem('industries', 'successStories', { location: 'New Location', title: 'Story Title', desc: 'Narrative description...' })} className="p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-amber-50 hover:text-amber-600 transition-all">
                                        <Plus size={24} />
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {industriesData.successStories.map((story, i) => (
                                        <div key={i} className="group relative p-10 bg-slate-50 rounded-[48px] border border-slate-200 hover:bg-white hover:border-amber-200 transition-all">
                                            <button onClick={() => removeItem('industries', 'successStories', i)} className="absolute top-6 right-6 p-2 text-slate-300 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-all">
                                                <Trash2 size={20} />
                                            </button>
                                            <div className="grid grid-cols-2 gap-6 mb-6">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Region</label>
                                                    <input className="admin-input font-black text-amber-600" value={story.location} onChange={(e) => updateArrayField('industries', 'successStories', i, 'location', e.target.value)} />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Story Title</label>
                                                    <input className="admin-input font-bold" value={story.title} onChange={(e) => updateArrayField('industries', 'successStories', i, 'title', e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Description</label>
                                                <textarea className="admin-input h-32" value={story.desc} onChange={(e) => updateArrayField('industries', 'successStories', i, 'desc', e.target.value)} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Technical Foundation */}
                            <section className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
                                <div className="flex justify-between items-center mb-10 border-b border-slate-50 pb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shadow-inner">
                                            <BrainCircuit size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Engineering Pillars</h3>
                                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Technical Foundation Cards</p>
                                        </div>
                                    </div>
                                    <button onClick={() => addItem('industries', 'foundation', { title: 'New Pillar', desc: 'Technical details...' })} className="p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all">
                                        <Plus size={24} />
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {industriesData.foundation?.map((item, i) => (
                                        <div key={i} className="group relative p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:bg-white transition-all space-y-4">
                                            <button onClick={() => removeItem('industries', 'foundation', i)} className="absolute top-4 right-4 p-2 text-slate-300 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-all">
                                                <Trash2 size={16} />
                                            </button>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Pillar Title</label>
                                                <input className="admin-input font-black" value={item.title} onChange={(e) => updateArrayField('industries', 'foundation', i, 'title', e.target.value)} />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Description</label>
                                                <textarea className="admin-input h-24 text-xs" value={item.desc} onChange={(e) => updateArrayField('industries', 'foundation', i, 'desc', e.target.value)} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Strategic Hubs */}
                            <section className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
                                <div className="flex justify-between items-center mb-10 border-b border-slate-50 pb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-inner">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Regional Network</h3>
                                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Operational Hubs Configuration</p>
                                        </div>
                                    </div>
                                    <button onClick={() => addItem('industries', 'hubs', { category: 'Central Node', title: 'New Hub', desc: 'Hub location & details...' })} className="p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-emerald-50 hover:text-emerald-600 transition-all">
                                        <Plus size={24} />
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {industriesData.hubs?.map((hub, i) => (
                                        <div key={i} className="group relative p-6 bg-slate-50 rounded-3xl border border-slate-200 hover:bg-white transition-all space-y-4">
                                            <button onClick={() => removeItem('industries', 'hubs', i)} className="absolute top-4 right-4 p-2 text-slate-300 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-all">
                                                <Trash2 size={16} />
                                            </button>
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Category</label>
                                                <input className="admin-input text-[10px] font-bold text-emerald-600" value={hub.category} onChange={(e) => updateArrayField('industries', 'hubs', i, 'category', e.target.value)} />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Hub Name</label>
                                                <input className="admin-input font-black text-xs" value={hub.title} onChange={(e) => updateArrayField('industries', 'hubs', i, 'title', e.target.value)} />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Details</label>
                                                <textarea className="admin-input h-20 text-[10px]" value={hub.desc} onChange={(e) => updateArrayField('industries', 'hubs', i, 'desc', e.target.value)} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
};

export default ContentManager;


