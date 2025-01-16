import { useState, useEffect } from "react";
import { createReview } from "../api/reviewAPI";
import { retrieveReviews } from "../api/reviewAPI";
import { ReviewData } from "../interfaces/reviewData";

const CreateReview = () => {
    const [newReview, setNewReview] = useState<ReviewData | undefined>(
        {
            _id: number;
            name: string;
            review: string;
            rating: number;
            createdAt: Date;
        }
    );

    const navigate = useNavigate();

    const getAllReviews = async () => {
        try {
            const data = await retrieveReviews();
            setReviews(data);
        } catch (err) {
            console.log('Error retrieving reviews:', err);
        }
    };
};