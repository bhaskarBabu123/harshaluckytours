import React from 'react';
import { 
  Phone, Mail, MapPin, Clock, Globe, 
  Calendar, Users, Award, ShieldCheck, 
  Package, MessageSquare, ArrowUpRight
} from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-[#fafafa] font-sans antialiased text-slate-600">
      
      {/* Hero Section - Minimalist & Airy */}
      <section className="relative pt-32 pb-16 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-slate-500">Online Support Available</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight mb-4">
            Contact <span className="text-blue-600">Concierge</span>
          </h1>
          <p className="text-sm md:text-base text-slate-500 max-w-xl leading-relaxed font-light">
            Professional assistance for the Harsha Lucky Tours monthly schemes. Reach out to our Bangalore headquarters for membership inquiries.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          
          {/* Communication Channels */}
          <div className="space-y-10">
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-slate-400 mb-6">Communication</h3>
              <div className="space-y-6">
                <a href="tel:+919019997133" className="group flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-lg bg-white border border-slate-100 group-hover:border-blue-200 transition-colors">
                    <Phone className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 mb-0.5">Primary Line</p>
                    <p className="text-sm text-slate-800 font-medium">+91 90199 97133</p>
                  </div>
                </a>
                
                <a href="mailto:Harshaluckytours4565@gmail.com" className="group flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-lg bg-white border border-slate-100 group-hover:border-blue-200 transition-colors">
                    <Mail className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] text-slate-400 mb-0.5">Email Support</p>
                    <p className="text-sm text-slate-800 font-medium truncate">Harshaluckytours4565@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-10">
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-slate-400 mb-6">Headquarters</h3>
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-lg bg-white border border-slate-100">
                  <MapPin className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-800 leading-relaxed font-medium">
                    #2 Krishnappa Building, Ramagondanahalli,<br />
                    Yelahanka, Bangalore 560064
                  </p>
                  <p className="text-[11px] text-slate-400 mt-2">S N Halli Post, Karnataka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="space-y-10">
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-slate-400 mb-6">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Weekdays</span>
                  <span className="text-slate-800 font-medium text-xs">09:00 — 19:00</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Weekends</span>
                  <span className="text-slate-800 font-medium text-xs">10:00 — 17:00</span>
                </div>
                <div className="flex items-center gap-2 mt-4 text-[10px] text-emerald-600 font-medium uppercase tracking-wider">
                  <ShieldCheck className="w-3 h-3" />
                  24/7 Travel Emergency Support
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {[
            { label: "WhatsApp", icon: <MessageSquare />, link: "https://wa.me/919019997133" },
            { label: "View Schemes", icon: <Package />, link: "/member/packages" },
            { label: "Our Members", icon: <Users />, link: "/register" },
            { label: "Global Tours", icon: <Globe />, link: "#" }
          ].map((item, i) => (
            <a key={i} href={item.link} className="flex flex-col items-center justify-center p-6 bg-white border border-slate-100 rounded-xl hover:shadow-sm hover:border-blue-100 transition-all group">
              <div className="text-slate-400 group-hover:text-blue-500 transition-colors mb-3">
                {React.cloneElement(item.icon, { size: 18, strokeWidth: 1.5 })}
              </div>
              <span className="text-[11px] font-medium tracking-wider uppercase text-slate-600">{item.label}</span>
            </a>
          ))}
        </div>

        {/* Action Banner */}
        <div className="relative rounded-2xl overflow-hidden bg-slate-900 p-12 text-center">
          <div className="relative z-10">
            <h2 className="text-2xl font-light text-white mb-4 tracking-tight">Ready to begin your journey?</h2>
            <p className="text-slate-400 text-xs uppercase tracking-[0.3em] mb-8 font-medium">Join 350+ Families in Bangalore</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/919019997133" className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-lg hover:bg-blue-500 transition-colors flex items-center justify-center gap-2">
                Secure Membership <ArrowUpRight size={14} />
              </a>
              <a href="tel:+919019997133" className="w-full sm:w-auto px-8 py-3 bg-white/5 text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                Quick Callback
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-[10px] text-slate-400 uppercase tracking-[0.4em]">Harsha Lucky Tours & Travels • Est. 2024</p>
      </footer>
    </div>
  );
};

export default Contact;