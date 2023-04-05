import { MongoClient } from 'mongodb';
import 'dotenv/config';

let db;

async function connectToDb(cb) {
    const client = new MongoClient(
        `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster36071.h1fsoh4.mongodb.net/?retryWrites=true&w=majority`
        );
    await client.connect();

    db = client.db('my-flash-cards-db');
    
    cb();
}

export {
    db,
    connectToDb
}