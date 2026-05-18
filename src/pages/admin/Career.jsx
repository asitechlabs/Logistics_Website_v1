import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { Briefcase, MapPin, Calendar, User, ChevronRight } from 'lucide-react';

const Career = () => {
  const applications = [
    { id: 1, name: 'John Doe', position: 'Logistics Manager', location: 'Kathmandu', date: 'Oct 24, 2023', score: 92 },
    { id: 2, name: 'Alice Smith', position: 'Fleet Supervisor', location: 'Pokhara', date: 'Oct 23, 2023', score: 85 },
    { id: 3, name: 'Robert Brown', position: 'Warehouse Associate', location: 'Lalitpur', date: 'Oct 22, 2023', score: 78 },
  ];

  return (
    <AdminLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">Total Openings</p>
          <h3 className="text-2xl font-black text-slate-800">12 Positions</h3>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">New Applications</p>
          <h3 className="text-2xl font-black text-blue-600">+24 Today</h3>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">Avg. Response Time</p>
          <h3 className="text-2xl font-black text-slate-800">1.5 Days</h3>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-800 mb-6 px-2">Recent Applications</h3>
        {applications.map((app) => (
          <div key={app.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group cursor-pointer">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 mr-5 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
                  <User size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-800">{app.name}</h4>
                  <div className="flex items-center text-slate-400 text-sm mt-1 font-medium">
                    <Briefcase size={14} className="mr-1" />
                    <span>{app.position}</span>
                    <span className="mx-2">•</span>
                    <MapPin size={14} className="mr-1" />
                    <span>{app.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between lg:justify-end flex-1 gap-10">
                <div className="text-right">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Applied Date</p>
                  <p className="text-sm font-bold text-slate-700">{app.date}</p>
                </div>
                
                <div className="w-24">
                  <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                    <span>Match</span>
                    <span className="text-blue-600">{app.score}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: `${app.score}%` }}></div>
                  </div>
                </div>

                <div className="hidden sm:block">
                  <div className="p-3 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ChevronRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default Career;
