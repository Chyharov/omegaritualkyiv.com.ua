import { Link } from 'react-router-dom';
import RitualGoodsDescriptionImage from 'images/ritualGoodsDescription/5.png';
import s from './sectionRitualGoodsDescription.module.scss';

const sectionRitualGoodsDescription = () => {
  return (
    <section className={s.sectionRitualGoodsDescription}>
      <img
        loading="lazy"
        className={s.ritualGoodsDescriptionImageMobile}
        src={RitualGoodsDescriptionImage}
        alt="ritualGoodsDescriptionImageMobile"
      />
      <div className="container">
        <div className={s.ritualGoodsContainer}>
          <img
            loading="lazy"
            className={s.ritualGoodsDescriptionImage}
            src={RitualGoodsDescriptionImage}
            alt="RitualGoodsDescriptionImage"
          />
          <div className={s.ritualGoodsDescription}>
            <h1 className={s.titleRitualGoods}>Ритуальні товари</h1>
            <p className={s.descriptionRitualGoods}>
              Компанія «Омега-Ритуал» понад 15 років займається продажем
              ритуальних товарів та приладдя. У нашому асортименті – більше 100
              найменувань, які завжди доступні за найнижчими цінами у місті
              Київ.
            </p>
            <p className={s.descriptionRitualGoods}>
              Ви можете ознайомитися з усім ритуальним приладдям у нашому офісі
              за адресою: м. Київ, вул. Івана Федорова, 33.
            </p>
            <h3 className={s.ourBenefitsTitle}>Ми пропонуємо вигідні умови для клієнтів:</h3>
            <ul className={s.ourBenefits__list}>
              <li className={s.ourBenefits__listItem}>широкий вибір трун, вінків та інших необхідних товарів;</li>
              <li className={s.ourBenefits__listItem}>великі знижки при купівлі ритуальної труни або вінків;</li>
              <li className={s.ourBenefits__listItem}>гарантію якості та доступні ціни.</li>
            </ul>
             <p className={s.descriptionRitualGoods}>
              <b>«Омега-Ритуал»</b> – повний спектр ритуальних товарів за чесною
              вартістю.
            </p>
            <Link to='/ritualgoods' className={s.buttonRitualGoods}>ДОКЛАДНІШЕ</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default sectionRitualGoodsDescription;
