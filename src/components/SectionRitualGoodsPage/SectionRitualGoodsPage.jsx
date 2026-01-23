import TitleForPage from '../TitleForPage/TitleForPage';
import s from './SectionRitualGoodsPage.module.scss';

const SectionRitualGoodsPage = ({ title }) => {
  return (
    <section className={s.sectionRitualGoodsPage}>
      <div className={`container ${s.sectionRitualGoodsPage__container}`}>
        <TitleForPage title={title} />

        <h2>Ритуальні товари</h2>
      </div>
    </section>
  );
};

export default SectionRitualGoodsPage;
