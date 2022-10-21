import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState(''); /* set state for error */
    const { loginWithEmail, setLoading } = useContext(AuthContext);

    /* redirect user to the route they wanted to go before login */
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    /* handle form submit function */
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        loginWithEmail(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset(); /* reset form */
                setError('') /* set error */

                /* set condition for verified user to navigate*/
                if (user.emailVerified) {

                    navigate(from, { replace: true })/* navigate user */
                }
                else {
                    toast.error('Please verify your email first')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message) /* set error */
            })
            /* get verified user */
            .finally(() => {
                setLoading(false)
            })

    }


    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <Form.Group className='d-flex flex-column'>
                <Form.Text className='text-danger mt-2 mb-2'>
                    {error} {/* show error on UI */}
                </Form.Text>
                <Button variant="primary" type="submit" className='w-25'>
                    Login
                </Button>
            </Form.Group>
            <div className='mt-2'>
                <small>New to our site?</small>
                <Link to='/register'>Please Register!!</Link>
            </div>
        </Form>
    );
};

export default Login;