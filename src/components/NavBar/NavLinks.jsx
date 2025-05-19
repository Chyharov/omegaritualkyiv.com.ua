import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import s from './NavBar.module.scss';

const NavLinks = ({ language, navItems = [], isMobile, closeMobileMenu }) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <div className={s.bgShadow}>
      <div className={'container ' + s.menuList__container}>
        <ul className={s.menu__list}>
          {navItems.map((item, index) => {
            const content = (
              <motion.li
                key={index}
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: item.delay || 0 }}
                className={s.menu__list_item}
              >
                {item.label}
              </motion.li>
            );

            const handleClick = () => {
              if (isMobile && closeMobileMenu) closeMobileMenu();
            };

            return item.type === 'scroll' ? (
              <Link
                key={index}
                onClick={handleClick}
                className={s.menu__list_link}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {content}
              </Link>
            ) : (
              <RouterLink
                key={index}
                onClick={handleClick}
                className={s.menu__list_link}
                to={item.to}
              >
                {content}
              </RouterLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavLinks;
