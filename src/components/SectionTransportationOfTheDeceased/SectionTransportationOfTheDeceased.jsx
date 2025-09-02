import TitleForPage from '../TitleForPage/TitleForPage';
import BanerForSection from 'components/BanerForSection/BanerForSection';
import s from './SectionTransportationOfTheDeceased.module.scss';

const SectionTransportationOfTheDeceased = ({
  title,
  imgBaner,
  imgBannerDescription,
}) => {
  return (
    <section className={s.sectionTransportationOfTheDeceased}>
      <div className={`container ${s.funeralOrganisation__container}`}>
        <TitleForPage title={title} />
        <BanerForSection
          imgBaner={imgBaner}
          imgBannerDescription={imgBannerDescription}
        />

        
      </div>
    </section>
  );
};

export default SectionTransportationOfTheDeceased;
