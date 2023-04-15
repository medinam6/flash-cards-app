import React, {useState} from 'react';

import axios from 'axios';

import './components.css'

const EditCard = ({setCardsData, cardData, setCardForm}) => {
    const [question, setQuestion] = useState(cardData.question);
    const [answer, setAnswer] = useState(cardData.answer);
    const id = cardData._id;

    const submitCard = () => {
        if (question && answer) {
            axios.put('api/edit-card', {
                _id: id,
                question: question,
                answer: answer,
            })
            .then((res) =>  {
                setCardsData(res.data);
                setCardForm('add-card');
            })
            .catch((error) => console.log(error));
        };
    }

    return (
        <div className="add-card">
            <label>Enter Question</label>
            <textarea
                value={question}
                className="card-input"
                name="question"
                onChange={(e) => setQuestion(e.target.value)} />
            <label>Enter Answer</label>
            <textarea
                value={answer}
                className="card-input"
                name="answer"
                onChange={(e) => setAnswer(e.target.value)} />
            <br />
            <button
                className="submit-card"
                onClick={submitCard}>
                Submit Changes
            </button>
        </div>
    )
}

export default EditCard;