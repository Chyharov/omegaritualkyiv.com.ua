import { useState, useCallback, useEffect } from 'react';
import Header from 'components/header/header';
import SectionFreshWreaths from 'components/SectionFreshWreaths/SectionFreshWreaths';
import SectionNeedHelp from 'components/sectionNeedHelp/sectionNeedHelp';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';
import imgBaner from 'images/freshWreathsPage/freshWreathsPage.jpg';

const FreshWreathsPage = () => {
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

  const title = 'Вінок із живих квітів';
  const imgBannerDescription = 'Традиція покладати живі квіти та вінки з них на похороні бере свій початок з часів, коли смерть вважалася не жалобною подією, а святом переходу душі людини у досконаліший небесний світ. Цей культ зберігся і в християнстві, як торжество переходу покійного до Царства Небесного.';

  return (
    <>
      <Header navItems={navItems} handleLanguageChange={handleLanguageChange} language={language} />
      <main>
        <SectionFreshWreaths title={title} imgBaner={imgBaner} imgBannerDescription={imgBannerDescription} />
        <SectionNeedHelp />
      </main>
      <Footer />
    </>
  );
};

export default FreshWreathsPage;