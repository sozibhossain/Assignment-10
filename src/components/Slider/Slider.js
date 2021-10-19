import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import slider222 from '../../images/slider/slider-222.jpg';
import slider111 from '../../images/slider/slider-111.jpg';
import slider333 from '../../images/slider/slider-333.jpg';
import banner1 from '../../images/banner/banner-top-new1.jpg';
import banner2 from '../../images/banner/banner-top-new2.jpg';
import Button from 'react-bootstrap/Button';
import './Slider.css';

const Slider = () => {
    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slider222}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <Button variant="success">SHOP NOW</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slider111}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <Button variant="success">SHOP NOW</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={slider333}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <Button variant="success">SHOP NOW</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="py-5">
                <Container className=" banner-top">
                    <div className= "col-lg-6">
                        <img src={banner1} alt=""/>
                    </div>
                    <div className= "col-lg-6 ">
                        <img src={banner2} alt=""/>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Slider;
