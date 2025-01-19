import s from './footer.module.scss';

const footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footer__container}>
          <div>
            <h2>ІНФОРМАЦІЯ</h2>
            <ul>
              <li>Про компанію</li>
              <li>Ціни</li>
              <li>Контакты</li>
            </ul>
          </div>
          <div>
            <h2>Послуги</h2>
            <ul>
              <li>Ритуальний агент</li>
              <li>Організація похорон</li>
              <li>Послуги кремації</li>
              <li>Ритуальний транспорт</li>
              <li>Відспівування померлого</li>
              <li>Перевезення померлих</li>
              <li>Послуги моргу</li>
              <li>Поминальні обіди</li>
              <li>Оформлення документів</li>
              <li>Музичний супровід</li>
              <li>Ритуальна зала</li>
              <li>Медичний супровід</li>
              <li>Ведучий на похорон</li>
              <li>Носії труни</li>
              <li>Дезобробка</li>
            </ul>
          </div>
          <div>
            <h2>Контакти</h2>
            <ul>
              <li>
                <p>Київ, вул. Івана Федорова, 33</p>
                <p>Київ, вул. Колоскова, 9</p>
              </li>
              <li>
                <a href="tel:+380442090261">+38 (044) 209-02-61</a>
                <a href="tel:+380939040707">+38 (093) 904-07-07</a>
                <a href="tel:+380670112160">+38 (067) 011-21-60</a>
              </li>
              <li>
                <p>Щоденно | Цілодобово</p>
              </li>
            </ul>
            <ul>
              <li>Telegram</li>
              <li>WhatsApp</li>
              <li>Viper</li>
              <li>Instagram</li>
            </ul>
            <button>Викликати агента</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
