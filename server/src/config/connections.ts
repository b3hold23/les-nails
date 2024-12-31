import mongoose from 'mongoose';

const db = async (): Promise<typeof mongoose.connection> => {
    try {
        await mongoose.connect(process.env.MANGODB_URI || 'mongodb://127.0.0.1:27017/nail-reviews');
        console.log('Connected to database');
        return mongoose.connection;
    } catch (error) {
        console.log('Error connection does not feel good Mr.Stark', error);
        throw new Error('Error connecting to database');
    }
};

export default db;