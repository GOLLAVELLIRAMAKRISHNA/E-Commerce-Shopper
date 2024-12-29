import PropTypes from 'prop-types';
import './BreadCrums.css'
import arrow from '../../components/assets/breadcrum_arrow.png'
import { Link } from 'react-router-dom';

const BreadCrums = (props) => {

    const { product } = props;

    return (
        <div className='breadcrums'>
            <p>
                <span><Link to='/'>Home</Link><img src={arrow} alt="" /></span>
                <span>Shop<img src={arrow} alt="" /></span>
                <span><Link to={`/${product.category}`}>{product.category}</Link><img src={arrow} alt='' /></span>
                <span>{product.name}</span>
            </p>
        </div>
    )
}

BreadCrums.propTypes = {
    product: PropTypes.object
}

export default BreadCrums