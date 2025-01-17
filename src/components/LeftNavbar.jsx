import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
    const [categories,setCategories] = useState([]);
    useEffect(() =>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
    },[])
    return (
        <div className='flex flex-col'>
            <h2 className='font-semibold'>All Categories {categories.length}</h2>
        {
            categories.map(category => <NavLink to={`/category/${category.category_id}`} className='btn mb-3' key={category.category_id}>{category.category_name}</NavLink>)
        }
        </div>
    );
};

export default LeftNavbar;