import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Mail, 
  Briefcase, 
  LogOut, 
  Menu, 
  X,
  Bell,
  User,
  ChevronRight,
  Layout
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: Mail, label: 'Emails', path: '/admin/email' },
    { icon: Layout, label: 'Content', path: '/admin/content' },
    // { icon: Briefcase, label: 'Careers', path: '/admin/career' },
  ];

  const handleLogout = () => {
    // Clear session
    localStorage.removeItem('admin_auth');
    navigate('/');
  };

  const getPageTitle = () => {
    const item = menuItems.find(m => m.path === location.pathname);
    return item ? item.label : 'Admin Panel';
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-slate-900 text-white transition-all duration-300 flex flex-col z-30 shadow-2xl`}
      >
        {/* Sidebar Header */}
        <div className="h-20 flex items-center px-6 border-b border-slate-800">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shrink-0 shadow-lg">
            <span className="text-xl font-black italic">A</span>
          </div>
          {isSidebarOpen && (
            <div className="ml-3 overflow-hidden whitespace-nowrap transition-all duration-300">
              <h2 className="text-lg font-bold tracking-tight">ASI <span className="text-blue-400">LOGISTIC</span></h2>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Admin Portal</p>
            </div>
          )}
        </div>

        {/* Sidebar Links */}
        <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto custom-scrollbar">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center p-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <item.icon size={22} className={`shrink-0 ${isActive ? 'text-white' : 'group-hover:scale-110 transition-transform'}`} />
                {isSidebarOpen && (
                  <div className="ml-3 flex items-center justify-between w-full">
                    <span className="font-medium text-sm">{item.label}</span>
                    {isActive && <ChevronRight size={14} className="opacity-50" />}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className="flex items-center w-full p-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200 group"
          >
            <LogOut size={22} className="shrink-0 group-hover:translate-x-1 transition-transform" />
            {isSidebarOpen && <span className="ml-3 font-medium text-sm">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Navbar */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 md:px-10 shrink-0 z-20">
          <div className="flex items-center">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-blue-600 transition-all focus:outline-none"
            >
              {isSidebarOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            <div className="ml-6 flex items-center space-x-2">
              <span className="h-6 w-1 bg-blue-600 rounded-full hidden md:block"></span>
              <h1 className="text-xl font-bold text-slate-800 tracking-tight">{getPageTitle()}</h1>
            </div>
          </div>

          <div className="flex items-center space-x-2 md:space-x-5">
            {/* Search or extra tools could go here */}
            <button className="hidden sm:flex p-2.5 text-slate-500 hover:bg-slate-100 rounded-xl relative transition-all">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
            
            <div className="h-10 w-px bg-gray-200 mx-2 hidden sm:block"></div>

            <div className="flex items-center group cursor-pointer pl-2">
              <div className="text-right mr-3 hidden md:block">
                <p className="text-sm font-bold text-slate-800">ASI Admin</p>
                <p className="text-[11px] text-blue-600 font-bold uppercase tracking-wider">Super Administrator</p>
              </div>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200 group-hover:scale-105 transition-transform duration-200">
                <User size={22} />
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#f8fafc] custom-scrollbar">
          <div className="p-6 md:p-10 max-w-7xl mx-auto">
            {/* Welcome & Tab Navigation */}
            <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black text-slate-800 tracking-tight">
                  Welcome Back, Admin! 👋
                </h2>
                <p className="text-slate-500 mt-1 text-sm font-medium">
                  Manage your ASI Logistic operations with ease.
                </p>
              </div>
              <div className="flex items-center space-x-2 bg-white p-1.5 rounded-2xl shadow-sm border border-gray-200">
                {[
                  { label: 'Dashboard', path: '/admin/dashboard' },
                  { label: 'Email', path: '/admin/email' },
                  { label: 'Content', path: '/admin/content' },
                  // { label: 'Career', path: '/admin/career' },
                ].map((tab) => {
                  const isTabActive = location.pathname === tab.path;
                  return (
                    <Link
                      key={tab.path}
                      to={tab.path}
                      className={`px-5 py-2.5 text-sm font-bold rounded-xl transition-all duration-200 ${
                        isTabActive
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                          : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      {tab.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {children}
          </div>
        </main>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}} />
    </div>
  );
};

export default AdminLayout;
