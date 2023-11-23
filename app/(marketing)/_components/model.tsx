'use client'
import React, { useState } from 'react';
import "../../../styles/model.css";
import Dashboard from './_model_components/dashboard';
import { createPowerPlants, setOperationalDays, interimStorageCost } from '../../_models/utils';
import Graph from './_model_components/graph';

function Model() {
    const [powerPlants, setPowerPlants] = useState(createPowerPlants());
    const zeroArray = new Array(powerPlants.length).fill(0);

    const [count, setCount] = useState(2023);
    const [interimTotalCost, setInterimTotalCost] = useState(41.75);
    const [chartData, setChartData] = useState({
        yearsData: [2023],
        wasteData: [0],
        uraniumMassData: [459],
        electricityData: [5.883],
    });

    const increment = () => {
        const newCount = count + 1;
        const days = 365;

        let [wasteVolumeAllTimeTotal, wasteVolumesThisYear, totalUraniumUsedThisYear, totalElectricityThisYear, BWRwaste, PWRwaste] = setOperationalDays(powerPlants, days);

        const BWRcontainers = BWRwaste / 1.703;
        const PWRcontainers = PWRwaste / 0.981;

        const newInterimTotalCost = interimStorageCost(interimTotalCost, wasteVolumeAllTimeTotal);

        setCount(newCount);
        setInterimTotalCost(newInterimTotalCost);
        setChartData(prevData => ({
            yearsData: [...prevData.yearsData, newCount],
            wasteData: [...prevData.wasteData, wasteVolumeAllTimeTotal],
            uraniumMassData: [...prevData.uraniumMassData, totalUraniumUsedThisYear],
            electricityData: [...prevData.electricityData, totalElectricityThisYear],
        }));

        // You can also update the dashboard here if necessary
    };

    return (
        <div className='model-container'>
            <h1>HLW model</h1>
            <Graph 
                yearsData={chartData.yearsData} 
                wasteData={chartData.wasteData} 
                uraniumMassData={chartData.uraniumMassData} 
                electricityData={chartData.electricityData} 
            />
            <button onClick={increment}>Increment Year</button>
            <Dashboard plants={powerPlants} wasteProducedThisYear={zeroArray} />
        </div>
    )
}

export default Model;
