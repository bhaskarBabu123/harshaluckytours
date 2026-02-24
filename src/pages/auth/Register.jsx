import React from 'react';
import { Link } from 'react-router-dom';
import { Send, ShieldCheck, ArrowLeft, Calendar, MapPin, Users } from 'lucide-react';

const Register = () => {
  const handleSendClick = () => {
    const phoneNumber = '+919019997133';
    const message = `🌟 *Membership Request - Harsha Lucky Tours* 🌟

Hi Team,

I'm interested in joining your luxury travel membership program from Karnataka!

Please send me complete details about:
✅ Monthly ₹1000 contribution process
✅ 28th Lucky Draw schedule  
✅ Guaranteed gift redemption
✅ How to start immediately

Looking forward to my first luxury world tour! ✈️🏖️

---
*Empowering Every Family to Explore the World Luxuriously*
Harsha Lucky Tours | Bangalore`;

    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-100 font-sans antialiased p-4 sm:p-6">
      {/* Main Container: Same Original Layout */}
      <div className="w-full max-w-[1000px] flex flex-col md:flex-row bg-white overflow-hidden sm:rounded-2xl shadow-2xl">
        
        {/* Left Visual: Same Size */}
        <div className="relative w-full md:w-4/12 h-32 md:h-auto overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1000&auto=format&fit=crop" 
            alt="Luxury Travel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-900/20 to-transparent flex flex-col justify-end p-6">
            <div className="hidden md:block">
              <h3 className="text-white text-xl font-semibold">Join 10,000+ Families</h3>
              <p className="text-slate-200 text-xs mt-2 leading-relaxed">
                One tap to request luxury tours with ₹1000/month
              </p>
            </div>
          </div>
          <Link to="/" className="absolute top-4 left-4 p-2 bg-white/20 backdrop-blur-md rounded-lg text-white md:hidden">
            <ArrowLeft size={18} />
          </Link>
        </div>

        {/* Right Content: Compact One-Click */}
        <div className="w-full md:w-8/12 p-6 sm:p-8 md:p-10">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-slate-800 tracking-tight">Request Membership</h2>
              <p className="text-slate-500 text-xs mt-1">One tap and our team will call you within 24hrs.</p>
            </div>
            <Send size={28} className="text-emerald-500 hidden sm:block" />
          </div>

          {/* Main Send Button */}
          <div className="mb-8">
            <button
              type="button"
              onClick={handleSendClick}
              className="w-full px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-xl text-sm font-semibold shadow-lg shadow-emerald-900/20 transition-all flex items-center justify-center gap-2 group"
            >
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              Send WhatsApp Request Now
            </button>
            <p className="text-center text-xs text-slate-500 mt-3 px-2">
              📱 +91 90199 97133 • Auto-opens WhatsApp with your request
            </p>
          </div>

          {/* 3-Step Journey - Compact */}
          <div className="space-y-4 border-t border-slate-100 pt-6">
            <h5 className="font-semibold text-slate-800 text-sm flex items-center gap-2 mb-4">
              <ShieldCheck size={16} className="text-emerald-500" />
              Simple 3-Step Journey
            </h5>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <StepCard number="1" title="Contribute" desc="₹1000/month" />
              <StepCard number="2" title="Lucky Draw" desc="28th Live Stream" />
              <StepCard number="3" title="Rewards" desc="Guaranteed Gifts" />
            </div>
          </div>

          <div className="text-center pt-6 mt-6 border-t border-slate-100">
            <p className="text-xs text-slate-500">
              Founded in Bangalore • 100% Transparent Process
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Compact Step Card
const StepCard = ({ number, title, desc }) => (
  <div className="group p-3 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 rounded-xl transition-all text-center text-xs">
    <div className="w-8 h-8 mx-auto mb-2 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-bold group-hover:bg-emerald-200 transition-all">
      {number}
    </div>
    <div className="font-medium text-slate-800 group-hover:text-emerald-700 mb-1 leading-tight">{title}</div>
    <div className="text-slate-500">{desc}</div>
  </div>
);

export default Register;
