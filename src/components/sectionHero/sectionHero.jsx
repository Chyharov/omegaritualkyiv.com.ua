import s from './sectionHero.module.scss';

const sectionHero = () => {
  return (
    <section className={s.sectionHero}>
      <div className={'container ' + s.hero__container}>
        <div className={s.hero__background}>
          <div className={s.hero__titleContainer}>
            <h1 className={s.title__hero}>
              Похоронний будинок{' '}
              <span className={s.title__heroSpan}>Омега</span> має у своєму
              розпорядженні всі необхідні товари та послуги, що дозволяють
              проводити поховання або кремацію будь-якого рівня.
            </h1>

            <button className={s.btnConsultation}>
              Безкоштовна консультація
            </button>
          </div>

          <div>
            <address className={s.hero__address}>
              <ul className={s.addressList}>
                <li className={s.addressList__item}>
                  <a
                    href="https://maps.app.goo.gl/FP8G2z8Ttup7qUfo8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Київ, вул. Івана Федорова, 33
                  </a>
                </li>
                <li className={s.addressList__item}>
                  <a
                    href="https://maps.app.goo.gl/rdrzW9dACw5qq9vf9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Київ, вул. Колоскова, 9
                  </a>
                </li>
              </ul>
              <ul className={s.heroPhonesList}>
                <li className={s.heroPhonesList__item}>
                  <a href="tel:+380442090261">+38 (044) 209-02-61</a>
                </li>
                <li className={s.heroPhonesList__item}>
                  <a href="tel:+380939040707">+38 (093) 904-07-07</a>
                </li>
                <li className={s.heroPhonesList__item}>
                  <a href="tel:+380670112160">+38 (067) 011-21-60</a>
                </li>
              </ul>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};

export default sectionHero;
