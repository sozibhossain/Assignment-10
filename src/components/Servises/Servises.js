import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import MedicineServise from '../MedicineServise/MedicineServise';
import './Servises.css';

const Servise = () => {
    const [servises, setServises] = useState([]);

    useEffect( () => {
        fetch('./servises.json')
        .then(res => res.json())
        .then(data => setServises(data));
    }, [])

    return (
        <div>
            <div className="titel-area">
                <h3>----------- SERVISES -----------</h3>
            </div>
            <div>
                <Container className="product-area">
                    {
                        servises.map(servise => <MedicineServise
                            key={servise.id}
                            servise={servise}
                        ></MedicineServise>)
                    }
                </Container>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Servise;