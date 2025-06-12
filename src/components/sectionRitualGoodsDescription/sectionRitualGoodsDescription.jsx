import RitualGoodsDescriptionImage from 'images/ritualGoodsDescription/5.png'
import s from './sectionRitualGoodsDescription.module.scss';

const sectionRitualGoodsDescription = () => {
  return (
    <section className={s.sectionRitualGoodsDescription}>
      <img loading='lazy' className={s.ritualGoodsDescriptionImageMobile} src={RitualGoodsDescriptionImage} alt="ritualGoodsDescriptionImageMobile" />
      <div className="container">
        <div className={s.ritualGoodsContainer}>
          <img loading='lazy' className={s.ritualGoodsDescriptionImage} src={RitualGoodsDescriptionImage} alt="RitualGoodsDescriptionImage" />
          <div className={s.ritualGoodsDescription}>
            <h1 className={s.titleRitualGoods}>Ритуальні товари</h1>
          <p className={s.descriptionRitualGoods}>
            Продажем ритуальних товарів та приладдя наша компанія займається вже понад 15 років. Все ритуальне приладдя, яке ми маємо в наявності, ви можете подивитися відвідавши нас за адресою вул. Івана Федорова, 33 у місті Київ.</p>
          <p className={s.descriptionRitualGoods}>
            В наявності є більше 100 різних ритуальних товарів, які ми продаємо за найнижчими цінами у місті Київ. При купівлі ритуальної труни або ритуальних вінків ми робимо великі знижки на багато ритуальних речей.
          </p>
          <button className={s.buttonRitualGoods}>ДОКЛАДНІШЕ</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default sectionRitualGoodsDescription;
