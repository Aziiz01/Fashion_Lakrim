import React,{useContext} from "react";
import { Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../features/cartSlice";
import './cartItem.css';
import { ThemeContext } from "./ThemeProvider";

function CartItem(props) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart({id: props.itemId}));
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity({id: props.itemId}));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity({id: props.itemId}));
  };

  const {theme}=useContext(ThemeContext);

  return (
    <div className="cart-item" id={props.data.id} style={{backgroundColor:theme.accent, marginBottom:'5px'}}>
      <div className="cart-img">
       <Image fluid={true} src={props.data.img}></Image>
      </div>
      <div className="cart-info">
        <div className="first-row">
          <h3>
            {props.data.title} - {props.data.price} TND{' '}
          </h3>
          <button onClick={handleRemove}>remove</button>
        </div>
        <div className="second-row">
          <h5>{props.data.text}</h5>
          <div className="quantity-section " >
            <button className="dec-btn" onClick={handleDecrease}>-</button>
            <span className="qt-nbr">1</span>
            <button className="inc-btn" onClick={handleIncrease}>+</button>
           </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
