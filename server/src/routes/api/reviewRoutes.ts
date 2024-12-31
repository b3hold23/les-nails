import { Router } from 'express';
const router = Router();
import {
    getAllReviews,
    createReview,
    getReviewById,
    deleteReviewById
} from '../../controllers/reviewController.js';

router.route('/')
.get(getAllReviews)
.post(createReview);

router.route('/:reviewId')
.get(getReviewById)
.delete(deleteReviewById);

export { router as reviewRoutes };