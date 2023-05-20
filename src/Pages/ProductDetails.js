import React from 'react'
import { useParams } from 'react-router-dom';
import productData from '../Components/content';


export default function ProductDetails() {
    const { category , product } = useParams();
    let products;
    if (product) {
        product = productData.filter(product => product.id === product);
      } else {
        products = productData;
      }
    
      return (
        <div>
          {product.map(product => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.text}</p>
              <img src={product.img} alt={product.title} />
              {/* ... other product data ... */}
            </div>
          ))}
        </div>
      );
    }

