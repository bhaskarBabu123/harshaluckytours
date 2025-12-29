import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, Users, MapPin, CheckCircle, ArrowRight, 
  Gift, Plane, Package, ShieldCheck, Sparkles, 
  ShoppingBag, ChevronRight, ArrowUpRight, Trophy, Landmark
} from 'lucide-react';
import { nonMemberPackages } from '../../data/nonMembers';
import { giftCatalogue } from '../../data/gifts';

const NonMemberPackages = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      
      {/* --- PROFESSIONAL HEADER (MATCHING PACK COMPONENT) --- */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1 w-12 bg-blue-600 rounded-full" />
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-blue-600">Loyalty Redemption</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter mb-4">
              Guaranteed <span className="text-slate-300 font-light">Rewards</span>
            </h2>
            <p className="text-slate-500 font-medium max-w-lg text-sm leading-relaxed">
              Every commitment is valued. If your scheme concludes without a draw win, 
              redeem your total contribution value for these premium assets.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="text-right">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Options</p>
              <p className="text-2xl font-black text-slate-900">25+ Items</p>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div className="text-right">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Status</p>
              <p className="text-2xl font-black text-emerald-600 uppercase">Redeemable</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- TOUR OPTIONS (PREMIUM GRID) --- */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 flex items-center gap-2">
            <Plane size={14} className="text-blue-600" /> 01. Premium Tour Redemptions
          </h3>
          <div className="h-px flex-1 bg-slate-50 mx-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nonMemberPackages.map((pkg, index) => (
            <article key={pkg.id} className="group border border-slate-200 rounded-xl overflow-hidden hover:border-slate-950 transition-all duration-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden relative">
                <img src={pkg.images[0]} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-sm text-white px-2 py-1 rounded text-[9px] font-black uppercase tracking-widest">
                  Value Recovered
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-black text-slate-950 leading-tight group-hover:text-blue-600 transition-colors uppercase tracking-tighter">
                    {pkg.name}
                  </h4>
                  <ArrowUpRight size={18} className="text-slate-300 group-hover:text-blue-600" />
                </div>

                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wide leading-relaxed mb-6 line-clamp-2">
                  {pkg.description}
                </p>

                <div className="grid grid-cols-2 gap-2 mt-auto">
                  {pkg.inclusions.slice(0, 2).map((item, i) => (
                    <div key={i} className="bg-slate-50 p-2 rounded-lg flex items-center gap-2">
                      <CheckCircle size={10} className="text-blue-600" />
                      <span className="text-[9px] font-black uppercase tracking-tight text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* --- GIFT CATALOGUE (TINY COMPACT GRID) --- */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 flex items-center gap-2">
              <Gift size={14} className="text-blue-600" /> 02. Premium Home Assets
            </h3>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Doorstep Delivery Guaranteed</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {giftCatalogue.map((gift) => (
              <div key={gift.id} className="bg-white border border-slate-200 rounded-xl p-4 hover:border-slate-950 transition-all group">
                <div className="aspect-square rounded-lg overflow-hidden bg-slate-50 mb-4">
                  <img src={gift.image} alt={gift.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <p className="text-[10px] font-black text-slate-900 uppercase tracking-tight mb-1 line-clamp-1">{gift.name}</p>
                <div className="flex items-center justify-between mt-3">
                   <span className="text-[8px] font-black text-blue-600 uppercase tracking-widest">{gift.benefit}</span>
                   <ChevronRight size={12} className="text-slate-300 group-hover:text-slate-950 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER MOTIVATION --- */}
      <div className="max-w-3xl mx-auto text-center py-24 px-6">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full mb-8">
          <ShieldCheck size={14} />
          <span className="text-[9px] font-black uppercase tracking-widest">Anti-Loss Protection Verified</span>
        </div>
        <h3 className="text-2xl font-light text-slate-400 leading-relaxed italic mb-8">
          "Our loyalty program ensures that every member is a <span className="text-slate-900 font-black tracking-tight">beneficiary</span>. Whether through the draw or through guaranteed redemption, your value is secured."
        </h3>
        <div className="flex justify-center items-center gap-4">
          <div className="h-[1px] w-12 bg-slate-200" />
          <Landmark size={20} className="text-slate-900" />
          <div className="h-[1px] w-12 bg-slate-200" />
        </div>
      </div>
    </div>
  );
};

export default NonMemberPackages;