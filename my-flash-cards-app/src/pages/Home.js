import React, { useEffect, useState } from 'react';

import axios from 'axios';

import AddCard from '../components/AddCard';

import './pages.css';

const Home = () => {

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
        <AddCard setCardsData={setCardsData}/>

        <div className="cards-list">
            <h2>{cardsData.length} Cards</h2>
            
            {cardsData.map((card) => (         
            <div key={card.question} className='card'>
                <div className='card-question'>{card.question}</div>
                <div>{card.answer}</div>
                <div className='card-buttons'>
                    <button>Edit Card</button>
                    <button>Delete Card</button>
                </div>
            </div>))}
        </div>
    </>
    );
};

export default Home;