import * as ACTION_TYPES from "./action_type";
import { v4 as uuidv4 } from "uuid";

export const add = (item, state, type) => {
    return {
        type: ACTION_TYPES.ADD_TO_CART,
        payload: {
            name: item.name,
            price: item.price,
            quantity: 1,
            inStock: item.inStock,
            description: item.description,
            sku: item.sku,
            id: item.id,
        },
    };
};

export const remove = (id) => {
    return {
        type: ACTION_TYPES.REMOVE_FROM_CART,
        payload: {
            id: id,
        },
    };
};

export const update = (quantity, id) => {
    return {
        type: ACTION_TYPES.CHANGE_QUANTITY,
        payload: {
            quantity: quantity,
            id: id,
        },
    };
};

export const updateTotal = (cart) => {
    return {
        type: ACTION_TYPES.CALCULATE_TOTAL,
        payload: {
            cart: cart,
        },
    };
};