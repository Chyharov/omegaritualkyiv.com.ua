import TitleForPage from '../TitleForPage/TitleForPage';
import BanerForSection from 'components/BanerForSection/BanerForSection';
import s from './SectionPage404.module.scss';

const SectionPage404 = ({ title, imgBaner, imgBannerDescription }) => {
  return (
    <section className={s.sectionPage404}>
      <div className={`container ${s.sectionPage404__container}`}>
        <TitleForPage title={title} />
        <BanerForSection
          imgBaner={imgBaner}
          imgBannerDescription={imgBannerDescription}
        />

        <h2 className="title">404 - Page Not Found</h2>

        <p className="descriptionItalic">404 - Page Not Found</p>
      </div>
    </section>
  );
};

export default SectionPage404;
