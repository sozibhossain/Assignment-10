import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])



    return (
        <div>
            
                <Container>
                    <h3>Medicine product</h3>
                </Container>
            
            <div>
                <Container className="product-area">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                    }
                </Container>
            </div>
        </div>
    );
};

export default Shop;