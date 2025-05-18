import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import s from './NavBar.module.scss'

const NavLinks = (props) => {

    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }

    const getDeviceType = () => {
    const width = window.innerWidth;
    if (width <= 767) {
        return 'mobile';
    } else if (width >= 768 && width <= 1359) {
        return 'tablet';
    } else {
        return 'desktop';
    }
};

    const getOffsetByDeviceType = () => {
        const deviceType = getDeviceType();
        if (deviceType === 'mobile') {
            return -90;
        } else if (deviceType === 'tablet') {
            return -160;
        } else {
            return -180;
        }
    };


    return (

    <div className={'container ' + s.menuList__container}>
        <ul className={s.menu__list}>

                <Link
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    className={s.menu__list_link}
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={getOffsetByDeviceType()}
                    duration={500}>
                    
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.05}}
                        className={s.menu__list_item}>
                            Головна
                    </motion.li>
                </Link>

                <Link
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    className={s.menu__list_link}
                    to="/about"
                    spy={true}
                    smooth={true}
                    offset={getOffsetByDeviceType()}
                    duration={500}>
                    
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.10}}
                        className={s.menu__list_item}>
                            Про компанію
                    </motion.li>
                </Link>

                <Link
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    className={s.menu__list_link}
                    to="/ritualgoods"
                    spy={true}
                    smooth={true}
                    offset={getOffsetByDeviceType()}
                    duration={500}>
                    
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.20}}
                        className={s.menu__list_item} 
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                            Ритуальні товари
                    </motion.li>
                </Link>

                <Link
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    className={s.menu__list_link}
                    to="/ritualtransport"
                    spy={true}
                    smooth={true}
                    offset={getOffsetByDeviceType()}
                    duration={500}>
                    
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.30}}
                        className={s.menu__list_item} 
                        onClick={() => props.isMobile && props.closeMobileMenu()}>
                            Ритуальний транспорт
                    </motion.li>
                </Link>

                <Link
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    className={s.menu__list_link}
                    to="/ritualservices"
                    spy={true}
                    smooth={true}
                    offset={getOffsetByDeviceType()}
                    duration={500}>
                    
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.40}}
                        className={s.menu__list_item}>
                            Ритуальні послуги
                    </motion.li>
                </Link>

                <Link
                    onClick={() => props.isMobile && props.closeMobileMenu()}
                    className={s.menu__list_link}
                    to="/additionalservices"
                    spy={true}
                    smooth={true}
                    offset={getOffsetByDeviceType()}
                    duration={500}>
                    
                    <motion.li 
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.50}}
                        className={s.menu__list_item}>
                            Додаткові послуги
                    </motion.li>
                </Link>

        </ul>
    </div>
);
}
 
export default NavLinks;