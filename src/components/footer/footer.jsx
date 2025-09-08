import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Location from 'images/footer/Location.svg';
import Phone from 'images/footer/Phone.svg';
import Clock from 'images/footer/Clock.svg';
import TelegramIcon from 'images/footer/telegramIcon.svg';
import WhatsAppIcon from 'images/footer/whatsappIcon.svg';
import ViberIcon from 'images/footer/viberIcon.svg';
import InstagramIcon from 'images/footer/instagramIcon.png';
import ScrollToTopButton from 'components/ScrollToTopButton/ScrollToTopButton';
import ConsultationModalWindow from 'components/ConsultationModalWindow/ConsultationModalWindow';
import s from './footer.module.scss';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className={s.footer}>
      <div className="container">
        <nav className={s.footer__navigation}>
          <div className={s.footerInformationContainer}>
            <h2 className={s.footerTitle}>ІНФОРМАЦІЯ</h2>
            <div className={s.footerTitle__border}></div>
            <ul className={s.footerNavList}>
              <Link to="*">
                <li className={s.footerNavList__item}>Про компанію</li>
              </Link>
              <Link to="*">
                <li className={s.footerNavList__item}>Ціни</li>
              </Link>
              <Link to="*">
                <li className={s.footerNavList__item}>Контакти</li>
              </Link>
            </ul>
          </div>
          <div className={s.footerMenuContainer}>
            <h2 className={s.footerTitle}>ПОСЛУГИ</h2>
            <div className={s.footerTitle__border}></div>
            <ul className={s.footerNavListMenu}>
              <Link to="/ritualagent">
              <li className={s.footerNavList__item}>Ритуальний агент</li>
              </Link>
              <Link to="/funeralorganisation">
                <li className={s.footerNavList__item}>Організація похорону</li>
              </Link>
              <Link to="/cremationservices">
                <li className={s.footerNavList__item}>Послуги кремації</li>
              </Link>
              <Link to="/ritualtransport">
                <li className={s.footerNavList__item}>Ритуальний транспорт</li>
              </Link>
              <Link to="/funeralofthedeceased">
                <li className={s.footerNavList__item}>Відспівування померлого</li>
              </Link>
              <Link to="/transportationofthedeceased">
                <li className={s.footerNavList__item}>Перевезення померлих</li>
              </Link>
              <Link to="/mortuaryservices">
                <li className={s.footerNavList__item}>Послуги моргу</li>
              </Link>
              <Link to="/memorialdinners">
                <li className={s.footerNavList__item}>Поминальні обіди</li>
              </Link>
              <Link to="/processingdocuments">
                <li className={s.footerNavList__item}>Оформлення документів для похорону</li>
              </Link>
              <Link to="/funeralmusic">
                <li className={s.footerNavList__item}>Музичний супровід похорону</li>
              </Link>
              <Link to="/ritualhall">
                <li className={s.footerNavList__item}>Ритуальна зала</li>
              </Link>
              <Link to="/medicalsupportonfuneral">
                <li className={s.footerNavList__item}>Медичний супровід похорону</li>
              </Link>
              <Link to="*">
                <li className={s.footerNavList__item}>Ведучий на похорон</li>
              </Link>
              <Link to="*">
                <li className={s.footerNavList__item}>Носії труни</li>
              </Link>
              <Link to="*">
                <li className={s.footerNavList__item}>Дезобробка</li>
              </Link>
            </ul>
          </div>
          <div className={s.footerContactContainer}>
            <h2 className={s.footerTitle}>КОНТАКТИ</h2>
            <div className={s.footerTitle__border}></div>
            <div className={s.footerContactContainerBackground}>
              <ul className={s.footerContactList}>
                <li className={s.footerContactList__containe}>
                  <img
                    className={s.footerContactList__svg}
                    src={Location}
                    alt="Location"
                  />
                  <ul className={s.footerAddressList}>
                    <li className={s.footerAddressList__item}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://maps.app.goo.gl/JeAMk5y2yX5DnuHFA"
                      >
                        м.Київ, вул. Івана Федорова, 33
                      </a>
                    </li>
                    <li className={s.footerAddressList__item}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://maps.app.goo.gl/AwovKjfD7p53WbF56"
                      >
                        м.Київ, вул. Колоскова 9
                      </a>
                    </li>
                  </ul>
                </li>
                <li className={s.footerContactList__containe}>
                  <img
                    className={s.footerContactList__svg}
                    src={Phone}
                    alt="Phone"
                  />
                  <ul className={s.phoneList}>
                    <li className={s.phoneList__item}>
                      <a href="tel:+380939040707">+38 (093) 904-07-07</a>
                    </li>
                    <li className={s.phoneList__item}>
                      <a href="tel:+380670112160">+38 (067) 011-21-60</a>
                    </li>
                    <li className={s.phoneList__item}>
                      <a href="tel:+380442090261">+38 (044) 209-02-61</a>
                    </li>
                  </ul>
                </li>
                <li className={s.footerContactList__containe}>
                  <img
                    className={s.footerContactList__svg}
                    src={Clock}
                    alt="Clock"
                  />
                  <ul className={s.footerContactDescription}>
                    <p className={s.footerContactList__item}>
                      Щоденно | Цілодобово
                    </p>
                  </ul>
                </li>
              </ul>
              <ul className={s.footerSocialList}>
                <li className={s.footerSocialList__item}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://t.me/omegaritual33"
                  >
                    <img
                      className={s.footerSocialList__itemIcon}
                      src={TelegramIcon}
                      alt="TelegramIcon"
                    />
                  </a>
                </li>
                <li className={s.footerSocialList__item}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="whatsapp://send?phone=+380939040707"
                  >
                    <img
                      className={s.footerSocialList__itemIcon}
                      src={WhatsAppIcon}
                      alt="WhatsAppIcon"
                    />
                  </a>
                </li>
                <li className={s.footerSocialList__item}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="viber://chat?number=+380939040707"
                  >
                    <img
                      className={s.footerSocialList__itemIcon}
                      src={ViberIcon}
                      alt="ViberIcon"
                    />
                  </a>
                </li>
                <li className={s.footerSocialList__item}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/omegaritual33/"
                  >
                    <img
                      className={s.footerSocialList__itemIcon}
                      src={InstagramIcon}
                      alt="InstagramIcon"
                    />
                  </a>
                </li>
              </ul>
              <button className={s.btnCallToAgent} onClick={() => setIsModalOpen(true)}>
                ВИКЛИКАТИ АГЕНТА
              </button>
              {isModalOpen && (
                <ConsultationModalWindow
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
              )}
            </div>
          </div>
        </nav>
      </div>
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
