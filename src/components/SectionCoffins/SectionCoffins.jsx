import { useState } from 'react';
import ModalGallery from 'components/ModalGallery/ModalGallery';
import TitleForPage from '../TitleForPage/TitleForPage';
import BanerForSection from 'components/BanerForSection/BanerForSection';
import s from './SectionCoffins.module.scss';

export const eliteCoffinsList = [
  {
    id: 1,
    src: require('../../images/eliteCoffins/EliteCoffinsImg.jpg'),
    alt: 'Elite Coffin 1',
  },
  {
    id: 2,
    src: require('../../images/eliteCoffins/EliteCoffinsImg2.jpg'),
    alt: 'Elite Coffin 2',
  },
  {
    id: 3,
    src: require('../../images/eliteCoffins/EliteCoffinsImg3.jpg'),
    alt: 'Elite Coffin 3',
  },
  {
    id: 4,
    src: require('../../images/eliteCoffins/EliteCoffinsImg4.jpg'),
    alt: 'Elite Coffin 4',
  },
  {
    id: 5,
    src: require('../../images/eliteCoffins/EliteCoffinsImg5.jpg'),
    alt: 'Elite Coffin 5',
  },
  {
    id: 6,
    src: require('../../images/eliteCoffins/EliteCoffinsImg6.jpg'),
    alt: 'Elite Coffin 6',
  },
  {
    id: 7,
    src: require('../../images/eliteCoffins/EliteCoffinsImg7.jpg'),
    alt: 'Elite Coffin 7',
  },
  {
    id: 8,
    src: require('../../images/eliteCoffins/EliteCoffinsImg8.jpg'),
    alt: 'Elite Coffin 8',
  },
  {
    id: 9,
    src: require('../../images/eliteCoffins/EliteCoffinsImg9.jpg'),
    alt: 'Elite Coffin 9',
  },
  {
    id: 10,
    src: require('../../images/eliteCoffins/EliteCoffinsImg10.jpg'),
    alt: 'Elite Coffin 10',
  },
  {
    id: 11,
    src: require('../../images/eliteCoffins/EliteCoffinsImg11.jpg'),
    alt: 'Elite Coffin 11',
  },
  {
    id: 12,
    src: require('../../images/eliteCoffins/EliteCoffinsImg12.jpg'),
    alt: 'Elite Coffin 12',
  },
  {
    id: 13,
    src: require('../../images/eliteCoffins/EliteCoffinsImg13.jpg'),
    alt: 'Elite Coffin 13',
  },
  {
    id: 14,
    src: require('../../images/eliteCoffins/EliteCoffinsImg14.jpg'),
    alt: 'Elite Coffin 14',
  },
  {
    id: 15,
    src: require('../../images/eliteCoffins/EliteCoffinsImg15.jpg'),
    alt: 'Elite Coffin 15',
  },
  {
    id: 16,
    src: require('../../images/eliteCoffins/EliteCoffinsImg16.jpg'),
    alt: 'Elite Coffin 16',
  },
  {
    id: 17,
    src: require('../../images/eliteCoffins/EliteCoffinsImg17.jpg'),
    alt: 'Elite Coffin 17',
  },
  {
    id: 18,
    src: require('../../images/eliteCoffins/EliteCoffinsImg18.jpg'),
    alt: 'Elite Coffin 18',
  },
  {
    id: 19,
    src: require('../../images/eliteCoffins/EliteCoffinsImg19.jpg'),
    alt: 'Elite Coffin 19',
  },
  {
    id: 20,
    src: require('../../images/eliteCoffins/EliteCoffinsImg20.jpg'),
    alt: 'Elite Coffin 20',
  },
  {
    id: 21,
    src: require('../../images/eliteCoffins/EliteCoffinsImg21.jpg'),
    alt: 'Elite Coffin 21',
  },
  {
    id: 22,
    src: require('../../images/eliteCoffins/EliteCoffinsImg22.jpg'),
    alt: 'Elite Coffin 22',
  },
  {
    id: 23,
    src: require('../../images/eliteCoffins/EliteCoffinsImg23.jpg'),
    alt: 'Elite Coffin 23',
  },
  {
    id: 24,
    src: require('../../images/eliteCoffins/EliteCoffinsImg24.jpg'),
    alt: 'Elite Coffin 24',
  },
  {
    id: 25,
    src: require('../../images/eliteCoffins/EliteCoffinsImg25.jpg'),
    alt: 'Elite Coffin 25',
  },
  {
    id: 26,
    src: require('../../images/eliteCoffins/EliteCoffinsImg26.jpg'),
    alt: 'Elite Coffin 26',
  },
  {
    id: 27,
    src: require('../../images/eliteCoffins/EliteCoffinsImg27.jpg'),
    alt: 'Elite Coffin 27',
  },
  {
    id: 28,
    src: require('../../images/eliteCoffins/EliteCoffinsImg28.jpg'),
    alt: 'Elite Coffin 28',
  },
];

