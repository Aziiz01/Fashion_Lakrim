import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBar";
import Products from "./Pages/Product";
import ProductDetails from "./Pages/ProductDetails";
import Login from "./Pages/Login/Login";

function App() {
    return (
        <BrowserRouter>
            <nav>
              <Navbar/>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:category" element={<Products />} />
                <Route path="/products/:category/:product" element={<ProductDetails />} />
            </Routes>
            <div>
              <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
