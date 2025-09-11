import TitleForPage from '../TitleForPage/TitleForPage';
import BanerForSection from 'components/BanerForSection/BanerForSection';
import s from './SectionContacts.module.scss';

const SectionContacts = ({ title, imgBaner, imgBannerDescription }) => {
  return (
    <section className={s.sectionContacts}>
      <div className={`container ${s.sectionContacts__container}`}>
        <TitleForPage title={title} />
        <BanerForSection
          imgBaner={imgBaner}
          imgBannerDescription={imgBannerDescription}
          style={{ display: 'none' }}
        />

      </div>
    </section>
  );
};

export default SectionContacts;
