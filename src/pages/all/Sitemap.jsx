import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, Package, Users, Phone, FileText, Shield, 
  ExternalLink, Map, Compass, Globe, CreditCard,
  ChevronRight, Bookmark, LayoutGrid, Lock, User
} from 'lucide-react';

const Sitemap = () => {
  // Main Navigation mapped directly to your App.jsx routes
  const mainNavigation = [
    { title: 'Home Portal', path: '/', icon: Home, desc: 'Primary gateway and company overview.' },
    { title: 'Member Packages', path: '/member/packages', icon: Bookmark, desc: 'Exclusive ₹1000/mo lucky draw programs.' },
    { title: 'Non-Member Packages', path: '/non-member/packages', icon: Package, desc: 'Fixed-price luxury travel bookings.' },
    { title: 'About Company', path: '/about', icon: Users, desc: 'Our mission, history, and travel philosophy.' },
    { title: 'Contact Support', path: '/contact', icon: Phone, desc: 'Direct lines for Bangalore headquarters.' },
    { title: 'Privacy Policy', path: '/privacy-policy', icon: Shield, desc: 'Legal documentation and data security.' }
  ];

  const authLinks = [
    { title: 'Member Login', path: '/login', icon: User },
    { title: 'Create Account', path: '/register', icon: ExternalLink },
    { title: 'Admin Gateway', path: '/admin/login', icon: Lock }
  ];

  const packageCategories = [
    {
      label: 'Scheme Destinations',
      icon: <Compass className="w-4 h-4" />,
      items: [
        'Shirdi Bheema Shankara', 
        'Kerala Backwaters', 
        'Goa Beach Carnival', 
        'Mysore Heritage', 
        'Coorg Plantation', 
        'Hampi Historical'
      ]
    },
    {
      label: 'Global & Premium',
      icon: <Globe className="w-4 h-4" />,
      items: [
        'Thailand Explorer', 
        'Andaman Paradise', 
        'Rajasthan Royal', 
        'Kashmir Valley', 
        'Manali Adventure', 
        'Dubai Skyline'
      ]
    }
  ];

  return (
    <div className="bg-[#fafafa] font-sans antialiased text-slate-700 pb-24">
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-blue-600"></div>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-600">Site Directory</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            System <span className="text-slate-400 font-light">Architecture</span>
          </h1>
          <p className="text-sm text-slate-500 max-w-xl leading-relaxed font-medium">
            Centralized navigation index for Harsha Lucky Tours. Access membership portals, package inventories, and legal documentation.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-16">
        
        {/* 1. Main Navigation Grid */}
        <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-8 flex items-center gap-2">
          <LayoutGrid size={14} /> Core Platform Pages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {mainNavigation.map((page, idx) => (
            <Link 
              key={idx} 
              to={page.path}
              className="group bg-white border border-slate-200 p-6 rounded-xl hover:border-blue-400 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-50 rounded-lg text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                  <page.icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-blue-600 flex items-center gap-1">
                    {page.title} <ChevronRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-[12px] text-slate-500 leading-relaxed font-medium">{page.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 2. Package Inventory & Auth Actions */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {packageCategories.map((cat, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-900 flex items-center gap-2">
                    {cat.icon} {cat.label}
                  </span>
                </div>
                <div className="p-6 grid grid-cols-1 gap-3">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 cursor-default transition-colors">
                      <div className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Access & Security Sidebar */}
          <div className="space-y-6">
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-lg font-bold mb-6 tracking-tight">Account Access</h3>
              <div className="space-y-4">
                {authLinks.map((link, i) => (
                  <Link 
                    key={i} 
                    to={link.path} 
                    className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-colors"
                  >
                    <link.icon size={16} className="text-blue-500" />
                    {link.title}
                  </Link>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-800">
                <p className="text-[11px] text-slate-400 leading-relaxed mb-4 font-medium">
                  Need a custom itinerary? Contact our Bangalore desk.
                </p>
                <a href="tel:+919019997133" className="block w-full text-center py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-[11px] font-bold uppercase tracking-widest transition-colors">
                  Call Support
                </a>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-blue-600 mb-2">
                <CreditCard size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Secure Payments</span>
              </div>
              <p className="text-[11px] text-blue-700 font-medium leading-relaxed">
                All ₹1000 scheme contributions are tracked via our secure internal ledger system.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Structural Hierarchy Footer */}
        <div className="border-t border-slate-200 pt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-6">Discovery</h4>
              <ul className="space-y-3 text-[12px] font-medium text-slate-500">
                <li><Link to="/member/packages" className="hover:text-blue-600">Member Schemes</Link></li>
                <li><Link to="/non-member/packages" className="hover:text-blue-600">Direct Booking</Link></li>
                <li className="hover:text-blue-600 cursor-pointer">Weekend Trips</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-6">Company</h4>
              <ul className="space-y-3 text-[12px] font-medium text-slate-500">
                <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
                <li className="hover:text-blue-600 cursor-pointer">Global Partners</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-6">Legal</h4>
              <ul className="space-y-3 text-[12px] font-medium text-slate-500">
                <li><Link to="/privacy-policy" className="hover:text-blue-600">Privacy Policy</Link></li>
                <li className="hover:text-blue-600 cursor-pointer">Terms of Service</li>
                <li className="hover:text-blue-600 cursor-pointer">Refund Policy</li>
              </ul>
            </div>
            <div className="flex flex-col items-end">
              <div className="p-4 bg-slate-100 rounded-xl inline-block">
                <Map className="text-slate-400" size={32} strokeWidth={1} />
              </div>
              <p className="mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] text-right leading-loose">
                Harsha Lucky Tours<br />Bangalore, KA 560064
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 text-center">
        <p className="text-[10px] text-slate-400 uppercase tracking-[0.4em]">Site Index Verified • 2025</p>
      </footer>
    </div>
  );
};

export default Sitemap;