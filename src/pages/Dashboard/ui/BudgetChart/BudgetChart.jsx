import { useState } from "react";
import { TOTAL_BUDGET_DATA } from "../../data/dashboardMock";
import BudgetChartHeader from "../BudgetChartHeader/BudgetChartHeader";
import { useBudgetChart } from "../../lib/useBudgetChart";

export default function BudgetChart() {

    const [activePeriod, setActivePeriod] = useState('day');
    const currentData = TOTAL_BUDGET_DATA[activePeriod];

    const canvasRef = useBudgetChart(currentData);

    return(
        <>
            <BudgetChartHeader
                activePeriod={activePeriod}
                setActivePeriod={setActivePeriod}
            />
            <div style={{ width: '100%', maxHeight: '100%', height: '100%' }}>
                <canvas ref={canvasRef} />
            </div>
        </>
    )
}