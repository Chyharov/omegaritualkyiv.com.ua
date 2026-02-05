import TitleForPage from '../TitleForPage/TitleForPage';
import SectionServiceList from 'components/sectionServiceList/sectionServiceList';
import BanerForSection from 'components/BanerForSection/BanerForSection';
import s from './SectionFuneralSet.module.scss';

const funeralSetList = [
  {
    id: 1,
    src: require('../../images/funeralSetPage/funeralSetPageListImg.jpg'),
    alt: 'Зображення 1',
  },
  {
    id: 2,
    src: require('../../images/funeralSetPage/funeralSetPageListImg2.jpg'),
    alt: 'Зображення 2',
  },
  {
    id: 3,
    src: require('../../images/funeralSetPage/funeralSetPageListImg3.jpg'),
    alt: 'Зображення 3',
  },
  {
    id: 4,
    src: require('../../images/funeralSetPage/funeralSetPageListImg4.jpg'),
    alt: 'Зображення 4',
  },
  {
    id: 5,
    src: require('../../images/funeralSetPage/funeralSetPageListImg5.jpg'),
    alt: 'Зображення 5',
  },
  {
    id: 6,
    src: require('../../images/funeralSetPage/funeralSetPageListImg6.jpg'),
    alt: 'Зображення 6',
  },
  {
    id: 7,
    src: require('../../images/funeralSetPage/funeralSetPageListImg7.jpg'),
    alt: 'Зображення 7',
  },
  {
    id: 8,
    src: require('../../images/funeralSetPage/funeralSetPageListImg8.jpg'),
    alt: 'Зображення 8',
  },
  {
    id: 9,
    src: require('../../images/funeralSetPage/funeralSetPageListImg9.jpg'),
    alt: 'Зображення 9',
  },
  {
    id: 10,
    src: require('../../images/funeralSetPage/funeralSetPageListImg10.jpg'),
    alt: 'Зображення 10',
  }
];

const SectionFuneralSet = ({ title, imgBaner, imgBannerDescription, serviceList }) => {
  return (
    <section className={s.sectionFuneralSet}>
      <div className={`container ${s.funeralSet__container}`}>
        <TitleForPage title={title} />
        <BanerForSection
          imgBaner={imgBaner}
          imgBannerDescription={imgBannerDescription}
        />

        <h2 className="title">Що входить до похоронного набору?</h2>

        <ul className="list">
          <li className="listItem">
            Під час відспівування покійний християнин має бути в нижньому
            хрестику, в його руках має бути хрест, а на голові налобний віночок
            зі святими образами. Все це ритуальне приладдя входить до
            стандартного похоронного набору, який можна купити у православному
            храмі або замовити у нас.
          </li>
          <li className="listItem">
            Під час церемонії відспівування чи то в церкві, чи в жалобній залі з
            виїздом священика, всі рідні покійного повинні тримати в руках
            палаючі церковні свічки, які також входять у звичайний похоронний
            набір ритуального приладдя.
          </li>
          <li className="listItem">
            Читання священиком дозвільної молитви є ще одним важливим елементом
            обряду заупокійного відспівування. Текст дозвільної молитви рідні
            вкладають у руки покійного. Роздрукований текст молитви зі святими
            образами також входить до стандартного похоронного набору.
          </li>
          <li className="listItem">
            Православні ритуальні приналежності також включають ікону Спасителя
            або Богоматері з немовлям Ісусом.
          </li>
        </ul>

        <h2 className="title">Саван та похоронні покривала</h2>

        <p className="description">
          Православний обряд поховання передбачає вбрання померлого перед
          похованням у білий одяг. Це символізує перетворення душі померлого і
          зв'язок його зі Спасителем, який після дива на горі Фавор засяяв білим
          шатом. Також це символізує духовну чистоту та дотримання всіх
          обітниць, даних при хрещенні. Адже не дарма саван схожий на хрестильні
          шати чи рушник для немовлят.
        </p>

        <p className="description">
          Однак цієї традиції дотримуються не буквально. Символізм білих шат
          перенесений на похоронний саван – спеціальне біле або світле
          покривала, яким накривають покійного в труні. На ньому вишивають або
          друкують ритуальні образи та молитви. Іноді використовують просто
          світлий тюль чи атласні покривала без релігійної символіки, якими
          накривають покійного.
        </p>

        <p className="description">
          Похоронний будинок «Омега» співпрацює з прямими виробниками
          текстильних покривал, саванів та наборів ритуального приладдя, яке
          виготовляють у Києві та інших містах України. Саме тому ми пропонуємо
          всі похоронні набори за доступними цінами від виробника, не спекулюючи
          на горі та релігійних почуттях рідних покійного.
        </p>

        <ul>
          {funeralSetList.map(photo => (
            <li key={photo.id}>
              <img src={photo.src} alt={photo.alt} />
            </li>
          ))}
        </ul>

        <h2 className="title">
          Церква чи ритуальне бюро – де краще купувати похоронне приладдя?
        </h2>

        <p className="description">
          Існує поширена помилка, що купувати ритуальне приладдя для похорону
          потрібно виключно в храмі, оскільки все церковне начиння, ікони,
          хрести та свічки там освячені, а куплені товари в похоронному бюро не
          мають жодної духовної сили. Це міф і поширена помилка. Чин освячення
          ритуального приладдя для похорону можна провести прямо на церемонії
          відспівування в церкві або в жалобній залі з виїздом священика. Таким
          чином, всі куплені поза храмом ритуальні приналежності матимуть таку
          саму сакральну силу.
        </p>

        <p className="description">
          Вся духовна сила православного відспівування в обряді, який проводить
          священнослужитель. Він може і освятити куплені в нас ритуальні набори.
          А ось без відспівування покійного навіть освячені та куплені в церкві
          похоронні приналежності стають лише символічною даниною християнської
          традиції, а не сакральним атрибутом церковного обряду. Ми готові взяти
          на себе турботи та турботи про дотримання обрядових традицій
          відспівування покійного з усією необхідною ритуальною атрибутикою.
              </p>
              
              
        <SectionServiceList serviceList={serviceList} />
      </div>
    </section>
  );
};

export default SectionFuneralSet;
