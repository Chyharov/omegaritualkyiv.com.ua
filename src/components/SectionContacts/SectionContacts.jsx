import TitleForPage from '../TitleForPage/TitleForPage';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import { FaTelegram } from 'react-icons/fa6';
import { FaViber } from 'react-icons/fa6';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaStopwatch } from "react-icons/fa6";
import s from './SectionContacts.module.scss';

const SectionContacts = ({ title }) => {
  return (
    <section className={s.sectionContacts}>
      <div className={`container ${s.sectionContacts__container}`}>
        <TitleForPage title={title} />

        <div className={s.contactInfo__container}>
          <div className={s.address__container}>
            <FaLocationDot className={s.contactsIcon} />

            <ul className={s.addressList}>
            <li className={s.addressList__item}>
                <a
                  className={s.addressList__itemLink}
                href="https://maps.app.goo.gl/JeAMk5y2yX5DnuHFA"
                target="_blank"
                rel="noopener noreferrer"
              >
                м. Київ, вул. Івана Федорова, 33
              </a>
            </li>
            <li className={s.addressList__item}>
                <a
                  className={s.addressList__itemLink}
                href="https://maps.app.goo.gl/JeAMk5y2yX5DnuHFA"
                target="_blank"
                rel="noopener noreferrer"
              >
                м. Київ, вул. Колоскова, 9
              </a>
            </li>
          </ul>
          </div>

          <div className={s.address__container}>
            <FaPhone className={s.contactsIcon} />

            <ul className={s.addressList}>
            <li className={s.addressList__item}>
              <a href="tel:+3809309040707" className={s.addressList__itemLink}>+38 (093) 904-07-07</a>
            </li>
            <li className={s.addressList__item}>
              <a href="tel:+380670112160" className={s.addressList__itemLink}>+38 (067) 011-21-60</a>
            </li>
            <li className={s.addressList__item}>
              <a href="tel:+380442090261" className={s.addressList__itemLink}>+38 (044) 209-02-61</a>
            </li>
          </ul>
          </div>

          <div className={s.address__container}>
            <FaStopwatch className={s.contactsIcon} />

          <p className={s.workTimeContacts}>Щоденно | Цілодобово</p>
          </div>

          <ul className={s.addressList}>
            <li className={s.addressList__item}>
              <a
                className={s.addressList__itemLinkTelegram}
                href="https://t.me/omegaritual33"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram className={s.contactsIcon}/>
                Telegram
              </a>
            </li>
            <li className={s.addressList__item}>
              <a
                className={s.addressList__itemLinkWhatsApp}
                href="whatsapp://send?phone=+380939040707"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareWhatsapp className={s.contactsIcon}/>
                WhatsApp
              </a>
            </li>
            <li className={s.addressList__item}>
              <a
                className={s.addressList__itemLinkViber}
                href="viber://chat?number=+380939040707"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaViber className={s.contactsIcon}/>
                Viber
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionContacts;
