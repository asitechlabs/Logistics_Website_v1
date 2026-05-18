import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { Search, Trash2, Eye, Loader2,  ChevronDown } from 'lucide-react';
import { db } from '../../firebase';
import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc,
} from 'firebase/firestore';

const COLLECTION = 'contact_emails';

const Email = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [serviceFilter, setServiceFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);

  useEffect(() => {
    const q = query(collection(db, COLLECTION), orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const data = snapshot.docs.map((d) => ({
          id: d.id,
          ...d.data(),
          // Format date nicely
          date: d.data().createdAt
            ? new Date(d.data().createdAt.toDate()).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })
            : 'Just now',
        }));
        setEmails(data);
        setLoading(false);
      },
      (err) => {
        console.error('Firestore error:', err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this message? This cannot be undone.')) return;
    try {
      await deleteDoc(doc(db, COLLECTION, id));
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  const handleView = (email) => {
    setSelected(email);
    // Mark as Read in Firestore if currently Unread
    if (email.status === 'Unread') {
      updateDoc(doc(db, COLLECTION, email.id), { status: 'Read' }).catch((err) =>
        console.error('Status update failed:', err)
      );
    }
  };

  const services = ['All', ...Array.from(new Set(emails.map((e) => e.service).filter(Boolean)))];
  const routeTypes = ['All', ...Array.from(new Set(emails.map((e) => e.locationType).filter(Boolean)))];

  const filtered = emails.filter((e) => {
    const matchesSearch =
      e.sender?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.subject?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.phone?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.fromLocation?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.toLocation?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'All' || e.status === statusFilter;
    const matchesService = serviceFilter === 'All' || e.service === serviceFilter;
    const matchesType = typeFilter === 'All' || e.locationType === typeFilter;

    return matchesSearch && matchesStatus && matchesService && matchesType;
  });

  const statusStyle = (status) => {
    if (status === 'Unread') return 'bg-blue-100 text-blue-600';
    if (status === 'Replied') return 'bg-emerald-100 text-emerald-600';
    return 'bg-slate-100 text-slate-500';
  };

  return (
    <AdminLayout>
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Toolbar */}
        <div className="p-6 border-b border-slate-50 flex flex-col gap-4">
          
          {/* Row 1: Search + count */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search by name, email, phone, route…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <span className="text-sm font-bold text-slate-400 shrink-0">
              {filtered.length} message{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Row 2: Filters */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Status filter tabs */}
            <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl p-1 gap-1">
              {['All', 'Unread', 'Read', 'Replied'].map((s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-4 py-1.5 text-xs font-black rounded-lg transition-all duration-150 ${
                    statusFilter === s
                      ? s === 'Unread'
                        ? 'bg-blue-600 text-white shadow'
                        : s === 'Replied'
                        ? 'bg-emerald-600 text-white shadow'
                        : 'bg-slate-800 text-white shadow'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-white'
                  }`}
                >
                  {s}
                  {s !== 'All' && (
                    <span className="ml-1.5 opacity-70">
                      ({emails.filter((e) => e.status === s).length})
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Service dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowServiceDropdown((v) => !v)}
                className="flex items-center gap-2 px-4 py-2 text-xs font-black text-slate-600 bg-slate-50 border border-slate-200 rounded-xl hover:bg-white transition-all"
              >
                {serviceFilter === 'All' ? 'All Services' : serviceFilter.replace(/_/g, ' ')}
                <ChevronDown size={14} />
              </button>
              {showServiceDropdown && (
                <div className="absolute left-0 mt-1 w-44 bg-white border border-slate-200 rounded-xl shadow-xl z-20 overflow-hidden">
                  {services.map((svc) => (
                    <button
                      key={svc}
                      onClick={() => { setServiceFilter(svc); setShowServiceDropdown(false); }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-bold capitalize hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                        serviceFilter === svc ? 'bg-blue-50 text-blue-600' : 'text-slate-600'
                      }`}
                    >
                      {svc === 'All' ? 'All Services' : svc.replace(/_/g, ' ')}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Type (Route) dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowTypeDropdown((v) => !v)}
                className="flex items-center gap-2 px-4 py-2 text-xs font-black text-slate-600 bg-slate-50 border border-slate-200 rounded-xl hover:bg-white transition-all"
              >
                {typeFilter === 'All' ? 'All Routes' : typeFilter}
                <ChevronDown size={14} />
              </button>
              {showTypeDropdown && (
                <div className="absolute left-0 mt-1 w-44 bg-white border border-slate-200 rounded-xl shadow-xl z-20 overflow-hidden">
                  {routeTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => { setTypeFilter(type); setShowTypeDropdown(false); }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-bold capitalize hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                        typeFilter === type ? 'bg-blue-50 text-blue-600' : 'text-slate-600'
                      }`}
                    >
                      {type === 'All' ? 'All Routes' : type}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Clear filters */}
            {(statusFilter !== 'All' || serviceFilter !== 'All' || typeFilter !== 'All' || searchQuery) && (
              <button
                onClick={() => { setStatusFilter('All'); setServiceFilter('All'); setTypeFilter('All'); setSearchQuery(''); }}
                className="px-3 py-2 text-xs font-bold text-rose-500 hover:bg-rose-50 rounded-xl transition-all"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Table */}
        {loading ? (
          <div className="flex items-center justify-center py-24 text-slate-400">
            <Loader2 size={28} className="animate-spin mr-3" />
            <span className="font-semibold text-sm">Loading messages…</span>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-slate-400">
            <Mail size={40} className="mb-4 opacity-30" />
            <p className="font-bold text-sm">No messages found</p>
            <p className="text-xs mt-1 opacity-70">Messages from the contact form will appear here</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-wider">Sender</th>
                  <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-wider">Service</th>
                  <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-wider">Route</th>
                  <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-wider hidden lg:table-cell">Date</th>
                  <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-black text-slate-400 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filtered.map((email) => (
                  <tr key={email.id} className="hover:bg-blue-50/30 transition-colors group">
                    {/* Sender */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0">
                          {email.sender?.charAt(0)?.toUpperCase() || '?'}
                        </div>
                        <div>
                          <span className="font-bold text-slate-700 block text-sm leading-tight">{email.sender}</span>
                          <span className="text-xs text-slate-400">{email.email}</span>
                        </div>
                      </div>
                    </td>
                    {/* Phone */}
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium whitespace-nowrap">
                      {email.phone || '—'}
                    </td>
                    {/* Service */}
                    <td className="px-6 py-4">
                      <span className="text-xs font-bold bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-lg capitalize whitespace-nowrap">
                        {email.service?.replace(/_/g, ' ') || '—'}
                      </span>
                    </td>
                    {/* Route */}
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium whitespace-nowrap">
                      {email.fromLocation && email.toLocation
                        ? `${email.fromLocation} → ${email.toLocation}`
                        : '—'}
                    </td>
                    {/* Delivery Type */}
                    <td className="px-6 py-4">
                      <span className="text-xs font-bold bg-amber-50 text-amber-600 px-2.5 py-1 rounded-lg capitalize">
                        {email.locationType || '—'}
                      </span>
                    </td>
                    {/* Date */}
                    <td className="px-6 py-4 text-slate-400 text-xs font-medium hidden lg:table-cell whitespace-nowrap">
                      {email.date}
                    </td>
                    {/* Status */}
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${statusStyle(email.status)}`}>
                        {email.status}
                      </span>
                    </td>
                    {/* Actions */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => handleView(email)}
                          className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                          title="View full message"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(email.id)}
                          className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                          title="Delete message"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* View Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 text-xl font-bold"
            >
              ✕
            </button>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-black text-lg mr-4">
                {selected.sender?.charAt(0)?.toUpperCase()}
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-800">{selected.sender}</h3>
                <p className="text-sm text-slate-400">{selected.email} · {selected.phone}</p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <span className="font-black text-slate-400 w-28 shrink-0">Service</span>
                <span className="text-slate-700 font-medium capitalize">{selected.service?.replace(/_/g,' ')}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-black text-slate-400 w-28 shrink-0">Type</span>
                <span className="text-slate-700 font-medium capitalize">{selected.locationType}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-black text-slate-400 w-28 shrink-0">From → To</span>
                <span className="text-slate-700 font-medium">{selected.fromLocation} → {selected.toLocation}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-black text-slate-400 w-28 shrink-0">Date</span>
                <span className="text-slate-700 font-medium">{selected.date}</span>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <p className="font-black text-slate-400 mb-2">Message</p>
                <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl">{selected.message}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default Email;
