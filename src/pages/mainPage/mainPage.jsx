import { useState, useCallback, useEffect } from 'react';
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
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);
  
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
        <SectionHero />
        <SectionServiceList />
        <SectionRitualGoods />
        <SectionNeedHelp />
        <SectionFeneralPrice />
        <SectionOrganizationFuneral />
        <SectionRitualGoodsDescription />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;