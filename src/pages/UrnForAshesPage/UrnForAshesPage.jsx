import { useState, useCallback, useEffect } from 'react';
import Header from 'components/header/header';
import SectionUrnForAshesPage from 'components/SectionUrnForAshesPage/SectionUrnForAshesPage';
import SectionNeedHelp from 'components/sectionNeedHelp/sectionNeedHelp';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';
import imgBaner from 'images/urnForAshesPage/urnForAshesPage.jpg';

const UrnForAshesPage = () => {
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
    },
  ];

  const handleLanguageChange = useCallback(
    langCode => {
      if (langCode !== language) {
        setLanguage(langCode);
      }
    },
    [language]
  );

  const title = 'Урни для праху';
  const imgBannerDescription =
    'Вы можете выбрать идеальную урну для памяти вашего любимого члена семьи или близкого человека. Наш ассортимент урн включает в себя различные материалы и дизайны, что позволяет найти оптимальную урну, которая соответствует вашим личным предпочтениям и требованиям.';

  return (
    <>
      <Header
        navItems={navItems}
        handleLanguageChange={handleLanguageChange}
        language={language}
      />
      <main>
        <SectionUrnForAshesPage
          title={title}
          imgBaner={imgBaner}
          imgBannerDescription={imgBannerDescription}
        />
        <SectionNeedHelp />
      </main>
      <Footer />
    </>
  );
};

export default UrnForAshesPage;
