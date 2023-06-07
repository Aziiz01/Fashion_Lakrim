import React from 'react';
import { useParams } from 'react-router-dom';
import productData from '../Components/content';
import CardItem from '../Components/CardItem';
import './products.css';

function Products() {
  const { category } = useParams();
  let products;

  if (category) {
    products = productData.filter(product => product.title === category);
  } else {
    products = productData;
  }

  return (
    <div className='product-page-container'>
      <div className='products-nav-section'>
        heeyyyyy!!!
      </div>
      <div className='products-section'>
        {products.map(product => (
            <CardItem id={product.id}
              title={product.title}
              rating={product.rating}
              text={product.text}
              price={product.price}
              img={product.img}
              img2={product.img2}
            />
        ))}
      </div>
    </div>
  );
}

export default Products;
