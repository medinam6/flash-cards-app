import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Study = () => {

    const [cardsData, setCardsData] = useState();
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [frontCardSide, SetFrontCardSide] = useState(true);

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

    const getNextCard = () => {
        if (currentCardIndex + 1 < cardsData.length) {
            setCurrentCardIndex(currentCardIndex + 1);
            SetFrontCardSide(true);
        }
    };

    const getPrevCard = () => {
        if (currentCardIndex > 0) {
            setCurrentCardIndex(currentCardIndex - 1);
            SetFrontCardSide(true);
        }
    }

    const flipCard = () => {
        SetFrontCardSide(!frontCardSide);
    }

    if (!cardsData) {
        return null;
    }

    return (
        <>
            <div className='card-study'>

                {frontCardSide
                    ? <div className='front-side'>{cardsData[currentCardIndex].question}</div>
                    : <div className='back-side'>{cardsData[currentCardIndex].answer}</div>}

                <button className='flip-card' onClick={flipCard}>Flip Card</button>

            </div>
            <div className='card-buttons'>
                <button onClick={getPrevCard}>Previous Card</button>
                <button onClick={getNextCard}>Next Card</button>
            </div>
        </>
    )
};

export default Study;