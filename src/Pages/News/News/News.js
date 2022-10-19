import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';

const News = () => {
    const news = useLoaderData();
    // console.log(news)
    const { category_id, title, details, image_url, author } = news
    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <div className=' mb-3'>
                    <Card.Title className='fw-normal'>{title}</Card.Title>
                    <div className='d-flex justify-content-between'>
                        <small><b>Author:</b> {author?.name}</small>
                        <small><b>Published Date:</b> {author?.published_date}</small>
                        <div className='d-flex align-items-center'>
                            <FaStar style={{ color: 'orange', marginRight: 5 }}></FaStar>
                            <small>{news.rating.number}</small>
                        </div>
                    </div>

                </div>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">All News in This Category</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;