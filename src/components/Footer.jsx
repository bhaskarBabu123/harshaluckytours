import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'
import { 
  Plane, Facebook, Twitter, Instagram, Youtube, 
  Mail, Phone, MapPin, ChevronRight, ShieldCheck 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 font-sans antialiased border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* 1. Brand Identity */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="harsha lucky tours" className='w-auto h-20' />
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white">Harsha Lucky Tours</h3>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">Travel Lucky Draw</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 font-medium">
              Revolutionizing the way you explore the world. Our unique membership schemes make premium travel accessible through transparent and fair lucky draws.
            </p>
            <div className="flex space-x-3 pt-2">
              {[
                { Icon: Facebook, color: 'hover:bg-blue-600' },
                { Icon: Twitter, color: 'hover:bg-sky-500' },
                { Icon: Instagram, color: 'hover:bg-pink-600' },
                { Icon: Youtube, color: 'hover:bg-red-600' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className={`p-2.5 bg-slate-900 rounded-lg transition-all duration-300 border border-slate-800 text-slate-400 hover:text-white ${social.color}`}
                >
                  <social.Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Navigation Matrix */}
          <div className="lg:pl-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white mb-8 border-l-2 border-blue-600 pl-4">
              Explore
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Home Portal', path: '/' },
                { name: 'About Company', path: '/about' },
                { name: 'Member Schemes', path: '/member/packages' },
                { name: 'Standard Tours', path: '/non-member/packages' },
                { name: 'Contact Desk', path: '/contact' }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm font-medium hover:text-blue-500 transition-colors flex items-center group"
                  >
                    <ChevronRight size={14} className="mr-2 text-slate-600 group-hover:text-blue-500 transition-all opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Operational Support */}
      

          {/* 4. Contact HQ */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white mb-8 border-l-2 border-blue-600 pl-4">
              Headquarters
            </h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-sm leading-relaxed text-slate-400 font-medium">
                  #2 Krishnappa Building, <br />
                  Ayyappa Hotel, Ramagondanahalli,<br />
                  Yelahanka, Bangalore 560064
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <Phone className="h-4 w-4 text-blue-500" />
                  <a href="tel:+919019997133" className="text-sm font-bold text-slate-200 hover:text-white transition-colors">
                    +91 90199 97133
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-4 w-4 text-blue-500" />
                  <a href="mailto:Harshaluckytours4565@gmail.com" className="text-sm font-medium text-slate-400 hover:text-white transition-colors truncate">
                    Harshaluckytours4565@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-blue-600 w-4 h-4" />
            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
              © {currentYear} Harsha Lucky Tours & Travels
            </p>
          </div>
          
          <div className="flex items-center space-x-8 text-[11px] font-bold uppercase tracking-widest">
            <Link to="/privacy-policy" className="text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;