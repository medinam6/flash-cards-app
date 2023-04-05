import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {

    const [cardsData, setCardsData] = useState();

    useEffect(() => {
        const getCards = async () => {
            const response = await axios.get('/api/cards/');
            const newCardData = response.data;
            setCardsData(newCardData);
        };

        getCards();
    }, []);

    if (!cardsData) {
        return null;
    }

    return (
    <>
        <h1>Flash Cards</h1>
        <div>
            <h2>{cardsData.length} Cards</h2>
            <div>
                <h5>{cardsData[0].question}</h5>
                <p>{cardsData[0].answer}</p>
            </div>

        </div>
    </>
    );
};

export default HomePage;