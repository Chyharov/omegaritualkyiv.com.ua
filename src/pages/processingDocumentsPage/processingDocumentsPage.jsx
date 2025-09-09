import { useState, useCallback, useEffect } from 'react';
import Header from 'components/header/header';
import SectionProcessingDocuments from 'components/SectionProcessingDocuments/SectionProcessingDocuments';
import SectionNeedHelp from 'components/sectionNeedHelp/sectionNeedHelp';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';
import imgBaner from 'images/processingDocumentsPage/processingDocumentsPage.jpg';

const ProcessingDocumentsPage = () => {
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

  const title = 'Оформлення документів для похорону';
  const imgBannerDescription = 'Смерть члена сім’ї часто шокує близьких померлого і буквально паралізує розум. У такому стресі рідним померлого доводиться проходити всі бюрократичні тяганини для оформлення документів, необхідних для похорону або кремації тіла.';

  return (
    <>
      <Header navItems={navItems} handleLanguageChange={handleLanguageChange} language={language} />
      <main>
        <SectionProcessingDocuments title={title} imgBaner={imgBaner} imgBannerDescription={imgBannerDescription} />
        <SectionNeedHelp />
      </main>
      <Footer />
    </>
  );
};

export default ProcessingDocumentsPage;