export const standardCoffinsList = [
  {
    id: 1,
    src: require('../../images/standardCoffins/standardCoffinsImg1.jpg'),
    alt: 'Standard Coffin 1',
  },
  {
    id: 2,
    src: require('../../images/standardCoffins/standardCoffinsImg2.jpg'),
    alt: 'Standard Coffin 2',
  },
  {
    id: 3,
    src: require('../../images/standardCoffins/standardCoffinsImg3.jpg'),
    alt: 'Standard Coffin 3',
  },
  {
    id: 4,
    src: require('../../images/standardCoffins/standardCoffinsImg4.jpg'),
    alt: 'Standard Coffin 4',
  },
  {
    id: 5,
    src: require('../../images/standardCoffins/standardCoffinsImg5.jpg'),
    alt: 'Standard Coffin 5',
  },
  {
    id: 6,
    src: require('../../images/standardCoffins/standardCoffinsImg6.jpg'),
    alt: 'Standard Coffin 6',
  },
  {
    id: 7,
    src: require('../../images/standardCoffins/standardCoffinsImg7.jpg'),
    alt: 'Standard Coffin 7',
  },
  {
    id: 8,
    src: require('../../images/standardCoffins/standardCoffinsImg8.jpg'),
    alt: 'Standard Coffin 8',
  },
  {
    id: 9,
    src: require('../../images/standardCoffins/standardCoffinsImg9.jpg'),
    alt: 'Standard Coffin 9',
  },
  {
    id: 10,
    src: require('../../images/standardCoffins/standardCoffinsImg10.jpg'),
    alt: 'Standard Coffin 10',
  },
  {
    id: 11,
    src: require('../../images/standardCoffins/standardCoffinsImg11.jpg'),
    alt: 'Standard Coffin 11',
  },
  {
    id: 12,
    src: require('../../images/standardCoffins/standardCoffinsImg12.jpg'),
    alt: 'Standard Coffin 12',
  }
];

