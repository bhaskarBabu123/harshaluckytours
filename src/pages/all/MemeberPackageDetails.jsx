import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { 
  ArrowLeft, MapPin, Calendar, Trophy, CheckCircle, 
  ChevronRight, Coins, Plane, ShieldCheck, 
  Info, Globe, Wallet, Sparkles, Star, Package, Clock, Gift, Phone
} from 'lucide-react';
import toast from 'react-hot-toast';
import { useAuth } from '../../contexts/AuthContext';
import LoadingSpinner from '../../components/LoadingSpinner';

const MemberPackageDetails = () => {
  const { id } = useParams();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [packageData, setPackageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPackageDetails();
  }, [id]);

  const fetchPackageDetails = async () => {
    try {
      const { data } = await axios.get(`https://harsha-lucky-tours-final-backend.onrender.com/api/packages/${id}`);
      setPackageData(data.data);
    } catch (error) {
      toast.error('Failed to fetch scheme details');
      navigate('/lucky-draw');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <LoadingSpinner size="lg" className="text-blue-600" />
    </div>
  );

  const mainImage = packageData.images?.[0] || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200';

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans antialiased">
      
      {/* --- PREMIUM HERO SECTION --- */}
      <div className="relative bg-slate-900 text-white pb-12 lg:pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <img src={mainImage} className="w-full h-full object-cover opacity-30" alt="Scheme Background" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 lg:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Side: Scheme Header */}
            <div className="lg:col-span-8">
              <Link to="/member/packages" className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm mb-6 hover:text-blue-300 transition-colors">
                <ArrowLeft size={18} /> Back to All Schemes
              </Link>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-600/20 text-blue-400 border border-blue-600/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Scheme ID: {packageData.packageId}
                </span>
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {packageData.status}
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                {packageData.name}
              </h1>

              <div className="flex flex-wrap gap-6 text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="text-blue-500" size={20} />
                  <span className="font-medium">{packageData.destination.join(' • ')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="text-blue-500" size={20} />
                  <span className="font-medium">{packageData.month} {packageData.year} Draw</span>
                </div>
                {/* <div className="flex items-center gap-2">
                  <Clock className="text-blue-500" size={20} />
                  <span className="font-medium">{packageData.duration}</span>
                </div> */}
              </div>
            </div>

            {/* Right Side: Hero Floating Card */}
            <div className="lg:col-span-4 lg:mt-0">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 text-slate-900">
                <div className="text-center mb-6">
                  <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-2">Monthly Installment</p>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-5xl font-black text-slate-900">₹{packageData.monthlyInstallment}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-2xl border border-blue-100">
                    <ShieldCheck className="text-blue-600" size={24} />
                    <div>
                      <p className="text-xs font-bold text-slate-900 uppercase">Secure Participation</p>
                      <p className="text-[11px] text-slate-500">Official Harsha Lucky Scheme</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-2xl border border-amber-100">
                    <Star className="text-amber-600" size={24} />
                    <div>
                      <p className="text-xs font-bold text-slate-900 uppercase">VIP Access</p>
                      <p className="text-[11px] text-slate-500">Includes Surprise Gift Eligibility</p>
                    </div>
                  </div>
                </div>

                <Link 
                  to={isAuthenticated ? `/` : '/register'}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl text-center flex items-center justify-center gap-2 shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-1"
                >
                  Register Now <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- BODY CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-10">
            
            {/* Prize Highlight Card */}
            <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-amber-100 rounded-2xl">
                  <Trophy className="text-amber-600" size={28} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">Winning Prize Description</h2>
                  <p className="text-sm text-slate-500 font-medium">Winner's Choice Rewards</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-slate-800 leading-snug mb-6">
                {packageData.prizeDescription}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100">
                  <Plane className="text-blue-500" size={20} />
                  <span className="font-bold text-sm text-slate-700">Fully Funded Trip</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100">
                  <Coins className="text-amber-500" size={20} />
                  <span className="font-bold text-sm text-slate-700">Gold/Silver Exchange</span>
                </div>
              </div>
            </div>

            {/* Description Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Info className="text-blue-600" size={24} />
                <h2 className="text-xl font-bold text-slate-900">About This Scheme</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium text-lg whitespace-pre-line">
                {packageData.description}
              </p>
            </div>

            {/* Inclusions Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle className="text-emerald-500" size={24} />
                <h2 className="text-xl font-bold text-slate-900">What's Included</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {packageData.inclusions.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Scheme Process */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Trust Points */}
            <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <ShieldCheck className="text-blue-400" size={24} /> Scheme Process
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-xl bg-white/10 flex items-center justify-center font-bold text-blue-400 shrink-0">1</div>
                  <p className="text-sm text-slate-300 leading-relaxed font-medium">Join the scheme with a monthly contribution of <span className="text-white font-bold">₹{packageData.monthlyInstallment}</span>.</p>
                </div>
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-xl bg-white/10 flex items-center justify-center font-bold text-blue-400 shrink-0">2</div>
                  <p className="text-sm text-slate-300 leading-relaxed font-medium">Participate in the live draw conducted on <span className="text-white font-bold">{new Date(packageData.drawDate).toLocaleDateString()}</span>.</p>
                </div>
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-xl bg-white/10 flex items-center justify-center font-bold text-blue-400 shrink-0">3</div>
                  <p className="text-sm text-slate-300 leading-relaxed font-medium">If selected, choose between a <span className="text-white font-bold">Luxury Trip</span> or its value in <span className="text-white font-bold">Gold/Silver</span>.</p>
                </div>
              </div>
            </div>

            {/* Winner Card (If exists) */}
            {packageData.winner?.name && (
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm border-t-4 border-t-amber-500">
                <div className="flex items-center gap-3 mb-6">
                  <Crown className="text-amber-500" size={28} />
                  <h3 className="text-lg font-bold text-slate-900">Declared Winner</h3>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl mb-4">
                  <p className="text-lg font-black text-slate-900">{packageData.winner.name}</p>
                  <p className="text-sm text-slate-500 font-bold">{packageData.winner.city}</p>
                </div>
                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm bg-blue-50 p-3 rounded-xl">
                  <Trophy size={16} /> Choice: {packageData.winner.chosenPrize || 'Trip Package'}
                </div>
              </div>
            )}

            {/* Contact & Support */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-blue-600" size={24} />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Need Assistance?</h4>
              <p className="text-xs text-slate-500 mb-6 font-medium leading-relaxed">Our support team is available 24/7 for scheme related queries.</p>
              <button className="text-sm font-bold text-blue-600 hover:underline">Contact Support Team</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberPackageDetails;