import { Link } from 'react-router-dom';
import s from './sectionServiceList.module.scss';

const SectionServiceList = ({ serviceList }) => {
  return (
    <section
      className={s.sectionServiceList}
      id="services"
      aria-labelledby="services-title"
    >
      <div className={`container ${s.serviceListContainer}`}>
        <h2 id="services-title" className={s.serviceList__title}>
          Послуги, які ми надаємо
        </h2>

        <ul className={s.serviceList}>
          {serviceList.map(service => (
            <li key={service.id} className={s.serviceList__item}>
              <article>
                <Link to={service.link} className={s.serviceList__card}>
                  <img
                    src={service.src}
                    alt={service.alt}
                    className={s.serviceList__itemImg}
                  />

                  <h3 className={s.serviceList__itemDescription}>
                    {service.title}
                  </h3>

                  <span className={s.serviceList__itemLink}>
                    {service.linkTitle}
                  </span>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionServiceList;
