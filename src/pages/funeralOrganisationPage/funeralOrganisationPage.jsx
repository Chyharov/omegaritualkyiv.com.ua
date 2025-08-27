import { useState, useCallback } from 'react';
import Header from 'components/header/header';
import SectionRitualAgent from 'components/SectionRitualAgent/SectionRitualAgent';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';
import imgBaner from 'images/sectionRitualAgent/ritualagent.jpg';

const FuneralOrganisationPage = () => {
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

  const title = 'Організатор похорону';
  return (
    <>
      <Header navItems={navItems} handleLanguageChange={handleLanguageChange} language={language} />
      <main>
        <SectionRitualAgent title={title} imgBaner={imgBaner} />
      </main>
      <Footer />
    </>
  );
};

export default FuneralOrganisationPage;