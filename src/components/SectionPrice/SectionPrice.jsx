import TitleForPage from '../TitleForPage/TitleForPage';
import BanerForSection from 'components/BanerForSection/BanerForSection';
import SectionFeneralPrice from 'components/sectionFeneralPrice/sectionFeneralPrice';
import s from './SectionPrice.module.scss';

const SectionPrice = ({ title, imgBaner, imgBannerDescription }) => {
  return (
    <section className={s.sectionPrice}>
      <div className={`container ${s.sectionPrice__container}`}>
        <TitleForPage title={title} />
        <BanerForSection
          imgBaner={imgBaner}
          imgBannerDescription={imgBannerDescription}
          style={{ display: 'none' }}
        />

        <SectionFeneralPrice style={{ paddingTop: '0px' }} />
      </div>
    </section>
  );
};

export default SectionPrice;
