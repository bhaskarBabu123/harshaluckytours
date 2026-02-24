// src/components/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './logo.png';
import {
  Menu, X, Home, FileText, MessageCircle, ChevronRight, Shield,
  ChevronDown, Package, User, LogOut, CreditCard, Bell, Settings,
  Users, Gift,
  Building
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const userMenuRef = useRef(null);
  const location = useLocation();
  const { user, logout, isAuthenticated, isAdmin } = useAuth();

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false);
    setIsPackagesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const publicLinks = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/about', label: 'About', icon: FileText },
    // { to: '/member/packages', label: 'Packages', icon: Package },
    // { to: '/non-member/packages', label: 'Other Packages', icon: Package },
    { to: '/contact', label: 'Contact', icon: MessageCircle },
    { to: '/terms-and-conditions', label: 'Terms & Conditions', icon: Building },
  ];

  const userLinks = [
    { to: '/dashboard', label: 'Dashboard', icon: Package },
    { to: '/profile', label: 'Profile', icon: User },
    { to: '/payments', label: 'Payments', icon: CreditCard },
    { to: '/draws', label: 'My Draws', icon: Bell },
  ];

  const adminLinks = [
    { to: '/admin/dashboard', label: 'Dashboard', icon: Settings },
    { to: '/admin/packages', label: 'Packages', icon: Package },
    { to: '/admin/users', label: 'Users', icon: Users },
    { to: '/admin/payments', label: 'Payments', icon: CreditCard },
  ];

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
              <img src={logo} alt="Harsha Lucky Tours" className="h-20 w-auto bg-gray-800" />
              <div className="hidden sm:block">
                <h1 className="text-lg font-medium text-slate-900 leading-tight">Harsha Lucky Tours</h1>
                <p className="text-xs text-slate-500 tracking-wide">Travel Lucky Draw</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {publicLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`text-sm font-medium px-2 py-1 rounded-md transition-all duration-200 relative ${
                    isActive(to)
                      ? 'text-sky-600 bg-sky-50 border-b-2 border-sky-600'
                      : 'text-slate-700 hover:text-sky-600 hover:bg-sky-50'
                  }`}
                >
                  {label}
                </Link>
              ))}

              <div className="relative">
                <button
                  className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-sky-600 transition-all duration-200 px-2 py-1 rounded-md hover:bg-sky-50 group"
                  onClick={() => setIsPackagesOpen(!isPackagesOpen)}
                >
                  Packages
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isPackagesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isPackagesOpen && (
                  <div className="absolute top-full left-0 mt-1.5 w-56 bg-white border border-slate-200 rounded-xl shadow-sm z-30">
                    <Link
                      to="/member/packages"
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-600 rounded-t-xl transition-colors"
                    >
                      Lucky Draw Packages
                    </Link>
                    <Link
                      to="/non-member/packages"
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-600 rounded-b-xl transition-colors"
                    >
                      Reward Packages
                    </Link>
                  </div>
                )}
              </div>
            </nav>

            <div className="flex items-center gap-3">
              {isAuthenticated ? (
                <>
                  {/* <Link to="/notifications" className="relative p-2 text-slate-600 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-all">
                    <Bell className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center font-medium">3</span>
                  </Link> */}

                  <div className="relative" ref={userMenuRef}>
                    <button
                      onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                      className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-sky-600 transition-all p-2 hover:bg-sky-50 rounded-lg"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-sky-100 to-teal-100 rounded-full flex justify-center items-center">
                        <User className="w-4 h-4 text-sky-600" />
                      </div>
                      <span className="hidden lg:block max-w-[120px] truncate">{user?.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isUserMenuOpen && (
                      <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden z-40">
                        <div className="p-4 border-b border-slate-100 bg-slate-50">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-sky-100 to-teal-100 rounded-full flex items-center justify-center">
                              <User className="w-5 h-5 text-sky-600" />
                            </div>
                            <div className="min-w-0">
                              <p className="font-medium text-sm text-slate-900 truncate">{user?.name}</p>
                              <p className="text-xs text-slate-500">{user?.email}</p>
                            </div>
                          </div>
                        </div>
                        <div className="py-1">
                          {(isAdmin ? adminLinks : userLinks).map(({ to, label, icon: Icon }) => (
                            <Link
                              key={to}
                              to={to}
                              onClick={() => setIsUserMenuOpen(false)}
                              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all ${
                                isActive(to)
                                  ? 'bg-sky-50 text-sky-600 border-sky-200'
                                  : 'text-slate-700 hover:bg-slate-50 hover:text-sky-600'
                              }`}
                            >
                              <Icon className="w-4 h-4 flex-shrink-0" />
                              <span className="truncate">{label}</span>
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-slate-100">
                          <button
                            onClick={() => {
                              logout();
                              setIsUserMenuOpen(false);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 transition-all"
                          >
                            <LogOut className="w-4 h-4" />
                            <span>Sign out</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              ) : (
               <div className="flex items-center gap-2 lg:gap-3 hidden md:flex">
                  <Link
                    to="/login"
                    className="text-sm font-medium text-slate-700 hover:text-sky-600 px-4 py-2 hover:bg-sky-50 rounded-lg transition-all lg:px-5"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/register"
                    className="text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all lg:px-6 lg:py-2.5"
                  >
                    Join Now
                  </Link>
                </div>
              )}

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-1.5 text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-all"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-[9999]">
         <div 
      className="fixed overflow-auto right-0 top-0 h-full w-80 bg-white border-l border-slate-200 shadow-2xl z-[10000] transform translate-x-full transition-transform duration-300 ease-in-out"
      style={{ transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}
    >
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
                <img src={logo} alt="Logo" className="h-12 w-auto" />
                <div>
                  <h2 className="text-lg font-medium text-slate-900">Harsha Lucky Tours</h2>
                  <p className="text-xs text-slate-500">Lucky Travel Scheme</p>
                </div>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-all"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {publicLinks.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-xl text-base font-medium transition-all ${
                    isActive(to)
                      ? 'bg-sky-50 text-sky-700 border border-sky-200'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-sky-700'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span>{label}</span>
                </Link>
              ))}

              <div>
                <span className="block px-3 py-1 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Packages</span>
                <Link
                  to="/member/packages"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-xl text-base font-medium transition-all ${
                    isActive('/member/packages')
                      ? 'bg-sky-50 text-sky-700 border border-sky-200'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-sky-700'
                  }`}
                >
                  <Package className="w-5 h-5" />
                  <span>Lucky Draw</span>
                </Link>
                <Link
                  to="/non-member/packages"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-xl text-base font-medium transition-all ${
                    isActive('/non-member/packages')
                      ? 'bg-sky-50 text-sky-700 border border-sky-200'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-sky-700'
                  }`}
                >
                  <Gift className="w-5 h-5" />
                  <span>Rewards</span>
                </Link>
              </div>

              {isAuthenticated ? (
                <div className="pt-4 mt-4 border-t border-slate-100 space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-sky-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-base text-slate-900 truncate">{user?.name}</p>
                      <p className="text-sm text-slate-500 truncate">{user?.email}</p>
                    </div>
                  </div>
                  {(isAdmin ? adminLinks : userLinks).map(({ to, label, icon: Icon }) => (
                    <Link
                      key={to}
                      to={to}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 p-3 rounded-xl text-base font-medium transition-all ${
                        isActive(to)
                          ? 'bg-sky-50 text-sky-700 border border-sky-200'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-sky-700'
                      }`}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span>{label}</span>
                    </Link>
                  ))}
                  <button
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 p-3 rounded-xl text-base font-medium text-red-600 hover:bg-red-50 transition-all"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <div className="pt-4 mt-4 border-t border-slate-100 space-y-3">
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center px-8 py-3 border-2 border-slate-200 text-slate-700 rounded-xl text-base font-medium hover:border-sky-300 hover:text-sky-700 hover:bg-sky-50 transition-all"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center px-8 py-3 bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-700 hover:to-emerald-700 text-white rounded-xl text-base font-semibold shadow-sm hover:shadow-md transition-all"
                  >
                    Join Now
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div 
            className="lg:hidden fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      )}
    </>
  );
};

export default Header;
