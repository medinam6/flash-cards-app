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
                    ? <div>{cardsData[currentCardIndex].question}</div>
                    : <div>{cardsData[currentCardIndex].answer}</div>}

                <button className='flip-card' onClick={flipCard}>Flip Card</button>

            </div>
           {currentCardIndex + 1 < cardsData.length 
            && <button onClick={getNextCard}>Next Card</button>}
        </>
    )
};

export default Study;