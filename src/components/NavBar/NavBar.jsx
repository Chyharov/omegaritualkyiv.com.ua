import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import s from './NavBar.module.scss';

const NavMenu = () => {
  return (
    <>
      <div className={s.navBar} onClick={e => e.stopPropagation()}>
        <nav className={s.nav}>
          <MobileNavigation />
          <Navigation />
        </nav>
      </div>
    </>
  );
};

export default NavMenu;
