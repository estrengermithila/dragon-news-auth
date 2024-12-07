import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';

const RightNavbar = () => {
    return (
        <div>
            <h1 className='mb-4'>Please Login</h1>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
        </div>
    );
};

export default RightNavbar;