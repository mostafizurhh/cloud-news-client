import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter Your Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Your Photo</Form.Label>
                <Form.Control type="text" name='photoURL' placeholder="upload photo" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='confirmPassword' placeholder="Confirm Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
            <div className='mt-2'>
                <small>
                    Already Have An Account?
                </small>
                <Link to='/login'>Login Here!!</Link>
            </div>
        </Form>
    );
};

export default Register;