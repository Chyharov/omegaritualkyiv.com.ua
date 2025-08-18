import s from './TitleForPage.module.scss';

const TitleForPage = ({ title }) => {
  
  return (
    <>
        <div className={s.maintitle__container}>
        <h2 className={s.maintitle}>{title}</h2>
        </div>
        <h3 className={s.mainsubtitle}>{title}</h3>
    </>
  );
};

export default TitleForPage;
