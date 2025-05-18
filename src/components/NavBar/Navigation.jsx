import NavLinks from "./NavLinks";
import s from './NavBar.module.scss'

const Navigation = () => {
    return ( 
        <nav className={s.navigation}>
            <NavLinks />
        </nav>
        
     );
}
 
export default Navigation;