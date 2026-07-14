import { Link } from 'react-router-dom';
import s from './sectionRitualGoods.module.scss';

const ritualGoodsList = [
  {
    id: 1,
    src: require('../../images/ritualGoods/freshWreaths.png'),
    alt: 'Вінки',
    title: 'Вінки',
    link: '/rytualni-vinky-kyiv',
  },
  {
    id: 2,
    src: require('../../images/ritualGoods/coffins.png'),
    alt: 'Труни',
    title: 'Труни',
    link: '/truny-kyiv',
  },
  {
    id: 3,
    src: require('../../images/ritualGoods/crosses.png'),
    alt: 'Хрести',
    title: 'Хрести',
    link: '/rytualni-khresty-kyiv',
  },
  {
    id: 4,
    src: require('../../images/ritualGoods/monuments.png'),
    alt: 'Памʼятники',
    title: 'Памʼятники',
    link: '/pamiatnyky-kyiv',
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
