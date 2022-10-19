import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <h2>Home has {news.length} news</h2>
        </div>
    );
};

export default Home;