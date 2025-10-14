import { useState, useCallback, useEffect } from 'react';
import Header from 'components/header/header';
import SectionContacts from 'components/SectionContacts/SectionContacts';
import SectionComments from 'components/SectionComments/SectionComments';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';

const ContactsPage = () => {
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

  const title = 'Контакти';

  return (
    <>
      <Header
        navItems={navItems}
        handleLanguageChange={handleLanguageChange}
        language={language}
      />
      <main>
        <SectionContacts
          title={title}
        />
        <SectionComments />
      </main>
      <Footer />
    </>
  );
};

export default ContactsPage;
