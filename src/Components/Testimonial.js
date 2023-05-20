import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const Testimonial = ({ testimonial }) => {
    return (
        <Card 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                padding: '1em', 
                borderRadius: '1em',
                backgroundColor: '#f8f8f8',
                boxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)'
            }}
        >
            <Avatar 
                alt={testimonial.name} 
                src={testimonial.image} 
                sx={{ 
                    width: '60px', 
                    height: '60px', 
                    marginBottom: '0.5em'
                }} 
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                    {testimonial.text}
                </Typography>
                <Typography variant="h6" component="div" sx={{ marginTop: '0.5em', textAlign: 'center' }}>
                    {testimonial.name}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center' }}>
                    {testimonial.position}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Testimonial;
