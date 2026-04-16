import "./ProductDetails.scss"
import {PRODUCT_DETAILS} from "../../../shared/config/ProductDetails";
import {useSearchParams} from "react-router-dom";
import RowTable from "../../../shared/ui/RowTable/RowTable";
import ColumnTable from "../../../shared/ui/ColumnTable/ColumnTable";
import ProductDescription from "../ProductDescription/ProductDescription";

export default function ProductDetails({data}) {

    const [searchParams, setSearchParams] = useSearchParams({'category': 'general'});
    const currentCategory = searchParams.get('category') || 0

    const setInfoCategory = (category) => {
        searchParams.set('category', category);
        setSearchParams(searchParams);
    }

    const currentCategoryData = data.filter(item => item.category === currentCategory)[0]

    const Table = currentCategoryData?.direction === 'row' ?
        <RowTable data={currentCategoryData} className="details"/> :  currentCategoryData?.direction === 'column' ?
            <ColumnTable data={currentCategoryData}  className="details"/> :
            <ProductDescription data={currentCategoryData}  className="details"/>;

    return (
        <div className="product-details">
            <nav>
                <ul>
                    {PRODUCT_DETAILS.map((item) => (
                        <li key={item.id}
                            className={item.label === searchParams.get('category') ? 'active' : ''}
                            onClick={() => setInfoCategory(item.label)}>
                            {item.label}
                        </li>
                    ))}
                </ul>
            </nav>
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