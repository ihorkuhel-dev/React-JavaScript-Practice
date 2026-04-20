import {useGetFirstProductQuery} from "../../features/products/api/productApi";
import InfoCard from "../../shared/ui/InfoCard/InfoCard";
import './Product.scss'
import PageHeader from "../../shared/ui/PageHeader/PageHeader";
import ProductDetails from "./ui/ProductDetails/ProductDetails";
import ProductReviews from "./ui/ProductReviews/ProductReviews";
import { useProductData } from "./lib/useProductData";
import {useSEO} from "../../shared/hooks/useSEO";
import SkeletonInfoCard from "../../shared/ui/Skeleton/SkeletonInfoCard";

export default function Product() {

    useSEO({ title: 'Product | CRM', description: 'Product management and details' });

    const { data, isLoading } = useGetFirstProductQuery();
    const { info, reviews, productDetails } = useProductData(data);

    return (
        <>
            <PageHeader pageName="Product" />

            <div className="page-content product-page">
                {isLoading ? (
                    <SkeletonInfoCard className="product-detail-info" />
                ) : (
                    <InfoCard data={info} title="Product Info" className="product-detail-info"/>
                )}
                <div className="product-detail-block">
                    <ProductReviews reviews={reviews} />
                    <ProductDetails data={productDetails} />
                </div>
            </div>
        </>
    )
}