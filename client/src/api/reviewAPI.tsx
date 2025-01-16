import { ReviewData } from "../interfaces/reviewData";

const retrieveReviews = async () => {
    try {
        const response = await fetch('/api/reviews');
        const data: ReviewData[] = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

const createReview = async (body: ReviewData) => {
    try {
        const response = await fetch(
            '/api/reviews/', {
                method: 'POST',
                body: JSON.stringify(body),
            }
        );
        const data = await response.json();

        if(!response.ok) {
            throw new Error("Could not create review");
        }

        return data;
    } catch (err) {
        console.log('Error creating review:', err);
        return Promise.reject(err);
    }
};

export { retrieveReviews, createReview };