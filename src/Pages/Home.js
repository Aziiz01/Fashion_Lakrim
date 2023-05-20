import React ,{ useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ImageSlider from '../Components/InstaSlider';
import ProductCategoryCard from '../Components/ProductCategoryCard';

const img1 = "/images/fe.jpg";
const img2 = "/images/OIP.jpg";
const img3 = "/images/R.jpg";

const images = [img1, img2, img3];


function Home() {
    const [currentImage, setCurrentImage] = useState(images[0]);
    function switchToPrevImage() {
        let currentIndex = images.indexOf(currentImage);
        if (currentIndex > 0) {
            setCurrentImage(images[currentIndex - 1]);
        }
        else {
            setCurrentImage(images[2])
        }
    };
    
    function switchToNextImage() {
        let currentIndex = images.indexOf(currentImage);
        if (currentIndex < images.length - 1) {
            setCurrentImage(images[currentIndex + 1]);
        }
        else{
            setCurrentImage(images[0])
        }
    };

    return (
        <div className='page-container'>
            <div className='slide-container' style={{backgroundImage: `url(${currentImage})`}}>
                <div className="left-hotspot" onMouseEnter={switchToPrevImage}></div>
                    <div className="slider-item-content">
                      <div className="slider-item">
                        <h1 className='st-h1'>Discover your beauty with our exquisite collection</h1>
                        <h1 className='nd-h1'>Unlock your confidence with our premium cosmetics</h1>
                        <p className='p-elmt'>Découvrez des produits cosmétiques d'une qualité exceptionnelle et à des prix imbattables.
                          Notre gamme allie parfaitement luxe et accessibilité, pour vous permettre de vous faire plaisir sans compromis.
                          Embellissez votre routine beauté avec nos cosmétiques haut de gamme qui redéfinissent l'excellence à des prix abordables.
                        </p>
                        <Link to="products" className="shop-now-button">SHOP NOW</Link>
                      </div>
                    </div>
                <div className="right-hotspot" onMouseEnter={switchToNextImage}></div>
            </div>
            <div className='home-container'>
              <div className='home-container-2'>
                <div className='first-item' >
                  <ImageSlider />
                </div>
                <div className='first-item' >
                  <ImageSlider />
                </div>
                <div className='first-item' >
                  <ImageSlider />
                </div>
                <div className='second-item'>
                    <ProductCategoryCard category={"lipstick"}/>
                </div>
                <div className='second-item'>
                    <ProductCategoryCard/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Home;    
