import logo from 'images/header/logo.svg'
import s from './header.module.scss';

const header = () => {
  return (
    <header className={s.header}>
      <div className={'container ' + s.header__padding}>

        <img src={logo} alt="logo__header" />

        <h1 className={s.header__title}>header</h1>
        
      </div>
    </header>
  )
};

export default header;
