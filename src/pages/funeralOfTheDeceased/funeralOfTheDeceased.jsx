import { useState, useCallback, useEffect } from 'react';
import Header from 'components/header/header';
import SectionFuneralOfTheDeceased from 'components/SectionFuneralOfTheDeceased/SectionFuneralOfTheDeceased';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';
import imgBaner from 'images/funeralOfTheDeceased/funeralOfTheDeceased.jpg';

const FuneralOfTheDeceased = () => {

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

  const title = 'Відспівування померлого';
  const imgBannerDescription = 'Церковне відспівування померлого та заупокійні молитви – один із найважливіших церковних обрядів у Християнстві. У Православній Церкві він символізує прохання про милість Господню над душею померлого на Страшному суді. Відспівування покійного відбувається одного разу. Обряд можна здійснити у храмі або під час громадянської панахиди у дворі будинку померлого або у жалобному залі з виїздом священика.';

  return (
    <>
      <Header navItems={navItems} handleLanguageChange={handleLanguageChange} language={language} />
      <main>
        <SectionFuneralOfTheDeceased title={title} imgBaner={imgBaner} imgBannerDescription={imgBannerDescription} />
      </main>
      <Footer />
    </>
  );
};

export default FuneralOfTheDeceased;