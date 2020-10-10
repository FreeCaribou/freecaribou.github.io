import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';
import { useTranslation } from 'react-i18next';
import LanguageContext from './hooks/useLanguageContext';

function App() {

  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState('en');

  const [acceptedLanguage] = useState(['en', 'fr']);

  useEffect(() => {
    console.log('Welcome in the consol, what are you doing here?')
    const localLng = localStorage.getItem('lng');
    if (localLng) {
      setCurrentLanguage(localLng);
    } else {
      let userLang = navigator.language;
      userLang = userLang.slice(0, 2);
      setCurrentLanguage(userLang);
    }
  }, []);

  useEffect(() => {
    changeLanguage(currentLanguage);
  }, [currentLanguage]);

  const changeLanguage = (lng) => {
    if (acceptedLanguage.find(x => x === lng)) {
      console.log('change the lang!');
      i18n.changeLanguage(lng);
      localStorage.setItem('lng', currentLanguage);
    }
  }

  return (
    <LanguageContext.Provider value={[currentLanguage, setCurrentLanguage]}>
      <MainPage />
    </LanguageContext.Provider>
  );
}

export default App;
