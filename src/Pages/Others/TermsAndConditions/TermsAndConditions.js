import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>Accept Our Terms and Condition</h2>
            <p>Go to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;