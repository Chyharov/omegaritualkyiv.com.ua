import { useState, useCallback, useEffect } from 'react';
import Header from 'components/header/header';
import SectionAboutCompany from 'components/SectionAboutCompany/SectionAboutCompany';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';
import imgBaner from 'images/aboutCompanyPage/aboutCompanyPage.jpeg';

const AboutCompanyPage = () => {
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

  const title = 'Про компанію';
  const imgBannerDescription = 'Похоронний дім «Омега» – це повний комплекс ритуальних послуг, що надаються на всій території Києва та Київської області. Допомога в організації прощання з покійним та ціла підтримка близьких померлого – наша головна стратегія. Організувати похорон під ключ може лише велике ритуальне бюро, що має власну матеріально-технічну базу та відпрацьовані алгоритми дій.';

  return (
    <>
      <Header navItems={navItems} handleLanguageChange={handleLanguageChange} language={language} />
      <main>
        <SectionAboutCompany title={title} imgBaner={imgBaner} imgBannerDescription={imgBannerDescription} />
      </main>
      <Footer />
    </>
  );
};

export default AboutCompanyPage;