import PageHeader from "../../shared/ui/PageHeader/PageHeader";
import "./Dashboad.scss"
import {CATEGORY_STATS, SALES_BY_REGION} from "./data/dashboardMock";
import CategoryCards from "./components/CategoryCards/CategoryCards";
import RegionSales from "./components/RegionSales/RegionSales";
export default function Dashboard() {

    const maxSales = Math.max(...SALES_BY_REGION.map(item => item.sales)) || 0;

    return (
        <>
            <PageHeader pageName="Dashboard" />

            <div className="page-content">
               <div className="dashboard">
                   <div className="dashboard--chart"></div>
                   <div className="dashboard--category">
                       {CATEGORY_STATS && (
                           CATEGORY_STATS.map((stat) => (
                               <CategoryCards category={stat} key={stat.id} />
                           ))
                       )}


                   </div>
                   <div className="dashboard--stats">

                       <div className="stast-by-region">
                           <h3>
                               Total sales by region
                           </h3>
                           {SALES_BY_REGION && (
                               SALES_BY_REGION.map((region) => (
                                   <RegionSales key={region.id} region={region} maxSales={maxSales}/>
                               ))
                           )}
                       </div>
                       <div className="stast-lost-opportunity">

                       </div>
                   </div>
               </div>

            </div>
        </>
    )
}