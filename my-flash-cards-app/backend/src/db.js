import { MongoClient } from 'mongodb';
import 'dotenv/config';

let db;

async function connectToDb(cb) {
    const client = new MongoClient(
       `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@flash-cards.c5hbulq.mongodb.net/?retryWrites=true&w=majority`
       );
    await client.connect();

    db = client.db('my-flash-cards-db');
    
    cb();
}

export {
    db,
    connectToDb
}