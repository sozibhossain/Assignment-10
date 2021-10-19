import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    let  { id } = useParams();

    const {products, setProducts} = useState([]);

    // useEffect( () => {
    //     fetch('/products.json')
    //     .then(res => res.json())
    //     .then(data => setProducts(data));
    // }, [])

    // useEffect( () => {
    //     const foundProducts = products.find (products => products.id === id)
    //     console.log(foundProducts);
    // }, [products])



    return (
        <div>
            <h3>{id}</h3>
            <h3>Thia is product Details</h3>
        </div>
    );
};

export default ProductDetails;