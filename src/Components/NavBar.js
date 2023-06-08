import React, { useContext, useState } from 'react';
import {OverlayTrigger, Tooltip } from 'react-bootstrap'   
import NavbarModal from './navbarModal'; 
import {GiHamburgerMenu,GiLipstick} from 'react-icons/gi';
import{MdAccountBox} from 'react-icons/md';
import{BsSearch} from 'react-icons/bs';
import './NavBar.css';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeProvider';
import ThemeToggleButton from './ThemeToggleButton';

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false); // new state variable for search bar

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleShowOffcanvas = () => {
    setShowOffcanvas(true);
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };


  const renderTooltip = (text) => (
    <Tooltip id="button-tooltip">{text}</Tooltip>
  );

  const {theme} = useContext(ThemeContext);

return(
<>
<nav className="navbar ${showSearch ? 'navbar-search-open' : ''} navbar-expand-lg navbar-dark " style={{backgroundColor: theme.navbarColor, color: theme.secondary}}>
  <Link className="navbar-brand" to="/" style={{color:'white' ,fontFamily: 'Tt-Chocolate',fontWeight: '400',fontSize: '20px'}}>
    ELITE
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
        <Link className="nav-link" to="/products/category" style={{color:'white' ,fontFamily: 'Tt-Chocolate',fontWeight: '400',fontSize: '20px'}}>
          Category
        </Link>
      </li>
      <li className="nav-item dropdown" >
        <Link
          className="nav-link dropdown-toggle"
          to="/products/category"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{color:'white' ,fontFamily: 'Tt-Chocolate',fontWeight: '400',fontSize: '20px'}}
        >
          Category 1
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor: theme.navbarColor}}>
          <div className="container" >
            <div className="row">
              <div className="col-md-4">
                <span className="text-uppercase text-white">Category 1</span>
                <ul className="nav flex-column" >
                  <li className="nav-item">
                    <Link className="nav-link active" to="#" style={{color:'white',fontFamily: 'Tt-Chocolate'}}>
                      Active
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#" style={{color:'white',fontFamily: 'Tt-Chocolate'}}>
                      Link item
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#" style={{color:'white',fontFamily: 'Tt-Chocolate'}}>
                      Link item
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link active" to="#" style={{color:'white',fontFamily: 'Tt-Chocolate'}}>
                      Active
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#" style={{color:'white',fontFamily: 'Tt-Chocolate'}}>
                      Link item
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#" style={{color:'white',fontFamily: 'Tt-Chocolate'}}>
                      Link item
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
          to="/products/category2"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{color:'white' ,fontFamily: 'Tt-Chocolate',fontWeight: '400',fontSize: '20px'}}
        >
          Category 2
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor: theme.navbarColor}}>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <span className="text-uppercase text-white">Category 2</span>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/products/eyelash" style={{color:'white',fontFamily: 'Tt-Chocolate'}}>
                      Active
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products/eyelash" style={{color:'white',fontFamily: 'Tt-Chocolate'}}>
                      Link item
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products/eyelash" style={{color:'white',fontFamily: 'Tt-Chocolate'}}>
                      Link item
                    </Link>
                  </li>
                </ul>
              </div>


              <div className="col-md-4">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/products/eyelash" style={{color:'white',fontFamily: 'Tt-Chocolate'}}>
                      Active
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products/eyelash" style={{color:'white',fontFamily: 'Tt-Chocolate'}}>
                      Link item
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products/eyelash" style={{color:'white',fontFamily: 'Tt-Chocolate'}}>
                      Link item
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
          to="/products/category3"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{color:'white',fontFamily: 'Tt-Chocolate',fontWeight: '400',fontSize: '20px'}}
        >
          Category 3
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor: theme.navbarColor}}>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <span className="text-uppercase text-white">Category 3</span>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/products/eyelash"  style={{color:'white',fontFamily: 'Tt-Chocolate'}}>
                      Active
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products/eyelash"  style={{color:'white',fontFamily: 'Tt-Chocolate'}}>
                      Link item
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products/eyelash"  style={{color:'white',fontFamily: 'Tt-Chocolate'}}>
                      Link item
                    </Link>
                  </li>
                </ul>
              </div>


              <div className="col-md-4">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/products/eyelash"  style={{color:'white',fontFamily: 'Tt-Chocolate'}}>
                      product2
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products/eyelash"  style={{color:'white',fontFamily: 'Tt-Chocolate'}}>
                      product0
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products/eyelash" style={{color:'white',fontFamily: 'Tt-Chocolate'}}>
                      product1
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
         <ThemeToggleButton/>
       </OverlayTrigger>
       <Link to="/login">
      <OverlayTrigger placement="bottom" overlay={renderTooltip('Mon compte')}>
        <button className='btn'>
          <MdAccountBox className='icon' color='white' size={'25px'} />                  
        </button>
      </OverlayTrigger>
    </Link>
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
          <GiHamburgerMenu color='white' size={'35px'}/>
        </button>
      </div>
     {showSearch && <SearchBar />}
     <NavbarModal show={showModal} hide={toggleModal} />
</nav>
</>
);
}
export default Navbar;