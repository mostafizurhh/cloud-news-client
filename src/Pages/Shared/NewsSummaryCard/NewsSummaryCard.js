import React from 'react';
import Card from 'react-bootstrap/Card';
import './NewsSummaryCard.css'
import { FaRegBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({ news }) => {
    // console.log(news)
    return (
        <Card className="text-center mb-5">
            <Card.Header className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                    <div className='author'>
                        <img src={news.author?.img} alt="" />
                    </div>
                    <div className='d-flex flex-column align-items-start justify-content-start'>
                        <small><small>{news.author?.name}</small></small>
                        <small><small>{news.author?.published_date}</small></small>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-1'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className='mb-3'>{news.title}</Card.Title>
                <Card.Img src={news.image_url} />

                {/* card details conditional formating */}
                <Card.Text className='mt-3 text-start'>
                    {
                        news.details.length > 180 ?
                            <p>{news.details.slice(0, 180) + '...'} <Link to={`/news/${news._id}`}>Read more</Link></p>
                            :
                            <p>{news.details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center'>
                    <FaStar style={{ color: 'orange', marginRight: 5 }}></FaStar>
                    <small>{news.rating.number}</small>
                </div>
                <div className='d-flex align-items-center'>
                    <FaEye style={{ marginRight: 5 }}></FaEye>
                    {news.total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;