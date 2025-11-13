import { Link } from 'react-router-dom';
import s from './sectionRitualGoods.module.scss';

const ritualGoodsList = [
  {
    id: 1,
    src: require('../../images/ritualGoods/Group-46.png'),
    alt: 'Зображення 1',
    title: 'Вінки',
    link: '/wreaths',
  },
  {
    id: 2,
    src: require('../../images/ritualGoods/Group-47.png'),
    alt: 'Зображення 2',
    title: 'Труни',
  },
  {
    id: 3,
    src: require('../../images/ritualGoods/Group-48.png'),
    alt: 'Зображення 3',
    title: 'Хрести',
  },
  {
    id: 4,
    src: require('../../images/ritualGoods/Group-49.png'),
    alt: 'Зображення 4',
    title: 'Пам`ятники',
  },
];

const sectionRitualGoods = () => {
  return (
    <section className={s.sectionRitualGoods} id="ritualGoods">
      <div className="container">
        <h2 className={s.ritualGoodsTitle}>Ритуальні товари</h2>

        <ul className={s.ritualGoodsList}>
          {ritualGoodsList.map(photo => (
            <Link className={s.ritualGoodsList__itemLink} to={photo.link}>
              <li key={photo.id} className={s.ritualGoodsList__item}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={s.ritualGoodsList__itemImg}
                />
                <p className={s.ritualGoodsList__itemDesctioption}>
                  {photo.title}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default sectionRitualGoods;
