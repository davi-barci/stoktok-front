import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/HomePage/Home";
import UserContext from "./contexts/UserContext";
import ProductsContext from "./contexts/Products.Context";
import { useState, useEffect } from "react";
import axios from "axios";

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
        alert("Ocorreu um erro durante a recuperação dos produtos. Por favor, tente novamente");
        window.location.reload();
      });

      console.log(products);
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
      <ProductsContext.Provider value={{products, setProducts}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </ProductsContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
