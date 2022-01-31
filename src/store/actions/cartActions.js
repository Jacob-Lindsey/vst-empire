import * as ACTION_TYPES from "./action_type";
import { v4 as uuidv4 } from "uuid";

export const add = (item, state, type) => {
    return {
        type: ACTION_TYPES.ADD_TO_CART,
        payload: {
            name: item,
            quantity: 1,
            id: uuidv4(),
        },
    };
};

export const remove = () => {
    return {
        type: ACTION_TYPES.REMOVE_FROM_CART,
    };
};