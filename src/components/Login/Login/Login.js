import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const {handleEmailChange} = useAuth();
    const {handlePasswordChange} = useAuth();
    const {handleRegisteration} = useAuth();
    const {error} = useAuth();
    const {toggleLogin} = useAuth();
    const {isLogin} = useAuth();
    return (
        <div className="login-area">
            <h3>please {isLogin ? 'Login' : 'Register'}</h3>
            <br/>
            <div className="login">
                <Form onSubmit={handleRegisteration}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailChange} required type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordChange} required type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group onChange={toggleLogin} className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Already Register ?" />
                    </Form.Group>
                    <div>{error}</div>
                    <Button variant="primary" type="submit">
                        {isLogin ? 'Login' : 'Register'}
                    </Button>
                </Form>
                <br/>
                <Button onClick={signInUsingGoogle}>Google Sign In</Button>
            </div>
        </div>
    );
};

export default Login;