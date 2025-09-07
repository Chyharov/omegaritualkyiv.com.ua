import { useState, useCallback, useEffect } from 'react';
import Header from 'components/header/header';
import SectionMortuaryServices from 'components/SectionMortuaryServices/SectionMortuaryServices';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';
import imgBaner from 'images/mortuaryServicesPage/mortuaryServicesPage.jpg';

const MortuaryServicesPage = () => {
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

  const title = 'Послуги моргу';
  const imgBannerDescription = 'Похоронний дім «Омега» – це повний комплекс ритуального обслуговування, включаючи й послуги моргу, де тіло покійного не просто зберігають у спеціальній морозильній камері, якщо потрібно тривалий час для організації похорону, а й підготують його до церемонії прощання. Така підготовка дозволяє привести тіло померлого в гідний вигляд, особливо, якщо були посмертні зміни або травми прижиттєві, що призвели до передчасної смерті.';

  return (
    <>
      <Header navItems={navItems} handleLanguageChange={handleLanguageChange} language={language} />
      <main>
        <SectionMortuaryServices title={title} imgBaner={imgBaner} imgBannerDescription={imgBannerDescription} />
      </main>
      <Footer />
    </>
  );
};

export default MortuaryServicesPage;