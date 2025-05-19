import NavLinks from "./NavLinks";
import s from './NavBar.module.scss'
import BurgerMenu from 'images/header/burgerMenu.svg'
import CloseBtn from 'images/header/burgerMenuClose.svg'
import { useState } from 'react';

const MobileNavigation = ({language, navItems}) => {

    const [open, setOpen] = useState(false);
    const hamburgerIcon = (
        <img
            src={BurgerMenu}
            alt="Меню"
            aria-label="Меню"
            className={s.hamburgerMenu}
            onClick={() => setOpen(!open)}
        />
    );

    const hamburgerCloseIcon = (
        <img
            src={CloseBtn}
            alt="Закрити меню"
            aria-label="Закрити меню"
            className={s.hamburgerMenu}
            onClick={() => setOpen(!open)}
        />
    );

    const closeMobileMenu = () => setOpen(false);

    return ( 
        <nav className={s.mobileNavigation}>
            {open ? hamburgerCloseIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} language={language} navItems={navItems} /> }
        </nav>
        
     );
}
 
export default MobileNavigation;