import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayOut = () => {
    return (
        <div>
            AuthLayOut
            <Outlet />
        </div>
    );
};

export default AuthLayOut;