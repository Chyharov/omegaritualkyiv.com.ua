import banerRitualAgent from 'images/sectionRitualAgent/ritualagent.jpg';
import s from './BanerForSection.module.scss';

const BanerForSection = ({ title }) => {
  return (
    <div className={s.banerRitualAgent__container}>
      <img
        className={s.banerRitualAgent}
        src={banerRitualAgent}
        alt="banerRitualAgent"
      />
      <p className={s.banerRitualAgent__description}>
        Ритуальний агент – це той самий помічник, який здатний тверезо оцінити
        ситуацію, що склалася, включаючи й фінансову, щоб організувати похорон
        на гідному рівні відповідно до доступного для родичів померлого бюджету.
      </p>
    </div>
  );
};

export default BanerForSection;
