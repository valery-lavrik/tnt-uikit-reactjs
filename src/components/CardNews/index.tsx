import React from 'react';
import './index.scss';
import imgCard from '../../assets/images/CardNews.png';

const CardNews = () => {
    const handleClick = () => {
        const cardElement = document.querySelector('.card-news__desc');
        cardElement && cardElement.classList.toggle('card-news-active');
    };
    return (
        <div className="card-news">
            <img src={imgCard} alt="" className="card-news__img" />
            <h5 className="card-news__title">ТНТ на ЦИПР-2023</h5>
            <p className="card-news__desc" onClick={handleClick}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui est incidunt reiciendis tenetur blanditiis! At iste tempora
                necessitatibus nihil harum, dignissimos quos mollitia sed, nisi magnam non, molestias magni!
            </p>
            <div className="card-news__date">06.06</div>
        </div>
    );
};

export default CardNews;
