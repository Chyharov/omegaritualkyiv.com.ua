import s from './sectionServiceList.module.scss';

const sectionServiceList = () => {
  return (
    <section className={s.sectionServiceList}>
      <div className={'container ' + s.serviceListContainer}>

        <h1 className={s.serviceList__title}>Послуги, які ми надаємо</h1>

              <ul className={s.serviceList}>
                  <li className={s.serviceList__item}><p className={s.serviceList__itemDesctioption}>Ритуальний агент</p><a className={s.serviceList__itemLink} href="/">ДІЗНАТИСЬ БІЛЬШЕ</a></li>
                  <li className={s.serviceList__item}><p className={s.serviceList__itemDesctioption}>Організація похорон</p><a className={s.serviceList__itemLink} href="/">ДІЗНАТИСЬ БІЛЬШЕ</a></li>
                  <li className={s.serviceList__item}><p className={s.serviceList__itemDesctioption}>Кремація</p><a className={s.serviceList__itemLink} href="/">ДІЗНАТИСЬ БІЛЬШЕ</a></li>
                  <li className={s.serviceList__item}><p className={s.serviceList__itemDesctioption}>Ритуальний транспорт</p><a className={s.serviceList__itemLink} href="/">ДІЗНАТИСЬ БІЛЬШЕ</a></li>
                  <li className={s.serviceList__item}><p className={s.serviceList__itemDesctioption}>Відпиваня померлого</p><a className={s.serviceList__itemLink} href="/">ДІЗНАТИСЬ БІЛЬШЕ</a></li>
                  <li className={s.serviceList__item}><p className={s.serviceList__itemDesctioption}>Груз 200</p><a className={s.serviceList__itemLink} href="/">ДІЗНАТИСЬ БІЛЬШЕ</a></li>
              </ul>      
       
        </div>
    </section>
  );
};

export default sectionServiceList;
