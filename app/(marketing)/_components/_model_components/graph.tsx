import React from 'react';
import { Line } from 'react-chartjs-2';

import { Chart, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip, 
    Legend,
    LineController } from 'chart.js';

Chart.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend,
LineController
);

// Now you can use Chart.js as usual


// Now you can use Chart.js as usual



interface GraphProps {
    yearsData: number[];
    wasteData: number[];
    uraniumMassData: number[];
    electricityData: number[];
  }
const Graph: React.FC<GraphProps> = ({yearsData, wasteData, uraniumMassData, electricityData,}) => {
    let data = {
        labels: yearsData,
        datasets: [
            {
                label: 'HLW (m³)',
                data: wasteData,
                fill: true, // Add a hue under the line
                backgroundColor: 'rgba(255, 165, 0, 0.2)',
                borderColor: 'rgb(255, 165, 0)',
                tension: 0.1,
                pointRadius: 0, // Remove the dots on the graph
            },
            {
                label: 'Uranium (tonne / year)',
                data: uraniumMassData,
                fill: true, // Enable fill for the uranium dataset
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // Use a semi-transparent background color
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1,
                pointRadius: 0,
            },
            {
                label: 'Electricity (GW / Year)',
                data: electricityData,
                fill: true, // Enable fill for the electricity dataset
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Semi-transparent fill color
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                pointRadius: 0,
            },
        ],
    };
    
    let options = {
        scales: {
            y: {
                beginAtZero: false,
                grid: {
                    display: false, // Remove the grid lines
                },
                title: {
                    display: false,
                },
            },
            x: {
                grid: {
                    display: false, // Remove the grid lines
                },
                title: {
                    display: true,
                    text: 'Time',
                },
            },
        },
        plugins: {
            legend: {
                position: 'bottom' as 'bottom', // Specify the position as 'bottom'
            },
        },
    };    
    return (
  <Line data={data} options={options} />
);}

export default Graph;
