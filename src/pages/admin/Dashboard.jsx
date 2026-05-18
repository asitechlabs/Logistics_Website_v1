import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import {
    TrendingUp,
    Users,
    Package,
    DollarSign,
    Clock,
    Eye,
    Trash2,
    Loader2,
    Mail,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import {
    collection,
    onSnapshot,
    deleteDoc,
    doc,
    query,
    orderBy,
    limit,
} from 'firebase/firestore';

const COLLECTION = 'contact_emails';

const Dashboard = () => {
    const [emails, setEmails] = useState([]);
    const [loadingEmails, setLoadingEmails] = useState(true);

    useEffect(() => {
        const q = query(
            collection(db, COLLECTION),
            orderBy('createdAt', 'desc'),
            limit(4)
        );

        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                const data = snapshot.docs.map((d) => ({
                    id: d.id,
                    ...d.data(),
                    date: d.data().createdAt
                        ? new Date(d.data().createdAt.toDate()).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                        })
                        : 'Just now',
                }));
                setEmails(data);
                setLoadingEmails(false);
            },
            () => setLoadingEmails(false)
        );

        return () => unsubscribe();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this message?')) return;
        try {
            await deleteDoc(doc(db, COLLECTION, id));
        } catch (err) {
            console.error('Delete failed:', err);
        }
    };

    const statusStyle = (status) => {
        if (status === 'Unread') return 'bg-blue-100 text-blue-600';
        if (status === 'Replied') return 'bg-emerald-100 text-emerald-600';
        return 'bg-slate-100 text-slate-500';
    };

    return (
        <AdminLayout>
            {/* Emails Section */}
            <div className="mt-2">
                <div className="flex items-center justify-between mb-5 pl-1">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                            <Mail size={24} />
                        </div>
                        <h2 className="text-xl font-bold text-slate-800 tracking-tight">Recent Emails</h2>
                    </div>
                    <Link
                        to="/admin/email"
                        className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors"
                    >
                        See All <TrendingUp size={14} />
                    </Link>
                </div>

                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                    {loadingEmails ? (
                        <div className="flex items-center justify-center py-16 text-slate-400">
                            <Loader2 size={24} className="animate-spin mr-3" />
                            <span className="text-sm font-semibold">Loading messages…</span>
                        </div>
                    ) : emails.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-16 text-slate-400">
                            <Mail size={36} className="mb-3 opacity-30" />
                            <p className="font-bold text-sm">No messages yet</p>
                            <p className="text-xs mt-1 opacity-70">Messages from the contact form will appear here</p>
                        </div>
                    ) : (
                        <>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50/50 text-slate-400 uppercase text-[10px] font-black tracking-widest">
                                            <th className="px-8 py-4">Sender</th>
                                            <th className="px-8 py-4">Subject</th>
                                            <th className="px-8 py-4 hidden md:table-cell">Date</th>
                                            <th className="px-8 py-4">Status</th>
                                            <th className="px-8 py-4 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {emails.map((email) => (
                                            <tr key={email.id} className="hover:bg-blue-50/30 transition-colors group">
                                                <td className="px-8 py-4">
                                                    <div className="flex items-center">
                                                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs mr-3 shrink-0">
                                                            {email.sender?.charAt(0)?.toUpperCase() || '?'}
                                                        </div>
                                                        <div>
                                                            <span className="font-bold text-slate-700 text-sm block">{email.sender}</span>
                                                            <span className="text-xs text-slate-400">{email.email}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-4 text-slate-600 font-medium text-sm max-w-[200px] truncate">
                                                    {email.subject}
                                                </td>
                                                <td className="px-8 py-4 text-slate-400 text-xs font-medium hidden md:table-cell">
                                                    {email.date}
                                                </td>
                                                <td className="px-8 py-4">
                                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${statusStyle(email.status)}`}>
                                                        {email.status}
                                                    </span>
                                                </td>
                                                <td className="px-8 py-4 text-right">
                                                    <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <Link
                                                            to="/admin/email"
                                                            className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                                                            title="View all emails"
                                                        >
                                                            <Eye size={16} />
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDelete(email.id)}
                                                            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                                                            title="Delete message"
                                                        >
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="p-4 border-t border-slate-50 bg-slate-50/30 text-center">
                                <Link
                                    to="/admin/email"
                                    className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center justify-center gap-2"
                                >
                                    See More <TrendingUp size={14} />
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
            

            <div className="w-full text-center justify-center items-center mt-4 p-2">
              
               
                
                  © 2026 ASI Logistics. All rights reserved.
                
            </div>
        </AdminLayout>
    );

};

export default Dashboard;
