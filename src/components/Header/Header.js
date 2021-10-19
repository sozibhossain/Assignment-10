import React from 'react';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
            <Navbar.Brand as={Link} to="/home">MEDICINE SHOP</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                <Nav>
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/servises">Servises</Nav.Link>
                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                {user?.email ?
                    <Button onClick={logOut} variant="secondary">Logout</Button>:
                    <Nav.Link as={Link} to="/Login">Register</Nav.Link>
                    }
                </Nav>
                <Navbar.Text>
                    Signed in as: <a href="#login">{user?.dispalyName}</a>
                </Navbar.Text>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;