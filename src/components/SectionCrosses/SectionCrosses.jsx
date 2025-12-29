import TitleForPage from '../TitleForPage/TitleForPage';
import BanerForSection from 'components/BanerForSection/BanerForSection';
import s from './SectionCrosses.module.scss';

const SectionCrosses = ({
  title,
  imgBaner,
  imgBannerDescription,
}) => {
  return (
    <section className={s.sectionCrosses}>
      <div className={`container ${s.sectionCrosses__container}`}>
        <TitleForPage title={title} />
        <BanerForSection
          imgBaner={imgBaner}
          imgBannerDescription={imgBannerDescription}
        />

              <h2 className='title'>SectionCrosses</h2>
      </div>
    </section>
  );
};

export default SectionCrosses;
