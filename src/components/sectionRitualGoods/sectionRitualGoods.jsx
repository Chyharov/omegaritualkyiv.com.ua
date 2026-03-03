import { Link } from 'react-router-dom';
import s from './sectionRitualGoods.module.scss';

const ritualGoodsList = [
  {
    id: 1,
    src: require('../../images/ritualGoods/freshWreaths.png'),
    alt: 'Вінки',
    title: 'Вінки',
    link: '/wreaths',
  },
  {
    id: 2,
    src: require('../../images/ritualGoods/coffins.png'),
    alt: 'Труни',
    title: 'Труни',
    link: '/coffins',
  },
  {
    id: 3,
    src: require('../../images/ritualGoods/crosses.png'),
    alt: 'Хрести',
    title: 'Хрести',
    link: '/crosses',
  },
  {
    id: 4,
    src: require('../../images/ritualGoods/monuments.png'),
    alt: 'Памʼятники',
    title: 'Памʼятники',
    link: '/monuments',
  },
];

const SectionRitualGoods = () => {
  return (
    <section className={s.sectionRitualGoods} id="ritualGoods">
      <div className="container">
        <h2 className={s.ritualGoodsTitle}>Ритуальні товари</h2>

        <ul className={s.ritualGoodsList}>
          {ritualGoodsList.map(item => (
            <li key={item.id} className={s.ritualGoodsList__item}>
              <Link to={item.link} className={s.ritualGoodsList__itemLink}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className={s.ritualGoodsList__itemImg}
                />
                <p className={s.ritualGoodsList__itemDescription}>
                  {item.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionRitualGoods;
