import { Schema, model, Document } from 'mongoose';

export interface IReview extends Document {
    name: string;
    comment: string;
    rating: number;
    createdAt: Date;
}

const reviewSchema = new Schema<IReview>(
    {
        name: {
            type: String,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
}
);

reviewSchema.virtual('rating').get(function (this: IReview) {
    return this.rating;
});

const Review = model<IReview>('Review', reviewSchema);

export default Review;