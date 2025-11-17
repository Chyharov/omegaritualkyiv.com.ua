import { useState, useCallback, useEffect } from 'react';
import Header from 'components/header/header';
import SectionFreshWreaths from 'components/SectionFreshWreaths/SectionFreshWreaths';
import SectionNeedHelp from 'components/sectionNeedHelp/sectionNeedHelp';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';
import imgBaner from 'images/freshWreathsPage/freshWreathsPage.jpg';

const ArtificialWreathsPage = () => {
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

  const title = 'Вінок із штучних квітів';
  const imgBannerDescription = 'Ритуальний вінок зі штучних квітів – це недорога та практичніша альтернатива живим квітковим композиціям. Сучасні ідеальні ботанічні копії вже практично не відрізнити від їхнього натурального прототипу без пильного розгляду поблизу завдяки детальному опрацюванню пелюсток, бутонів, листя та стебел.';

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

export default ArtificialWreathsPage;