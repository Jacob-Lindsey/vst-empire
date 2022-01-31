import { useReducer, useEffect, useState } from "react";
import { cartReducer } from "../store/reducers/cartReducer";
import * as ACTIONS from "../store/actions/cartActions";

const getCartDataFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('cartData'));  
};

const postCartDataToLocalStorage = (cartData) => {
    localStorage.setItem('cartData', JSON.stringify(cartData));
};

const INITIAL_CART = {
    cart: getCartDataFromLocalStorage() || [],
};

const useShoppingCart = () => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_CART);

    useEffect(() => {
        postCartDataToLocalStorage(state.cart);
    }, [state.cart]);


    /* const handleCartChange = (e, index) => {
        const item = e ? e.target.name : null;
        const newItems = [...cart];


        setCart()
    }; */

    const handleAddItem = (e, name, type) => {
        addItemToCart(name, state, 'new');
    };

    const handleRemoveItem = () => {
        dispatch(ACTIONS.remove());
    };

    const addItemToCart = (item, state, type) => {
        dispatch(ACTIONS.add(item, state, type));
    };

    return {
        state,
        handleAddItem,
        handleRemoveItem,
    };

};

export default useShoppingCart;