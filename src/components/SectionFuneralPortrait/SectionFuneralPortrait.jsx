import TitleForPage from '../TitleForPage/TitleForPage';
import BanerForSection from 'components/BanerForSection/BanerForSection';
import SectionServiceList from 'components/sectionServiceList/sectionServiceList';
import s from './SectionFuneralPortrait.module.scss';

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

const SectionFuneralPortrait = ({ title, imgBaner, imgBannerDescription }) => {
  return (
    <section className={s.sectionFuneralPortrait}>
      <div className={`container ${s.funeralPortrait__container}`}>
        <TitleForPage title={title} />
        <BanerForSection
          imgBaner={imgBaner}
          imgBannerDescription={imgBannerDescription}
        />

        <h2 className="title">Традиції та пошана</h2>

        <p className="description">
          Прижиттєвий портрет покійного на похороні символізує вічне життя його
          душі та пам'яті про нього у серцях усіх членів сім'ї, друзів та колег.
          Він ніби живий вічно дивиться зі своєї фотографії на всіх присутніх на
          церемонії прощання з його фізичним тілом, при цьому залишаючись з
          рідними на духовному рівні.
        </p>

        <p className="description">
          Портрет померлого виконує не лише символічну функцію, уособлюючи вічне
          життя та пам'ять, а й допомагає рідним та близьким покійного зменшити
          душевний біль та скорботу. Прижиттєве фото померлого з чорною стрічкою
          допомагає всім скорботним рідним та присутнім на похороні друзям
          зменшити стрес та гіркоту втрати. З психологічної точки зору це
          пояснюється контрастуванням життєрадісної особи на портреті з виглядом
          покійного в труні.
        </p>

        <p className="description">
          Крім того, повноцінний урочистий портрет із жалобною чорною стрічкою –
          це данина повазі до померлої людини. Такої почесті раніше отримували
          лише вінценосні особи, великі полководці та шановні сини своєї
          батьківщини. Зараз зробити гарний фотопортрет з чорною стрічкою може
          практично кожен, тим самим віддавши останні почесті своїй померлій
          рідній людині.
        </p>

        <h2 className="title">
          Де в Києві замовити на похорон портрет із чорною стрічкою?
        </h2>

        <p className="description">
          Зробити траурний фотопортрет для церемонії прощання можна в будь-якому
          фотоательє або навіть поліграфічному центрі, використовуючи прижиттєву
          фотографію покійного. Проте люди вмирають незалежно від часу доби та
          дня тижня. Такі фотопослуги надають лише у робочі години, а в процесі
          організації похорону важлива кожна хвилина, оскільки турбот багато, а
          часу катастрофічно не вистачає.
        </p>

        <p className="description">
          Ритуальне бюро «Омега» займається комплексною організацією похорону та
          працює у цілодобовому режимі без вихідних. Це означає, що ми можемо
          взяти на себе всі турботи щодо планування церемонії прощання та
          купівлі необхідної похоронної атрибутики. Наші фотомайстри створять
          гідний портрет покійного, виходячи з наданого родичами фото покійного.
        </p>

        <h2 className="title">Фото з чорною стрічкою чи справжній портрет?</h2>

        <p className="description">
          Цей вибір лежить виключно у площині переваг рідних покійного, його
          прижиттєвої волі, якщо така була, та виділеного бюджету на організацію
          похорону.
        </p>

        <ul className="list">
          <li className="listItem">
            Багатий і урочистий портрет, створений художником на основі
            фотографії, говорить про високий статус покійного та велику повагу
            до нього його рідних та близьких друзів.
          </li>
          <li className="listItem">
            Ретушований фотопортрет великого формату також можна використовувати
            на урочистому похороні статусної людини, де планується присутність
            багатьох людей.
          </li>
          <li className="listItem">
            Оброблене фото середнього формату із чорною жалобною стрічкою – це
            недорогий бюджетний варіант похоронного фотопортрета, який анітрохи
            не применшує шану та повагу до покійного.
          </li>
        </ul>

        <p className="description">
          Будь-який портрет обрамляють у кадрі. Це може бути як елітний
          різьблений дерев'яний багет із позолоченням, так і зовсім недорогі
          бюджетні обрамлення. У будь-якому разі, яким би не був портрет на
          похороні, він виконуватиме свою сакральну функцію, символізуючи вічне
          життя покійного в пам'яті живих, і виражатиме всю повноту поваги до
          покійного.
        </p>

        <SectionServiceList serviceList={serviceList} />
      </div>
    </section>
  );
};

export default SectionFuneralPortrait;
