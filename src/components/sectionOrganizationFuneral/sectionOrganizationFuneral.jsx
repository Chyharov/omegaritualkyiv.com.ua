import OrganizationFuneralImage from 'images/organizationFuneral/5.jpg'
import s from './sectionOrganizationFuneral.module.scss';

const sectionOrganizationFuneral = () => {
  return (
    <section className={s.sectionOrganizationFuneral}>
      <div className="container">
        <div className={s.organizationFuneralContainer}>
          <img loading='lazy' className={s.organizationFuneralImage} src={OrganizationFuneralImage} alt="OrganizationFuneralImage" />
          <div className={s.organizationFuneralDescription}>
            <h1 className={s.titleOrganizationFuneral}>Організація ритуальних послуг</h1>
          <p className={s.descriptionOrganizationFuneral}>
            Починаючи з оформлення документів і закінчуючи поминальним обідом. Такий стрес може негативно вплинути на здоров'я людини. Омега-Ритуал понад 15 років працює у сфері ритуальних послуг і ми знаємо як організувати похорон за доступною для вас ціною.
          </p>
          <p className={s.descriptionOrganizationFuneral}>
            Ми працюємо з усіма клієнтами і знаходимо їм найкращий варіант. Ми
            співпрацюємо з десятками ресторанів, маємо власний транспорт, тому
            ціна наших ритуальних послуг завжди залишається низькою і доступною
            для всіх.
          </p>
          <button className={s.buttonOrganizationFuneral}>ДОКЛАДНІШЕ</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default sectionOrganizationFuneral;
