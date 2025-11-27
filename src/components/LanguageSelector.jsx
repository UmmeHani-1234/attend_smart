import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Save } from 'lucide-react';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  useEffect(() => {
    // Load saved language preference from localStorage
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
      setSelectedLanguage(savedLanguage);
    }
    
    // Listen for language changes
    const handleLanguageChange = (lng) => {
      setSelectedLanguage(lng);
    };
    
    i18n.on('languageChanged', handleLanguageChange);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  const languages = [
    { code: 'en', name: t('languages.english'), nativeName: 'English' },
    { code: 'hi', name: t('languages.hindi'), nativeName: 'हिन्दी' },
    { code: 'ur', name: t('languages.urdu'), nativeName: 'اردو' },
    { code: 'pa', name: t('languages.punjabi'), nativeName: 'ਪੰਜਾਬੀ' }
  ];

  const changeLanguage = (lng) => {
    setSelectedLanguage(lng);
  };

  const saveLanguagePreference = () => {
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('preferredLanguage', selectedLanguage);
    
    // Show success message
    const successMessage = {
      en: 'Language preference saved successfully!',
      hi: 'भाषा प्राथमिकता सफलतापूर्वक सहेजी गई!',
      ur: 'زبان کی ترجیح کامیابی کے ساتھ محفوظ ہو گئی!',
      pa: 'ਭਾਸ਼ਾ ਪਸੰਦੀ ਸਫਲਤਾਪੂਰਵਕ ਸੁਰੱਖਿਅਤ ਕੀਤੀ ਗਈ!'
    };
    
    alert(successMessage[selectedLanguage] || successMessage.en);
  };

  return (
    <div className="bg-gray-50 rounded-xl p-5">
      <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <Globe className="w-5 h-5" />
        {t('settings.language')}
      </h3>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`p-3 rounded-lg text-left transition-all ${
              selectedLanguage === lang.code
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <div className="font-medium">{lang.nativeName}</div>
            <div className="text-sm opacity-80">{lang.name}</div>
          </button>
        ))}
      </div>
      <button
        onClick={saveLanguagePreference}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg font-medium"
      >
        <Save className="w-4 h-4" />
        {t('settings.save_appearance')}
      </button>
    </div>
  );
};

export default LanguageSelector;