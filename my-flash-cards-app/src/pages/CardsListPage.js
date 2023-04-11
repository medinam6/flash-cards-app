import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Pages.css';

const CardsListPage = () => {

    const [cardsData, setCardsData] = useState();

    useEffect(() => {
        const getCards = async () => {
            try {
                const response = await axios.get('/api/cards/');
                const newCardData = response.data;
                setCardsData(newCardData);
            } catch (error) {
                console.error(error);
            }
        };

        getCards();
    }, []);

    if (!cardsData) {
        return null;
    }

    return (
    <>
        <h1 className="cards-header">Flash Cards</h1>
        <div className="cards-list">
            <h2>{cardsData.length} Cards</h2>
            {cardsData.map((card) => (         
            <div key={card.question} className='card'>
                <div className='card-question'>{card.question}</div>
                <div>{card.answer}</div>
            </div>))}
        </div>
        <Link to="add-flash-card">Add Flash Card</Link>
    </>
    );
};

export default CardsListPage;