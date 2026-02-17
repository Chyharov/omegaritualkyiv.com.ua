import TitleForPage from '../TitleForPage/TitleForPage';
import BanerForSection from 'components/BanerForSection/BanerForSection';
import SectionServiceList from 'components/sectionServiceList/sectionServiceList';
import s from './SectionUrnForAshesPage.module.scss';

const serviceList = [
  {
    id: 1,
    src: require('../../images/servicesList/01.png'),
    alt: 'Зображення 1',
    title: 'Ритуальний агент',
    link: '/ritualagent',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 2,
    src: require('../../images/servicesList/02.png'),
    alt: 'Зображення 2',
    title: 'Організація похорон',
    link: '/funeralorganisation',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 3,
    src: require('../../images/servicesList/03.png'),
    alt: 'Зображення 3',
    title: 'Кремація',
    link: '/cremationservices',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 4,
    src: require('../../images/servicesList/04.png'),
    alt: 'Зображення 4',
    title: 'Ритуальний транспорт',
    link: '/ritualtransport',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 5,
    src: require('../../images/servicesList/05.png'),
    alt: 'Зображення 5',
    title: 'Відспівування померлого',
    link: '/funeralofthedeceased',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 6,
    src: require('../../images/servicesList/06.png'),
    alt: 'Зображення 6',
    title: 'Вантаж 200',
    link: '/transportationofthedeceased',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 7,
    src: require('../../images/servicesList/07.png'),
    alt: 'Зображення 7',
    title: 'Послуги моргу',
    link: '/mortuaryservices',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 8,
    src: require('../../images/servicesList/08.png'),
    alt: 'Зображення 8',
    title: 'Поминальні обіди',
    link: '/memorialdinners',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 9,
    src: require('../../images/servicesList/09.png'),
    alt: 'Зображення 9',
    title: 'Оформлення документів',
    link: '/processingdocuments',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 10,
    src: require('../../images/servicesList/10.png'),
    alt: 'Зображення 10',
    title: 'Ритуальна зала',
    link: '/ritualhall',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 11,
    src: require('../../images/servicesList/11.png'),
    alt: 'Зображення 11',
    title: 'Музичний супровід',
    link: '/funeralmusic',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 12,
    src: require('../../images/servicesList/12.png'),
    alt: 'Зображення 12',
    title: 'Супровід медперсоналом',
    link: '/medicalsupportonfuneral',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 13,
    src: require('../../images/servicesList/13.png'),
    alt: 'Зображення 13',
    title: 'Носії труни',
    link: '/pallbearers',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 14,
    src: require('../../images/servicesList/14.png'),
    alt: 'Зображення 14',
    title: 'Ведучий на похорон',
    link: '/funeralhost',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
  {
    id: 15,
    src: require('../../images/servicesList/15.png'),
    alt: 'Зображення 15',
    title: 'Дезобробка',
    link: '/disinfection',
    linkTitle: 'ДЕТАЛЬНІШЕ',
  },
];

const SectionUrnForAshesPage = ({ title, imgBaner, imgBannerDescription }) => {
  return (
    <section className={s.sectionUrnForAshesPage}>
      <div className={`container ${s.urnForAshesPage__container}`}>
        <TitleForPage title={title} />
        <BanerForSection
          imgBaner={imgBaner}
          imgBannerDescription={imgBannerDescription}
        />

        <p className="description">
          Наші урни виготовлені <b>з високоякісних матеріалів</b>, включаючи
          дерево, метал та кераміку. Ми розуміємо важливість цього об'єкту для
          вас та гарантуємо, що кожна урна відповідає найвищим стандартам
          якості.
        </p>

        <p className="description">
          Ми також пропонуємо можливість персоналізації урн. Ви можете вибрати
          гравіювання, додавання фотографій або спеціальних написів, щоб зробити
          урну особистою та унікальною.
        </p>

        <p className="description">
          Наші урни відповідають вимогам <b>різних регіональних обрядів</b>, і
          ми готові надати консультацію та підтримку у цьому питанні.
        </p>

        <p className="description">
          Ми робимо все можливе, щоб зробити процес вибору та покупки урни
          найбільш зручним. Наші послуги включають доставку, гарантію та
          професійний підхід до клієнтів.
        </p>

        <p className="description">
          <b>Пам'ять про ваше близьке залишається назавжди</b>, і наші скриньки
          допоможуть вам зберегти цю пам'ять гідним способом. Дозвольте нам бути
          вашими партнерами у цій важливій задачі.
        </p>

        <ul>
          <li>
            <img alt="img" />
          </li>
        </ul>

        <SectionServiceList serviceList={serviceList} />
      </div>
    </section>
  );
};

export default SectionUrnForAshesPage;
