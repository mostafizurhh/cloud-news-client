import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';

/* 
1. only allow the authenticated user
2. solve reload issue
3. redirect user to the route they wanted to go before login
*/

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)/* 1 */
    const location = useLocation(); /* 3 */

    if (loading) { /* 2 */
        return <Spinner animation="border" variant="success" />
    }

    if (!user) {
        return <Navigate to='/login' /* 1 */
            state={{ from: location }} replace /* 3 */
        ></Navigate>
    }

    return children;
};

export default PrivateRoute;