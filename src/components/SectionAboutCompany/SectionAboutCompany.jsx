import TitleForPage from '../TitleForPage/TitleForPage';
import BanerForSection from 'components/BanerForSection/BanerForSection';
import s from './SectionAboutCompany.module.scss';

const SectionAboutCompany = ({ title, imgBaner, imgBannerDescription }) => {
  return (
    <section className={s.sectionAboutCompany}>
      <div className={`container ${s.sectionAboutCompany__container}`}>
        <TitleForPage title={title} />
        <BanerForSection
          imgBaner={imgBaner}
          imgBannerDescription={imgBannerDescription}
        />

        <p className='description'>
          Похоронне бюро «Омега» має все необхідне для надання чітко спланованих
          ритуальних послуг у Києві – від вінків та церковного начиння, до
          організації транспорту та оформлення документів. Злагодженість у
          роботі всіх співробітників похоронної агенції – це запорука спокійного
          безтурботного прощання із покійним його близьких родичів, друзів та
          колег.
        </p>

        <p className='description'>
          Похоронний дім «Омега» працює цілодобово та без вихідних. Якщо у вашій
          родині померла людина, викличте швидку медичну допомогу для
          констатації смерті, поліцію для виключення підозр у насильницькій
          смерті та ритуального агента. Послуги такого фахівця допоможуть
          правильно зорієнтуватися у ситуації та узгодити порядок дій без суєти
          та у тверезій свідомості. Далі ми беремо на себе всі турботи щодо
          організації похорону під ключ відповідно до ваших побажань та
          виділеного бюджету. Чесні ціни, делікатне ставлення та повний спектр
          ритуальних – головні переваги похоронного бюро «Омега».
        </p>
      </div>
    </section>
  );
};

export default SectionAboutCompany;
