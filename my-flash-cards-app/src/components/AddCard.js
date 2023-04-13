import React, {useState} from 'react';

import axios from 'axios';

import './components.css'

const AddCard = ({setCardsData}) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const submitCard = () => {
        if (question && answer) {
            axios.post('api/add-card', {
                question: question,
                answer: answer,
            })
            .then((res) =>  {
                setCardsData(res.data);
                setAnswer('');
                setQuestion('');
            })
            .catch((error) => console.log(error))
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
                Add Card
            </button>
        </div>
    )
}

export default AddCard;