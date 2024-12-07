import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/LeftNavbar';
import RightNavbar from '../components/RightNavbar';
import { Outlet } from 'react-router-dom';

const Homelayout = () => {
    return (
        <div className='font-Poppins'>
            <Header />
            <section className='w-11/12 mx-auto'>
                <LatestNews />
            </section>
            
            <nav className='w-11/12 mx-auto py-3'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto pt-5 grid grid-cols-12 gap-2'>
                <aside className='col-span-3'>
                    <LeftNavbar />
                </aside>
                <section className='col-span-6'><Outlet></Outlet></section>
                <aside className='col-span-3'><RightNavbar></RightNavbar></aside>
            </main>
        </div>
    );
};

export default Homelayout;