import { v4 as uuidv4 } from "uuid";
import faker from "@faker-js/faker";
import { Link } from "react-router-dom";
import styles from "./ProductList.module.css";

const ProductList = () => {

    const maxStock = () => Math.floor(Math.random() * 60);
    const times = (n, func) => {
        let x = 0;
        let results = '';
        while (n > x) {
            results += func();
            x = x + 1;
        };
        return results;
    };
    let products = [];

    for (let i=0; i<100; i++) {
        let newProduct = {
            name: faker.hacker.noun(),
            price: faker.finance.amount(20,500,2),
            description: faker.commerce.productDescription(),
            sku: times(16, faker.random.alphaNumeric),
            brand: faker.random.word(),
            inStock: maxStock(),
            id: uuidv4(),
        }
        products.push(newProduct);
    };    

    return (
        <div className={styles.itemListContainer}>
            {
                products.map((item) => {
                    return (
                        <Link 
                            className={styles.link}
                            to={`/vst/${item.id}`}
                            state={{ item: {item} }}
                            key={item.sku}
                        >
                            <div className={styles.item}>
                                <div className={styles.itemUpper}>
                                    <div className={styles.itemHeader}>
                                        <span>{item.name}</span>
                                    </div>
                                    <div className={styles.itemImg}>
                                        <img src={`https://via.placeholder.com/220x150/222222/DDDDDD/?text=${item.name}`} alt='' />
                                    </div>
                                    <div className={styles.itemInfo}>
                                        {item.brand}
                                    </div>
                                </div>
                                <div className={styles.itemFooter}>
                                    <span className={styles.footerName}>{item.name}</span>
                                    <span className={styles.footerPrice}>${item.price}</span>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )

};

export default ProductList;