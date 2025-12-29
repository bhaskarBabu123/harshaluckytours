import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import {
  Calendar, MapPin, Loader2, Crown, ChevronRight, 
  Trophy, Coins, Plane, ShieldCheck, ArrowUpRight
} from 'lucide-react';
import toast from 'react-hot-toast';

const Pack = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const { data } = await axios.get('https://harsha-lucky-tours-final-backend.onrender.com/api/packages');
        setPackages(data.data.reverse().slice(0, 12) || []);
      } catch (err) {
        toast.error('Failed to load packages');
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white">
        <Loader2 className="w-10 h-10 text-slate-900 animate-spin mb-4" />
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Loading Inventory</p>
      </div>
    );
  }

  return (
    <section className="bg-white py-20 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Simplified Professional Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-slate-100 pb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1 w-12 bg-blue-600 rounded-full" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600">Premium Membership</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter mb-4">
              Monthly <span className="text-slate-300 font-light">Schemes</span>
            </h2>
            <p className="text-slate-500 font-medium max-w-lg text-sm leading-relaxed">
              Every ₹1,000 monthly contribution grants you entry into our exclusive 1-winner-per-month program. High-value tours or liquid asset alternatives.
            </p>
          </div>
          {/* <div className="flex gap-4">
            <div className="text-right">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Winners</p>
              <p className="text-2xl font-black text-slate-900">250+</p>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div className="text-right">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Verified Assets</p>
              <p className="text-2xl font-black text-blue-600">ISO 9001</p>
            </div>
          </div> */}
        </div>

        {/* --- PROFESSIONAL DATA CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {packages.map((p, index) => (
            <Link key={p._id} to={`/member/package/details/${p._id}`} className="group relative">
              <article className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] group-hover:border-slate-950 flex flex-col h-full">
                
                {/* Visual Section */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={p.images?.[0] || `https://images.unsplash.com/photo-${1500 + index * 10}?w=500&h=400&fit=crop`}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-slate-950 text-white px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-xl">
                      <Trophy size={12} className="text-blue-400" />
                      <span className="text-[9px] font-black uppercase tracking-widest">Grand Prize</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-lg font-black text-slate-950 leading-tight tracking-tight group-hover:text-blue-600 transition-colors">
                      {p.name}
                    </h3>
                    <ArrowUpRight className="text-slate-300 group-hover:text-blue-600 transition-colors" size={20} />
                  </div>

                  {/* High-Level Info Grid */}
                  <div className="grid grid-cols-2 gap-px bg-slate-100 border border-slate-100 rounded-xl overflow-hidden mb-6">
                    <div className="bg-white p-3">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Monthly</p>
                      <p className="text-sm font-black text-slate-900">₹{p.monthlyInstallment?.toLocaleString() || '1,000'}</p>
                    </div>
                    <div className="bg-white p-3 text-right">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Target Draw</p>
                      <p className="text-sm font-black text-slate-900">
                        {p.drawDate ? format(new Date(p.drawDate), 'MMM yyyy') : 'TBD'}
                      </p>
                    </div>
                  </div>

                  {/* Essential Value Statement */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-slate-600 group-hover:text-slate-900 transition-colors">
                      <div className="p-1.5 bg-blue-50 rounded-md"><Plane size={14} className="text-blue-600" /></div>
                      <span className="text-xs font-bold">Luxury Global Tour Package</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600 group-hover:text-slate-900 transition-colors">
                      <div className="p-1.5 bg-amber-50 rounded-md"><Coins size={14} className="text-amber-600" /></div>
                      <span className="text-xs font-bold">Silver/Gold Bullion Alternative</span>
                    </div>
                  </div>

                  {/* Bottom Footer */}
                  <div className="mt-auto pt-5 border-t border-slate-50 flex items-center justify-between">
                   
                    <div className="text-[11px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      More details <ChevronRight size={14} />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Motivation Footer */}
        <div className="mt-24 max-w-3xl mx-auto text-center">
          <p className="text-2xl font-light text-slate-400 leading-relaxed italic">
            "We believe that everyone deserves a <span className="text-slate-900 font-black">luxury experience</span>. Our transparent draw system turns small monthly savings into lifetime memories."
          </p>
          <div className="mt-8 flex justify-center items-center gap-3">
            <div className="h-px w-8 bg-slate-200" />
            <ShieldCheck size={20} className="text-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900">Harsha Lucky Trust Verified</span>
            <div className="h-px w-8 bg-slate-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pack;