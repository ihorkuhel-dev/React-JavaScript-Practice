import PageHeader from "../../shared/ui/PageHeader/PageHeader";
import BudgetChart from "./ui/BudgetChart/BudgetChart";
import CategoryCards from "./ui/CategoryCards/CategoryCards";
import LostOpportunity from "./ui/LostOpportunity/LostOpportunity";
import "./Dashboard.scss"
import RegionSales from "./ui/RegionSales/RegionSales";
import {CATEGORY_STATS, SALES_BY_REGION} from "./data/dashboardMock";
import {calculateMaxSales} from "./lib/calculateMaxSales";
import {useSEO} from "../../shared/hooks/useSEO";

export default function Dashboard() {

    useSEO({ title: 'Dashboard | CRM', description: 'Main analytics and general clinic statistics' });

    const maxSales = calculateMaxSales(SALES_BY_REGION);

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