import { useGlobalContext } from "../../store/context/context";
import styles from "./Cart.module.css";
import Wrapper from "../Wrapper/Wrapper";

const Cart = () => {
    const { state, handleAddItem, removeItem, handleCartChange } = useGlobalContext();

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
            <button className={styles.productButton} onClick={(e) => handleAddItem(e, items[0], 'new')}>Item-1</button>
            <button className={styles.productButton} onClick={(e) => handleAddItem(e, items[1], 'new')}>Item-2</button>
            <button className={styles.productButton} onClick={(e) => handleAddItem(e, items[2], 'new')}>Item-3</button>
            <Wrapper>
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
                    Total: ${parseFloat(total.toFixed(2)).toLocaleString('en')}
                </section>
            </Wrapper>
        </>
    );
};

export default Cart;