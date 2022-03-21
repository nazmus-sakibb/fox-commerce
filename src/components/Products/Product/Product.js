import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.title} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h6" gutterBottom>{product.title}</Typography>
                    <Typography variant="h6">${product.price}</Typography>
                </div>
                <Typography variant="body2" color="textSecondary">{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label="Add to cart" onClick={()=> onAddToCart(product)}>Add To Cart <AddShoppingCart /></IconButton>
            </CardActions>
        </Card>
    );
};

export default Product;