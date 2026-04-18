import {useMemo} from "react";
import {useGetFirstProductQuery} from "../../features/products/api/productApi";
import BlockHeader from "../../shared/ui/BlockHeader/BlockHeader";
import InfoCard from "../../shared/ui/InfoCard/InfoCard";
import './Product.scss'
import PageHeader from "../../shared/ui/PageHeader/PageHeader";
import ProductDetails from "./ProductDetails/ProductDetails";

export default function Product() {

    const { data } = useGetFirstProductQuery();

    const { info, reviews,  productDetails} = useMemo(() => {
        if (!data) return {info: [], reviews: [],productDetails: []};

        const info = [
            {label: 'title', value: data.title},
            {label: 'available', value: data.availabilityStatus},
            {label: 'brand', value: data.brand},
            {label: 'category', value: data.category},
            {label: 'price', value: data.price},
            {label: 'rating', value: data.rating},
            {label: 'in stock', value: data.stock},
            {label: 'sku', value: data.sku},
        ]

        const reviews = data.reviews

        const productDetails = [
            {
                category: 'general',
                items: [
                    {id: 0, label: 'title', value: data.title},
                    {id: 1, label: 'description', value: data.description},
                    {id: 2, label: 'warranty', value: data.warrantyInformation},
                ]
            },

            {
                category: 'details',
                direction: 'row',
                items: [
                    {id: 0, label: 'width', value: data.dimensions.width},
                    {id: 1, label: 'height', value: data.dimensions.height},
                    {id: 2, label: 'depth', value: data.dimensions.depth},
                    {id: 3, label: 'weight', value: data.weight},
                ]
            }
        ]

        return {  info, reviews, productDetails };
    }, [data]);

    const reviewsCount = reviews.length || 0;


    return (
        <>
            <PageHeader pageName="Product" />

            <div className="page-content product-page">
                <InfoCard data={info} title="Product Info" className="product-detail-info"/>
                <div className="product-detail-block">
                    <div className="reviews-block">
                        <BlockHeader title="Draft" className='review-header'/>
                        <div className="reviews">
                            <h5>Reviews:
                                <span className="reviews-count"> ({reviewsCount})</span>
                            </h5>

                            {reviews.map((review) => (
                                <div className="review-block" key={review.date+"-"+review.reviewerName+"-"+review.rating}>
                                    <p className="comment">{review.comment}</p>
                                    <p className="review-data">{review.date.split("T")[0]} | {review.reviewerName}</p>
                                    <div className="review-rating">{review.rating}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <ProductDetails data={productDetails} />
                </div>
            </div>

        </>
    )
}