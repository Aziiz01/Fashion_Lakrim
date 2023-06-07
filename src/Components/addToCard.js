import React, {useContext} from "react";
import { Offcanvas } from "react-bootstrap";
import "./addToCart.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import {ThemeContext} from "./ThemeProvider";


function OffcanvasComponent(props) {
  const cartItems = useSelector((state)=> state.cart)
  const {theme}=useContext(ThemeContext);

  return (
    <Offcanvas show={props.show} onHide={props.onHide} style={{ width: "700px" ,backgroundColor:theme.backgroundColor}}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <h2 style={{color:theme.primary,fontFamily: 'Tt-Chocolate' }}>CART</h2>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} itemId={item.id} data={item} />
          ))}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OffcanvasComponent;
