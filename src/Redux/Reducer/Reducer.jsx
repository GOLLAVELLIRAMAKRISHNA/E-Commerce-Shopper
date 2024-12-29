import { ADD_TO_CART, REMOVE_FROM_CART, GET_TOTAL_CART_AMOUNT, GET_TOTAL_CART_ITEM } from "../ActionTypes/ActionTypes";
import { Initial_Data } from '../IntialData'

const Reducer = (state = Initial_Data, action) => {
    const { item, type } = action;
    switch (type) {
        case ADD_TO_CART:
            return (
                { [item]: state.cartItems[item]++ },
                console.log(state.cartItems)
            )
        case REMOVE_FROM_CART:
            return (
                console.log({ [item]: state.cartItems[item]-- }),
                { [item]: state.cartItems[item] - 1 },
                console.log(state.cartItems)
            )
        case GET_TOTAL_CART_AMOUNT:
            return () => {
                for (const item in state.cartItems) {
                    if (state.cartItems[item] > 0) {
                        let iteminfo = Initial_Data.allProducts.find((product) => product.id === Number(item));
                        state.totalAmount += iteminfo.new_price * state.cartItems[item]
                    }
                }
            }
        case GET_TOTAL_CART_ITEM:
            return () => {
                for (const item in state.cartItems) {
                    if (state.cartItems[item] > 0) {
                        state.totalCartItems += state.cartItems[item]
                    }
                }
            }
        default: return state
    }
}

export default Reducer;