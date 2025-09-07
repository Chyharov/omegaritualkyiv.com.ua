import TitleForPage from '../TitleForPage/TitleForPage';
import BanerForSection from 'components/BanerForSection/BanerForSection';
import s from './SectionRitualHall.module.scss';

const SectionRitualHall = ({
  title,
  imgBaner,
  imgBannerDescription,
}) => {
  return (
    <section className={s.sectionRitualHall}>
      <div className={`container ${s.funeralOrganisation__container}`}>
        <TitleForPage title={title} />
        <BanerForSection
          imgBaner={imgBaner}
          imgBannerDescription={imgBannerDescription}
        />

              <p className='descriptionItalic'>Ми дбаємо про зручність рідних та близьких покійного під час проведення церемонії прощання, тому ми готові організувати похорон із проведенням цивільної панахиди у прощальній залі у будь-якому районі Києва. При необхідності ми надамо автобуси для підвезення та розвезення присутніх на похороні.</p>
      </div>
    </section>
  );
};

export default SectionRitualHall;
