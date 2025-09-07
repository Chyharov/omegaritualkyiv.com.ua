import { useState, useCallback, useEffect } from 'react';
import Header from 'components/header/header';
import SectionRitualHall from 'components/SectionRitualHall/SectionRitualHall';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';
import imgBaner from 'images/ritualHallPage/ritualHallPage.png';

const RitualHallPage = () => {
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

  const title = 'Ритуальна зала';
  const imgBannerDescription = 'Жалобний ритуальний зал призначений для проведення цивільної панахиди на похороні. У комфортному приміщенні є спеціальний постамент для встановлення труни та зручні сидячі місця для близьких родичів та друзів померлого, а також достатньо місця для розміщення всіх, хто прийде, попрощається з покійним.';

  return (
    <>
      <Header navItems={navItems} handleLanguageChange={handleLanguageChange} language={language} />
      <main>
        <SectionRitualHall title={title} imgBaner={imgBaner} imgBannerDescription={imgBannerDescription} />
      </main>
      <Footer />
    </>
  );
};

export default RitualHallPage;