import TitleForPage from '../TitleForPage/TitleForPage';
import BanerForSection from 'components/BanerForSection/BanerForSection';
import s from './SectionMortuaryServices.module.scss';

const SectionMortuaryServices = ({
  title,
  imgBaner,
  imgBannerDescription,
}) => {
  return (
    <section className={s.sectionMortuaryServices}>
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

export default SectionMortuaryServices;
