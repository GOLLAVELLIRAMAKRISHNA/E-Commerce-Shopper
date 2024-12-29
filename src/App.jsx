import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./Pages/Shop/Shop";
import ShopCategory from "./Pages/ShopCategory/ShopCategory";
import Product from './Pages/Product/Product'
import LoginSignup from './Pages/LoginSignup/LoginSignup'
import Cart from './Pages/Cart/Cart'
import Footer from "./components/Footer/Footer";
import mens_banner from './components/assets/banner_mens.png'
import womens_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory category="men" banner={mens_banner} />} />
        <Route path="/women" element={<ShopCategory category="women" banner={womens_banner} />} />
        <Route path="/kid" element={<ShopCategory category="kid" banner={kids_banner} />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;