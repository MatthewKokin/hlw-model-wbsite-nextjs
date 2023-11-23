'use client'
import React, { useState, useEffect, useRef } from 'react';
import "../../../styles/model.css";
import Dashboard from './_model_components/dashboard';
import {createPowerPlants, setOperationalDays, interimStorageCost} from '../../_models/utils'
import Graph from './_model_components/graph';
import { setupChart} from '../../_models/graph';

function Model() {
    let powerPlants = createPowerPlants()
    let zeroArray = new Array(powerPlants.length).fill(0);

    const wasteProducedThisYear = zeroArray.map((value) => (value === 0 ? 'N/A' : value));

    let intermimTotalCost = 41.75
    let count = 2023;

    const [chartData, setChartData] = useState({
        yearsData: [2023],
        wasteData: [0],
        uraniumMassData: [459],
        electricityData: [5.883],
    });

    // Function to update chart data
    const updateChartData = (newYear, newWaste, newUranium, newElectricity) => {
        setChartData(prevData => ({
            yearsData: [...prevData.yearsData, newYear],
            wasteData: [...prevData.wasteData, newWaste],
            uraniumMassData: [...prevData.uraniumMassData, newUranium],
            electricityData: [...prevData.electricityData, newElectricity],
        }));
    };

    return (
        <div className='model-container'>
            <Graph 
                yearsData={chartData.yearsData} 
                wasteData={chartData.wasteData} 
                uraniumMassData={chartData.uraniumMassData} 
                electricityData={chartData.electricityData} 
            />
            <button>Click</button>
            <Dashboard plants={powerPlants} wasteProducedThisYear={wasteProducedThisYear} />
        </div>
  )
}

export default Model