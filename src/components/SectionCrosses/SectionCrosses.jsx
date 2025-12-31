import TitleForPage from '../TitleForPage/TitleForPage';
import BanerForSection from 'components/BanerForSection/BanerForSection';
import { useGalleryModal } from 'hooks/useGalleryModal';
import GalleryModalRoot from 'components/GalleryModalRoot/GalleryModalRoot';
import s from './SectionCrosses.module.scss';

export const crossesList = [
  {
    id: 1,
    src: require('../../images/sectionCrosses/sectionCrossesImg1.jpg'),
    alt: 'Elite Coffin 1',
  },
  {
    id: 2,
    src: require('../../images/sectionCrosses/sectionCrossesImg2.jpg'),
    alt: 'Elite Coffin 2',
  },
  {
    id: 3,
    src: require('../../images/sectionCrosses/sectionCrossesImg3.jpg'),
    alt: 'Elite Coffin 3',
  },
  {
    id: 4,
    src: require('../../images/sectionCrosses/sectionCrossesImg4.jpg'),
    alt: 'Elite Coffin 4',
  },
  {
    id: 5,
    src: require('../../images/sectionCrosses/sectionCrossesImg5.jpg'),
    alt: 'Elite Coffin 5',
  },
];

const SectionCrosses = ({ title, imgBaner, imgBannerDescription }) => {
  const gallery = useGalleryModal();

  const handleImageClick = index => {
    gallery.openGallery({
      images: crossesList,
      index,
      width: window.innerWidth >= 1360 ? '800px' : '100%',
    });
  };

  return (
    <section className={s.sectionCrosses}>
      <div className={`container ${s.sectionCrosses__container}`}>
        <TitleForPage title={title} />
        <BanerForSection
          imgBaner={imgBaner}
          imgBannerDescription={imgBannerDescription}
        />

        <h2 className="title">
          Чому не можна встановлювати пам’ятник одразу після похорону?
        </h2>

        <p className="description">
          Жодних церковних заборон із цього приводу немає. Справа не в
          православних канонах, проблема виключно у практичній площині.
          Вилучення грунту під час копання могильної ями, а потім його
          повернення в могилу після поховання робить землю спушеною, а значить,
          об’ємною та нестабільною.
        </p>

        <p className="description">
          Споруджувати якийсь більш-менш монументальний пам’ятник з важкого
          каменю на нестабільний ґрунт просто недоцільно. Монумент перекоситься,
          опорні блоки проваляться, а сама кам’яна композиція трісне або зовсім
          зруйнується. Залежно від виду ґрунту, його вологості та глибини могили
          процес осідання та стабілізації може зайняти від одного до п’яти
          років.
        </p>

        <p className="description">
          Протягом усього терміну опади ґрунту над могилою хрещеної православної
          людини височить легкий дерев’яний чи металевий ритуальний хрест із
          іменною табличкою. Його маса не настільки велика, щоб спровокувати
          сильне просідання ґрунту, а отже, весь перший та наступні роки до
          встановлення пам’ятника хрест виконуватиме свою функцію – оберігатиме
          спокій православного покійного та позначатиме місце його могили.
        </p>

        <h2 className="title">
          Який ритуальний хрест краще встановлювати на могилу?
        </h2>

        <p className="description">
          У цьому питанні потрібно керуватися виключно особистими уподобаннями
          рідних та близьких покійного, православними канонами та практичними
          аспектами.
        </p>

        <ul className="list">
          <li className="listItem">
            Православ’я загалом не пред’являє жодних особливих суворих правил і
            церковних канонів, крім того, що ритуальний могильний хрест має бути
            православним, якщо покійний належить саме до цієї конфесії
            християнства.
          </li>
          <li className="listItem">
            Висвітлення ритуального хреста, як і обряд відспівування покійного,
            можна провести у день похорону. Це робить священик, який приїде на
            церемонію прощання або безпосередньо до церкви, якщо покійного
            відспівують у храмі.
          </li>
          <li className="listItem">
            З погляду практичності краще вибирати довговічні матеріали чи
            вироби, покриті гарним захистом від руйнівних атмосферних чинників.
            Це особливо важливо, якщо сім’я покійного не планує встановлювати
            пам’ятник найближчими роками з фінансових чи інших причин.
          </li>
          <li className="listItem">
            Зовнішній вигляд ритуального хреста може бути будь-яким, але не
            порушуючим релігійні почуття інших православних людей – суворим,
            стриманим і без зайвого декору.
          </li>
        </ul>

        <ul className={s.crossesImages__list}>
          {crossesList.map(({ id, src, alt }, index) => (
            <li
              key={id}
              className={s.crossesImages__listItem}
              onClick={() => handleImageClick(index)}
            >
              <img src={src} alt={alt} />
            </li>
          ))}
        </ul>

        <h2 className="title">Як замовити ритуальний хрест у Києві?</h2>

        <p className="description">
          Похоронне бюро «Омега» має власні виробничі потужності, які дозволяють
          виготовляти дерев’яні та металеві ритуальні хрести на могилу. Кожен
          виріб проходить ретельний контроль на предмет якості деревообробки та
          столярних робіт у дерев’яних моделях, а також якості металообробки та
          зварювання у металевих.
        </p>

        <p className="description">
          У виробництві дерев’яних виробів ми використовуємо як недорогі, і
          цінні породи дерева. Завдяки цьому ми пропонуємо широку лінійку цін –
          від найбюджетніших варіантів, які, проте, тривалий час виконують свою
          практичну та сакральну функцію, так і елітні ритуальні хрести, які
          можна назвати витвором мистецтва.
        </p>

        <p className="description">
          Незалежно від основного матеріалу та цінової категорії, кожен виріб
          покривається довговічним лаком або фарбою, завдяки яким ритуальний
          хрест зберігає свій вигляд протягом декількох років в умовах суворих
          зим та спекотного літа.
        </p>
        <GalleryModalRoot {...gallery} />
      </div>
    </section>
  );
};

export default SectionCrosses;
