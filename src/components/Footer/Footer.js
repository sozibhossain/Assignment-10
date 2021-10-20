import React from 'react';
import { Nav } from 'react-bootstrap';
import img from '../../images/buttom img/payment.png'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="d-flex footer-are">
                <div className="col-lg-6">
                    <h3>MEDICIEN SHOP</h3>
                    <p>Regular dental checkups help in detection of <br/> early warning signs of certain health related <br/> issues. Visit your dentists regularly and stay healthy.</p>
                    <br/>
                    <h4>Trusted by 15,000 People</h4>
                </div>
                <div className="col-lg-6">
                    <h2>Useful Links</h2>
                    <div>
                        <Nav className="d-inline-block align-top">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </div>
                </div>
                {/* <div className="col-lg-4">
                    <h2>Contact Address</h2>
                    <h5>64C East Crest, Melane Plaza,DanyBoyle, TT 33546</h5>
                    <h3>Call Us</h3>
                    <p><span>+0880178-9903862</span></p>
                    <img src={img} alt=""/>
                </div> */}
            </div>
            <div className="footer-buttom">
                <p><small>Medicine Shop Sozib Hossain@porta facilisis.....</small></p>
            </div>
        </div>
    );
};

export default Footer;