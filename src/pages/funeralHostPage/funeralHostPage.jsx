import { useState, useCallback, useEffect } from 'react';
import Header from 'components/header/header';
import SectionFuneralHost from 'components/SectionFuneralHost/SectionFuneralHost';
import SectionNeedHelp from 'components/sectionNeedHelp/sectionNeedHelp';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';
import imgBaner from 'images/funeralHost/funeralHost.jpg';

const FuneralHostPage = () => {
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

  const title = 'Ведучий на похорон';
  const imgBannerDescription = 'Проведення церемонії прощання з померлим – це складна та стомлююча робота, яка не під силу розбитим горем та скорботою рідним та близьким покійного. Ритуальне бюро «Омега» повністю бере на себе всю організацію похорону та контроль над дотриманням церемоніалу спеціальним професійним ведучим, який своєчасно вирішує всі проблеми, що виникли, і слідкує за черговістю проведення запланованих ритуальних обрядів.';

  return (
    <>
      <Header navItems={navItems} handleLanguageChange={handleLanguageChange} language={language} />
      <main>
        <SectionFuneralHost title={title} imgBaner={imgBaner} imgBannerDescription={imgBannerDescription} />
        <SectionNeedHelp />
      </main>
      <Footer />
    </>
  );
};

export default FuneralHostPage;