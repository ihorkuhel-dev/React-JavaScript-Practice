import PageHeader from "../../shared/ui/PageHeader/PageHeader";
import CategoryCards from "./components/CategoryCards/CategoryCards";
import RegionSales from "./components/RegionSales/RegionSales";
import LostOpportunity from "./components/LostOpportunity/LostOpportunity";
import "./Dashboard.scss"
import {CATEGORY_STATS, SALES_BY_REGION} from "./data/dashboardMock";
import BudgetChart from "./components/BudgetChart/BudgetChart";
export default function Dashboard() {


    const maxSales = Math.max(...SALES_BY_REGION.map(item => item.sales)) || 0;

    return (
        <>
            <PageHeader pageName="Dashboard" />
            <div className="page-content">
               <div className="dashboard">
                   <div className="dashboard--chart">
                        <BudgetChart/>

                   </div>
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
                           <h3>
                               Lost opportunity orders
                           </h3>
                           <LostOpportunity/>
                       </div>
                   </div>
               </div>

            </div>
        </>
    )
}