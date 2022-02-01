import * as ACTION_TYPES from "../actions/action_type";

export const cartReducer = (state, action) => {
    if (action.type === ACTION_TYPES.ADD_TO_CART) {
        console.log('ADD_TO_CART');
        const newCart = [
            {
                name: action.payload.name,
                price: action.payload.price,
                quantity: action.payload.quantity,
                total: action.payload.price * action.payload.quantity,
                inStock: action.payload.inStock,
                description: action.payload.description,
                sku: action.payload.sku,
                id: action.payload.id,
            },
            ...state.cart,
        ];

        return { ...state, cart: newCart };
    };

    if (action.type === ACTION_TYPES.REMOVE_FROM_CART) {
        console.log('REMOVE_FROM_CART');
        const newCart = state.cart.filter(
            (item) => item.id !== action.payload.id
        );
        
        return { ...state, cart: newCart };
    };

    if (action.type === ACTION_TYPES.CHANGE_QUANTITY) {
        const newCart = state.cart.map((item) => {
            if (item.id === action.payload.id) {
                console.log(!isNaN(action.payload.quantity));
                if (!isNaN(action.payload.quantity)) {
                    item.quantity = parseInt(action.payload.quantity);
                    item.total = item.price * action.payload.quantity;
                } else {
                    return item;
                }
                
            }
            return item;
        });

        return { ...state, cart: newCart };
    };

    if (action.type === ACTION_TYPES.CALCULATE_TOTAL) {
        const newTotal = Object.values(action.payload.cart).reduce((acc,curr) => acc + curr['price'],0);
        return { ...state, total: newTotal };
    };
};