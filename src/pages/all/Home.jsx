import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Gift, Users, Clock, Star, Shield, 
  MapPin, IndianRupee, Plane, CheckCircle, Sparkles, 
  TrendingUp, Globe, Award, HelpCircle, ChevronRight,
  ShieldCheck, Zap, Heart,
  Youtube,
  Trophy
} from 'lucide-react';
import { nonMemberPackages } from '../../data/nonMembers';
import Pack from './Pack';
import { giftCatalogue } from '../../data/gifts';

const Home = () => {
  return (
    <div className="bg-slate-50 font-sans antialiased">
      
      {/* 1. HERO SECTION - Ultra Modern Luxury */}
     <section className="relative h-[450px] md:h-[600px] flex items-center overflow-hidden">
           <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80" 
               className="w-full h-full object-cover" 
               alt="Luxury Resort" 
             />
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
           </div>
           <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full">
             <div className="max-w-2xl space-y-4 md:space-y-6">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#138cca] text-white rounded-md">
                 <Star className="w-3 h-3 fill-current" />
                 <span className="text-[10px] font-bold uppercase tracking-widest">Official Membership Circle</span>
               </div>
               <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight">Luxury Travel <br /><span className="text-[#138cca]">For Every Family.</span></h1>
               <p className="text-sm md:text-lg text-slate-300 leading-relaxed max-w-lg">
                 Harsha Lucky Tours is Bangalore's most trusted travel collective. By contributing just ₹1000 monthly, you join an elite circle of 500+ families enjoying 5-star hospitality without the financial burden.
               </p>
               <div className="flex flex-wrap gap-3 pt-2">
                 <Link to="/register" className="px-5 py-2.5 md:px-8 md:py-4 bg-[#138cca] text-white text-sm font-bold rounded-lg hover:bg-sky-700 transition-all flex items-center gap-2 shadow-lg shadow-sky-500/20">
                   Join Membership <ArrowRight className="w-4 h-4" />
                 </Link>
               </div>
             </div>
           </div>
         </section>
         <section className="bg-slate-900 border-y border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-4 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center animate-pulse shrink-0"><Youtube className="w-5 h-5 text-white" /></div>
              <div>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Next Live Draw</p>
                <p className="text-white text-sm font-bold">28th of every Month</p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0">
              <Users className="w-6 h-6 text-[#138cca] shrink-0" />
              <div>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Community Size</p>
                <p className="text-white text-sm font-bold">HappyActive Members</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Trophy className="w-6 h-6 text-amber-500 shrink-0" />
              <div>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest"> Rewards</p>
                <p className="text-white text-sm font-bold">Tours or  Gifts or Silver/Golds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS - Step-by-Step Clarity */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-tighter text-sm uppercase px-3 py-1 bg-blue-50 rounded-full">The Roadmap</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4">Simple. Transparent. Rewarding.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-0"></div>

            {[
              { 
                icon: <Users className="text-blue-600 h-8 w-8" />, 
                title: "Become a Member", 
                desc: "Choose your travel plan and complete a quick online registration to join the Harsha Lucky Tours family." 
              },
              { 
                icon: <Clock className="text-teal-600 h-8 w-8" />, 
                title: "Pay Monthly ₹1000", 
                desc: "Each on-time installment adds your name into that month's lucky draw. No heavy upfront costs." 
              },
              { 
                icon: <Award className="text-amber-500 h-8 w-8" />, 
                title: "Win or Get Rewarded", 
                desc: "Win in the live draw or complete your term to receive assured luxury trips or premium home gifts." 
              }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  {step.icon}
                </div>
                <div className="absolute top-8 right-8 text-4xl font-black text-slate-100">0{idx+1}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT US - Content Rich Branding */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Established Success</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">Monthly Savings Meet <br/> Dream Vacations</h3>
                <p className="mt-6 text-slate-600 text-lg leading-relaxed">
                  Harsha Lucky Tours was founded on the belief that luxury travel shouldn't be reserved for the elite. 
                  Since 2024, we've successfully helped hundreds of families travel the world through a transparent, 
                  community-driven savings model.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: <ShieldCheck className="text-emerald-500" />, title: "100% Verified Draws", desc: "Our lucky draws are conducted live with member presence." },
                  { icon: <Globe className="text-blue-500" />, title: "50+ Global Destinations", desc: "From local hidden gems to international paradises." },
                  { icon: <Heart className="text-rose-500" />, title: "Zero Loss Guarantee", desc: "If you don't win a draw, you get a premium guaranteed gift." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <div className="mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-900">{feature.title}</h4>
                      <p className="text-sm text-slate-500">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link to="/about" className="inline-flex items-center text-blue-600 font-bold hover:gap-2 transition-all">
                Read our full story <ChevronRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl"></div>
              
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600" className="rounded-3xl shadow-lg mt-12 hover:scale-105 transition-transform" alt="Travelers" />
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400" className="rounded-3xl shadow-lg hover:scale-105 transition-transform" alt="Beach" />
                  <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400" className="rounded-3xl shadow-lg hover:scale-105 transition-transform" alt="Mountains" />
                </div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-3xl shadow-2xl text-center border border-blue-50 min-w-[200px]">
                <div className="text-4xl font-black text-blue-600">100+</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Verified Winners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LIVE PACKAGES (MEMBER) */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            {/* <div>
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3">Active Draws</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Live Membership Schemes</h3>
            </div> */}
           
          </div>
          <Pack />
        </div>
      </section>

      {/* 5. TOUR REWARDS (NON-MEMBER) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Guaranteed Tour Rewards</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Available for all members who complete their installment terms.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonMemberPackages.slice(0, 6).map((pkg, i) => (
              <div key={i} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={pkg.images?.[0] || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500'} 
                    alt={pkg.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase text-blue-600">
                    Assured Package
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h4>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-4">{pkg.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.inclusions?.slice(0, 3).map((inc, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-600 text-[10px] px-2 py-1 rounded-lg font-bold">
                        {inc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GIFT CATALOGUE - Modern Grid */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Premium Home Gifts</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-16">
            Don't want the tour? Exchange your completion reward for high-value home electronics and luxury items.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {giftCatalogue.slice(0, 12).map((gift, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group">
                <div className="h-24 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <img src={gift.image} alt={gift.name} className="max-h-full object-contain filter brightness-110" />
                </div>
                <h5 className="text-xs font-bold text-slate-200 uppercase tracking-wider">{gift.name}</h5>
                <p className="text-[10px] text-teal-400 mt-2 font-medium">{gift.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US - Feature Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="text-blue-600" />, title: "Transparent Draws", desc: "Live results you can trust with verified third-party auditing." },
              { icon: <IndianRupee className="text-emerald-600" />, title: "Fixed ₹1000/mo", desc: "No hidden charges, no inflation. One simple price for everyone." },
              { icon: <Star className="text-amber-500" />, title: "Premium Stays", desc: "We partner exclusively with 4 and 5-star properties across India." },
              { icon: <HelpCircle className="text-indigo-600" />, title: "24/7 Concierge", desc: "A dedicated travel manager for every winner from start to finish." },
              { icon: <MapPin className="text-rose-500" />, title: "50+ Destinations", desc: "From Maldives beaches to Shimla snow - we cover it all." },
              { icon: <CheckCircle className="text-teal-600" />, title: "No Loss Policy", desc: "Everyone gets back value through guaranteed rewards or gifts." }
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-3xl border border-slate-100 hover:shadow-2xl transition-all group">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">{f.icon}</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Home;