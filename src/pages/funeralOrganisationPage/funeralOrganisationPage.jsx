import { useState, useCallback, useEffect } from 'react';
import Header from 'components/header/header';
import SectionFuneralOrganisation from 'components/SectionFuneralOrganisation/SectionFuneralOrganisation';
import SectionNeedHelp from 'components/sectionNeedHelp/sectionNeedHelp';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';
import imgBaner from 'images/funeralOrganisationPage/funeralOrganisationPage.jpg';

const FuneralOrganisationPage = () => {
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

  const title = 'Організатор похорону';
  const imgBannerDescription = 'Смерть близької людини – великий стрес для рідних. Він буквально паралізує свідомість і позбавляє всяких моральних та фізичних сил займатися організацією похорону. Ритуальне бюро «Омега» бере на себе всі організаційні питання щодо планування та контролю за проведенням усіх етапів церемонії прощання з покійним, включаючи оформлення документів та ведення переговорів щодо дозволу поховання на закритих цвинтарях Києва.';

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

export default FuneralOrganisationPage;