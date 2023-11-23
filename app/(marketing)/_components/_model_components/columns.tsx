import { ColumnDef } from '@tanstack/react-table';
import PowerPlant from '../../../_models/PowerPlant';

export const columns: ColumnDef<PowerPlant>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: info => info.getValue().replace(/_/g, ' ')
  },
  {
    accessorKey: 'capacity',
    header: 'Capacity',
    cell: info => info.getValue().toFixed(2)
  },
  {
    accessorKey: 'totalWaste',
    header: 'Total Waste',
    cell: info => info.getValue().toFixed(2)
  },
  {
    accessorKey: 'wasteThisYear',
    header: 'Waste This Year',
    cell: info => info.getValue().toFixed(2)
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: info => info.getValue()
  },
];
