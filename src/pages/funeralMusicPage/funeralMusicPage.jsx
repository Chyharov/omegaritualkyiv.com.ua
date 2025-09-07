import { useState, useCallback, useEffect } from 'react';
import Header from 'components/header/header';
import SectionFuneralMusic from 'components/SectionFuneralMusic/SectionFuneralMusic';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';
import imgBaner from 'images/funeralMusicPage/funeralMusicPage.png';

const FuneralMusicPage = () => {
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

  const title = 'Музичний супровід похорону';
  const imgBannerDescription = 'Похоронний марш або заспокійлива музика в мінорі, духовий оркестр або жалобна скрипка і віолончель – все це стало традиційним атрибутом проведення церемонії прощання з покійним у культурах практично всіх народів світу.';

  return (
    <>
      <Header navItems={navItems} handleLanguageChange={handleLanguageChange} language={language} />
      <main>
        <SectionFuneralMusic title={title} imgBaner={imgBaner} imgBannerDescription={imgBannerDescription} />
      </main>
      <Footer />
    </>
  );
};

export default FuneralMusicPage;