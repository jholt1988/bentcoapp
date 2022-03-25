import React from 'react';
import { Route, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ Component, ...rest }) => {

    const { isAuthenticated } = useSelector(state => state.auth);

    return (
        
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? <Outlet {...props} /> : <Route to={'/login'} />
            }
            />
    
    );
}

export default PrivateRoute;

