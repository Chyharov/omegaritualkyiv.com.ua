import NavLinks from "./NavLinks";
import s from './NavBar.module.scss'

const Navigation = ({language, navItems}) => {
    return ( 
        <nav className={s.navigation}>
            <NavLinks language={language} navItems={navItems} />
        </nav>
        
     );
}
 
export default Navigation;