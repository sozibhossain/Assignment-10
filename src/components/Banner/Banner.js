import React from 'react';
import { Card, Container } from 'react-bootstrap';
import banner from '../../images/banner/banner-mid-new.jpg';
import client1 from '../../images/client say/7-single-default.jpg';
import client2 from '../../images/client say/8-single-default.jpg';
import client3 from '../../images/client say/9-single-default.jpg';
import client4 from '../../images/client say/20-single-default.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div>
                <Container className="banner-aera">
                    <img src={banner} alt="" />
                </Container>
            </div>
            <div className="py-5">
                <Container>
                    <h3>WHAT CLIENT SAY</h3>
                </Container>
                <Container className="client-say">
                    <Card style={{ width: '17rem' }}>
                        <Card.Img variant="top" src={client4} />
                        <Card.Body>
                            <Card.Title>PROIN GRAVIDA NIBH VELIT AUCTOR BIBENDUM</Card.Title>
                            <Card.Text>
                            Quisque at orci gravida, dictum turpis vitae, sagittis dui. Integer cursus auctor ex id accumsan. Nam mollis porta facilisis. Fusce porttitor augue lectus ...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '17rem' }}>
                        <Card.Img variant="top" src={client1} />
                        <Card.Body>
                            <Card.Title>PROIN GRAVIDA NIBH VELIT AUCTOR BIBENDUM</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '17rem' }}>
                        <Card.Img variant="top" src={client2} />
                        <Card.Body>
                            <Card.Title>PROIN GRAVIDA NIBH VELIT AUCTOR BIBENDUM</Card.Title>
                            <Card.Text>
                            Quisque at orci gravida, dictum turpis vitae, sagittis dui. Integer cursus auctor ex id accumsan. Nam mollis porta facilisis. Fusce porttitor augue lectus ...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '17rem' }}>
                        <Card.Img variant="top" src={client3} />
                        <Card.Body>
                            <Card.Title>PROIN GRAVIDA NIBH VELIT AUCTOR BIBENDUM</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </div>
    );
};

export default Banner;