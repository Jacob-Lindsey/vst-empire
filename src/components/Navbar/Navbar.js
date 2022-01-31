import { useState } from "react";
import styles from "./Navbar.module.css";
import Cart from "../Cart/Cart";

const Navbar = () => {

    const [cartOpen, setCartOpen] = useState(false);

    const handleShowCart = () => {
        setCartOpen(!cartOpen);
    };

    return (
        <nav className={styles.wrapper}>
            <ul className={styles.navList}>
                <li className={styles.navLink}>Link1</li>
                <li className={styles.navLink}>Link2</li>
                <li className={styles.navLink}>Link3</li>
                <li onClick={() => handleShowCart()} className={styles.navLink}>Cart</li>
            </ul>
            {
                cartOpen ? <div className={styles.cartContainer}><Cart /></div> : null
            }
            
        </nav>
    )
};

export default Navbar;