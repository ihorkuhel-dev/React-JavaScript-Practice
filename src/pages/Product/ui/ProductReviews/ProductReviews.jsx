import BlockHeader from "../../../../shared/ui/BlockHeader/BlockHeader";

export default function ProductReviews({ reviews }) {
    const reviewsCount = reviews?.length || 0;

    return (
        <div className="reviews-block">
            <BlockHeader title="Draft" className='review-header'/>
            <div className="reviews">
                <h5>Reviews:
                    <span className="reviews-count"> ({reviewsCount})</span>
                </h5>

                {reviews?.map((review) => (
                    <div className="review-block" key={review.date+"-"+review.reviewerName+"-"+review.rating}>
                        <p className="comment">{review.comment}</p>
                        <p className="review-data">{review.date.split("T")[0]} | {review.reviewerName}</p>
                        <div className="review-rating">{review.rating}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
