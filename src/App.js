import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from './pages/Add';
import Update from './pages/Update';
import Users from './pages/Users';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Products from './pages/Products';
import AddProduct from './pages/Addproduct';
import EditProduct from './pages/EditProduct';


function App() {
  const { collapseSidebar } = useProSidebar();
  return (
    
    <div className="App" style={{ display: 'flex', height: '100%' }}>
<BrowserRouter>
<Sidebar >
  <Menu> 
  <MenuItem component={<Link to="/" />}> Utilisateurs</MenuItem>
    <MenuItem component={<Link to="/Products" />}> Produits</MenuItem>
    <MenuItem component={<Link to="/Orders" />}> Commandes</MenuItem>
    <MenuItem component={<Link to="/Reclamation" />}>Réclamation</MenuItem>
  </Menu>
</Sidebar>
<main>
  <button onClick={() => collapseSidebar()}>
    <FontAwesomeIcon icon={faBars} />
  </button>
</main>
<Routes>
<Route path="/" element={<Users/>}/>
<Route path="/add" element={<Add/>}/>
<Route path="/add_p" element={<AddProduct/>}/>
<Route path="/update/:id" element={<Update/>}/>
<Route path="/Products" element={<Products/>}/>
<Route path="edit/:id" element={<EditProduct/>}/>


</Routes>
</BrowserRouter>

    </div>
  )
}

export default App;
