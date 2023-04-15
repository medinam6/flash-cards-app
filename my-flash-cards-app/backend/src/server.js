import express from 'express';
import {db, connectToDb} from './db.js'
import 'dotenv/config';
import { ObjectId } from 'mongodb'

const app = express();
app.use(express.json());

app.get('/api/cards/', async (req, res) => {

    const cards = await db.collection('cards').find().toArray();
    if (cards) {
        res.send(cards);
    } else {
        res.sendStatus(404);
    }
});

app.post('/api/add-card', async (req, res) => {
    const { question } = req.body;
    const { answer } = req.body;
    
    await db.collection('cards').insertOne({
        question: question,
        answer: answer,
        mastered: false
    });

    const cards = await db.collection('cards').find().toArray();
 
    if (cards) {
        res.send(cards);
    } else {
        res.sendStatus(404);
    }
});

app.delete('/api/delete-card', async (req, res) => {
    const  _id  = req.body._id;
    const response = await db.collection('cards').deleteOne({ _id: new ObjectId(_id) });

    if (response && response.deletedCount > 0) {
        const cardData = await db.collection('cards').find().toArray();
        res.send(cardData);
    } else {
        res.sendStatus(404);
    }
});

app.put('/api/edit-card', async (req, res) => {
    const  _id  = req.body._id;
    const { answer } = req.body;
    const { question } = req.body;

    const response = await db.collection('cards').updateOne(
        {_id: new ObjectId(_id)}, 
        { $set: { 
            answer: answer,
            question: question,
        }},
    );

    if (response) {
        const cardData = await db.collection('cards').find().toArray();
        res.send(cardData);
    } else {
        res.sendStatus(404);
    }
});


connectToDb(() => {
    console.log('Successfully connected to database');

    app.listen(8000, () => {
    console.log('Server is listening on port 8000');
    });
});