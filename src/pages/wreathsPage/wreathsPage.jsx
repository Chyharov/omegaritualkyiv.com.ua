import { useState, useCallback, useEffect } from 'react';
import Header from 'components/header/header';
import SectionDisinfection from 'components/SectionDisinfection/SectionDisinfection';
import SectionNeedHelp from 'components/sectionNeedHelp/sectionNeedHelp';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';
import imgBaner from 'images/wreathsPage/wreathsPage.jpg';

const WreathsPage = () => {
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

  const title = 'Вінки на похорон';
  const imgBannerDescription = 'Традиція використання на похороні квіткових композицій йде глибоко в давнину, коли похоронні вінки клали померлим на голову перед похованням, як символ чистоти душі при переході у вічне життя на небесах. Пізніше такі ритуальні вінки стали класти зверху на труну, наче монарший вінець на похороні вінценосних осіб. Ця традиція в наші дні трансформувалася у підношення квітів на церемонії прощання, як вираження любові та пошани покійному.';

  return (
    <>
      <Header navItems={navItems} handleLanguageChange={handleLanguageChange} language={language} />
      <main>
        <SectionDisinfection title={title} imgBaner={imgBaner} imgBannerDescription={imgBannerDescription} />
        <SectionNeedHelp />
      </main>
      <Footer />
    </>
  );
};

export default WreathsPage;