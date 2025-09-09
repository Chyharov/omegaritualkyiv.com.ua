import { useState, useCallback, useEffect } from 'react';
import Header from 'components/header/header';
import SectionMedicalSupportOnFuneral from 'components/SectionMedicalSupportOnFuneral/SectionMedicalSupportOnFuneral';
import SectionNeedHelp from 'components/sectionNeedHelp/sectionNeedHelp';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';
import imgBaner from 'images/medicalSupportOnFuneralPage/medicalSupportOnFuneralPage.jpg';

const MedicalSupportOnFuneralPage = () => {
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

  const title = 'Медичний супровід похорону';
  const imgBannerDescription = 'Ритуальне бюро «Омега» дбатиме не лише про комплексну організацію похорону, а й про їх супровід кваліфікованим медперсоналом для надання термінової медичної допомоги в екстрених випадках. При необхідності, ми надамо не лише медичну, а й психологічну допомогу рідним та близьким покійного, які прийшли попрощатися з ним.';

  return (
    <>
      <Header navItems={navItems} handleLanguageChange={handleLanguageChange} language={language} />
      <main>
        <SectionMedicalSupportOnFuneral title={title} imgBaner={imgBaner} imgBannerDescription={imgBannerDescription} />
        <SectionNeedHelp />
      </main>
      <Footer />
    </>
  );
};

export default MedicalSupportOnFuneralPage;