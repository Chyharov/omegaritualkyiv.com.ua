import s from './sectionFeneralPrice.module.scss';

const sectionFeneralPrice = () => {
  return (
    <section className={s.sectionFeneralPrice} id='price'>
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
              fill-opacity="0.7"
            ></rect>
            <path
              d="M34.6485 39.6675H25.3517C24.8662 39.6675 24.4728 40.061 24.4728 40.5464C24.4728 41.0318 24.8662 41.4253 25.3517 41.4253H34.6485C35.134 41.4253 35.5274 41.0318 35.5274 40.5464C35.5274 40.061 35.134 39.6675 34.6485 39.6675Z"
              fill="#777777"
            ></path>
            <path
              d="M34.6485 43.1635H25.3517C24.8662 43.1635 24.4728 43.557 24.4728 44.0424C24.4728 44.5277 24.8662 44.9213 25.3517 44.9213H34.6485C35.134 44.9213 35.5274 44.5277 35.5274 44.0424C35.5274 43.557 35.134 43.1635 34.6485 43.1635Z"
              fill="#777777"
            ></path>
            <path
              d="M57.9485 52.9479H54.7265V49.9388C54.7265 48.6788 53.7013 47.6536 52.4413 47.6536H50.8006V20.8005C50.8006 9.33102 41.4696 0 30.0001 0H30C18.5306 0 9.19953 9.33102 9.19953 20.8005V47.6535H7.55868C6.29869 47.6535 5.27353 48.6787 5.27353 49.9387V52.9478H2.05159C0.920387 52.9479 0 53.8682 0 54.9994V57.9485C0 59.0797 0.920387 60 2.05159 60H27.9492C28.4347 60 28.8281 59.6065 28.8281 59.1211C28.8281 58.6357 28.4347 58.2422 27.9492 58.2422H2.05159C1.88964 58.2422 1.75781 58.1104 1.75781 57.9485V54.9994C1.75781 54.8374 1.88964 54.7057 2.05159 54.7057H57.9485C58.1105 54.7057 58.2422 54.8376 58.2422 54.9994V57.9485C58.2422 58.1105 58.1105 58.2422 57.9485 58.2422H32.0508C31.5653 58.2422 31.1719 58.6357 31.1719 59.1211C31.1719 59.6065 31.5653 60 32.0508 60H57.9485C59.0796 60 60 59.0796 60 57.9485V54.9994C60 53.8682 59.0796 52.9479 57.9485 52.9479ZM10.9573 20.8005C10.9573 10.3003 19.4998 1.75781 30.0001 1.75781C40.5003 1.75781 49.0428 10.3003 49.0428 20.8005V47.6535H47.2849V20.8005C47.2849 11.2695 39.5309 3.51561 30 3.51561C20.4691 3.51561 12.7151 11.2695 12.7151 20.8005V47.6535H10.9573V20.8005ZM45.527 47.6536H14.473V20.8005C14.473 12.2388 21.4383 5.27342 30 5.27342C38.5617 5.27342 45.527 12.2388 45.527 20.8005V47.6536ZM7.03134 52.9479V49.9388C7.03134 49.653 7.27286 49.4114 7.55868 49.4114H52.4413C52.7271 49.4114 52.9687 49.653 52.9687 49.9388V52.9479H7.03134Z"
              fill="#777777"
            ></path>
            <path
              d="M38.295 17.6288H32.9158V12.2495C32.9158 11.2675 32.1168 10.4684 31.1347 10.4684H28.8656C27.8836 10.4684 27.0846 11.2674 27.0846 12.2495V17.6288H21.7053C20.7232 17.6288 19.9242 18.4278 19.9242 19.4099V21.679C19.9242 22.6612 20.7232 23.4601 21.7053 23.4601H27.0846V35.445C27.0846 36.4272 27.8836 37.2261 28.8656 37.2261H31.1347C32.1168 37.2261 32.9158 36.4272 32.9158 35.445V30.5651C32.9158 30.0797 32.5224 29.6862 32.0369 29.6862C31.5514 29.6862 31.158 30.0797 31.158 30.5651V35.445C31.158 35.4579 31.1475 35.4683 31.1347 35.4683H28.8656C28.8528 35.4683 28.8424 35.4579 28.8424 35.445V22.9548C28.8424 22.2641 28.2805 21.7023 27.5899 21.7023H21.7053C21.6926 21.7023 21.682 21.6919 21.682 21.679V19.4099C21.682 19.397 21.6926 19.3866 21.7053 19.3866H27.5899C28.2806 19.3866 28.8424 18.8248 28.8424 18.1341V12.2495C28.8424 12.2367 28.8528 12.2262 28.8656 12.2262H31.1347C31.1475 12.2262 31.158 12.2366 31.158 12.2495V18.1341C31.158 18.8248 31.7199 19.3866 32.4105 19.3866H38.295C38.3077 19.3866 38.3183 19.397 38.3183 19.4099V21.679C38.3183 21.6919 38.3077 21.7023 38.295 21.7023H32.4105C31.7198 21.7023 31.158 22.2641 31.158 22.9548V26.4636C31.158 26.949 31.5514 27.3426 32.0369 27.3426C32.5224 27.3426 32.9158 26.949 32.9158 26.4636V23.4601H38.295C39.2771 23.4601 40.0761 22.6612 40.0761 21.679V19.4099C40.0761 18.4278 39.2771 17.6288 38.295 17.6288Z"
              fill="#777777"
            ></path>
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
            <ul>
              <li className={s.feneralPriceList__itemListItem}>
                Труна дерев'яна-комбінована (оббита драпірованим атласом з
                дерев'яною лакованою накладкою)
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
                Хрест на могилу з табличкою
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Автокатафалк (15-17 посадкових місць)
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Похоронна бригада (4 особи)
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Ритуальні рушники (2шт)
              </li>
            </ul>
          </li>
          <li className={s.feneralPriceList__item}>
            <div className={s.feneralPriceList__itemContainer}>
              <h3
                className={s.feneralPriceList__itemTitle}
                style={{ margin: '0 auto' }}
              >
                VIP
              </h3>
              <p className={s.feneralPriceList__itemPrice}>УТОЧНЮЙТЕ</p>
            </div>
            <ul>
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
                Ритуальні рушники (2шт)
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Вінок із штучних квітів 180см (4шт)
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Хрест на могилу з табличкою
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Автокатафалк VIP класу (15-17 посад. місць)
              </li>
              <li className={s.feneralPriceList__itemListItem}>Священик</li>
              <li className={s.feneralPriceList__itemListItem}>
                Розпорядник похорону
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Похоронна бригада (4 особи)
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Музичний супровід
              </li>
            </ul>
          </li>
        </ul>
        <div className={s.feneralPriceTitleContainer}>
          <svg
            className={s.feneralPriceTitleContainerSvg}
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="68"
            viewBox="0 0 70 68"
            fill="none"
          >
            <rect
              x="25"
              y="23"
              width="45"
              height="45"
              fill="#D4B669"
              fill-opacity="0.7"
            ></rect>
            <g clip-path="url(#clip0)">
              <path
                d="M19.8131 58.8103C19.3828 58.8103 18.9956 58.5131 18.8981 58.0753L13.1456 32.0794C13.0341 31.5741 13.3537 31.0734 13.8591 30.9619C14.3625 30.8522 14.8641 31.1691 14.9766 31.6753L20.7291 57.6712C20.8406 58.1765 20.5209 58.6772 20.0156 58.7887C19.9481 58.8037 19.8797 58.8103 19.8131 58.8103Z"
                fill="#777777"
              ></path>
              <path
                d="M14.0615 32.8154C13.5431 32.8154 13.124 32.3963 13.124 31.8779V19.6932C13.124 19.1747 13.5431 18.7557 14.0615 18.7557C14.58 18.7557 14.999 19.1747 14.999 19.6932V31.8779C14.999 32.3963 14.58 32.8154 14.0615 32.8154Z"
                fill="#777777"
              ></path>
              <path
                d="M14.0606 20.6306C13.8825 20.6306 13.7016 20.579 13.5413 20.4731C13.1109 20.1853 12.9938 19.604 13.2816 19.1728L18.9066 10.7325C19.1934 10.3012 19.7738 10.185 20.2069 10.4728C20.6372 10.7606 20.7544 11.3419 20.4666 11.7731L14.8416 20.2134C14.6616 20.4844 14.3634 20.6306 14.0606 20.6306Z"
                fill="#777777"
              ></path>
              <path
                d="M19.6865 12.1903C19.1681 12.1903 18.749 11.7713 18.749 11.2528V8.43939C18.749 7.92095 19.1681 7.50189 19.6865 7.50189C20.205 7.50189 20.624 7.92095 20.624 8.43939V11.2528C20.624 11.7713 20.205 12.1903 19.6865 12.1903Z"
                fill="#777777"
              ></path>
              <path
                d="M17.8116 6.56251C17.4356 6.56251 17.0803 6.3347 16.9359 5.96157C16.7503 5.47782 16.9922 4.93501 17.4741 4.74939L29.6616 0.0618853C30.1444 -0.122802 30.6872 0.117198 30.8737 0.60001C31.0594 1.08376 30.8175 1.62657 30.3356 1.8122L18.1481 6.4997C18.0375 6.54282 17.9231 6.56251 17.8116 6.56251Z"
                fill="#777777"
              ></path>
              <path
                d="M21.5588 60C20.3944 60 19.3659 59.2997 18.9403 58.216C18.7509 57.7341 18.9881 57.1903 19.47 57.001C19.9463 56.8135 20.4966 57.0488 20.685 57.5306C20.8275 57.8916 21.1706 58.125 21.5588 58.125C22.0772 58.125 22.4963 58.5441 22.4963 59.0625C22.4963 59.5809 22.0772 60 21.5588 60Z"
                fill="#777777"
              ></path>
              <path
                d="M40.1868 58.8103C40.1202 58.8103 40.0508 58.8028 39.9833 58.7888C39.478 58.6772 39.1583 58.1766 39.2699 57.6713L45.0224 31.6753C45.134 31.1691 45.6346 30.8531 46.1399 30.9619C46.6452 31.0735 46.9649 31.5741 46.8533 32.0794L41.1008 58.0753C41.0043 58.5131 40.6171 58.8103 40.1868 58.8103Z"
                fill="#777777"
              ></path>
              <path
                d="M45.9384 32.8154C45.4199 32.8154 45.0009 32.3963 45.0009 31.8779V19.6932C45.0009 19.1747 45.4199 18.7557 45.9384 18.7557C46.4568 18.7557 46.8759 19.1747 46.8759 19.6932V31.8779C46.8759 32.3963 46.4568 32.8154 45.9384 32.8154Z"
                fill="#777777"
              ></path>
              <path
                d="M45.9395 20.6306C45.6367 20.6306 45.3385 20.4844 45.1585 20.2134L39.5335 11.7731C39.2457 11.3419 39.3629 10.7606 39.7932 10.4728C40.2245 10.185 40.8067 10.3012 41.0935 10.7325L46.7185 19.1728C47.0063 19.604 46.8892 20.1853 46.4588 20.4731C46.2985 20.579 46.1176 20.6306 45.9395 20.6306Z"
                fill="#777777"
              ></path>
              <path
                d="M40.3134 12.1903C39.7949 12.1903 39.3759 11.7713 39.3759 11.2528V8.43939C39.3759 7.92095 39.7949 7.50189 40.3134 7.50189C40.8318 7.50189 41.2509 7.92095 41.2509 8.43939V11.2528C41.2509 11.7713 40.8318 12.1903 40.3134 12.1903Z"
                fill="#777777"
              ></path>
              <path
                d="M38.4413 60C37.9228 60 37.5038 59.581 37.5038 59.0625C37.5038 58.5441 37.9228 58.125 38.4413 58.125C38.8294 58.125 39.1725 57.8916 39.315 57.5307C39.5044 57.0478 40.05 56.8125 40.53 57.001C41.0129 57.1903 41.25 57.7341 41.0597 58.216C40.6341 59.2997 39.6057 60 38.4413 60Z"
                fill="#777777"
              ></path>
              <path
                d="M42.1865 9.37594H17.8115C17.2931 9.37594 16.874 8.95687 16.874 8.43844V5.625C16.874 5.10656 17.2931 4.6875 17.8115 4.6875C18.33 4.6875 18.749 5.10656 18.749 5.625V7.50094H41.249V5.625C41.249 5.10656 41.6681 4.6875 42.1865 4.6875C42.705 4.6875 43.124 5.10656 43.124 5.625V8.43844C43.124 8.95687 42.705 9.37594 42.1865 9.37594Z"
                fill="#777777"
              ></path>
              <path
                d="M38.4412 60H21.5587C21.0403 60 20.6212 59.5809 20.6212 59.0625C20.6212 58.5441 21.0403 58.125 21.5587 58.125H38.4412C38.9596 58.125 39.3787 58.5441 39.3787 59.0625C39.3787 59.5809 38.9596 60 38.4412 60Z"
                fill="#777777"
              ></path>
              <path
                d="M45.9384 20.6307H14.0615C13.5431 20.6307 13.124 20.2116 13.124 19.6932C13.124 19.1747 13.5431 18.7557 14.0615 18.7557H45.9384C46.4568 18.7557 46.8759 19.1747 46.8759 19.6932C46.8759 20.2116 46.4568 20.6307 45.9384 20.6307Z"
                fill="#777777"
              ></path>
              <path
                d="M45.9384 32.8153H14.0615C13.5431 32.8153 13.124 32.3962 13.124 31.8778C13.124 31.3594 13.5431 30.9403 14.0615 30.9403H45.9384C46.4568 30.9403 46.8759 31.3594 46.8759 31.8778C46.8759 32.3962 46.4568 32.8153 45.9384 32.8153Z"
                fill="#777777"
              ></path>
              <path
                d="M42.1866 6.56254C42.075 6.56254 41.9607 6.54285 41.85 6.50067L29.6625 1.81317C29.1797 1.62754 28.9388 1.08473 29.1244 0.600978C29.311 0.117228 29.851 -0.121834 30.3366 0.0628533L42.5241 4.75035C43.0069 4.93598 43.2478 5.47879 43.0622 5.96254C42.9178 6.33473 42.5625 6.56254 42.1866 6.56254Z"
                fill="#777777"
              ></path>
              <path
                d="M43.124 6.5625H16.874C16.3556 6.5625 15.9365 6.14344 15.9365 5.625C15.9365 5.10656 16.3556 4.6875 16.874 4.6875H43.124C43.6425 4.6875 44.0615 5.10656 44.0615 5.625C44.0615 6.14344 43.6425 6.5625 43.124 6.5625Z"
                fill="#777777"
              ></path>
              <path
                d="M39.374 25.3135H20.624C20.1056 25.3135 19.6865 24.8944 19.6865 24.376C19.6865 23.8575 20.1056 23.4385 20.624 23.4385H39.374C39.8925 23.4385 40.3115 23.8575 40.3115 24.376C40.3115 24.8944 39.8925 25.3135 39.374 25.3135Z"
                fill="#777777"
              ></path>
              <path
                d="M33.749 28.1259H26.249C25.7306 28.1259 25.3115 27.7069 25.3115 27.1884C25.3115 26.67 25.7306 26.2509 26.249 26.2509H33.749C34.2675 26.2509 34.6865 26.67 34.6865 27.1884C34.6865 27.7069 34.2675 28.1259 33.749 28.1259Z"
                fill="#777777"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="60" height="60" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
          <h2 className={s.funeralPriceTitle}>Вартість кремації</h2>
        </div>
        <ul className={s.feneralPriceList}>
          <li className={s.feneralPriceList__item}>
            <div className={s.feneralPriceList__itemContainer}>
              <h3 className={s.feneralPriceList__itemTitle}>Економ</h3>
              <p className={s.feneralPriceList__itemPrice}>9 200 ГРН</p>
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
                Автокатафалк (15-17 посадочних місць)
              </li>
              <li className={s.feneralPriceList__itemListItem}>Священик</li>
              <li className={s.feneralPriceList__itemListItem}>
                Розпорядник похорону
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
            <ul>
              <li className={s.feneralPriceList__itemListItem}>
                Труна дерев'яна (обшита тканиною атлас, велюр)
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Похоронний набір
              </li>
              <li className={s.feneralPriceList__itemListItem}>Покривало</li>
              <li className={s.feneralPriceList__itemListItem}>
                Автокатафалк (15-17 посадкових місць)
              </li>
              <li className={s.feneralPriceList__itemListItem}>Священик</li>
              <li className={s.feneralPriceList__itemListItem}>
                Розпорядник похорону
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Похоронна бригада (4 особи)
              </li>
            </ul>
          </li>
          <li className={s.feneralPriceList__item}>
            <div className={s.feneralPriceList__itemContainer}>
              <h3
                className={s.feneralPriceList__itemTitle}
                style={{ margin: '0 auto' }}
              >
                VIP
              </h3>
              <p className={s.feneralPriceList__itemPrice}>УТОЧНЮЙТЕ</p>
            </div>
            <ul>
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
                Ритуальні рушники (2шт)
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Автокатафалк VIP класу (15-17 посад. місць)
              </li>
              <li className={s.feneralPriceList__itemListItem}>Священик</li>
              <li className={s.feneralPriceList__itemListItem}>
                Розпорядник похорону
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Похоронна бригада (4 особи)
              </li>
              <li className={s.feneralPriceList__itemListItem}>
                Музичний супровід
              </li>
            </ul>
          </li>
        </ul>
        <p className={s.discontForRefugees}>
          <span className={s.redStar}>*</span>Для біженців, переселенців та військових діють знижки.
        </p>
      </div>
    </section>
  );
};

export default sectionFeneralPrice;
