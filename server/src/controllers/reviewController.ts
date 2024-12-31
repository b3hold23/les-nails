import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import Review from '../models/reviews.js';

// Get all reviews
export const getAllReviews = async (_req: Request, res: Response) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error getting all reviews' });
    }
};

// create new review
export const createReview = async (req: Request, res: Response) => {
    const review = req.body;
    try {
        const reviews = await Review.create(review);
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Error creating review' });
    }
};

// Get review by id
export const getReviewById = async (req: Request, res: Response) => {
    const { reviewId } = req.params;
    try {
        const review = await Review.findOne({ _id: new ObjectId(reviewId) });
        res.json(review);
    } catch (error) {
        res.status(500).json({ message: 'Error getting review by id' });
    }
};

// Delete review by id
export const deleteReviewById = async (req: Request, res: Response) => {
    try {
        const deletedReview = await Review
        .findOneAndDelete(
            { _id: new ObjectId(req.params.reviewId) },
        );
        res.status(200).json(deletedReview);
        console.log(`Deleted review: ${deletedReview}`);
    } catch (error) {
        console.log("I don't feel so good Mr. Stark");
        res.status(500).json({ message: 'Error deleting review by id' });
    }
};