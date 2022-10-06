import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

let db = null;
const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
    async () => {
        await mongoClient.connect();
        db = mongoClient.db("Freios_Supremos");
    }
    console.log("Connected to MongoDB");
} catch (error) {
    console.log(error);
}

export default db;