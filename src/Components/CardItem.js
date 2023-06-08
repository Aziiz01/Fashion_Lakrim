import React, { useState } from 'react';
import styled from 'styled-components';
import { FaStar } from "react-icons/fa";
import OffcanvasComponent from "./addToCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";


const Card = styled.div`
  display:grid;
  grid-template-rows:${props => props.hovered ? '60% 40%' : '70% 30%'};
  transition: grid-template-rows 0.3s ease;
  width: 350px;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 20px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

`;

const ImageContainer = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

const OtherContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left:4px;
  background-color: #FFF0F3;
  box-sizing: border-box;
`;


const Title = styled.h1`
display: flex;
flex-direction: row;
justify-content: flex-start;
font-family: Tt-Chocolate;
  font-weight: 400;
  font-size: 20px;
  color: black;
  margin-bottom: 0px; 

`;

const Description = styled.p`
display: flex;
flex-direction: row;
justify-content: flex-start;
font-family: Tt-Chocolate;
  font-weight: 400;
  font-size: 16px;
  color: #666;
`;



const Reviews = styled.p`
display: flex;
flex-direction: row;
justify-content: flex-start;
  font-size: 14px;
  color: #999;
  margin-bottom: 0px; 

`;

const Stars= styled.div`
  font-size: 14px;
  color: black;
  margin-right:5px;
`;
const Rate= styled.div`
  font-size: 14px;
  color: black;
  margin-top:2px;
`;

const Button = styled.button`
  display: ${props => props.show ? 'flex' : 'none'};
  width:100%;
  justify-content: center; 
  color: black;
  padding: 10px 20px;
  margin-top: 5px;
  border: 2px solid rbg(255,255,255);
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #FFB3C1;
  }
`;

const ProductCard = (props) => {
  const [hovered, setHovered] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [bgImage, setBgImage] = useState(props.img);  

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    setShowOffcanvas(true);
    dispatch(addToCart(props))  
    }
  

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setBgImage(props.img);
    setHovered(false);
  };

  let stars = [];
  for (let i = 0; i < props.rating; i++) {
    stars.push(<FaStar key={i} />);
  };
  return (
    <Card       
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        hovered={hovered}
    >
      <ImageContainer bgImage={bgImage}>
      </ImageContainer>
      <OtherContainer hovered={hovered}>
        <Reviews>
            <Stars>
              {stars} 
            </Stars>
            <Rate>
               ({props.rating})
            </Rate>
        </Reviews>
        <Title>{props.title}</Title>
        <Description>{props.text}</Description>
        <Button show={hovered} onClick={handleAddToCart}>Add to Cart - {props.price}</Button>
        <OffcanvasComponent show={showOffcanvas} onHide={()=>setShowOffcanvas(false)} />
      </OtherContainer>
    </Card>
  );
  };
export default ProductCard;




