import { useState, useCallback } from 'react';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';

const RitualAgentPage = () => {
  const [language, setLanguage] = useState('ua');

  const t = translations.navlink[language];

  const navItems = [
    {
      type: 'scroll',
      to: 'about',
      label: t.about,
      delay: 0.05,
    },
    {
      type: 'scroll',
      to: 'services',
      label: t.services,
      delay: 0.1,
    },
    {
      type: 'scroll',
      to: 'ritualGoods',
      label: t.ritualGoods,
      delay: 0.2,
    },
    {
      type: 'scroll',
      to: 'price',
      label: t.price,
      delay: 0.3,
    }
  ];

  const handleLanguageChange = useCallback(
    langCode => {
      if (langCode !== language) {
        setLanguage(langCode);
      }
    },
    [language]
  );

  return (
    <>
      <Header navItems={navItems} handleLanguageChange={handleLanguageChange} language={language} />
      <main>
        <h2>ritualAgentPage</h2>
      </main>
      <Footer />
    </>
  );
};

export default RitualAgentPage;