import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBar";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import store from "./store";
import { Provider } from "react-redux";
import { ThemeProvider } from "./Components/ThemeProvider";

function App() {
    return (
      <ThemeProvider>
        <Provider store={store}>
          <BrowserRouter>
              <nav>
                <Navbar/>
              </nav>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/:category" element={<Products />} />
                  <Route path="/products/:category/:product" element={<ProductDetails />} />
              </Routes>
              <div>
                <Footer/>
              </div>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    );
}

export default App;
