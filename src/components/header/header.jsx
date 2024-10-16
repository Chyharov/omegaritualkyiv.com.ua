import s from './header.module.scss';

const header = () => {
  return (
    <header className={s.header}>
      <div className={'container ' + s.header__padding}>

        <h1 className={s.header__title}>header</h1>
        
      </div>
    </header>
  )
};

export default header;
