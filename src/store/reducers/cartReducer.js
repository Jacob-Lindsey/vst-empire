import * as ACTION_TYPES from "../actions/action_type";

export const cartReducer = (state, action) => {
    if (action.type === ACTION_TYPES.ADD_TO_CART) {
        const newCart = [
            {
                name: action.payload.name,
                quantity: action.payload.quantity,
                id: action.payload.id,
            },
            ...state.cart,
        ];

        return { ...state, cart: newCart };
    };

    if (action.type === ACTION_TYPES.REMOVE_FROM_CART) {
        const newCart = state.cart.filter(
            (item) => item.id !== state.currItemIndex 
        );

        return { ...state, cart: newCart };
    };

    /* if (action.type === ACTION_TYPES.CHANGE_QUANTITY) {
        return {
            ...state,

        }
    } */
};