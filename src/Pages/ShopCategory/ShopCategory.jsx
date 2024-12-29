import { useContext } from "react"
import './ShopCategory.css'
import PropTypes from "prop-types"
import arrow from '../../components/assets/dropdown_icon.png'
import { contextStore } from "../../Context/StoreContext"
import Item from '../../components/Item/Item'

const ShopCategory = (props) => {

  const { all_products } = useContext(contextStore);

  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="shop-category-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 product
        </p>
        <div className="sort-btn">
          <span>Sort by</span>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="shop-category-items">
        {
          all_products.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              )
            }
          })
        }
      </div>
    </div>
  )
}

ShopCategory.propTypes = {
  banner: PropTypes.any,
  category: PropTypes.string
}

export default ShopCategory