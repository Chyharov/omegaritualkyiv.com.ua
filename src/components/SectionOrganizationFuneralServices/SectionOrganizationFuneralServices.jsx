import TitleForPage from '../TitleForPage/TitleForPage';
import BanerForSection from 'components/BanerForSection/BanerForSection';
import s from './SectionOrganizationFuneralServices.module.scss';

const SectionOrganizationFuneralServices = ({ title, imgBaner, imgBannerDescription }) => {
  return (
    <section className={s.sectionOrganizationFuneralServices}>
      <div className={`container ${s.sectionOrganizationFuneralServices__container}`}>
        <TitleForPage title={title} />
        <BanerForSection
          imgBaner={imgBaner}
          imgBannerDescription={imgBannerDescription}
        />

        <h2 className="title">OrganizationFuneralServicesPage</h2>

      </div>
    </section>
  );
};

export default SectionOrganizationFuneralServices;
