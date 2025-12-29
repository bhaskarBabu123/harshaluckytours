import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Eye, EyeOff, User, Mail, Phone, MapPin, Calendar, ArrowLeft, ShieldCheck } from 'lucide-react';
import LoadingSpinner from '../../components/LoadingSpinner';
import toast from 'react-hot-toast';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', password: '',
    confirmPassword: '', city: '', address: '', dateOfBirth: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) return toast.error('Passwords do not match');

    setLoading(true);
    try {
      const { confirmPassword, ...registerData } = formData;
      const result = await register(registerData);
      if (result.success) {
        toast.success('Welcome to the club!');
        navigate('/');
      }
    } catch (error) {
      toast.error(error.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-100 font-sans antialiased p-0 sm:p-4">
      
      {/* Main Container: Split 2-Column Layout */}
      <div className="w-full max-w-[1000px] flex flex-col md:flex-row bg-white overflow-hidden sm:rounded-2xl shadow-2xl">
        
        {/* Left Visual: Premium Travel Branding */}
        <div className="relative w-full md:w-4/12 h-32 md:h-auto overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1000&auto=format&fit=crop" 
            alt="Adventure" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-6">
            <div className="hidden md:block">
              <h3 className="text-white text-xl font-semibold">Join the Elite</h3>
              <p className="text-slate-300 text-xs mt-2 leading-relaxed">
                Register to start your monthly contribution and unlock luxury world tours.
              </p>
            </div>
          </div>
          <Link to="/login" className="absolute top-4 left-4 p-2 bg-white/20 backdrop-blur-md rounded-lg text-white md:hidden">
            <ArrowLeft size={18} />
          </Link>
        </div>

        {/* Right Content: Compact Registration Form */}
        <div className="w-full md:w-8/12 p-6 sm:p-8 md:p-10">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-slate-800 tracking-tight">Create Account</h2>
              <p className="text-slate-500 text-xs mt-1">Fill in the details to join our luxury scheme.</p>
            </div>
            <ShieldCheck size={28} className="text-emerald-500 opacity-20 hidden sm:block" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputGroup label="Full Name" name="name" icon={User} value={formData.name} onChange={handleChange} placeholder="John Doe" required />
              <InputGroup label="Email Address" name="email" type="email" icon={Mail} value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
            </div>

            {/* Row 2: Phone & City */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputGroup label="Phone Number" name="phone" type="tel" icon={Phone} value={formData.phone} onChange={handleChange} placeholder="+91..." required />
              <InputGroup label="City" name="city" icon={MapPin} value={formData.city} onChange={handleChange} placeholder="Your City" required />
            </div>

            {/* Address - Full Width */}
            <div className="space-y-1">
              <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wider ml-1">Residential Address (Optional)</label>
              <textarea
                name="address"
                rows={1}
                value={formData.address}
                onChange={handleChange}
                className="block w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:bg-white focus:border-sky-500 transition-all outline-none resize-none"
                placeholder="Full street address..."
              />
            </div>

            {/* Row 3: DOB & Passwords */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputGroup label="Date of Birth" name="dateOfBirth" type="date" icon={Calendar} value={formData.dateOfBirth} onChange={handleChange} />
              <div className="relative">
                <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wider ml-1">Set Password</label>
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-4 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:bg-white focus:border-sky-500 transition-all outline-none"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-[2.1rem] text-slate-400">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="hidden md:block"></div> {/* Spacer for alignment */}
              <InputGroup label="Confirm Password" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} required />
            </div>

            {/* Action Button: Gradient style from Login */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 px-8 py-3.5 bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-700 hover:to-emerald-700 text-white rounded-xl text-sm font-semibold shadow-lg shadow-sky-900/10 transition-all flex items-center justify-center gap-2"
            >
              {loading ? <LoadingSpinner size="sm" className="text-white" /> : 'Register & Start Journey'}
            </button>

            <div className="text-center pt-4 border-t border-slate-100 mt-6">
              <p className="text-xs text-slate-500">
                Already a member?{' '}
                <Link to="/login" className="text-sky-600 font-semibold hover:underline decoration-sky-600/30">
                  Sign in here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Reusable Small Input Component
const InputGroup = ({ label, icon: Icon, ...props }) => (
  <div className="space-y-1">
    <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wider ml-1">{label}</label>
    <div className="relative">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <Icon size={16} />
        </div>
      )}
      <input
        {...props}
        className={`block w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:bg-white focus:border-sky-500 transition-all outline-none`}
      />
    </div>
  </div>
);

export default Register;