import s from './sectionFeneralPrice.module.scss';

const sectionFeneralPrice = () => {
  return (
    <section className={s.sectionFeneralPrice}>
      <div className="container">
        <h2>Вартість похорону</h2>
        <ul>
          <li>
            <h3>Економ</h3>
          </li>
          <li>
            <h3>Стандарт</h3>
          </li>
          <li>
            <h3>VIP</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default sectionFeneralPrice;
