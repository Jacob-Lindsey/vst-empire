import { useLocation } from "react-router";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {

    const location = useLocation();
    const { item } = location.state;

    return (
        <section className={styles.container}>
            <div className={styles.detailWrapper}>
                <img  className={styles.image} src={`https://via.placeholder.com/220x150/222222/DDDDDD/?text=${item.name}`} alt='' />
                <div className={styles.descriptionWrapper}>
                    <p className={styles.name}>{item.name}</p>
                    <p className={styles.description}>{item.description}</p>
                </div>
                <div className={styles.priceWrapper}>
                    <span>
                        <p className={styles.priceLabel}>Price</p>
                        <span className={styles.price}>{item.price}</span>
                        <button className={styles.button}>ADD TO CART</button>
                    </span>
                </div>
                
            </div>
            
            <div>
                {item.item.name}
            </div>
        </section>
    )

};

export default ProductDetail;