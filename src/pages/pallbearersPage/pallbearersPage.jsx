import { useState, useCallback, useEffect } from 'react';
import Header from 'components/header/header';
import SectionMortuaryServices from 'components/SectionMortuaryServices/SectionMortuaryServices';
import SectionNeedHelp from 'components/sectionNeedHelp/sectionNeedHelp';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';
import imgBaner from 'images/mortuaryServicesPage/mortuaryServicesPage.jpg';

const PallbearersPage = () => {
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

  const title = 'Носії труни';
  const imgBannerDescription = 'Перенесення труни з покійним – одне з відповідальних завдань, про яке нерідко рідні та близькі померлого забувають при самостійній організації похорону. Однак найчастіше на місці це виявляється серйозною проблемою через те, що серед присутніх неможливо знайти достатню кількість міцних чоловіків. Ритуальне бюро «Омега» повністю бере на себе весь клопіт з організації роботи професійних носіїв труни.';

  return (
    <>
      <Header navItems={navItems} handleLanguageChange={handleLanguageChange} language={language} />
      <main>
        <SectionMortuaryServices title={title} imgBaner={imgBaner} imgBannerDescription={imgBannerDescription} />
        <SectionNeedHelp />
      </main>
      <Footer />
    </>
  );
};

export default PallbearersPage;