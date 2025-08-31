import { useState, useCallback } from 'react';
import Header from 'components/header/header';
import SectionRitualTransport from 'components/SectionRitualTransport/SectionRitualTransport';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';
import imgBaner from 'images/ritualTransportPage/ritualTransportPage.jpg';

const RitualTransportPage = () => {
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

  const title = 'Ритуальний транспорт';
  const imgBannerDescription = 'Ритуальний транспорт – одне із основних видів похоронних послуг, комплексну організацію яких ми повністю беремо він. Транспортування померлого по Києву до місця проведення церемонії прощання та після неї на цвинтар чи крематорій має відповідати ситуації та статусу покійного.';

  return (
    <>
      <Header navItems={navItems} handleLanguageChange={handleLanguageChange} language={language} />
      <main>
        <SectionRitualTransport title={title} imgBaner={imgBaner} imgBannerDescription={imgBannerDescription} />
      </main>
      <Footer />
    </>
  );
};

export default RitualTransportPage;