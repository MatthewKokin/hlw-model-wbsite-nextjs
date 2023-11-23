import PowerPlant from './PowerPlant';
import data from './powerPlantData';

interface PowerPlantData {
    name: string;
    capacity: number;
    days_before_closing: number;
    isOperational: boolean;
    construction_done: number;
    isBuilding: boolean;
    type: string;
    isStartedbuilding: boolean;
    startedBuildingIn: number;
}

// export function updateChart(year: number, waste: number, uraniumUsed: number, electricity: number) {
//     yearsData.push(year);
//     wasteData.push(waste);
//     uraniumMassData.push(uraniumUsed);
//     electricityData.push(electricity);
//     chart!.update();
// }

export function createPowerPlants(): PowerPlant[] {
    const powerPlants: PowerPlant[] = [];
    for (let i = 0; i < data.length; i++) {
        const plantData: PowerPlantData = data[i];
        powerPlants.push(new PowerPlant(
            plantData.name,
            plantData.capacity,
            plantData.days_before_closing,
            plantData.isOperational,
            plantData.construction_done,
            plantData.isBuilding,
            plantData.type,
            plantData.isStartedbuilding,
            plantData.startedBuildingIn
        ));
    }
    return powerPlants;
}

export function setOperationalDays(plants: PowerPlant[], days: number): [number, number[], number, number, number, number] {
    let wasteVolumeAllTimeTotal = 0; // For all the factories
    let wasteVolumesThisYear: number[] = []; // For each factory
    let totalUraniumUsedThisYear = 0; // For all the factories
    let totalElectricityThisYear = 0; // For all the factories
    let BWRwaste = 0;
    let PWRwaste = 0;

    for (const plant of plants) {
        const [wasteVolumeThisYearForPlant, wasteVolumeTotalForPlant, uraniumUsedThisYear] = plant.isOperatingOrBuilding(days);
    
        // Check if wasteVolumeThisYearForPlant is undefined and initialize it as an empty array if so
        const wasteVolumesThisYearForPlant = wasteVolumeThisYearForPlant || [];
    
        wasteVolumesThisYearForPlant.push(wasteVolumeThisYearForPlant);
        wasteVolumeAllTimeTotal += wasteVolumeTotalForPlant;
        totalUraniumUsedThisYear += uraniumUsedThisYear;
        totalElectricityThisYear += plant.generatedElectricity;
    
        if (plant.type === "AGR") {
            BWRwaste += wasteVolumeTotalForPlant;
        } else if (plant.type === "EPR" || plant.type === "PWR") {
            PWRwaste += wasteVolumeTotalForPlant;
        } else {
            throw new Error("Unhandled case");
        }
    }
    

    return [wasteVolumeAllTimeTotal, wasteVolumesThisYear, totalUraniumUsedThisYear, totalElectricityThisYear, BWRwaste, PWRwaste];
}

function makeDashboardItem(plant: PowerPlant, wasteProducedThisYear: number | 'N/A'): string {
    const status = plant.isOperational ? 'Operating' : (plant.isBuilding ? 'Is Building' : (plant.isStartedbuilding ? 'Not Operating' : "Planned"));
    // The plants that are not operational because they are done generating electricity would have to have isStartedbuilding to be true for them to be built, where as not operational because they are not even buit yet are not started to built

    const plantTotalWasteVolume = plant.wasteMassToVolume(plant.nuclearWaste).toFixed(2);
    const plantName = plant.name.replace(/_/g, ' ');
    const wasteProducedText = (typeof wasteProducedThisYear === 'number') ? wasteProducedThisYear.toFixed(2) : 'N/A';

    const dashboardHTML = `
        <tr class="item">
            <td class="name">${plantName}</td>
            <td class="capacity">${plant.capacity.toFixed(2)}</td>
            <td class="total-waste-produced">${plantTotalWasteVolume}</td>
            <td class="waste-produced-this-year">${wasteProducedText}</td>
            <td class="status">${status}</td>
        </tr>
    `;
    return dashboardHTML;
}

export function updateDashboard(plants: PowerPlant[], wasteVolumesThisYear: number[]): void {
    let dashboardHTML = ``;
    plants.forEach((plant, index) => {
        dashboardHTML += makeDashboardItem(plant, wasteVolumesThisYear[index]);
    });
    const dashboardEl = document.getElementById('dashboard-items');
    if (dashboardEl) {
        dashboardEl.innerHTML = dashboardHTML;
    }
}

export function interimStorageCost(intermimTotalCost: number, allTimeWasteThisYear: number): number {
    // cost in £millions assuming it is 25k / year per m^3
    return intermimTotalCost + allTimeWasteThisYear * 0.045;
}
