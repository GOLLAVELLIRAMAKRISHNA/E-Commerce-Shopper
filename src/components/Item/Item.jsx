import { Link } from 'react-router-dom'
import './Item.css'
import PropTypes from 'prop-types'

const Item = (props) => {

    return (
        <div className='item'>
            <Link to={`/product/${props.id}`}>
                <img src={props.image} alt="" onClick={() => window.scrollTo(0, 0)} />
            </Link>
            <div className="item-body">
                <p>{props.name}</p>
                <div className="price">
                    <p>${props.new_price}</p>
                    <del>${props.old_price}</del>
                </div>
            </div>
        </div>
    )

}

Item.propTypes = {
    id: PropTypes.number,
    image: PropTypes.any,
    name: PropTypes.string,
    new_price: PropTypes.number,
    old_price: PropTypes.number
}

export default Item