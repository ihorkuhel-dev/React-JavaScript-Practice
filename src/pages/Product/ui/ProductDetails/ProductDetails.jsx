import "./ProductDetails.scss"
import {useSearchParams} from "react-router-dom";
import {PRODUCT_DETAILS} from "../../../../shared/config/ProductDetails";
import RowTable from "../../../../shared/ui/RowTable/RowTable";
import ProductDescription from "../ProductDescription/ProductDescription";
import TabsNav from "../../../../shared/ui/TabsNav/TabsNav";

export default function ProductDetails({data}) {

    const [searchParams] = useSearchParams({'category': 'general'});
    const currentCategory = searchParams.get('category') || 'general';

    const currentCategoryData = data.filter(item => item.category === currentCategory)[0]

    const Table = currentCategoryData?.direction === 'row' ?
        <RowTable data={currentCategoryData} className="details"/> :
        <ProductDescription data={currentCategoryData}  className="details"/>;

    return (
        <div className="product-details">
            <TabsNav tabs={PRODUCT_DETAILS} paramName="category" defaultTab="general" className="product-tabs" />
            {!currentCategoryData ? (
                    <div className="details">
                        <p>No info</p>
                    </div>
            ) :
                Table
            }
        </div>
    )
}