import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';

const products = [
    { id: 1, name: 'Watch', description: 'running watch', price: '$99' },
    { id: 2, name: 'Laptop', description: 'Macbook', price: '$59' }
]

const Products = () => {
    return (
        <div>
            <Grid conatiner justify="center" spacing={4}>
                {products.map((product) => {
                    return (
                        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                            <Product product={product}/>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
};

export default Products;