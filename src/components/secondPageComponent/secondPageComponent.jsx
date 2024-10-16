import { Link } from 'react-router-dom';
import s from './secondPageComponent.module.scss';


const secondPageComponent = () => {

  return (
    <section className={s.sectionsecondPageComponent}>
      <div className={'container ' + s.secondPageComponent__container}>
        <h1 className={s.secondPageComponentTitle}>secondPageComponent</h1>
        <Link className={s.header__linkBack} to="/">to MainPage</Link>
      </div>
    </section>
  )
};

export default secondPageComponent;
