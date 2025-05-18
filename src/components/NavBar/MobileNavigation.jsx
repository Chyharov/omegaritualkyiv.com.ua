import NavLinks from "./NavLinks";
import s from './NavBar.module.scss'
import BurgerMenu from '../../images/navBar/burgerMenu.svg'
import CloseBtn from '../../images/navBar/closeBtn.svg'
import { useState } from 'react';

const MobileNavigation = () => {

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
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} /> }
        </nav>
        
     );
}
 
export default MobileNavigation;