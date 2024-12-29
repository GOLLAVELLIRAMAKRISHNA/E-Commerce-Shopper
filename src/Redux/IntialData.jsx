import all_product from "../components/assets/all_product";

const getCartDefaultValues = () => {
    let cart = {};
    for (let index = 1; index <= all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

export var Initial_Data = {
    allProducts: all_product,
    totalAmount: 0,
    totalCartItems: 0,
    cartItems: getCartDefaultValues()
}