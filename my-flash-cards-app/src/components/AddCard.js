import React, {useState} from 'react';

import axios from 'axios';

// import { useNavigate } from 'react-router-dom';

const AddCard = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    // const navigate = useNavigate();

    const submitCard = () => {
        if (question && answer) {
            axios.post('api/add-card', {
                question: question,
                answer: answer,
            })
            .then((res) =>  {
                alert('before navigate', res);
                // navigate('/');
        })
            .catch((error) => alert(error.reponse));
        }
    }

    return (
        <form className='add-card'>
            <label>Enter Question</label>
            <input 
                type="text" 
                name="question" 
                onChange={(e) => setQuestion(e.target.value)}                     
                required />
            <label>Enter Answer</label>
            <input 
                type="text" 
                name="answer"
                onChange={(e) => setAnswer(e.target.value)}
                required />
            <br />
            <button
                className="submit-card"
                onClick={submitCard}>
                Add Card
            </button>
        </form>
    )
}

export default AddCard;