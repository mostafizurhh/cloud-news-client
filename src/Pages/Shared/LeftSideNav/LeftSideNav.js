import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://cloud-news-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error));
    }, [])


    return (
        <div>
            <h5>All Categories: {categories.length}</h5>
            <div>
                {
                    categories.map(category =>
                        <p key={category.id}>
                            <Link to={`/category/${category.id}`}>
                                {category.name}
                            </Link>
                        </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;