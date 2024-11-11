import { FiPhoneCall } from "react-icons/fi";
import s from './sectionNeedHelp.module.scss';

const sectionNeedHelp = () => {
  return (
    <section className={s.sectionNeedHelp}>
      <div className="container">
        <h2 className={s.titleForNeedHelp}>Потрібна допомога? Зателефонуйте нам...</h2>
        <a className={s.needHelpLink} href="tel:+380939040707"><FiPhoneCall className={s.iconPhone} /><p className={s.phoneForNeedHelp}>+38 (093) 904-07-07</p></a>
      </div>
    </section>
  );
};

export default sectionNeedHelp;
