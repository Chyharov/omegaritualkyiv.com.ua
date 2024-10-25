import s from './sectionServiceList.module.scss';

const serviceList = [
  {
    id: 1,
    src: require('../../images/servicesList/01.png'),
    alt: 'Зображення 1',
    title: 'Ритуальний агент',
    link: 'ДІЗНАТИСЬ БІЛЬШЕ',
  },
  {
    id: 2,
    src: require('../../images/servicesList/02.png'),
    alt: 'Зображення 2',
    title: 'Ритуальний агент',
    link: 'ДІЗНАТИСЬ БІЛЬШЕ',
  },
  {
    id: 3,
    src: require('../../images/servicesList/03.png'),
    alt: 'Зображення 3',
    title: 'Ритуальний агент',
    link: 'ДІЗНАТИСЬ БІЛЬШЕ',
  },
  {
    id: 4,
    src: require('../../images/servicesList/04.png'),
    alt: 'Зображення 4',
    title: 'Ритуальний агент',
    link: 'ДІЗНАТИСЬ БІЛЬШЕ',
  },
  {
    id: 5,
    src: require('../../images/servicesList/05.png'),
    alt: 'Зображення 5',
    title: 'Ритуальний агент',
    link: 'ДІЗНАТИСЬ БІЛЬШЕ',
  },
  {
    id: 6,
    src: require('../../images/servicesList/06.png'),
    alt: 'Зображення 6',
    title: 'Ритуальний агент',
    link: 'ДІЗНАТИСЬ БІЛЬШЕ',
  },
  {
    id: 7,
    src: require('../../images/servicesList/07.png'),
    alt: 'Зображення 7',
    title: 'Ритуальний агент',
    link: 'ДІЗНАТИСЬ БІЛЬШЕ',
  },
  {
    id: 8,
    src: require('../../images/servicesList/08.png'),
    alt: 'Зображення 8',
    title: 'Ритуальний агент',
    link: 'ДІЗНАТИСЬ БІЛЬШЕ',
  },
  {
    id: 9,
    src: require('../../images/servicesList/09.png'),
    alt: 'Зображення 9',
    title: 'Ритуальний агент',
    link: 'ДІЗНАТИСЬ БІЛЬШЕ',
  },
  {
    id: 10,
    src: require('../../images/servicesList/10.png'),
    alt: 'Зображення 10',
    title: 'Ритуальний агент',
    link: 'ДІЗНАТИСЬ БІЛЬШЕ',
  },
  {
    id: 11,
    src: require('../../images/servicesList/11.png'),
    alt: 'Зображення 11',
    title: 'Ритуальний агент',
    link: 'ДІЗНАТИСЬ БІЛЬШЕ',
  },
  {
    id: 12,
    src: require('../../images/servicesList/12.png'),
    alt: 'Зображення 12',
    title: 'Ритуальний агент',
    link: 'ДІЗНАТИСЬ БІЛЬШЕ',
  },
];

const sectionServiceList = () => {
  return (
    <section className={s.sectionServiceList}>
      <div className={'container ' + s.serviceListContainer}>
        <h1 className={s.serviceList__title}>Послуги, які ми надаємо</h1>

          <ul className={s.serviceList}>
        {serviceList.map(photo => (
            <li key={photo.id} className={s.serviceList__item} style={{ backgroundImage: `url(${photo.src})` }}>
              <p className={s.serviceList__itemDesctioption}>
                {photo.title}
              </p>
              <a className={s.serviceList__itemLink} href="/">
                {photo.link}
              </a>
            </li>
        ))}
          </ul>
      </div>
    </section>
  );
};

export default sectionServiceList;
