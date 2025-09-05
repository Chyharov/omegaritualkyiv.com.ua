import { useState, useCallback } from 'react';
import Header from 'components/header/header';
import SectionMemorialDinners from 'components/SectionMemorialDinners/SectionMemorialDinners';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';
import imgBaner from 'images/processingDocumentsPage/processingDocumentsPage.jpg';

const ProcessingDocumentsPage = () => {
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
        <SectionMemorialDinners title={title} imgBaner={imgBaner} imgBannerDescription={imgBannerDescription} />
      </main>
      <Footer />
    </>
  );
};

export default ProcessingDocumentsPage;