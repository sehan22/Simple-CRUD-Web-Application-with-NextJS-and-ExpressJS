// DonutChart.tsx
import {useRef, useEffect} from "react";
import {Chart, registerables} from 'chart.js/auto';

export default function DonutChart() {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    let myChart: Chart<'doughnut'> | null = null;

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                Chart.register(...registerables);
                if (myChart) {
                    myChart.destroy();
                }
                myChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        datasets: [{
                            label: ' ',
                            data: [55, 30, 15],
                            backgroundColor: [
                                '#4e73df',
                                '#1cc88a',
                                '#36b9cc'
                            ],
                            spacing: 1,
                        }],
                        labels: ['Direct', 'Referral', 'Social'],
                    },
                    options: {
                        radius: '100%',
                        cutout: '80%',
                        scales: {
                            y: {
                                display: false
                            }
                        },
                        plugins: {
                            legend: {
                                position: 'bottom',
                                labels: {
                                    useBorderRadius: true,
                                    borderRadius: 20
                                }
                            }
                        }
                    }
                });
            }
        }
    }, []);

    return (
            <canvas ref={chartRef} className="w-full h-full"></canvas>
    );
}
