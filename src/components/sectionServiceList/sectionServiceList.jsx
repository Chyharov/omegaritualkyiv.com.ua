import { Link } from 'react-router-dom';
import s from './sectionServiceList.module.scss';

const sectionServiceList = ({ serviceList }) => {
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
