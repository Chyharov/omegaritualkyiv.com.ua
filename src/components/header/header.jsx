import { Link } from 'react-router-dom';
import logo from 'images/header/logo.svg'
import NavBar from 'components/NavBar/NavBar'
import s from './header.module.scss';

const header = ({navItems}) => {
  return (
    <header className={s.header}>
      <div className={`container ${s.header__container}`}>
        <Link to="/">
          <img className={s.header__logo} src={logo} alt="header__logo" />
        </Link>

        <NavBar navItems={navItems} />
        
      </div>
    </header>
  )
};

export default header;
