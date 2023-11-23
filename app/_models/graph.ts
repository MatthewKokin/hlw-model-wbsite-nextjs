import Chart from 'chart.js/auto';

export let chart: Chart | null = null;
export let yearsData: number[] = [2023];
export let wasteData: number[] = [0];
export let uraniumMassData: number[] = [459];
export let electricityData: number[] = [5.883];

export function setupChart() {
    const ctx = document.getElementById('waste-chart')!.getContext('2d');
    chart = new Chart(ctx!, {
        type: 'line',
        data: {
            labels: yearsData, // X-axis labels
            datasets: [{
                label: 'HLW (m³)',
                data: wasteData, // Y-axis data
                fill: true, // Add a hue under the line
                backgroundColor: 'rgba(255, 165, 0, 0.2)',
                borderColor: 'rgb(255, 165, 0)',
                tension: 0.1,
                pointRadius: 0 // Remove the dots on the graph
            }, {
                label: 'Uranium (tonne / year)',
                data: uraniumMassData,
                fill: true, // Enable fill for the uranium dataset
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // Use a semi-transparent background color
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1,
                pointRadius: 0
            }, {
                label: 'Electricity (GW / Year)',
                data: electricityData,
                fill: true, // Enable fill for the uranium dataset
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Semi-transparent fill color
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                pointRadius: 0
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false,
                    grid: {
                        display: false // Remove the grid lines
                    },
                    title: {
                        display: false,
                    }
                },
                x: {
                    grid: {
                        display: false // Remove the grid lines
                    },
                    title: {
                        display: true,
                        text: 'Time'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'bottom' // Move the legend to the bottom
                }
            }
        }
    });
}

export function updateChart(year: number, waste: number, uraniumUsed: number, electricity: number) {
    yearsData.push(year);
    wasteData.push(waste);
    uraniumMassData.push(uraniumUsed);
    electricityData.push(electricity);
    chart!.update();
}
