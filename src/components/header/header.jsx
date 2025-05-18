import logo from 'images/header/logo.svg'
import s from './header.module.scss';

const header = () => {
  return (
    <header className={s.header}>
      <div className={`container ${s.header__container}`}>

        <img src={logo} alt="logo__header" />
        
      </div>
    </header>
  )
};

export default header;
