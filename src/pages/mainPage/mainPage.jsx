import { useState, useCallback, useEffect } from 'react';
import Header from 'components/header/header';
import SectionHero from 'components/sectionHero/sectionHero'
import SectionServiceList from 'components/sectionServiceList/sectionServiceList';
import SectionRitualGoods from 'components/sectionRitualGoods/sectionRitualGoods'
import SectionNeedHelp from 'components/sectionNeedHelp/sectionNeedHelp';
import SectionPartners from 'components/SectionPartners/SectionPartners';
import SectionFeneralPrice from 'components/sectionFeneralPrice/sectionFeneralPrice';
import SectionOrganizationFuneral from 'components/sectionOrganizationFuneral/sectionOrganizationFuneral';
import SectionRitualGoodsDescription from 'components/sectionRitualGoodsDescription/sectionRitualGoodsDescription';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';

const MainPage = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);
  
  const [language, setLanguage] = useState('ua');

  const t = translations.navlink[language];

  const navItems = [
    {
      type: 'scroll',
      to: 'about',
      label: t.about,
      delay: 0.05,
    },
    {
      type: 'scroll',
      to: 'services',
      label: t.services,
      delay: 0.1,
    },
    {
      type: 'scroll',
      to: 'ritualGoods',
      label: t.ritualGoods,
      delay: 0.2,
    },
    {
      type: 'scroll',
      to: 'price',
      label: t.price,
      delay: 0.3,
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

  const serviceList = [
  {
    id: 1,
    src: require('../../images/servicesList/01.png'),
    alt: 'Зображення 1',
    title: 'Ритуальний агент',
    link: '/ritualagent',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 2,
    src: require('../../images/servicesList/02.png'),
    alt: 'Зображення 2',
    title: 'Організація похорон',
    link: '/funeralorganisation',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 3,
    src: require('../../images/servicesList/03.png'),
    alt: 'Зображення 3',
    title: 'Кремація',
    link: '/cremationservices',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 4,
    src: require('../../images/servicesList/04.png'),
    alt: 'Зображення 4',
    title: 'Ритуальний транспорт',
    link: '/ritualtransport',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 5,
    src: require('../../images/servicesList/05.png'),
    alt: 'Зображення 5',
    title: 'Відспівування померлого',
    link: '/funeralofthedeceased',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 6,
    src: require('../../images/servicesList/06.png'),
    alt: 'Зображення 6',
    title: 'Вантаж 200',
    link: '/transportationofthedeceased',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 7,
    src: require('../../images/servicesList/07.png'),
    alt: 'Зображення 7',
    title: 'Послуги моргу',
    link: '/mortuaryservices',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 8,
    src: require('../../images/servicesList/08.png'),
    alt: 'Зображення 8',
    title: 'Поминальні обіди',
    link: '/memorialdinners',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 9,
    src: require('../../images/servicesList/09.png'),
    alt: 'Зображення 9',
    title: 'Оформлення документів',
    link: '/processingdocuments',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 10,
    src: require('../../images/servicesList/10.png'),
    alt: 'Зображення 10',
    title: 'Ритуальна зала',
    link: '/ritualhall',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 11,
    src: require('../../images/servicesList/11.png'),
    alt: 'Зображення 11',
    title: 'Музичний супровід',
    link: '/funeralmusic',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 12,
    src: require('../../images/servicesList/12.png'),
    alt: 'Зображення 12',
    title: 'Супровід медперсоналом',
    link: '/medicalsupportonfuneral',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
];

  return (
    <>
      <Header navItems={navItems} handleLanguageChange={handleLanguageChange} language={language} />
      <main>
        <SectionHero />
        <SectionServiceList serviceList={serviceList} />
        <SectionRitualGoods />
        <SectionNeedHelp />
        <SectionPartners />
        <SectionFeneralPrice />
        <SectionOrganizationFuneral />
        <SectionRitualGoodsDescription />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;