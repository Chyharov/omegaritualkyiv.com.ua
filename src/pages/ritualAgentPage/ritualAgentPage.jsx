import { useState, useCallback, useEffect } from 'react';
import Header from 'components/header/header';
import SectionRitualAgent from 'components/SectionRitualAgent/SectionRitualAgent';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';
import imgBaner from 'images/sectionRitualAgent/ritualagent.jpg';

const RitualAgentPage = () => {
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

  const title = 'Ритуальний агент';
  const imgBannerDescription = 'Ритуальний агент – це той самий помічник, який здатний тверезо оцінити ситуацію, що склалася, включаючи й фінансову, щоб організувати похорон на гідному рівні відповідно до доступного для родичів померлого бюджету.';

  return (
    <>
      <Header navItems={navItems} handleLanguageChange={handleLanguageChange} language={language} />
      <main>
        <SectionRitualAgent title={title} imgBaner={imgBaner} imgBannerDescription={imgBannerDescription} />
      </main>
      <Footer />
    </>
  );
};

export default RitualAgentPage;