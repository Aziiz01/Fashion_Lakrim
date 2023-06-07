import React, { useState, useEffect ,useContext} from 'react';
import ProductHighlight from '../Components/ProductHighlight';
import { ThemeContext } from '../Components/ThemeProvider';
import Categorie from '../Components/HomeCard';
import productData from '../Components/content';
import CardItem from '../Components/CardItem';
import Carousel from '../Components/HomeCarousel';



let prodCart1;
let prodCart2;
prodCart1 = productData.filter(product => product.title.toLowerCase() === 'lipstick');
prodCart2= productData.filter(product => product.title.toLowerCase() === 'eyelash' );


const img1 = "/images/fe.jpg";
const img2 = "/images/OIP.jpg";
const img3 = "/images/R.jpg";

const products = [
    {
        image: img1,
        name: "Product 1",
        description: "Description 1",
        url: "#",
    },
    {
        image: img2,
        name: "Product 2",
        description: "Description 2",
        url: "#",
    },
    {
        image: img3,
        name: "Product 3",
        description: "Description 3",
        url: "#",
    },
];

function Home() {
    const [currentProduct, setCurrentProduct] = useState(products[0]);

    const {theme} = useContext(ThemeContext)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProduct(currentProduct => {
                const currentIndex = products.findIndex(product => product === currentProduct);
                const nextIndex = (currentIndex + 1) % products.length;
                return products[nextIndex];
            });
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Clean up on component unmount
    }, []);

    return (
        <div className='page-container' style={{backgroundColor:theme.backgroundColor}}>
            <Carousel/> 
            <div className='home-container'>   
                <div style={{display:'flex' ,height: '50px',justifyContent:'center',alignItems:'center',backgroundColor:theme.primary, marginTop:'20px'}}>
                    <h3 style={{color:theme.backgroundColor}}> DISCOVER OUR EPIC AND ELEGENT LIPSTICK PRODUCTS</h3>
                </div>
              <div style={{display:'flex' ,height: '500px',paddingTop:'30px',justifyContent:'space-around'}}>
                  <Categorie
                    name="LIPSTICK"
                    image={img2}
                    width='450px'
                    height='450px'
                  />
                  <Categorie
                    name="LIPSTICK"
                    width='450px'
                    height='450px'
                  />
                  <Categorie
                    name="LIPSTICK"
                    image={img2}
                    width='450px'
                    height='450px'
                  />
              </div>
              <div style={{display:'flex' ,height: '500px',justifyContent:'space-around'}}>
              {prodCart1.map(product => (
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
              <div style={{display:'flex' ,height: '80px',justifyContent:'center',alignItems:'center' ,backgroundColor:theme.primary, marginBottom:'30px'}}>
                <h3 style={{color:theme.backgroundColor}}> DISCOVER OUR EPIC AND ELEGENT LIPSTICK PRODUCTS</h3>
              </div>
              <div>
              <Categorie
                    name="EYELASH"
                    image={img2}
                    width='100%'
                    height='500px'
                  />
              </div>   
              <div style={{display:'flex' ,height: '500px',justifyContent:'space-around'}}>
              {prodCart2.map(product => (
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
              <div className='slide-container' style={{backgroundColor:theme.primary}}>
                <ProductHighlight product={currentProduct} />
              </div>
            </div>
        </div>
    );
}

export default Home;
