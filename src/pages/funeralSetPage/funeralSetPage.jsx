import { useState, useCallback, useEffect } from 'react';
import Header from 'components/header/header';
import SectionFuneralOrganisation from 'components/SectionFuneralOrganisation/SectionFuneralOrganisation';
import SectionNeedHelp from 'components/sectionNeedHelp/sectionNeedHelp';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';
import imgBaner from 'images/funeralSetPage/funeralSetPageBaner.jpg';

const FuneralSetPage = () => {
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

  const title = 'Похоронний набір';
  const imgBannerDescription = 'Ритуальне приладдя – це невід`ємний атрибут традиційного обряду поховання православного християнина. Без такого похоронного набору неможливо провести церковне відспівування покійного. Похоронний будинок «Омега» бере на себе весь клопіт з організації похорону, у тому числі й у такому делікатному питанні, як дотримання заупокійних церковних обрядів.';

  return (
    <>
      <Header navItems={navItems} handleLanguageChange={handleLanguageChange} language={language} />
      <main>
        <SectionFuneralOrganisation title={title} imgBaner={imgBaner} imgBannerDescription={imgBannerDescription} />
        <SectionNeedHelp />
      </main>
      <Footer />
    </>
  );
};

export default FuneralSetPage;