import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import './Slider.css';

const Slider = () => {
    const images = [
        {src: "../images/pm.jpg", alt: "Image 1", link: "/link1"},
        {src: "../images/OIP.jpg", alt: "Image 2", link: "/link2"},
        {src: "../images/R.jpg", alt: "Image 3", link: "/link3"}
        // add more images as necessary
    ];


    return (
        <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image.src} alt={image.alt} />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '70%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        padding:'0'
                      }}
                    >
                        <Typography variant="h4">
                            <Link to={image.link} className='link-btn'>
                                SHOP NOW
                            </Link>
                        </Typography>
                    </Box>
                </div>
            ))}
        </Carousel>
    );
};

export default Slider;
