import { useLocation } from 'react-router'
import styles from './ProductDetail.module.css'

const ProductDetail = () => {
  const location = useLocation()
  const { item } = location.state

  return (
    <section className={styles.container}>
      <div className={styles.detailWrapper}>
        <img
          className={styles.image}
          src={`https://via.placeholder.com/400/222222/DDDDDD/?text=${item.item.name}`}
          alt=''
        />
        <div className={styles.descriptionWrapper}>
          <p className={styles.name}>{item.item.name}</p>
          <span className={styles.brand}>By: {item.item.brand}</span>
          <p className={styles.description}>{item.item.description}</p>
        </div>
        <div className={styles.priceWrapper}>
          <p className={styles.priceLabel}>Price</p>
          <span className={styles.price}>{item.item.price}</span>
          <button className={styles.button}>ADD TO CART</button>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail
