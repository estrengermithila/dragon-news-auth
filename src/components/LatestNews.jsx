import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-4 items-center bg-base-200 p-3'>
            <p className='bg-[#d72050] text-base-100 px-3'>Latest</p>
            <Marquee pauseOnClick={true} speed={100} className='space-x-10'>
                <Link to='/news'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat possimus voluptatem id similique quo aliquam culpa non tempore suscipit, excepturi saepe placeat.
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;