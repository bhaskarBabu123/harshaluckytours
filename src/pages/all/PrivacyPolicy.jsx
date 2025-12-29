import React from 'react';
import { 
  Shield, Lock, Eye, Users, FileText, Phone, 
  Trophy, Scale, Mail, CheckCircle, Info,
  ExternalLink, Clock, ShieldCheck
} from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Scheme Enrollment & Membership Data',
      icon: FileText,
      description: 'The data we collect to manage your ₹1000 monthly contributions.',
      content: [
        'Legal identification for prize claim verification and government compliance.',
        'Registered mobile number for WhatsApp draw alerts and payment receipts.',
        'Nominee information for the transfer of travel benefits.',
        'Detailed transaction history of monthly scheme deposits.',
        'Postal address for the delivery of membership kits and physical prizes.'
      ]
    },
    {
      title: 'Lucky Draw & Winner Transparency',
      icon: Trophy,
      description: 'Privacy protocols during our public draw events.',
      content: [
        'Public announcement of winner names and local cities to ensure draw fairness.',
        'Archiving of live-streamed draw videos for audit and legal verification.',
        'Optional use of winner testimonials and photos for promotional marketing.',
        'Data validation to ensure only one entry per valid monthly payment.'
      ]
    },
    {
      title: 'Data Utilization & Logistics',
      icon: Users,
      description: 'How your information powers our travel services.',
      content: [
        'Verification of eligibility for the monthly lucky draw cycles.',
        'Coordination with airline and hotel partners for tour package fulfillment.',
        'Automated tracking of the 12/24-month scheme maturity benefits.',
        'Direct communication for payment reminders and scheme milestones.',
        'Adherence to Bangalore regional travel and trade regulations.'
      ]
    },
    {
      title: 'Security & Payment Protection',
      icon: Lock,
      description: 'Industry-standard safeguards for your privacy.',
      content: [
        'Encrypted database storage for all member contribution records.',
        'Limited administrative access to sensitive financial information.',
        'SSL encryption for all web-based payment processing sessions.',
        'Redundant cloud backups to prevent any loss of scheme progress data.'
      ]
    }
  ];

  return (
    <div className="bg-white font-sans antialiased text-slate-800">
      
      {/* 1. Header Section - Solid & Professional */}
      <section className="pt-32 pb-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-500/10 border border-blue-500/30 mb-6">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span className="text-[11px] uppercase tracking-widest font-bold text-blue-300">Official Privacy Policy</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Data Protection & <span className="text-blue-500">Legal Privacy</span>
              </h1>
              <p className="text-base text-slate-400 leading-relaxed font-normal">
                Effective Date: January 1, 2025. This policy details our rigorous standards for handling member data within the Harsha Lucky Tours monthly scheme ecosystem.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-700 flex items-center justify-center">
                <Shield size={64} className="text-blue-500 opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-16">
        
        {/* 2. Professional Compliance Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { label: 'No Third-Party Sales', desc: 'Data is never sold or traded.', icon: Eye },
            { label: 'Payment Encryption', desc: 'Secure monthly deposits.', icon: Lock },
            { label: 'Draw Audit Ready', desc: '100% transparent operations.', icon: Scale }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-6 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="p-3 bg-white rounded-lg shadow-sm text-blue-600">
                <item.icon size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{item.label}</p>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Core Policy Sections */}
        <div className="grid grid-cols-1 gap-8 mb-16">
          {sections.map((section, idx) => (
            <div key={idx} className="group bg-white p-8 md:p-10 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                      <section.icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{section.title}</h3>
                  </div>
                  <p className="text-sm text-slate-500 pr-4">{section.description}</p>
                </div>
                <div className="md:w-2/3">
                  <ul className="grid grid-cols-1 gap-4">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <CheckCircle className="mt-1 w-4 h-4 text-blue-500 flex-shrink-0" />
                        <p className="text-sm text-slate-700 leading-relaxed font-medium">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Rights & Cookies Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-900 rounded-2xl p-10 text-white shadow-xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Info className="text-blue-400" /> Member Rights
            </h3>
            <div className="space-y-4">
              {[
                { title: 'Access', text: 'Request a full statement of your scheme contributions.' },
                { title: 'Correction', text: 'Update your draw contact details at any time.' },
                { title: 'Portability', text: 'Export your travel history and membership status.' }
              ].map((right, i) => (
                <div key={i} className="pb-4 border-b border-slate-800 last:border-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">{right.title}</p>
                  <p className="text-sm text-slate-400 font-medium">{right.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-10">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Clock className="text-blue-600" /> Retention Policy
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-medium mb-6">
              Membership data is retained for the duration of your scheme (12–24 months) plus 2 years for tax and legal compliance in Bangalore jurisdiction.
            </p>
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-tighter">
                <span>Active Schemes</span>
                <span className="text-emerald-600">Secure Storage</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Support Action */}
        <div className="bg-blue-600 rounded-2xl p-10 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Privacy Questions?</h3>
          <p className="text-blue-100 mb-8 font-medium">Contact our compliance team for data inquiries.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:privacy@harshaluckytours.com" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
              <Mail size={16} /> Email Office
            </a>
            <a href="tel:+919019997133" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-blue-800 transition-all border border-blue-500 flex items-center justify-center gap-2">
              <Phone size={16} /> +91 90199 97133
            </a>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-slate-200 text-center">
        <p className="text-[11px] text-slate-500 font-bold uppercase tracking-[0.3em]">
          Harsha Lucky Tours & Travels • Bengaluru, India
        </p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;