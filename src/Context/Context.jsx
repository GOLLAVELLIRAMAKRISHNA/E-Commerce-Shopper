import { contextStore } from './StoreContext';
import all_products from '../components/assets/all_product'
import PropTypes from "prop-types";
import { useState } from 'react';

const getCartDefaultValues = () => {
    let cart = {};
    for (let index = 0; index < all_products.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

const Context = (props) => {

    const [cartItems, setCartItems] = useState(getCartDefaultValues())

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let iteminfo = all_products.find((product) => product.id === Number(item));
                totalAmount += iteminfo.new_price * cartItems[item]
            }
        }
        return totalAmount
    }

    const getTotalCartItem = () => {
        let totalCartItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalCartItems += cartItems[item]
            }
        }
        return totalCartItems
    }

    const contextValue = {
        all_products,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItem
    }

    return (
        <contextStore.Provider value={contextValue}>
            {props.children}
        </contextStore.Provider>
    )
}

Context.propTypes = {
    children: PropTypes.any
}

export default Context