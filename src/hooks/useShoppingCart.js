import { useReducer, useEffect } from "react";
import { cartReducer } from "../store/reducers/cartReducer";
import * as ACTIONS from "../store/actions/cartActions";

const getCartDataFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('cartData'));  
};

const postCartDataToLocalStorage = (cartData) => {
    localStorage.setItem('cartData', JSON.stringify(cartData));
};

const INITIAL_STATE = {
    cart: getCartDataFromLocalStorage() || [],
    total: 0,
    errors: { err: {}, msg: [] },
};

const useShoppingCart = () => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    useEffect(() => {
        postCartDataToLocalStorage(state.cart);
    }, [state.cart]);

    useEffect(() => {
        dispatch(ACTIONS.updateTotal(state.cart));
    }, [state.cart]);


    const handleCartChange = (qty, id) => {
        dispatch(ACTIONS.update(qty, id));
    };

    const handleAddItem = (e, item, type) => {
        addItemToCart(item, state, 'new');
    };

    const removeItem = (id) => {
        dispatch(ACTIONS.remove(id));
    };

    const addItemToCart = (item, state, type) => {
        dispatch(ACTIONS.add(item, state, type));
    };

    return {
        state,
        handleAddItem,
        removeItem,
        handleCartChange,
    };
};

export default useShoppingCart;