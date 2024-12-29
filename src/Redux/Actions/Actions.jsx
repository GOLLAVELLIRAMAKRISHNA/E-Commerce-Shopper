import { ADD_TO_CART, REMOVE_FROM_CART, GET_TOTAL_CART_AMOUNT, GET_TOTAL_CART_ITEM } from "../ActionTypes/ActionTypes";

export const AddToCart = (itemId) => {
    return {
        type: ADD_TO_CART,
        item: itemId
    }
}

export const RemoveFromCart = (itemId) => {
    return {
        type: REMOVE_FROM_CART,
        item: itemId
    }
}

export const GetTotalCartAmount = () => {
    return {
        type: GET_TOTAL_CART_AMOUNT
    }
}

export const GetTotalCartItem = () => {
    return {
        type: GET_TOTAL_CART_ITEM
    }
}