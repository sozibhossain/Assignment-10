import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MedicineServise = (props) => {
    console.log(props.servise);
    const {details, picture, id} = props.servise;
    return (
        <div className="product">
            <Card style={{ width: '17rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title><span>{details}</span></Card.Title>
                    <NavLink to={`/productdetails/${id}`}>
                     <Button variant="primary">BUY NOW</Button>
                    </NavLink>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MedicineServise;