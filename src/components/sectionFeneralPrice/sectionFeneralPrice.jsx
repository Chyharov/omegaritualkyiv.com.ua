import s from './sectionFeneralPrice.module.scss';

const SectionFeneralPrice = ({ style }) => {
  return (
    <section className={s.sectionFeneralPrice} id="price" style={style}>
      <div className="container">

        <div className={s.feneralPriceTitleContainer}>
          <svg
            className={s.feneralPriceTitleContainerSvg}
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="68"
            viewBox="0 0 70 68"
            fill="#777777"
          >
            <rect
              x="25"
              y="23"
              width="45"
              height="45"
              fill="#D4B669"
              fillOpacity="0.7"
            />
          </svg>

          <h2 className={s.funeralPriceTitle}>Вартість похорону</h2>
        </div>

        <ul className={s.feneralPriceList}>
          <li className={s.feneralPriceList__item}>
            <div className={s.feneralPriceList__itemContainer}>
              <h3 className={s.feneralPriceList__itemTitle}>Економ</h3>
              <p className={s.feneralPriceList__itemPrice}>11 500 ГРН</p>
            </div>

            <ul className={s.feneralPriceList__itemList}>
              <li className={s.feneralPriceList__itemListItem}>
                Труна дерев'яна (оббита тканиною)
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Похоронний набір
              </li>
              <li className={s.feneralPriceList__itemListItem}>Покривало</li>
              <li className={s.feneralPriceList__itemListItem}>
                Вінок із штучних квітів (2шт)
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Хрест на могилу з табличкою
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Автокатафалк (15-17 посадочних місць)
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Похоронна бригада (4 особи)
              </li>
            </ul>
          </li>

          <li className={s.feneralPriceList__item}>
            <div className={s.feneralPriceList__itemContainer}>
              <h3 className={s.feneralPriceList__itemTitle}>Стандарт</h3>
              <p className={s.feneralPriceList__itemPrice}>УТОЧНЮЙТЕ</p>
            </div>

            <ul className={s.feneralPriceList__itemList}>
              <li className={s.feneralPriceList__itemListItem}>
                Труна дерев'яна-комбінована
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Похоронний набір
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Покривало атласне
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Вінок із штучних квітів (4шт)
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Хрест на могилу
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Автокатафалк
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Похоронна бригада
              </li>
            </ul>
          </li>

          <li className={s.feneralPriceList__item}>
            <div className={s.feneralPriceList__itemContainer}>
              <h3 className={s.feneralPriceList__itemTitle}>VIP</h3>
              <p className={s.feneralPriceList__itemPrice}>УТОЧНЮЙТЕ</p>
            </div>

            <ul className={s.feneralPriceList__itemList}>
              <li className={s.feneralPriceList__itemListItem}>
                Труна дерев'яна лакована
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Похоронний набір
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Покривало атласне
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Ритуальні рушники
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Автокатафалк VIP
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Священик
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Розпорядник похорону
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Похоронна бригада
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Музичний супровід
              </li>
            </ul>
          </li>
        </ul>

        <p className={s.discontForRefugees}>
          <span className={s.redStar}>*</span>
          Для біженців, переселенців та військових діють знижки.
        </p>

      </div>
    </section>
  );
};

export default SectionFeneralPrice;