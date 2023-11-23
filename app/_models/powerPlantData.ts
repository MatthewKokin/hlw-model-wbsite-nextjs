interface PowerPlantData {
    name: string;
    capacity: number;
    days_before_closing: number;
    isOperational: boolean;
    construction_done: number | null;
    isBuilding: boolean;
    type: string;
    isStartedbuilding: boolean;
    startedBuildingIn: number;
    stringDate?: string; // Optional field
}

const data: PowerPlantData[] = [
    {"name": "Hartlepool", "capacity": 1.185, "days_before_closing": 137, "isOperational": true, "construction_done": null, "isBuilding": false, "type": "AGR", "isStartedbuilding": true, "startedBuildingIn": 0},

    {"name": "Heysham_A", "capacity": 1.060, "days_before_closing": 46, "isOperational": true, "construction_done": null, "isBuilding": false, "type": "AGR", "isStartedbuilding": true, "startedBuildingIn": 0},

    {"name": "Heysham_B", "capacity": 1.240, "days_before_closing": 2238, "isOperational": true, "construction_done": null, "isBuilding": false, "type": "AGR", "isStartedbuilding": true, "startedBuildingIn": 0},

    {"name": "Sizewell_B", "capacity": 1.198, "days_before_closing": 4064, "isOperational": true, "construction_done": null, "isBuilding": false, "type": "AGR", "isStartedbuilding": true, "startedBuildingIn": 0},

    {"name": "Torness", "capacity": 1.200, "days_before_closing": 2238, "isOperational": true, "construction_done": null, "isBuilding": false, "type": "AGR", "isStartedbuilding": true, "startedBuildingIn": 0},

    {"name": "Hinkley_Point_C", "capacity": 3.20, "days_before_closing": 65*365, "isOperational": false, "construction_done": 717, "isBuilding": true, "type": "EPR", "isStartedbuilding": true, "startedBuildingIn": 0},

    {"name": "Sizewell_C", "capacity": 3.20, "days_before_closing": 65*365, "isOperational": false, "construction_done": 352 + (7 * 365), "isBuilding": true, "type": "EPR", "isStartedbuilding": true, "startedBuildingIn": 0},

    {
        "name": "SMR-1",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 43,
        "stringDate": "01-01-2024"
    },
    {
        "name": "SMR-2",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 43,
        "stringDate": "01-01-2024"
    },
    {
        "name": "SMR-3",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 409,
        "stringDate": "01-01-2025"
    },
    {
        "name": "SMR-4",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 774,
        "stringDate": "01-01-2026"
    },
    {
        "name": "SMR-5",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 774,
        "stringDate": "01-01-2026"
    },
    {
        "name": "SMR-6",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 1139,
        "stringDate": "01-01-2027"
    },
    {
        "name": "SMR-7",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 1504,
        "stringDate": "01-01-2028"
    },
    {
        "name": "SMR-8",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 1504,
        "stringDate": "01-01-2028"
    },
    {
        "name": "SMR-9",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 1870,
        "stringDate": "01-01-2029"
    },
    {
        "name": "SMR-10",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 2235,
        "stringDate": "01-01-2030"
    },
    {
        "name": "SMR-11",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 2235,
        "stringDate": "01-01-2030"
    },
    {
        "name": "SMR-12",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 2600,
        "stringDate": "01-01-2031"
    },
    {
        "name": "SMR-13",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 2965,
        "stringDate": "01-01-2032"
    },
    {
        "name": "SMR-14",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 2965,
        "stringDate": "01-01-2032"
    },
    {
        "name": "SMR-15",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 3331,
        "stringDate": "01-01-2033"
    },
    {
        "name": "SMR-16",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 3696,
        "stringDate": "01-01-2034"
    },
    {
        "name": "SMR-17",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 3696,
        "stringDate": "01-01-2034"
    },
    {
        "name": "SMR-18",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 4061,
        "stringDate": "01-01-2035"
    },
    {
        "name": "SMR-19",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 4426,
        "stringDate": "01-01-2036"
    },
    {
        "name": "SMR-20",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 4792,
        "stringDate": "01-01-2037"
    },
    {
        "name": "SMR-21",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 4792,
        "stringDate": "01-01-2037"
    },
    {
        "name": "SMR-22",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 5157,
        "stringDate": "01-01-2038"
    },
    {
        "name": "SMR-23",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 5522,
        "stringDate": "01-01-2039"
    },
    {
        "name": "SMR-24",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 5522,
        "stringDate": "01-01-2039"
    },
    {
        "name": "SMR-25",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 5887,
        "stringDate": "01-01-2040"
    },
    {
        "name": "SMR-26",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 6253,
        "stringDate": "01-01-2041"
    },
    {
        "name": "SMR-27",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 6253,
        "stringDate": "01-01-2041"
    },
    {
        "name": "SMR-28",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 6618,
        "stringDate": "01-01-2042"
    },
    {
        "name": "SMR-29",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 6983,
        "stringDate": "01-01-2043"
    },
    {
        "name": "SMR-30",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 6983,
        "stringDate": "01-01-2043"
    },
    {
        "name": "SMR-31",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 7348,
        "stringDate": "01-01-2044"
    },
    {
        "name": "SMR-32",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 7348,
        "stringDate": "01-01-2044"
    },
    {
        "name": "SMR-33",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 7714,
        "stringDate": "01-01-2045"
    },
    {
        "name": "SMR-34",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 7714,
        "stringDate": "01-01-2045"
    },
    {
        "name": "SMR-35",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 7714,
        "stringDate": "01-01-2045"
    },
    {
        "name": "SMR-36",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 8079,
        "stringDate": "01-01-2046"
    },
    {
        "name": "SMR-37",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 8079,
        "stringDate": "01-01-2046"
    },
    {
        "name": "SMR-38",
        "capacity": 0.47,
        "days_before_closing": 23725,
        "isOperational": false,
        "construction_done": 1460,
        "isBuilding": false,
        "type": "PWR",
        "isStartedbuilding": false,
        "startedBuildingIn": 8079,
        "stringDate": "01-01-2046"
    }
]

export default data;