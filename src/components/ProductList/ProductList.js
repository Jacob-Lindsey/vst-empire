import faker from "@faker-js/faker";
import styles from "./ProductList.module.css";

const ProductList = () => {

    const maxPrice = Math.random() * 500;
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
            name: faker.commerce.productName(),
            price: faker.commerce.price(0, maxPrice),
            description: faker.commerce.productDescription(),
            sku: times(16, faker.random.alphaNumeric),
            brand: faker.company.companyName(),
            inStock: maxStock(),
        }
        products.push(newProduct);
    };    

    return (
        <div className={styles.itemListContainer}>
            {
                products.map((item) => {
                    return (
                        <div className={styles.item} key={item.sku}>
                            <div className={styles.itemHeader}>
                                <span>{item.name}</span>
                                <span>${item.price}</span>
                            </div>
                            <div className={styles.itemSubHeader}>{item.inStock} Left In Stock</div>
                            <div className={styles.itemInfo}>
                                <h3>{item.brand}</h3>
                                <p>{item.description}</p>
                            </div>
                            <div className={styles.itemFooter}>Product SKU: {item.sku}</div>
                        </div>
                    )
                })
            }
        </div>
    )

};

export default ProductList;