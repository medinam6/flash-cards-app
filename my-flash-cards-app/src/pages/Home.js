import React, { useEffect, useState } from 'react';

import axios from 'axios';

import AddCard from '../components/AddCard';
import EditCard from '../components/EditCard';

import './pages.css';

const Home = () => {

    const [cardsData, setCardsData] = useState();
    const [cardForm, setCardForm] = useState('add-card');
    const [cardData, setCardData] = useState({});
    

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

    const editCard = (card) => {
        setCardData(card);
        setCardForm('edit-card');
    };

    const deleteCard = (_id) => {
        axios.delete('/api/delete-card/', { data :{ _id: _id } })
        .then((res) => {
            setCardsData(res.data);
        })
        .catch((error) => {
            console.error(error);
        });
    };

    if (!cardsData) {
        return null;
    }

    return (
    <>
        {cardForm === 'add-card' 
            ? <AddCard setCardsData={setCardsData}/> 
            : <EditCard 
                setCardsData={setCardsData} 
                setCardForm={setCardForm}
                cardData={cardData}
                />
        }

        <div className="cards-list">
            <h2>{cardsData.length} Cards</h2>
            
            {cardsData.map((card) => (         
                <div key={card.question} className='card'>
                    <div className='card-question'>{card.question}</div>
                    <div>{card.answer}</div>
                    <div className='card-buttons'>
                        <button onClick={() => editCard(card)}>Edit Card</button>
                        <button onClick={() => deleteCard(card._id)}>Delete Card</button>
                    </div>
                </div>))}
        </div>
    </>
    );
};

export default Home;