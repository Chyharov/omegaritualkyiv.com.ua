import s from './sectionFeneralPrice.module.scss';

const sectionFeneralPrice = () => {
  return (
    <section className={s.sectionFeneralPrice}>
      <div className="container">
        <div className={s.feneralPriceTitleContainer}><svg className={s.feneralPriceTitleContainerSvg} xmlns="http://www.w3.org/2000/svg" width="70" height="68" viewBox="0 0 70 68" fill="#555555"><rect x="25" y="23" width="45" height="45" fill="#D4B669" fill-opacity="0.7"></rect><path d="M34.6485 39.6675H25.3517C24.8662 39.6675 24.4728 40.061 24.4728 40.5464C24.4728 41.0318 24.8662 41.4253 25.3517 41.4253H34.6485C35.134 41.4253 35.5274 41.0318 35.5274 40.5464C35.5274 40.061 35.134 39.6675 34.6485 39.6675Z" fill="#555555"></path><path d="M34.6485 43.1635H25.3517C24.8662 43.1635 24.4728 43.557 24.4728 44.0424C24.4728 44.5277 24.8662 44.9213 25.3517 44.9213H34.6485C35.134 44.9213 35.5274 44.5277 35.5274 44.0424C35.5274 43.557 35.134 43.1635 34.6485 43.1635Z" fill="#555555"></path><path d="M57.9485 52.9479H54.7265V49.9388C54.7265 48.6788 53.7013 47.6536 52.4413 47.6536H50.8006V20.8005C50.8006 9.33102 41.4696 0 30.0001 0H30C18.5306 0 9.19953 9.33102 9.19953 20.8005V47.6535H7.55868C6.29869 47.6535 5.27353 48.6787 5.27353 49.9387V52.9478H2.05159C0.920387 52.9479 0 53.8682 0 54.9994V57.9485C0 59.0797 0.920387 60 2.05159 60H27.9492C28.4347 60 28.8281 59.6065 28.8281 59.1211C28.8281 58.6357 28.4347 58.2422 27.9492 58.2422H2.05159C1.88964 58.2422 1.75781 58.1104 1.75781 57.9485V54.9994C1.75781 54.8374 1.88964 54.7057 2.05159 54.7057H57.9485C58.1105 54.7057 58.2422 54.8376 58.2422 54.9994V57.9485C58.2422 58.1105 58.1105 58.2422 57.9485 58.2422H32.0508C31.5653 58.2422 31.1719 58.6357 31.1719 59.1211C31.1719 59.6065 31.5653 60 32.0508 60H57.9485C59.0796 60 60 59.0796 60 57.9485V54.9994C60 53.8682 59.0796 52.9479 57.9485 52.9479ZM10.9573 20.8005C10.9573 10.3003 19.4998 1.75781 30.0001 1.75781C40.5003 1.75781 49.0428 10.3003 49.0428 20.8005V47.6535H47.2849V20.8005C47.2849 11.2695 39.5309 3.51561 30 3.51561C20.4691 3.51561 12.7151 11.2695 12.7151 20.8005V47.6535H10.9573V20.8005ZM45.527 47.6536H14.473V20.8005C14.473 12.2388 21.4383 5.27342 30 5.27342C38.5617 5.27342 45.527 12.2388 45.527 20.8005V47.6536ZM7.03134 52.9479V49.9388C7.03134 49.653 7.27286 49.4114 7.55868 49.4114H52.4413C52.7271 49.4114 52.9687 49.653 52.9687 49.9388V52.9479H7.03134Z" fill="#555555"></path><path d="M38.295 17.6288H32.9158V12.2495C32.9158 11.2675 32.1168 10.4684 31.1347 10.4684H28.8656C27.8836 10.4684 27.0846 11.2674 27.0846 12.2495V17.6288H21.7053C20.7232 17.6288 19.9242 18.4278 19.9242 19.4099V21.679C19.9242 22.6612 20.7232 23.4601 21.7053 23.4601H27.0846V35.445C27.0846 36.4272 27.8836 37.2261 28.8656 37.2261H31.1347C32.1168 37.2261 32.9158 36.4272 32.9158 35.445V30.5651C32.9158 30.0797 32.5224 29.6862 32.0369 29.6862C31.5514 29.6862 31.158 30.0797 31.158 30.5651V35.445C31.158 35.4579 31.1475 35.4683 31.1347 35.4683H28.8656C28.8528 35.4683 28.8424 35.4579 28.8424 35.445V22.9548C28.8424 22.2641 28.2805 21.7023 27.5899 21.7023H21.7053C21.6926 21.7023 21.682 21.6919 21.682 21.679V19.4099C21.682 19.397 21.6926 19.3866 21.7053 19.3866H27.5899C28.2806 19.3866 28.8424 18.8248 28.8424 18.1341V12.2495C28.8424 12.2367 28.8528 12.2262 28.8656 12.2262H31.1347C31.1475 12.2262 31.158 12.2366 31.158 12.2495V18.1341C31.158 18.8248 31.7199 19.3866 32.4105 19.3866H38.295C38.3077 19.3866 38.3183 19.397 38.3183 19.4099V21.679C38.3183 21.6919 38.3077 21.7023 38.295 21.7023H32.4105C31.7198 21.7023 31.158 22.2641 31.158 22.9548V26.4636C31.158 26.949 31.5514 27.3426 32.0369 27.3426C32.5224 27.3426 32.9158 26.949 32.9158 26.4636V23.4601H38.295C39.2771 23.4601 40.0761 22.6612 40.0761 21.679V19.4099C40.0761 18.4278 39.2771 17.6288 38.295 17.6288Z" fill="#555555"></path></svg><h2 className={s.funeralPriceTitle}>Вартість похорону</h2></div>
        <ul className={s.feneralPriceList}>
          <li className={s.feneralPriceList__item}>
            <div className={s.feneralPriceList__itemContainer}>
              <h3 className={s.feneralPriceList__itemTitle}>Економ</h3>
                <p className={s.feneralPriceList__itemPrice}>11 500 ГРН</p>
            </div>
            <ul className={s.feneralPriceList__itemList}>
              <li className={s.feneralPriceList__itemListItem}>Труну дерев'яну (оббиту тканиною)</li>
              <li className={s.feneralPriceList__itemListItem}>Похоронний набір</li>
              <li className={s.feneralPriceList__itemListItem}>Покривало</li>
              <li className={s.feneralPriceList__itemListItem}>Вінок із штучних квітів (2шт)</li>
              <li className={s.feneralPriceList__itemListItem}>Хрест на могилу з табличкою</li>
              <li className={s.feneralPriceList__itemListItem}>Автокатафалк (15-17 посадочних місць)</li>
              <li className={s.feneralPriceList__itemListItem}>Похоронна бригада (4 особи)</li>
            </ul>
          </li>
          <li className={s.feneralPriceList__item}>
            <div className={s.feneralPriceList__itemContainer}>
              <h3 className={s.feneralPriceList__itemTitle}>Стандарт</h3>
                <p className={s.feneralPriceList__itemPrice}>УТОЧНЮЙТЕ</p>
            </div>
            <ul>
             <li className={s.feneralPriceList__itemListItem}>
                Труна дерев'яна-комбінована (оббита драпірованим атласом з
                дерев'яною лакованою накладкою)
              </li>
             <li className={s.feneralPriceList__itemListItem}>Похоронний набір</li>
             <li className={s.feneralPriceList__itemListItem}>Покривало атласне</li>
             <li className={s.feneralPriceList__itemListItem}>Вінок із штучних квітів (4шт)</li>
             <li className={s.feneralPriceList__itemListItem}>Хрест на могилу з табличкою</li>
             <li className={s.feneralPriceList__itemListItem}>Автокатафалк (15-17 посадкових місць)</li>
             <li className={s.feneralPriceList__itemListItem}>Похоронна бригада (4 особи)</li>
             <li className={s.feneralPriceList__itemListItem}>Ритуальні рушники (2шт)</li>
            </ul>
          </li>
          <li className={s.feneralPriceList__item}>
            <div className={s.feneralPriceList__itemContainer}>
              <h3 className={s.feneralPriceList__itemTitle}>VIP</h3>
                <p className={s.feneralPriceList__itemPrice}>УТОЧНЮЙТЕ</p>
            </div>
            <ul>
              <li className={s.feneralPriceList__itemListItem}>Труна дерев'яна лакована</li>
              <li className={s.feneralPriceList__itemListItem}>Похоронний набір</li>
              <li className={s.feneralPriceList__itemListItem}>Покривало атласне</li>
              <li className={s.feneralPriceList__itemListItem}>Ритуальні рушники (2шт)</li>
              <li className={s.feneralPriceList__itemListItem}>Вінок із штучних квітів 180см (4шт)</li>
              <li className={s.feneralPriceList__itemListItem}>Хрест на могилу з табличкою</li>
              <li className={s.feneralPriceList__itemListItem}>Автокатафалк VIP класу (15-17 посад. місць)</li>
              <li className={s.feneralPriceList__itemListItem}>Священик</li>
              <li className={s.feneralPriceList__itemListItem}>Розпорядник похорону</li>
              <li className={s.feneralPriceList__itemListItem}>Похоронна бригада (4 особи)</li>
              <li className={s.feneralPriceList__itemListItem}>Музичний супровід</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default sectionFeneralPrice;