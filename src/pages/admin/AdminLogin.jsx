import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simple mock login logic
        setTimeout(() => {
            setLoading(false);
            localStorage.setItem('admin_auth', 'true');
            navigate('/admin/content'); // Redirect to content manager
        }, 1200);
    };

    return (
        <div className="min-h-screen w-full bg-[#f8fafc] flex items-center justify-center p-6 relative overflow-hidden font-sans">
            {/* Background Decorations */}
            <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-slate-100 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="w-full max-w-md relative z-10">
                {/* Logo Area */}
                <div className="flex flex-col items-center mb-10">
                    <div className="w-16 h-16 bg-[var(--primary)] rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-200 mb-6 group transition-transform hover:scale-110">
                        <ShieldCheck className="text-white" size={32} />
                    </div>
                    <h1 className="text-3xl font-black text-slate-800 uppercase tracking-tighter text-center">
                        ASI <span className="text-blue-600">LOGISTIC</span>
                    </h1>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-2">Central Intelligence Access</p>
                </div>

                {/* Login Form */}
                <div className="bg-white p-10 rounded-[40px] shadow-2xl shadow-slate-200 border border-white relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Administrator ID</label>
                            <div className="relative group/input">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-blue-600 transition-colors" size={18} />
                                <input 
                                    type="email" 
                                    required
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 transition-all"
                                    placeholder="admin@asilogistic.com"
                                    onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Secure Key</label>
                            <div className="relative group/input">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-blue-600 transition-colors" size={18} />
                                <input 
                                    type="password" 
                                    required
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 text-sm font-bold text-slate-700 outline-none focus:bg-white focus:border-blue-200 focus:ring-4 focus:ring-blue-50 transition-all"
                                    placeholder="••••••••"
                                    onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                                />
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full bg-[var(--primary)] text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-blue-200 hover:bg-blue-700 hover:shadow-blue-300 active:scale-[0.98] transition-all disabled:opacity-70"
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    Authorize Access <ArrowRight size={18} />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Footer Info */}
                    <div className="mt-10 pt-8 border-t border-slate-50 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Sparkles className="text-blue-500" size={14} />
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">v4.2.0 Operational</span>
                        </div>
                        <a href="#" className="text-[10px] font-bold text-blue-500 uppercase tracking-widest hover:underline">Support Hub</a>
                    </div>
                </div>

                <p className="text-center mt-10 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Authorized Personnel Only. All activities are logged.
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;
