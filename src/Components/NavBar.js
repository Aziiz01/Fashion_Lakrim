import React, { useState } from 'react';
import NavbarModal from './navbarModal'; 
import {OverlayTrigger, Tooltip } from 'react-bootstrap' ;
import {GiHamburgerMenu,GiLipstick} from 'react-icons/gi';
import{MdOutlineFavorite,MdAccountBox} from 'react-icons/md';
import{BsSearch} from 'react-icons/bs';
import './NavBar.css';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';


function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false); // new state variable for search bar

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };


  const renderTooltip = (text) => (
    <Tooltip id="button-tooltip">{text}</Tooltip>
  );



return(
<>
<nav className="navbar ${showSearch ? 'navbar-search-open' : ''} navbar-expand-lg navbar-dark ">
  <Link className="navbar-brand" to="/">
    Cosmetics
  </Link>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="navbar-brand" to="/product">
          Produit
        </Link>
      </li>
      <li className="nav-item dropdown">
        <Link 
          className="nav-link dropdown-toggle"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          to="/products/category1"
        >
          Category 1
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <span className="text-uppercase text-white">Category 1</span>
                <ul className="nav flex-column">
                  <li className="nav-item">
                   <Link className="navbar-brand" to="/products/category1/produit1">
                      Produit 1
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="navbar-brand" to="/products/category1/produit2">
                      Produit 2
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="navbar-brand" to="/products/category1/produit3">
                      Produit 3
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="navbar-brand" to="/products/category1/produit4">
                      Produit 4
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link className="navbar-brand" to="/products/category1/produit5">
                      Produit 5
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="navbar-brand" to="/products/category1/produit6">
                      Produit 6
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>




      <li className="nav-item dropdown">
        <Link 
          className="nav-link dropdown-toggle"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          to="/products/category1"
        >
          Category 2
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <span className="text-uppercase text-white">Category 2</span>
                <ul className="nav flex-column">
                  <li className="nav-item">
                   <Link className="navbar-brand" to="/products/category2/produit1">
                      Produit 1
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="navbar-brand" to="/products/category2/produit2">
                      Produit 2
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="navbar-brand" to="/products/category2/produit3">
                      Produit 3
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="navbar-brand" to="/products/category2/produit4">
                      Produit 4
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link className="navbar-brand" to="/products/category2/produit5">
                      Produit 5
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="navbar-brand" to="/products/category2/produit6">
                      Produit 6
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>



      <li className="nav-item dropdown">
        <Link 
          className="nav-link dropdown-toggle"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          to="/products/category1"
        >
          Category 3
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <span className="text-uppercase text-white">Category 1</span>
                <ul className="nav flex-column">
                  <li className="nav-item">
                   <Link className="navbar-brand" to="/products/category3/produit1">
                      Produit 1
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="navbar-brand" to="/products/category3/produit2">
                      Produit 2
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="navbar-brand" to="/products/category3/produit3">
                      Produit 3
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="navbar-brand" to="/products/category3/produit4">
                      Produit 4
                    </Link>
                  </li>
                  <li className="nav-item">
                  <Link className="navbar-brand" to="/products/category3/produit5">
                      Produit 5
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="navbar-brand" to="/products/category2/produit6">
                      Produit 6
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul> 
  </div>
  
  
  <div>
   <div className="navbar-buttons">
       <OverlayTrigger
         placement="bottom"
         overlay={renderTooltip('Wishlist')}
       >
         <button className='btn'>
           <MdOutlineFavorite className='icon' color='white' size={'25px'}/>
         </button>
       </OverlayTrigger>
       <OverlayTrigger
         placement="bottom"
         overlay={renderTooltip('Mon compte')}
       >
         <button className='btn'>
           <MdAccountBox className='icon' color='white' size={'25px'} />
         </button>
       </OverlayTrigger>
       <OverlayTrigger
         placement="bottom"
         overlay={renderTooltip('Recherche')}
       >
         <button className='btn' onClick={toggleSearch}>
           <BsSearch className='icon' color='white' size={'25px'}/>
         </button>
       </OverlayTrigger>
       <OverlayTrigger
         placement="bottom"
         overlay={renderTooltip('Cart')}
       >
         <button className='btn'>
           <GiLipstick className='icon' color='white' size={'25px'} />
         </button>
       </OverlayTrigger>
      </div>
  </div>
      <div className="navbar-hamburger" >
        <button className='ham-btn' onClick={toggleModal}>
          <GiHamburgerMenu size={'35px'}/>
        </button>
      </div>
     {showSearch && <SearchBar />}
     <NavbarModal show={showModal} hide={toggleModal} />
</nav>
</>
);
}
export default Navbar;