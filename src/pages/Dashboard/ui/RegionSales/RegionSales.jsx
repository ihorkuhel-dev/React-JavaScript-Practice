import {useEffect, useState} from "react";
import "./RegionSales.scss"
import {useAnimatedNumber} from "../../../../shared/hooks/useAnimatedNumber";

export default  function RegionSales({region, maxSales}){
    const {
        title,
        sales
    } = region;

    const [width, setWidth] = useState(0);

    useEffect(() => {
        const targetPercentage = maxSales > 0 ? (sales / maxSales) * 100 : 0;

        const timeout = setTimeout(() => {
            setWidth(targetPercentage);
        }, 100);

        return () => clearTimeout(timeout);
    }, [sales, maxSales]);

    const animatedSales = useAnimatedNumber(sales, 1200);


    return (
        <div className="region_sales">
            <div className="region_sales--label">
                <span>{title}</span>
            </div>
            <div className="region_sales--track">
                <div className="region_sales--bar" style={{width: `${width}%`}}/>
                <span>{animatedSales}</span>
            </div>
        </div>
    )
};