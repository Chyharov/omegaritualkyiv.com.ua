import TitleForPage from '../TitleForPage/TitleForPage';
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaViber } from "react-icons/fa6";
import s from './SectionContacts.module.scss';

const SectionContacts = ({ title, imgBaner, imgBannerDescription }) => {
  return (
    <section className={s.sectionContacts}>
      <div className={`container ${s.sectionContacts__container}`}>
              <TitleForPage title={title} />
              
              <div>
                  <ul>
                      <li><a href="https://maps.app.goo.gl/JeAMk5y2yX5DnuHFA" target="_blank" rel="noopener noreferrer">м. Київ, вул. Івана Федорова, 33</a></li>
                      <li><a href="https://maps.app.goo.gl/JeAMk5y2yX5DnuHFA" target="_blank" rel="noopener noreferrer">м. Київ, вул. Колоскова, 9</a></li>
                  </ul>

                  <ul>
                      <li><a href="tel:+3809309040707">+38 (093) 904-07-07</a></li>
                      <li><a href="tel:+380670112160">+38 (067) 011-21-60</a></li>
                      <li><a href="tel:+380442090261">+38 (044) 209-02-61</a></li>
                  </ul>

                  <p>Щоденно | Цілодобово</p>

                  <ul>
                      <li><a href="https://t.me/omegaritual33" target="_blank" rel="noopener noreferrer"><FaTelegram />Telegram</a></li>
                      <li><a href="whatsapp://send?phone=+380939040707" target="_blank" rel="noopener noreferrer"><FaSquareWhatsapp />WhatsApp</a></li>
                      <li><a href="viber://chat?number=+380939040707" target="_blank" rel="noopener noreferrer"><FaViber/>Viber</a></li>
                  </ul>
              </div>

      </div>
    </section>
  );
};

export default SectionContacts;
