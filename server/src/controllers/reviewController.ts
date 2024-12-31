import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import Review from '../models/reviews.js';

// Get all reviews
export const getAllReviews = async (_req: Request, res: Response) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// create new review
export const createReview = async (req: Request, res: Response) => {
    const review = req.body;
    try {
        const reviews = await Review.create(review);
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get review by id
export const getReviewById = async (req: Request, res: Response) => {
    const { reviewId } = req.params;
    try {
        const review = await Review.findOne({ _id: new ObjectId(reviewId) });
        res.json(review);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}; 