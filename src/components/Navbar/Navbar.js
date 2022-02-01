import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../store/context/context";
import styles from "./Navbar.module.css";
import Cart from "../Cart/Cart";

const Navbar = () => {

    const [cartOpen, setCartOpen] = useState(false);

    const { state } = useGlobalContext();

    const cartSize = state.cart.reduce(function (acc, obj) {
        return acc + obj.quantity
    }, 0);
    const handleShowCart = () => {
        setCartOpen(!cartOpen);
    };

    return (
        <nav className={styles.wrapper}>
            <ul className={styles.navList}>
                <Link className={styles.link} to='/'>
                    <li className={styles.navLink}>Home</li>
                </Link>
                <li className={styles.navLink}>Link2</li>
                <li className={styles.navLink}>Link3</li>
                <li onClick={() => handleShowCart()} className={styles.navLink}>
                    Cart
                    <span>{cartSize}</span>
                </li>
            </ul>
            {
                cartOpen ? <div className={styles.cartContainer}><Cart /></div> : null
            }
            
        </nav>
    )
};

export default Navbar;