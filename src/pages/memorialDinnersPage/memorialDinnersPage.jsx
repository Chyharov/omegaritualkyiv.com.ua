import { useState, useCallback, useEffect } from 'react';
import Header from 'components/header/header';
import SectionMemorialDinners from 'components/SectionMemorialDinners/SectionMemorialDinners';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';
import imgBaner from 'images/memorialDinnersPage/memorialDinnersPage.jpg';

const MemorialDinnersPage = () => {
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

  const title = 'Поминальні обіди';
  const imgBannerDescription = 'Поминальний обід – один із невід’ємних атрибутів церемонії прощання із померлою близькою людиною. Це укорінена традиція у нашій культурі. У Православній вірі прийнято поминати померлого тричі – у день похорону, на 9-й та 40-й дні після його смерті. Похоронний дім «Омега» бере на себе всі клопоти з організації поминок, включаючи вибір у Києві поминального кафе та складання меню відповідно до бюджету та культурно-релігійних традицій замовника.';

  return (
    <>
      <Header navItems={navItems} handleLanguageChange={handleLanguageChange} language={language} />
      <main>
        <SectionMemorialDinners title={title} imgBaner={imgBaner} imgBannerDescription={imgBannerDescription} />
      </main>
      <Footer />
    </>
  );
};

export default MemorialDinnersPage;