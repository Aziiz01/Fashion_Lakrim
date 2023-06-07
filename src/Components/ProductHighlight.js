import React , {useContext} from 'react';
import './ProductHighlight.css';
import { ThemeContext } from './ThemeProvider';

const ProductHighlight = ({ product }) => {
    const {theme} = useContext(ThemeContext);
    return (
        <div className="product-highlight" style={{ backgroundImage: `url(${product.image})` }}>
          <div className="product-info">
            <h4 className="product-name" style={{color:theme.black}}>{product.name}</h4>
            <p className="product-description" style={{color:theme.primary}}>{product.description}</p>
          </div>
        </div>

    );
};

export default ProductHighlight;
