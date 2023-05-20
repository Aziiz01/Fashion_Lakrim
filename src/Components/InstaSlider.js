import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import './InstaSlider.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = ["https://th.bing.com/th/id/OIP.KPGnQCDZWdND5WuoxuEz7AHaJz?pid=ImgDet&rs=1", "/images/th2.jpg", "/images/R.jpg"];

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade:true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <Slider {...settings}>
            {images.map((img, index) => 
                <div key={index} className='slider-wrapper'>
                    <img src={img} alt='img' className='imag' />
                    <Link to="/products" className='link' style={{ 
                        position: 'absolute',
                        top: '80%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        border:'3px solid ',
                        textDecoration:'none',
                        padding:'5px',
                    }}>
                        CHECk
                    </Link>
                </div>
            )}
        </Slider>
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, right: "2%", zIndex: "1" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, left: "2%", zIndex: "1" }}
            onClick={onClick}
        />
    );
}

export default ImageSlider;
