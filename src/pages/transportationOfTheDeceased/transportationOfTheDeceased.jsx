import { useState, useCallback, useEffect } from 'react';
import Header from 'components/header/header';
import SectionTransportationOfTheDeceased from 'components/SectionTransportationOfTheDeceased/SectionTransportationOfTheDeceased';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';
import imgBaner from 'images/transportationOfTheDeceased/transportationOfTheDeceased.jpg';

const TransportationOfTheDeceased = () => {
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

  const title = 'Перевезення померлих';
  const imgBannerDescription = 'Похоронний дім «Омега» бере на себе всі організаційні питання, включаючи оформлення документів та пошук транспорту для перевезення померлих з України за кордон. Так званий «вантаж 200» – це дуже складна та відповідальна процедура. Вона вимагає не тільки правильної організації, а й грамотного оформлення митної та іншої супровідної документації, щоб транспортування померлої людини не затяглося на довгий і болісний для рідних покійного час.';

  return (
    <>
      <Header navItems={navItems} handleLanguageChange={handleLanguageChange} language={language} />
      <main>
        <SectionTransportationOfTheDeceased title={title} imgBaner={imgBaner} imgBannerDescription={imgBannerDescription} />
      </main>
      <Footer />
    </>
  );
};

export default TransportationOfTheDeceased;