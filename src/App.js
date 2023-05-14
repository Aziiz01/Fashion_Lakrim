import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom';
import { db } from './firebase.config';
import Add from './pages/Users/Add';
import Update from './pages/Users/Update';
import Users from './pages/Users/Users';
import Products from './pages/Products/Products';
import AddProduct from './pages/Products/Addproduct';
import EditProduct from './pages/Products/EditProduct';
import Sidebar from './Components/Sidebar';
import Categories from './pages/Categories/Categories';
import Reviews from './pages/Reviews/Reviews';
import Login from './pages/Login/Login';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import { userInputs , productInputs } from './Data/formInputs';
function App() {
  const {currentUser} = useContext(AuthContext) ;

  const RequireAuth = ({children}) => {
    return  currentUser ? children : <Navigate to="/Login" />
  }
  console.log(currentUser)
  return (
    <div className="App" style={{ display: 'flex', height: '100%' }}>
      <BrowserRouter>
        <Sidebar />

        <Routes>
          
        <Route exact path="/Login" element={<Login />} />
          <Route exact path="/" element={<RequireAuth><Users/></RequireAuth>} />
          <Route exact path="/add" element={<RequireAuth><Add inputs={userInputs}/></RequireAuth>} />
          <Route exact path="/add_p" element={<RequireAuth><AddProduct inputs={productInputs}/></RequireAuth>} />
          <Route exact path="/update/:id" element={<RequireAuth><Update /></RequireAuth>} />
          <Route exact path="/Products" element={<RequireAuth><Products /></RequireAuth>} />
          <Route exact path="/Products/edit/:id" element={<RequireAuth><EditProduct inputs={productInputs}/></RequireAuth>} />
          <Route exact path="/Reviews" element={<RequireAuth><Reviews /></RequireAuth>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
