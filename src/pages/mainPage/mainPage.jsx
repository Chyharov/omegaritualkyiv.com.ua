import { useState, useCallback } from 'react';
import Header from 'components/header/header';
import SectionHero from 'components/sectionHero/sectionHero'
import SectionServiceList from 'components/sectionServiceList/sectionServiceList';
import SectionRitualGoods from 'components/sectionRitualGoods/sectionRitualGoods'
import SectionNeedHelp from 'components/sectionNeedHelp/sectionNeedHelp';
import SectionFeneralPrice from 'components/sectionFeneralPrice/sectionFeneralPrice';
import SectionOrganizationFuneral from 'components/sectionOrganizationFuneral/sectionOrganizationFuneral';
import SectionRitualGoodsDescription from 'components/sectionRitualGoodsDescription/sectionRitualGoodsDescription';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';

const MainPage = () => {
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
      to: 'ritualGoods',
      label: t.ritualGoods,
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
        <SectionHero language={language} />
        <SectionServiceList language={language} />
        <SectionRitualGoods language={language} />
        <SectionNeedHelp language={language} />
        <SectionFeneralPrice language={language} />
        <SectionOrganizationFuneral language={language} />
        <SectionRitualGoodsDescription language={language} />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;