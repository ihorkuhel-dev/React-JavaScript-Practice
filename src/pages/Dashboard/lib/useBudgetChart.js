import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

export const useBudgetChart = (currentData) => {
    const canvasRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (!canvasRef.current || !currentData) return;

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const rootStyles = getComputedStyle(document.documentElement);
        const colorPlan = rootStyles.getPropertyValue('--accent-color--lighter').trim();
        const colorActual = rootStyles.getPropertyValue('--accent-color').trim();

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
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [currentData]);

    return canvasRef;
};
