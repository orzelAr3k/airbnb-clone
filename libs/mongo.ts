import { MongoClient } from 'mongodb';

const client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect((err: any, conn: any) => {
    if(err) console.log(err);
    console.log('Connected to the configuration base!');
});

const db = client.db('airbnb');
export const offersDB = db.collection('offers');
