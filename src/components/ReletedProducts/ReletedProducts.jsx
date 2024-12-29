import './ReletedProducts.css'
import all_products from '../assets/all_product'
import Item from '../Item/Item'
import PropTypes from 'prop-types'

const ReletedProducts = ({ category, id }) => {
    return (
        <div className='reletedproducts'>
            <h1>Releted Products</h1>
            <hr />
            <div className="reletedItems">
                {
                    all_products.map((item, i) => {
                        if (item.id === id)
                            return null
                        else if (item.category === category) {
                            return (
                                <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                            )
                        }
                        else
                            return null
                    })
                }
            </div>
        </div>
    )
}

ReletedProducts.propTypes = {
    category: PropTypes.string,
    id: PropTypes.number
}

export default ReletedProducts