import React from 'react';
import PowerPlant from '../../../_models/PowerPlant';

interface DashboardProps {
  plants: PowerPlant[];
  wasteProducedThisYear: number | 'N/A'; // Update the prop type to match your data
}

const Dashboard: React.FC<DashboardProps> = ({ plants, wasteProducedThisYear }) => {
  // Define the status based on plant properties
  const getStatus = (plant: PowerPlant) => {
    if (plant.isOperational) {
      return 'Operating';
    } else if (plant.isBuilding) {
      return 'Is Building';
    } else if (plant.isStartedbuilding) {
      return 'Not Operating';
    } else {
      return 'Planned';
    }
  };

  // Render each power plant as a dashboard item
  const dashboardItems = plants.map((plant, index) => {
    const plantTotalWasteVolume = plant.wasteMassToVolume(plant.nuclearWaste).toFixed(2);
    const plantName = plant.name.replace(/_/g, ' ');
    const wasteProducedText = typeof wasteProducedThisYear === 'number' ? wasteProducedThisYear.toFixed(2) : 'N/A';
    const status = getStatus(plant);

    return (
      <tr key={index} className="item">
        <td className="name">{plantName}</td>
        <td className="capacity">{plant.capacity.toFixed(2)}</td>
        <td className="total-waste-produced">{plantTotalWasteVolume}</td>
        <td className="waste-produced-this-year">{wasteProducedText}</td>
        <td className="status">{status}</td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Capacity</th>
            <th>Total Waste Produced</th>
            <th>Waste Produced This Year</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{dashboardItems}</tbody>
      </table>
    </div>
  );
};

export default Dashboard;
