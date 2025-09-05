import { Link } from 'react-router-dom';
import s from './sectionServiceList.module.scss';

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
    link: '/mortuaryservicespage',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 8,
    src: require('../../images/servicesList/08.png'),
    alt: 'Зображення 8',
    title: 'Поминальні обіди',
    link: '/memorialdinnerspage',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 9,
    src: require('../../images/servicesList/09.png'),
    alt: 'Зображення 9',
    title: 'Оформлення документів',
    link: '/processingdocumentspage',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 10,
    src: require('../../images/servicesList/10.png'),
    alt: 'Зображення 10',
    title: 'Ритуальна зала',
    link: '/ritualagent',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 11,
    src: require('../../images/servicesList/11.png'),
    alt: 'Зображення 11',
    title: 'Музичний супровід',
    link: '/ritualagent',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 12,
    src: require('../../images/servicesList/12.png'),
    alt: 'Зображення 12',
    title: 'Супровід медперсоналом',
    link: '/ritualagent',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
];

const sectionServiceList = () => {
  return (
    <section className={s.sectionServiceList} id="services">
      <div className={'container ' + s.serviceListContainer}>
        <h1 className={s.serviceList__title}>Послуги, які ми надаємо</h1>

        <ul className={s.serviceList}>
          {serviceList.map(photo => (
            <Link to={photo.link}>
              <li key={photo.id} className={s.serviceList__item}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={s.serviceList__itemImg}
                />
                <h3 className={s.serviceList__itemDesctioption}>
                  {photo.title}
                </h3>
                <p className={s.serviceList__itemLink} to={photo.link}>
                  {photo.linkTitle}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default sectionServiceList;
