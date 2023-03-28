import express from 'express';
import {db, connectToDb} from './db.js'

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

connectToDb(() => {
    console.log('Successfully connected to database');

    app.listen(8000, () => {
    console.log('Server is listening on port 8000');
    });
});