import {Chart} from "chart.js/auto";
import {useEffect, useRef, useState} from "react";
import {TOTAL_BUDGET_DATA} from "../../data/dashboardMock";
import BudgetChartHeader from "../BudgetChartHeader/BudgetChartHeader";

export default function BudgetChart() {

    const [activePeriod, setActivePeriod] = useState('day');

    const canvasRef = useRef(null);
    const chartInstance = useRef(null);

    const rootStyles = getComputedStyle(document.documentElement);

    const colorPlan = rootStyles.getPropertyValue('--accent-color--lighter').trim();
    const colorActual = rootStyles.getPropertyValue('--accent-color').trim();

    const currentData = TOTAL_BUDGET_DATA[activePeriod];

    useEffect(() => {
        if(chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = canvasRef.current.getContext("2d");

        chartInstance.current = new Chart(ctx, {
            type: "line",
            data: {
                labels: currentData.labels,
                datasets: [
                    {
                        label: "Plan",
                        data: currentData.planValues,
                        borderColor: colorPlan,
                        borderWidth: 3,
                        tension: 0.4,
                        pointRadius: 0,
                        pointHoverRadius: 6,
                    },
                    {
                        label: "Actual",
                        data: currentData.actualValues,
                        borderColor: colorActual,
                        borderWidth: 3,
                        tension: 0.4,
                        pointRadius: 0,
                        pointHoverRadius: 6,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: "index",
                    intersect: false,
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: 12,
                        titleFont: { size: 14 },
                        bodyFont: { size: 13 },
                    }
                },
                scales:{
                    x: {
                        grid:{
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            display: false,
                        }
                    },
                    y: {
                        min: 0,
                        max: 50000,
                        grid: {
                            color: '#e5e7eb',
                            drawBorder: false,
                        },
                        ticks:{
                            stepSize: 10000,
                            padding: 10,

                        }
                    }
                }
            }
        })
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [activePeriod])
    return(
        <>
        <BudgetChartHeader
            activePeriod={activePeriod}
            setActivePeriod={setActivePeriod}
        />
            <div style={{  width: '100%', maxHeight: '100%', height: '100%' }}>
                <canvas ref={canvasRef} />
            </div>

        </>
    )
}