import React, { useState } from 'react';
import { 
  Plane, Gift, MapPin, Youtube, ArrowRight, 
  ChevronRight, Star, ShieldCheck, Users, Trophy, 
  Clock, Plus, Minus, Phone, Mail, MessageSquare,
  PlayCircle, CheckCircle2, Globe, Heart, ShieldAlert,
  Calendar, Zap, Building2, Landmark, Camera
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { giftCatalogue } from '../../data/gifts';
import { nonMemberPackages } from '../../data/nonMembers';
import Pack from './Pack';

const About = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen antialiased">
      
      {/* --- 1. PREMIUM HERO BANNER --- */}
    

      {/* --- SECTION 1: VISION & MISSION --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-1 gap-16 items-center">
           
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 leading-tight">Empowering Every Family to <br />Explore the World Luxuriously.</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Founded in Bangalore, Harsha Lucky Tours was born from a simple observation: luxury travel is often overpriced and inaccessible. We pioneered a community-based contribution model where small monthly savings unlock massive lifestyle rewards. Our platform ensures that every single member receives value, whether through a lucky draw win or our guaranteed loyalty gift system.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                  <Globe className="w-6 h-6 text-[#138cca] mb-3" />
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Our Mission</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">To create a transparent, risk-free ecosystem where 10,000+ Karnataka families can vacation like royalty every year.</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                  <Heart className="w-6 h-6 text-red-500 mb-3" />
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Our Commitment</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">Every rupee you contribute is tracked, protected, and returned to the community through high-quality tours and premium products.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: HOW IT WORKS (ORIGINAL UI) --- */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold">Transparent Process. <br />Professional Management.</h2>
                <p className="text-slate-400 mt-4 text-sm">Follow our simple 3-step journey to your next vacation.</p>
              </div>
              
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#138cca] rounded-full flex items-center justify-center font-bold group-hover:scale-110 transition-transform">1</div>
                  <div>
                    <h4 className="text-lg font-bold">Monthly Contribution</h4>
                    <p className="text-slate-400 text-sm mt-1 leading-relaxed">Securely pay ₹1000 per month via our online portal or visit our Bangalore office. Each payment earns you a unique Token ID for the monthly draw.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#138cca] rounded-full flex items-center justify-center font-bold group-hover:scale-110 transition-transform">2</div>
                  <div>
                    <h4 className="text-lg font-bold">The 28th Lucky Draw</h4>
                    <p className="text-slate-400 text-sm mt-1 leading-relaxed">On the 28th of every month at 7:00 PM, we host a Live Stream on YouTube. We use a physical drum to pick tokens fairly in front of hundreds of viewers.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#138cca] rounded-full flex items-center justify-center font-bold group-hover:scale-110 transition-transform">3</div>
                  <div>
                    <h4 className="text-lg font-bold">Guaranteed Redemption</h4>
                    <p className="text-slate-400 text-sm mt-1 leading-relaxed">If you don't win a draw, don't worry! After completing your 6, 12, or 24-month cycle, you can claim a guaranteed premium gift like a Smart TV or Gold Coin.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-6 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase">Live Youtube Channel</span>
              </div>
              <div className="aspect-video bg-slate-800 rounded-2xl flex items-center justify-center mb-6 relative group overflow-hidden">
                <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" alt="Live Draw" />
                <Youtube className="w-16 h-16 text-red-600 relative z-10" />
              </div>
              <div className="text-center space-y-2">
                <p className="text-sm font-bold"> Draw: Every Month 28th, 7:00 PM</p>
                <p className="text-xs text-slate-400 italic">"Join to live viewers and see the winners picked in real-time."</p>
                {/* <button className="mt-4 px-6 py-2 bg-red-600 text-white text-[10px] font-bold rounded-full uppercase tracking-widest hover:bg-red-700 transition-colors">Subscribe to Channel</button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: REWARDS & TOURS --- */}
     <section className="py-16 bg-gradient-to-br from-slate-50 to-sky-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center px-4 py-1.5 bg-sky-100 text-sky-800 rounded-full mb-4 mx-auto">
        <span className="text-xs mr-2">🎯</span>
        <span className="text-[11px] font-medium tracking-wide">Dream Scheme Packages</span>
      </div>
      <h2 className="text-2xl md:text-3xl font-normal text-slate-900 mb-3">
        Win vacations or premium gifts
      </h2>
      <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
        ₹1000/month enters monthly lucky draws. Every member gets guaranteed rewards.
      </p>
    </div>

    {/* Live Packages - Compact horizontal scroll */}
    <div className="mb-16">
     
      <Pack />
    </div>

    {/* Non-Member Rewards */}
    <div className="space-y-12">
      {/* Tours */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sky-50 rounded-lg flex items-center justify-center">
              <MapPin className="w-4 h-4 text-sky-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-900">Tour Rewards</h3>
              <p className="text-xs text-slate-600">Guaranteed for loyal members</p>
            </div>
          </div>
          <Link to="/rewards/tours" className="text-sky-600 hover:text-sky-700 text-xs font-medium flex items-center">
            More tours <ArrowRight className="ml-1 w-3 h-3" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nonMemberPackages.slice(0, 6).map((pkg, i) => (
            <div key={i} className="group bg-white border border-slate-100 rounded-lg overflow-hidden hover:border-sky-200 transition-colors">
              <div className="h-32 w-full overflow-hidden bg-slate-50">
                <img 
                  src={pkg.images?.[0] || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop'}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="text-sm font-medium text-slate-900 mb-2 line-clamp-1">{pkg.name}</h4>
                <p className="text-xs text-slate-600 mb-3 line-clamp-2">{pkg.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {pkg.inclusions?.slice(0, 3).map((item, j) => (
                    <span key={j} className="text-[10px] bg-sky-50 text-sky-700 px-2 py-0.5 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-emerald-600">For Other members</span>
                  {/* <Link to={`/tour/${pkg.id}`} className="text-xs text-sky-600 font-medium">Details →</Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gifts */}
      <div>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center">
              <Gift className="w-4 h-4 text-amber-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-900">Home Gifts</h3>
              <p className="text-xs text-slate-600">Premium assured rewards</p>
            </div>
          </div>
          <span className="text-xs text-slate-500">Doorstep delivery</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {giftCatalogue.slice(0, 12).map((gift, i) => (
            <div key={i} className="group bg-white border border-slate-100 rounded-lg overflow-hidden hover:border-sky-200 transition-colors">
              <div className="h-24 w-full overflow-hidden bg-slate-50">
                <img 
                  src={gift.image || 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop&crop=face'}
                  alt={gift.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-3">
                <h5 className="text-[13px] font-medium text-slate-900 mb-1 line-clamp-1">{gift.name}</h5>
                <p className="text-[11px] text-slate-600 line-clamp-1">{gift.benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="text-center pt-12 border-t border-slate-200 mt-16">
      <p className="text-sm md:text-base text-slate-700 mb-6 max-w-2xl mx-auto">
        Start with ₹1000/month. Win dream trips or guaranteed rewards.
      </p>
      <Link
        to="/register"
        className="inline-flex items-center px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium rounded-lg transition-colors"
      >
        Join now
        <ArrowRight className="ml-2 w-4 h-4" />
      </Link>
    </div>
  </div>
</section>

      {/* --- SECTION 4: TRUST & COMPLIANCE --- */}
   

      {/* --- SECTION 5: CONTACT & FAQ --- */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "What is the token ID?", a: "Every time you pay your ₹1000 monthly contribution, a unique token ID is generated and sent to your WhatsApp. This ID is what goes into the physical drum for the live draw." },
                  { q: "Can I cancel my membership early?", a: "Yes, you can cancel at any time. However, to receive a guaranteed gift, you must complete the full cycle (6, 12, or 24 months) you signed up for." },
                  { q: "Is the live draw truly fair?", a: "Absolutely. We invite any active member to visit our office on the 28th to witness the draw in person. We use a transparent rotating drum and pick numbers live without any cuts or edits." }
                ].map((faq, i) => (
                  <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <button onClick={() => toggleFaq(i)} className="w-full flex justify-between items-center p-4 text-left">
                      <span className="text-sm font-bold text-slate-800">{faq.q}</span>
                      {openFaq === i ? <Minus className="w-4 h-4 text-[#138cca]" /> : <Plus className="w-4 h-4 text-slate-400" />}
                    </button>
                    {openFaq === i && <p className="px-4 pb-4 text-xs text-slate-500 leading-relaxed border-t border-slate-50 pt-3">{faq.a}</p>}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#138cca] rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <h3 className="text-2xl font-bold mb-6">Start Your Journey Today</h3>
              <p className="text-sky-100 text-sm mb-10 leading-relaxed">Have questions? Join 500+ happy families or talk to our member support team right now. We are open Monday to Saturday, 10 AM to 7 PM.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-center">
                   <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0"><Phone className="w-4 h-4" /></div>
                   <div><p className="text-[10px] uppercase font-bold opacity-60">Hotline</p><p className="text-sm font-bold">+91 9019997133 / +91 9611581384</p></div>
                </div>
                <div className="flex gap-4 items-center">
                   <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0"><Mail className="w-4 h-4" /></div>
                   <div><p className="text-[10px] uppercase font-bold opacity-60">Email Support</p><p className="text-sm font-bold">Harshaluckytours4565@gmail.com</p></div>
                </div>
                <div className="flex gap-4 items-center">
                   <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0"><MapPin className="w-4 h-4" /></div>
                   <div><p className="text-[10px] uppercase font-bold opacity-60">Bangalore Office</p><p className="text-sm font-bold">#2 Krishnappa building, near Ayyappa hotel Ramagondanahalli S N halli post Yelahanka’ Bangalore 560064</p></div>
                </div>
              </div>

              <Link to="/register" className="mt-12 w-full py-4 bg-white text-[#138cca] font-black text-center rounded-xl flex items-center justify-center gap-2 hover:bg-sky-50 transition-all uppercase text-xs tracking-widest shadow-xl">
                Join the Circle Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default About;