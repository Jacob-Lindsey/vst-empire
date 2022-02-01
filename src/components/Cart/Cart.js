import { useGlobalContext } from "../../store/context/context";
import styles from "./Cart.module.css";
import Wrapper from "../Wrapper/Wrapper";

const Cart = () => {
    const { state, removeItem, handleCartChange } = useGlobalContext();

    const preventNaN = (e) => {
        if (isNaN(parseInt(e.key)) && e.target.value <= 9) {
            console.log('Caught');
            e.stopPropagation();
            e.preventDefault();
        }
    };

    const total = Object.values(state.cart).reduce((acc,curr) => acc + curr['total'],0);

    const items = [
        {
            name: 'Item 1',
            price: 19.99,
            inStock: 314,
        },
        {
            name: 'Item 2',
            price: 43.99,
            inStock: 48,
        },
        {
            name: 'Item 3',
            price: 71.99,
            inStock: 24,
        },
    ];

    return (
        <>
            <Wrapper direction='col'>
                <header className={styles.cartHeader}>
                    <h1 className={styles.cartTitle}>Your Cart</h1>
                </header>
                <ul className={styles.list}>
                    {state.cart
                        ? state.cart.map((item) => {
                            return (
                                <li className={styles.listItem} key={item.id}>
                                    <div className={styles.name}>{item.name}</div>
                                    <div className={styles.quantityInputWrapper}>
                                        <input 
                                            type='number'
                                            min='1'
                                            max={item.inStock}
                                            value={item.quantity}
                                            onChange={(e) => handleCartChange(e.target.value, item.id)}
                                            onKeyDown={(e) => preventNaN(e)}
                                            className={styles.quantityInput}
                                        />
                                        <span className={styles.update}>Update</span>
                                    </div>
                                    <div className={styles.total}>${(item.price * item.quantity).toFixed(2)}</div>
                                    <div>
                                        <button className={styles.deleteButton} onClick={() => removeItem(item.id)}>X</button>
                                    </div>
                                </li> 
                            )
                        }) : <li>Cart is empty</li>
                    }
                </ul>
                <section className={styles.checkoutInfo}>
                    <span className={styles.grandTotal}>
                        <span className={styles.subtotal}>Subtotal</span>
                        <span className={styles.totalAmount}>${parseFloat(total.toFixed(2)).toLocaleString('en')}</span>
                    </span>
                    <span className={styles.checkoutButtons}>
                        <button>Checkout</button>
                    </span>
                    
                </section>
            </Wrapper>
        </>
    );
};

export default Cart;