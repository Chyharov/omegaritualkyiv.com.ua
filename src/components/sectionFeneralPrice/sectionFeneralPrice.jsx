import s from './sectionFeneralPrice.module.scss';

const sectionFeneralPrice = () => {
  return (
    <section className={s.sectionFeneralPrice}>
      <div className="container">
        <h2>Вартість похорону</h2>
        <ul>
          <li>
            <h3>Економ</h3>
            <ul>
              <li>Труну дерев'яну (оббиту тканиною)</li>
              <li>Похоронний набір</li>
              <li>Покривало</li>
              <li>Вінок із штучних квітів (2шт)</li>
              <li>Хрест на могилу з табличкою</li>
              <li>Автокатафалк (15-17 посадочних місць)</li>
              <li>Похоронна бригада (4 особи)</li>
            </ul>
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
