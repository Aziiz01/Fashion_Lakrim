import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeProvider';

function Categorie({ name, image ,width, height}){
    const {theme}=useContext(ThemeContext);
  
    return (
    <Link to={`/products/${name.toLowerCase()}`} style={{ 
        position: 'relative', 
        display: 'block', 
        border: '1px solid black', 
        borderRadius: '10px', 
        overflow: 'hidden', 
        width: `${width}`, 
        height: `${height}`,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundColor:theme.primary,
    }}>
      <figcaption style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          backgroundColor: 'rgba(0, 0, 0, 0.3)', 
          padding: '1rem' 
      }}>
        <h2 style={{ 
            marginBottom: '1rem', 
            padding: '0.5rem', 
            textTransform: 'uppercase', 
            fontSize: '1.5rem', 
            color: theme.accent, 
            fontWeight: 'bold', 
            textAlign: 'center' 
        }}>
          {name}
        </h2>
        <button style={{ 
            border: '1px solid',
            borderRadius:'8px', 
            padding: '0.5rem', 
            backgroundColor: theme.additional1  , 
            color: theme.accent, 
            fontSize: '1rem', 
            cursor: 'pointer',
            fontWeight:'500' 
        }}>
          Shop Now
        </button>
      </figcaption>
    </Link>
  );
};

export default Categorie;
