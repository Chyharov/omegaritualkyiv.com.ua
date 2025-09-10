import s from './BanerForSection.module.scss';

const BanerForSection = ({ imgBaner, imgBannerDescription, style }) => {
  return (
    <div className={s.banerRitualAgent__container} style={style}>
      <img
        className={s.banerRitualAgent}
        src={imgBaner}
        alt="imgBaner"
      />
      <p className={s.banerRitualAgent__description}>
        {imgBannerDescription}
      </p>
    </div>
  );
};

export default BanerForSection;
