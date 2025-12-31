import { useState, useCallback, useEffect } from 'react';
import Header from 'components/header/header';
import SectionMonuments from 'components/SectionMonuments/SectionMonuments';
import SectionNeedHelp from 'components/sectionNeedHelp/sectionNeedHelp';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';
import imgBaner from 'images/sectionMonuments/sectionMonuments.jpg';

const MonumentsPage = () => {
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
    },
  ];

  const handleLanguageChange = useCallback(
    langCode => {
      if (langCode !== language) {
        setLanguage(langCode);
      }
    },
    [language]
  );

  const title = 'Ритуальні пам’ятники';
  const imgBannerDescription =
    'Померлі люди вічно живуть у серцях та пам’яті своїх рідних та близьких. Уособленням цього вічного життя стали ритуальні пам’ятники на могилах, де похований покійний. Похоронний дім «Омега» бере на себе весь клопіт з організації не лише самих похорон та поховання покійного, а й з виготовлення та встановлення пам’ятників на цвинтарях Києва та київської області.';

  return (
    <>
      <Header
        navItems={navItems}
        handleLanguageChange={handleLanguageChange}
        language={language}
      />
      <main>
        <SectionMonuments
          title={title}
          imgBaner={imgBaner}
          imgBannerDescription={imgBannerDescription}
        />
        <SectionNeedHelp />
      </main>
      <Footer />
    </>
  );
};

export default MonumentsPage;
