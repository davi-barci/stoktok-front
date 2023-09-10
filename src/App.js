import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/HomePage/Home";
import UserContext from "./contexts/UserContext";
import ProductsContext from "./contexts/Products.Context";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductPage from "./pages/ProductPage/ProductPage";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./pages/NotFoundPage/NotFound";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import Cart from "./pages/CartPage/Cart";
import Checkout from "./pages/CheckoutPage/Checkout";
import Success from "./pages/SuccessPage/Success";

export default function App() {
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(
          "Ocorreu um erro durante a recuperação dos produtos. Por favor, tente novamente"
        );
        window.location.reload();
      });
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
      <NavBar />
      <ProductsContext.Provider value={{products, setProducts}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ProductsContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
