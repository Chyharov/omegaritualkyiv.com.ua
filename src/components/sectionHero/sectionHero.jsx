import s from './sectionHero.module.scss';

const sectionHero = () => {
  return (
    <section className={s.sectionHero}>
      <div className={'container ' + s.hero__container}>

        <h1 className="title">Похоронний будинок Омега має у своєму розпорядженні всі необхідні товари та послуги, що дозволяють проводити поховання або кремацію будь-якого рівня.</h1>
        
      </div>
    </section>
  )
};

export default sectionHero;
