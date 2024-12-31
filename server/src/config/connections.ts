import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGODB_URI || '';

const db = async (): Promise<typeof mongoose.connection> => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log('Connected to database');
        return mongoose.connection;
    } catch (error) {
        console.log('Error connection does not feel good Mr.Stark', error);
        throw new Error('Error connecting to database');
    }
};

export default db;