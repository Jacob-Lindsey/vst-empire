import styles from "./Wrapper.module.css";

const Wrapper = (props) => {
    return (
        <section className={props.direction === 'col' ? styles.wrapperCol : styles.wrapperRow}>
            {props.children}
        </section>
    )
};

export default Wrapper;