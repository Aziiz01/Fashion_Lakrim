import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

function FeaturedProduct({ product }) {
  return (
    <Card>
      <CardMedia component="img" image={product.image} alt={product.name} />
      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
}

export default FeaturedProduct;
