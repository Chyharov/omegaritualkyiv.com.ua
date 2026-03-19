import { Link } from 'react-router-dom';
import RitualGoodsDescriptionImage from 'images/ritualGoodsDescription/5.png';
import s from './sectionRitualGoodsDescription.module.scss';

const SectionRitualGoodsDescription = () => {
  return (
    <section className={s.sectionRitualGoodsDescription}>
      <div className="container">
        <div className={s.ritualGoodsContainer}>

          <img
            loading="lazy"
            className={s.image}
            src={RitualGoodsDescriptionImage}
            alt="Ритуальні товари"
          />

          <div className={s.ritualGoodsDescription}>
            <h1 className={s.titleRitualGoods}>
              Ритуальні товари
            </h1>

            <p className={s.descriptionRitualGoods}>
              Компанія «Омега-Ритуал» понад 15 років займається продажем
              ритуальних товарів та приладдя. У нашому асортименті –
              більше 100 найменувань.
            </p>

            <p className={s.descriptionRitualGoods}>
              Ви можете ознайомитися з продукцією у нашому офісі в Києві.
            </p>

            <h3 className={s.ourBenefitsTitle}>
              Ми пропонуємо вигідні умови:
            </h3>

            <ul className={s.ourBenefitsList}>
              <li>широкий вибір товарів</li>
              <li>вигідні знижки</li>
              <li>гарантія якості</li>
            </ul>

            <p className={s.descriptionRitualGoods}>
              <b>«Омега-Ритуал»</b> – повний спектр ритуальних товарів.
            </p>

            <Link
              to="/ritualgoods"
              className={s.buttonRitualGoods}
            >
              ДОКЛАДНІШЕ
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SectionRitualGoodsDescription;