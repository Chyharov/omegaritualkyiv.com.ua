import { useState, useCallback, useEffect } from 'react';
import Header from 'components/header/header';
import SectionFuneralOrganisation from 'components/SectionFuneralOrganisation/SectionFuneralOrganisation';
import SectionNeedHelp from 'components/sectionNeedHelp/sectionNeedHelp';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';
import imgBaner from 'images/funeralPortraitPage/funeralPortraitPage.jpg';

const FuneralPortraitPage = () => {
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

  const title = 'Портрет на похорон';
  const imgBannerDescription = 'У канонах православної віри, як і в інших світових релігіях, немає жодної згадки про необхідність наявності на похоронній церемонії прижиттєвого портрета покійного. Немає і обов\'язкового перев\'язування портрета чорною траурною стрічкою. Це виключно світська традиція, яка має глибоке значення.';

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

export default FuneralPortraitPage;