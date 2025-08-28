import OrganizationFuneralImage from 'images/organizationFuneral/5.jpg';
import s from './sectionOrganizationFuneral.module.scss';

const sectionOrganizationFuneral = () => {
  return (
    <section className={s.sectionOrganizationFuneral}>
      <img
        loading="lazy"
        className={s.organizationFuneralImageDesktop}
        src={OrganizationFuneralImage}
        alt="organizationFuneralImageDesktop"
      />
      <div className="container">
        <div className={s.organizationFuneralContainer}>
          <img
            loading="lazy"
            className={s.organizationFuneralImage}
            src={OrganizationFuneralImage}
            alt="OrganizationFuneralImage"
          />
          <div className={s.organizationFuneralDescription}>
            <h1 className={s.titleOrganizationFuneral}>
              Організація ритуальних послуг
            </h1>
            <p className={s.descriptionOrganizationFuneral}>
              Компанія «Омега-Ритуал» надає повний комплекс похоронних послуг –
              від оформлення необхідних документів до організації поминального
              обіду. Ми розуміємо, наскільки важкими є ці моменти для родини,
              тому беремо на себе всі турботи, щоб ви могли зосередитися на
              прощанні з близькою людиною.
            </p>
            <p className={s.descriptionOrganizationFuneral}>
              Більше 15 років ми працюємо у сфері ритуальних послуг і знаємо, як
              організувати похорон гідно, з повагою до традицій та за доступною
              ціною.
            </p>
            <h3 className={s.ourBenefitsTitle}>Наші переваги:</h3>
            <ul className={s.ourBenefits__list}>
              <li className={s.ourBenefits__listItem}>індивідуальний підхід до кожного клієнта;</li>
              <li className={s.ourBenefits__listItem}>
                співпраця з десятками ресторанів для проведення поминальних
                обідів;
              </li>
              <li className={s.ourBenefits__listItem}>власний транспорт для перевезення;</li>
              <li className={s.ourBenefits__listItem}>оптимальні та прозорі ціни.</li>
            </ul>
              <p className={s.descriptionOrganizationFuneral}>
                <b>«Омега-Ритуал»</b> – це надійність, досвід і підтримка у
                найважчі моменти життя.
              </p>
            <button className={s.buttonOrganizationFuneral}>ДОКЛАДНІШЕ</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default sectionOrganizationFuneral;
