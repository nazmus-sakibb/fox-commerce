import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { id: 1, name: 'Watch', description: 'running watch', price: '$99' },
    { id: 2, name: 'Laptop', description: 'Macbook', price: '$59' }
]

const Products = () => {
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Products;