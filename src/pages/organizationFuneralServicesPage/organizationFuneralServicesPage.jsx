import { useState, useCallback, useEffect } from 'react';
import Header from 'components/header/header';
import SectionOrganizationFuneralServices from 'components/SectionOrganizationFuneralServices/SectionOrganizationFuneralServices';
import SectionNeedHelp from 'components/sectionNeedHelp/sectionNeedHelp';
import Footer from 'components/footer/footer';
import translations from 'components/LanguageSelect/translations';

const OrganizationFuneralServicesPage = () => {
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

  const title = 'Ритуальні послуги';

  return (
    <>
      <Header navItems={navItems} handleLanguageChange={handleLanguageChange} language={language} />
      <main>
        <SectionOrganizationFuneralServices title={title} serviceList={serviceList} />
        <SectionNeedHelp />
      </main>
      <Footer />
    </>
  );
};

export default OrganizationFuneralServicesPage;