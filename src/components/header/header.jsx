import logo from 'images/header/logo.svg'
import NavBar from 'components/NavBar/NavBar'
import s from './header.module.scss';

const header = () => {
  return (
    <header className={s.header}>
      <div className={`container ${s.header__container}`}>

        <img src={logo} alt="logo__header" />

        {/* <NavBar /> */}

        <ul>
          <li>Інформація</li>
          <li>Послуги</li>
          <li>Ритуальні товари</li>
          <li>Ціни</li>
        </ul>
        
      </div>
    </header>
  )
};

export default header;
