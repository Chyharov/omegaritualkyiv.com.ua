import { useState, useCallback, useEffect } from 'react';
import Header from 'components/header/header';
import SectionRitualGoodsPage from 'components/SectionRitualGoodsPage/SectionRitualGoodsPage';
import SectionNeedHelp from 'components/sectionNeedHelp/sectionNeedHelp';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';

const RitualGoodsPage = () => {
  useEffect(() => {
            window.scrollTo(0, 0);
  }, []);
  
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

  const title = 'Ритуальні товари';

  return (
    <>
      <Header navItems={navItems} handleLanguageChange={handleLanguageChange} language={language} />
      <main>
        <SectionRitualGoodsPage title={title} />
        <SectionNeedHelp />
      </main>
      <Footer />
    </>
  );
};

export default RitualGoodsPage;