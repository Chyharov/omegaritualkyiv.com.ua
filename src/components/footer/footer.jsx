import s from './footer.module.scss';

const footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <nav className={s.footer__navigation}>
          <div style={{padding: '15px'}}>
            <h2 className={s.footerTitle}>ІНФОРМАЦІЯ</h2>
            <div className={s.footerTitle__border}></div>
            <ul className={s.footerNavList}>
              <li className={s.footerNavList__item}>Про компанію</li>
              <li className={s.footerNavList__item}>Ціни</li>
              <li className={s.footerNavList__item}>Контакти</li>
            </ul>
          </div>
          <div style={{padding: '15px'}}>
            <h2 className={s.footerTitle}>ПОСЛУГИ</h2>
            <div className={s.footerTitle__border}></div>
            <ul className={s.footerNavListMenu}>
              <li className={s.footerNavList__item}>Ритуальний агент</li>
              <li className={s.footerNavList__item}>Організація похорон</li>
              <li className={s.footerNavList__item}>Послуги кремації</li>
              <li className={s.footerNavList__item}>Ритуальний транспорт</li>
              <li className={s.footerNavList__item}>Відспівування померлого</li>
              <li className={s.footerNavList__item}>Перевезення померлих</li>
              <li className={s.footerNavList__item}>Послуги моргу</li>
              <li className={s.footerNavList__item}>Поминальні обіди</li>
              <li className={s.footerNavList__item}>Оформлення документів</li>
              <li className={s.footerNavList__item}>Музичний супровід</li>
              <li className={s.footerNavList__item}>Ритуальна зала</li>
              <li className={s.footerNavList__item}>Медичний супровід</li>
              <li className={s.footerNavList__item}>Ведучий на похорон</li>
              <li className={s.footerNavList__item}>Носії труни</li>
              <li className={s.footerNavList__item}>Дезобробка</li>
            </ul>
          </div>
          <div style={{padding: '15px'}}>
            <h2 className={s.footerTitle}>КОНТАКТИ</h2>
            <div className={s.footerTitle__border}></div>
            <ul>
              <li className={s.footerNavList__item}>
                <p>Київ, вул. Івана Федорова, 33</p>
                <p>Київ, вул. Колоскова, 9</p>
              </li>
              <li className={s.footerNavList__item}>
                <ul className={s.phoneList}>
                  <li className={s.phoneList}>
                    <a href="tel:+380442090261">+38 (044) 209-02-61</a>
                  </li>
                  <li className={s.phoneList}>
                    <a href="tel:+380939040707">+38 (093) 904-07-07</a>
                  </li>
                  <li className={s.phoneList}>
                    <a href="tel:+380670112160">+38 (067) 011-21-60</a>
                  </li>
                </ul>
              </li>
              <li className={s.footerNavList__item}>
                <p>Щоденно | Цілодобово</p>
              </li>
            </ul>
            <ul>
              <li className={s.footerNavList__item}>Telegram</li>
              <li className={s.footerNavList__item}>WhatsApp</li>
              <li className={s.footerNavList__item}>Viper</li>
              <li className={s.footerNavList__item}>Instagram</li>
            </ul>
            <button>Викликати агента</button>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default footer;