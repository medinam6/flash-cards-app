import React, {useState} from 'react';

import axios from 'axios';

import './components.css'

const AddCard = ({setCardsData}) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const submitCard = async () => {
        if (question && answer) {
            await axios.post('api/add-card', {
                question: question,
                answer: answer,
            })
            .then((res) =>  {
                setCardsData(res.data);
            })
            .catch((error) => console.log(error));
        }
    }

    return (
        <div className="add-card">
            <label>Enter Question</label>
            <textarea
                className="card-input"
                name="question"
                onChange={(e) => setQuestion(e.target.value)}></textarea>
            <label>Enter Answer</label>
            <textarea
                className="card-input"
                name="answer"
                onChange={(e) => setAnswer(e.target.value)}></textarea>
            <br />
            <button
                className="submit-card"
                onClick={submitCard}>
                Add Card
            </button>
        </div>
    )
}

export default AddCard;