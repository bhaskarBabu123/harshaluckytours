import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Eye, EyeOff, Mail, Lock, ShieldCheck, ArrowLeft, Globe } from 'lucide-react';
import LoadingSpinner from '../../components/LoadingSpinner';

const Login = () => {
  const [formData, setFormData] = useState({ phone: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await login(formData.phone, formData.password);
    if (result.success) navigate('/');
    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-100 font-sans antialiased p-0 sm:p-4">
      
      {/* Main Compact Container */}
      <div className="w-full max-w-[850px] flex flex-col md:flex-row bg-white overflow-hidden sm:rounded-2xl shadow-2xl min-h-[550px]">
        
        {/* Left Side: Professional Travel Visual (Hidden on small mobile if needed, or small height) */}
        <div className="relative w-full md:w-5/12 h-40 md:h-auto overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop" 
            alt="Travel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-6">
            <div className="hidden md:block">
              <h3 className="text-white text-xl font-semibold mb-1">Harsha Lucky Tours</h3>
              <p className="text-slate-200 text-xs">Explore the world with confidence.</p>
            </div>
          </div>
          <Link to="/" className="absolute top-4 left-4 p-2 bg-white/20 backdrop-blur-md rounded-lg text-white md:hidden">
            <ArrowLeft size={18} />
          </Link>
        </div>

        {/* Right Side: Compact Login Form */}
        <div className="w-full md:w-7/12 p-6 sm:p-10 flex flex-col justify-center">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-800">Welcome Back</h2>
            <p className="text-slate-500 text-sm mt-1">Please enter your credentials.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-600 ml-1">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail size={16} />
                </div>
                <input
                  name="phone"
                  type="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:bg-white focus:border-sky-500 transition-all outline-none"
                  placeholder="+91 000-0000-000"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-medium text-slate-600">Password</label>
                <button type="button" className="text-[11px] text-sky-600 hover:underline">Forgot?</button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock size={16} />
                </div>
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:bg-white focus:border-sky-500 transition-all outline-none"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Tight Action Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 px-6 py-3 bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-700 hover:to-emerald-700 text-white rounded-xl text-sm font-semibold shadow-md transition-all flex items-center justify-center gap-2"
            >
              {loading ? <LoadingSpinner size="sm" className="text-white" /> : 'Login to Account'}
            </button>

            <div className="text-center pt-4 border-t border-slate-100 mt-6">
              <p className="text-xs text-slate-500">
                New member?{' '}
                <Link to="/register" className="text-sky-600 font-semibold hover:text-emerald-600 transition-colors">
                Request Membership
                </Link>
              </p>
            </div>
          </form>

          {/* Security Footer */}
            <div className="text-center pt-4 border-t border-slate-100 mt-6">
              <p className="text-xs text-slate-500">
                Are you Admin?{' '}
                <Link to="/admin/login" className="text-sky-600 font-semibold hover:text-emerald-600 transition-colors">
                  Login
                </Link>
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;