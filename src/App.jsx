import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="footer" element={<Footer />} />
        <Route path="cart" element={<Cart />} />
        <Route path="cart/checkout" element={<CheckOut />} />
      </Routes>
      <Footer />
    </>
  );
}
