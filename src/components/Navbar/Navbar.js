import HamburgerMenu from "./HamburgerMenu"
import Navigation from "./Navigation"
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
       
       <Navigation />
       <HamburgerMenu />
    </div>
  )
}
export default Navbar;