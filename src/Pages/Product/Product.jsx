import { useContext } from "react"
import { contextStore } from "../../Context/StoreContext"
import { useParams } from "react-router-dom";
import BreadCrums from "../../components/BreadCrums/BreadCrums";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import ReletedProducts from "../../components/ReletedProducts/ReletedProducts";

const Product = () => {

  const { all_products } = useContext(contextStore);
  const { productId } = useParams()
  const product = all_products.find((e) => e.id === Number(productId))

  return (
    <div className="product">
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
      <ProductDescription />
      <ReletedProducts category={product.category} id={Number(product.id)} />
    </div>
  )
}

export default Product