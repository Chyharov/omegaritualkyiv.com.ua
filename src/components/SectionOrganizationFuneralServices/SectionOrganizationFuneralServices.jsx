import TitleForPage from '../TitleForPage/TitleForPage';
import SectionServiceList from '../sectionServiceList/sectionServiceList.jsx';
import s from './SectionOrganizationFuneralServices.module.scss';

const SectionOrganizationFuneralServices = ({ title, serviceList }) => {
  return (
    <section className={s.sectionOrganizationFuneralServices}>
      <div
        className={`container ${s.sectionOrganizationFuneralServices__container}`}
      >
        <TitleForPage title={title} />

        <SectionServiceList serviceList={serviceList} />
      </div>
    </section>
  );
};

export default SectionOrganizationFuneralServices;
