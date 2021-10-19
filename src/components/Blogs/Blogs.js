import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Blogs = (props) => {
    const {details, picture, id} = props.blog;
    return (
        <div className="product py-3">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title><span>{details}</span></Card.Title>
                    <NavLink to={`/productdetails/${id}`}>
                     <Button variant="primary">Add to Cart</Button>
                    </NavLink>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blogs;