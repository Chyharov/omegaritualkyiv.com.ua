import { useState, useCallback, useEffect } from 'react';
import Header from 'components/header/header';
import SectionPallbearers from 'components/SectionPallbearers/SectionPallbearers';
import SectionNeedHelp from 'components/sectionNeedHelp/sectionNeedHelp';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';
import imgBaner from 'images/pallbearersPage/pallbearersPage.jpg';

const DisinfectionPage = () => {
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

  const title = 'Дезобробка';
  const imgBannerDescription = 'Дезінфекція приміщень після смерті в ньому людини – це звичайна практика, яка дозволяє усунути не тільки неприємний трупний запах, але і біологічну небезпеку від бактерій, вірусів і грибків, що розвиваються в тілі небіжчика. Це особливо важливо, якщо покійний помер від гострого інфекційного захворювання.';

  return (
    <>
      <Header navItems={navItems} handleLanguageChange={handleLanguageChange} language={language} />
      <main>
        <SectionPallbearers title={title} imgBaner={imgBaner} imgBannerDescription={imgBannerDescription} />
        <SectionNeedHelp />
      </main>
      <Footer />
    </>
  );
};

export default DisinfectionPage;