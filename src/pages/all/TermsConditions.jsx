import React, { useState } from 'react';
import { ShieldCheck, ArrowLeft, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
  const [activeTab, setActiveTab] = useState('kannada'); // Default Kannada

  const terms = {
    english: [
      "1. Draw Date: Every 28th of the month starting 28-01-2026.",
      "2. Draw Time: 7:00 PM to 8:00 PM on YouTube Live Stream.",
      "3. Monthly Installment: ₹1000/- for 16 months maximum.",
      "4. Draw Time: 5:00 PM onwards on 28th of every month.",
      "5. No membership fee. Only monthly contributions.",
      "6. Maximum 60 days allowed for installment completion.",
      "7. NO CASH REFUNDS under any circumstances.",
      "8. NO CASH RETURNS. Only tour packages or gold/silver ornaments.",
      "9. All tour packages include hotel accommodation.",
      "10. Draw conducted using physical drum in live stream.",
      "11. Winners announced immediately on YouTube Live.",
      "12. Non-winners get guaranteed gifts after 6/12/24 months.",
      "Harsha Lucky Tours, Bangalore - 560064. Contact: +91 90199 97133"
    ],
    kannada: [
      "1. ಡ್ರಾ ದಿನಾಂಕ: ಪ್ರತಿ ತಿಂಗಳು 28ನೇ ಇಂದು 28-01-2026ರಿಂದ.",
      "2. ಡ್ರಾ ಸಮಯ: ಯೂಟ್ಯೂಬ್ ಲೈವ್ ಸ್ಟ್ರೀಮ್‌ನಲ್ಲಿ ಸಂಜೆ 7:00 ರಿಂದ 8:00.",
      "3. ತಿಂಗಳು ಚಂದಾ: ಗರಿಷ್ಠ 16 ತಿಂಗಳಿಗೆ ₹1000/-",
      "4. ಡ್ರಾ ಸಮಯ: ಪ್ರತಿ ತಿಂಗಳು 28ನೇ ಇಂದು ಸಂಜೆ 5:00 ರಿಂದ.",
      "5. ಸದಸ್ಯತೆ ಶುಲ್ಕ ಇಲ್ಲ. ಕೇವಲ ತಿಂಗಳು ಚಂದಾ ಮಾತ್ರ.",
      "6. ಚಂದಾ ಪೂರ್ಣಗೊಳಿಸಲು 60 ದಿನಗಳವರೆಗೆ ಅವಕಾಶ.",
      "7. ಯಾವುದೇ ಕಾರಣಕ್ಕೂ ನಗದು ರಿಫಂಡ್ ಇಲ್ಲ.",
      "8. ನಗದು ರಿಟರ್ನ್ ಇಲ್ಲ. ಕೇವಲ ಪ್ಯಾಕೇಜ್ ಅಥವಾ ಚಿನ್ನ/ಚಿನ್ನದ ಆಭರಣಗಳು.",
      "9. ಎಲ್ಲಾ ಪ್ಯಾಕೇಜ್‌ಗಳಲ್ಲಿ ಹೋಟೆಲ್ ಆಕ್ಕೊಮೊಡೇಷನ್ ಸೇರಿದೆ.",
      "10. ಡ್ರಾ ಫಿಸಿಕಲ್ ಡ್ರಮ್ ಬಳಸಿ ಲೈವ್ ಸ್ಟ್ರೀಮ್‌ನಲ್ಲಿ ನಡೆಯುತ್ತದೆ.",
      "11. ಗೆದ್ದವರನ್ನು ಯೂಟ್ಯೂಬ್ ಲೈವ್‌ನಲ್ಲಿ ತಕ್ಷಣ ಘೋಷಿಸಲಾಗುತ್ತದೆ.",
      "12. ಗೆಲ್ಲದವರಿಗೆ 6/12/24 ತಿಂಗಳ ನಂತರ ಖಚಿತ ಉಡುಗೊರೆಗಳು.",
      "ಹರ್ಷ ಲಕ್ಕಿ ಟೂರ್ಸ್, ಬೆಂಗಳೂರು - 560064. ಸಂಪರ್ಕ: +91 90199 97133"
    ]
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans antialiased p-4 sm:p-6">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-6 sm:p-8">
          <div className="flex items-center justify-between mb-4">
            <Link to="/" className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-white/30 transition-all">
              <ArrowLeft size={18} />
            </Link>
            <ShieldCheck size={28} className="text-white opacity-90" />
          </div>
          <div className="text-center text-white">
            <h1 className="text-2xl font-semibold tracking-tight mb-2">Terms & Conditions</h1>
            <p className="text-sm opacity-90">ಶೇವೆಯ ನಿಯಮಗಳು / Service Terms</p>
          </div>
        </div>

        {/* Language Tabs */}
        <div className="px-6 sm:px-8 py-6 border-b border-slate-200">
          <div className="flex bg-slate-50 rounded-xl p-1 max-w-max mx-auto">
            <button
              onClick={() => setActiveTab('kannada')}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'kannada'
                  ? 'bg-white text-slate-900'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="text-xs">ಕ</span> ಕನ್ನಡ
            </button>
            <button
              onClick={() => setActiveTab('english')}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'english'
                  ? 'bg-white text-slate-900'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="text-xs">EN</span> English
            </button>
          </div>
        </div>

        {/* Terms Content - Page Style */}
        <div className="p-8 max-h-96 overflow-y-auto">
          <div className="space-y-3 text-sm leading-6">
            {terms[activeTab].map((term, index) => (
              <div key={index} className="flex items-start gap-4 py-1.5">
                <div className="w-7 flex-shrink-0 text-right text-slate-500 font-medium text-xs">
                  {index + 1}.
                </div>
                <div className="flex-1 text-slate-800 leading-relaxed">
                  <p>{term}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 sm:px-8 py-6 bg-slate-50 border-t border-slate-200">
          <div className="text-center">
            <p className="text-xs text-slate-600 mb-2">
              Harsha Lucky Tours © 2026 | Bangalore - 560064
            </p>
            <div className="flex justify-center gap-4 text-xs text-slate-500 flex-wrap">
              <a href="tel:+919019997133" className="hover:text-emerald-600 transition-colors">+91 90199 97133</a>
              <span className="mx-2">•</span>
              <a href="https://harshaluckytours.com" className="hover:text-emerald-600 transition-colors">harshaluckytours.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
