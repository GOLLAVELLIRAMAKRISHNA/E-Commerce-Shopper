import { Fragment, useContext } from 'react'
import './CartItems.css'
import remove_icon from '../assets/cart_cross_icon.png'
import { contextStore } from '../../Context/StoreContext'

const CartItems = () => {

    const { getTotalCartAmount, all_products, cartItems, removeFromCart } = useContext(contextStore)

    return (
        <div className='cartitem'>
            <div className="cartItem-format">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quality</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            <div>
                {
                    all_products.map((e, i) => {
                        if (cartItems[e.id] > 0) {
                            return (
                                <Fragment key={i}>
                                    <div className="cartItem-data-format">
                                        <img src={e.image} alt="" />
                                        <p>{e.name}</p>
                                        <p>${e.new_price}</p>
                                        <button>{cartItems[e.id]}</button>
                                        <p>${e.new_price * cartItems[e.id]}</p>
                                        <img src={remove_icon} className='remove' alt="" onClick={() => removeFromCart(e.id)} />
                                    </div>
                                </Fragment>
                            )
                        }
                    })
                }
            </div>
            <div className="cartitem-down">
                <div className="cartitem-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems-totals">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-totals">
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-totals">
                            <p>Total</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitem-promo">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitem-promobox">
                        <input type="text" placeholder='Promo Code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default CartItems