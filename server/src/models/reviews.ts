import mongoose, { Schema, model, Document } from 'mongoose';

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
        rating: {
            type: Number,
            required: false,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
}
);

reviewSchema.virtual('createdAt').get(function (this: IReview) {
    return (this._id as mongoose.Types.ObjectId).getTimestamp();
});

const Review = model<IReview>('Review', reviewSchema);

export default Review;