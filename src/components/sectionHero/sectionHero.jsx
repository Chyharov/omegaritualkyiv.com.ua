import s from './sectionHero.module.scss';

const sectionHero = () => {
  return (
    <section className={s.sectionHero}>
      <div className={'container ' + s.hero__container}>
        <div className={s.hero__title}>
          <h1 className="title">
            Похоронний будинок Омега має у своєму розпорядженні всі необхідні
            товари та послуги, що дозволяють проводити поховання або кремацію
            будь-якого рівня.
          </h1>

          <button>Безкоштовна консультація</button>
        </div>

        <div>
          <address className={s.hero__address}>
            <ul>
              <li>Київ, вул. Івана Федорова, 33</li>
              <li>Київ, вул. Колоскова, 9</li>
            </ul>
            <ul>
              <li><a href="tel:+380442090261">+38 (044) 209-02-61</a></li>
              <li><a href="tel:+380939040707">+38 (093) 904-07-07</a></li>
              <li><a href="tel:+380670112160">+38 (067) 011-21-60</a></li>
            </ul>
          </address>
        </div>
      </div>
    </section>
  );
};

export default sectionHero;
