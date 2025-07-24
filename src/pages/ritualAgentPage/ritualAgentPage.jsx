import { useState, useCallback } from 'react';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';

const RitualAgentPage = () => {
  const [language, setLanguage] = useState('ua');

  const t = translations.navlink[language];

  const navItems = [
    {
      type: 'link',
      to: '/',
      label: t.main,
      delay: 0.05,
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