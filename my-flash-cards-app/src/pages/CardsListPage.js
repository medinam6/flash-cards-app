import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './CardsListPage.css';

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
        <ul className="cards-list">
            <h2>{cardsData.length} Cards</h2>
            <li className='card'>
                <div className='card-question'>{cardsData[0].question}</div>
                <div>{cardsData[0].answer}</div>
            </li>
        </ul>
    </>
    );
};

export default CardsListPage;