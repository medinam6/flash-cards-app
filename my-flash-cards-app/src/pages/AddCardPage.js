import React from 'react';

const AddCardPage = () => {
    return (
        <form className='add-card'>
            <label>Enter Question</label>
            <input type="text" name="question" required></input>
            <label>Enter Answer</label>
            <input type="text" name="answer" required></input>
            <br />
            <input className="submit-card" type="submit" value="Add Card" />
        </form>
    )
}

export default AddCardPage;