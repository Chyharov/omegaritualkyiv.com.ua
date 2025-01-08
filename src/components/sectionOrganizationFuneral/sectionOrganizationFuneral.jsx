import s from './sectionOrganizationFuneral.module.scss';

const sectionOrganizationFuneral = () => {
  return (
    <section className={s.sectionOrganizationFuneral}>
      <div className="container">
        <h1>Організація ритуальних послуг</h1>
        <p>Починаючи з оформлення документів і закінчуючи поминальним обідом, такий стрес може негативно позначитися на здоров'ї людини.</p>
        <p>Ми працюємо з усіма клієнтами і знаходимо їм найкращий варіант. Ми співпрацюємо з десятками ресторанів, маємо власний транспорт, тому ціна наших ритуальних послуг завжди залишається низькою і доступною для всіх.</p>
      <button>докладніше</button>
      </div>
    </section>
  );
};

export default sectionOrganizationFuneral;
