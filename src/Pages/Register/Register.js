import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState(''); /* set error state */
    const { createUser } = useContext(AuthContext);

    /* redirect user to the route they wanted to go before login */
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    /* handle form submit */
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset();/* form reset */
                setError(''); /* set error */
                navigate(from, { replace: true })/* redirect user */
            })
            .catch(error => {
                console.error(error)
                setError(error.message)/* set error message */
            })
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
            <Form.Group className='d-flex flex-column'>
                <Form.Text className='text-danger mt-2 mb-2'>
                    {error} {/* show error in UI */}
                </Form.Text>
                <Button variant="primary" type="submit" className='w-25'>
                    Register
                </Button>
            </Form.Group>
            <div className='mt-2'>
                <small>
                    Already Have An Account?
                </small>
                <Link to='/login'> Login Here!!</Link>
            </div>
        </Form>
    );
};

export default Register;