import React from 'react'
import { Navigate } from 'react-router';

function PrivateRoute({ isLoggedIn, children }) {
    if (isLoggedIn) {
        console.log(children);
        return children;
    }
    else {
        return <Navigate to="/login"></Navigate>
    }
}

export default PrivateRoute