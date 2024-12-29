import PropTypes from 'prop-types'
import './ProductDisplay.css'
import star from '../assets/star_icon.png'
import star_null from '../assets/star_dull_icon.png'
import { useContext } from 'react'
import { contextStore } from '../../Context/StoreContext'

const ProductDisplay = (props) => {

    const { product } = props
    const {addToCart}=useContext(contextStore)

    return (
        <div className='product-display'>
            <div className="productdisplay-left">
                <div className="product-left-imgs">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-main-img">
                    <img src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="product-rating">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star_null} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-price">
                    <p>${product.new_price}</p>
                    <del>${product.old_price}</del>
                </div>
                <div className="product-description">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quos animi dicta non nostrum, explicabo saepe fugit sequi tempora excepturi natus itaque laborum illum modi vitae quia dolorum vero quisquam?</p>
                </div>
                <div className="product-size-container">
                    <h1>Select  Size</h1>
                    <div className="product-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>addToCart(product.id)}>ADD TO CART</button>
                <p className='product-category'><span>Category:</span> {product.category}, T-Shirts, Crop Top</p>
                <p className='product-category'><span>Tags:</span> Modern, Latest</p>
            </div>
        </div>
    )
}

ProductDisplay.propTypes = {
    product: PropTypes.object
}

export default ProductDisplay