const SectionCoffins = ({ title, imgBaner, imgBannerDescription }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const openModal = index => {
    setModalIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <section className={s.sectionCoffins}>
      <div className={`container ${s.coffins__container}`}>
        <TitleForPage title={title} />
        <BanerForSection
          imgBaner={imgBaner}
          imgBannerDescription={imgBannerDescription}
        />

        <h2 className="title">
          Від економ-класу до елітних саркофагів із дорогих порід дерева.
        </h2>

        <p className="description">
          Труна – це обов’язковий ритуальний атрибут поховання в більшості
          культур та релігій світу. На відміну від ісламу, де прийнято надавати
          тіло землі в тканинах та багатих килимах, або індуїзму, де покійного
          кремують у поховальному савані, у християнстві померлих ховають у
          дерев’яних трунах із багатим декоративним оздобленням. Урочисті шати
          покійного, атласні, оксамитові та шовкові тканини внутрішньої та
          зовнішньої оббивки – все це символ останніх почестей, наданих
          покійному в його останньому шляху.
        </p>

        <h2 className="title">Елітні дерев’яні труни та саркофаги</h2>

        <p className="description">
          Спосіб життя та навколишні людини предмети демонструють його статус і
          становище у суспільстві. Елітні автомобілі та нерухомість, дорогі
          предмети гардеробу та аксесуари – все це характерні атрибути високої
          статусності. Похорон – це проводи померлої людини в останній шлях, а
          значить, це остання можливість віддати їй всю повноту почестей
          відповідно до її прижиттєвого статусу.
        </p>

        <p className="description">
          Елітна труна з цінних порід дерева ручної роботи з ідеальним
          опрацюванням найдрібніших деталей декору та фурнітури, бездоганним
          поліруванням та лакуванням – це демонстрація не просто статусності
          покійного, а й безмежної поваги до його близьких рідних, друзів та
          колег.
        </p>

        <p className="description">
          <b>Похоронний дім «Омега»</b> – це понад 25 видів елітних дерев’яних
          трун власного виробництва. Завдяки відсутності посередників та власної
          майстерні ми пропонуємо ціни від виробника без зайвих націнок. Це може
          бути як стандартна дерев’яна лакована труна з елітних порід дерева з
          цільною кришкою, так і двокришковий саркофаг. Верхня кришка дозволяє
          відкрити на похороні обличчя та руки покійного, залишивши нижню
          частину прихованої тіла.
        </p>

        <p className="description">
          Ціна елітної лакованої дерев’яної труни або двокришкового саркофага
          залежить від породи дерева, глибини ручного опрацювання декору, якості
          лакофарбових матеріалів, оббивних тканин та фурнітури.
        </p>

        <ul className="list">
          <li className="listItem">
            Для елітної внутрішньої оббивки та зовнішнього текстильного декору
            ми використовуємо Італійські тканини найвищої якості.
          </li>
          <li className="listItem">
            Тільки високоміцна престижна фурнітура, включаючи ручки та замки з
            дорогих металів.
          </li>
          <li className="listItem">
            Покриття дерева тільки найкращим лаком у кілька шарів, що робить
            поверхню ідеально рівною та з багатим блиском.
          </li>
        </ul>

        <p className="description">
          Кожна така труна робиться майстрами кілька днів, через що її вартість
          виходить порівняно високою. При цьому ми не женемося за надприбутком і
          пропонуємо чесні ціни, які повністю відображають всю повноту копіткої
          багатоденної праці майстрів і елітних матеріалів, що використовуються.
        </p>

        <h2 className={s.coffinsTitle}>Елітні труни</h2>
        <h3 className={s.coffinsSubtitle}>
          <span>Ціна:</span> від 9 800 грн
        </h3>
        <h3 className={s.coffinsSubtitle}>
          <span>Матеріал:</span> дерев’яна заготовка покрита лаком
        </h3>

        <ul className={s.eliteCoffins__list}>
          {eliteCoffinsList.map(({ id, src, alt }, index) => (
            <li
              className={s.eliteCoffins__listItem}
              key={id}
              onClick={() => openModal(index)}
            >
              <img
                className={s.eliteCoffins__listItemImage}
                src={src}
                alt={alt}
              />
            </li>
          ))}
        </ul>

        <h2 className={s.coffinsTitle}>Стандартні та недорогі бюджетні труни</h2>

        <p className='description'>Вартість стандартної дерев’яної ритуальної труни середнього цінового рівня в нашому похоронному бюро також є однією з найдоступніших у Києві завдяки чесному відношенню до виробництва та ціноутворення. У виробництві недорогих стандартних моделей середньоцінового рівня ми використовуємо недорогу, але міцну деревину, яка після ретельної обробки набуває урочистого вигляду, що відповідає траурному заходу. Внутрішня оббивка виконується за допомогою недорогого, але якісного та приємного на вигляд текстилю.</p>

        <h3 className={s.coffinsSubtitle}>
          <span>Ціна:</span> від 6 000 грн
        </h3>

        <h3 className={s.coffinsSubtitle}>
          <span>Матеріал:</span> дерев’яна заготовка, з елементами дерева, покритого лаком
        </h3>

        <ul className={s.eliteCoffins__list}>
          {standardCoffinsList.map(({ id, src, alt }, index) => (
            <li
              className={s.eliteCoffins__listItem}
              key={id}
              onClick={() => openModal(index)}
            >
              <img
                className={s.eliteCoffins__listItemImage}
                src={src}
                alt={alt}
              />
            </li>
          ))}
        </ul>

        {modalOpen && (
          <ModalGallery
            images={eliteCoffinsList}
            initialIndex={modalIndex}
            onClose={closeModal}
          />
        )}
      </div>
    </section>
  );
};

export default SectionCoffins;
