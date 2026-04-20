export const CATEGORY_STATS= [
    {
        id: 1,
        title: "Antibiotics",
        count: 14.7,
        prefix: "k",
        percent: 2
    },
    {
        id: 2,
        title: "Antivirals",
        count: 620,
        percent: 10
    },
    {
        id: 3,
        title: "Antifungals",
        count: 530,
    },
    {
        id: 4,
        title: "Antiparasitic",
        count: 12.1,
        prefix: "k",
        percent:8
    },
    {
        id: 5,
        title: "Anesthetics",
        count: 340,
        percent: 20
    },
    {
        id: 6,
        title: "Anesthetics",
        count: 400,
    }
]

export const SALES_BY_REGION = [
    {
        id: 1,
        title: "California",
        sales: 600
    },
    {
        id: 2,
        title: "Florida",
        sales: 146
    },
    {
        id: 3,
        title: "Georgia",
        sales: 158
    },
    {
        id: 4,
        title: "Indiana",
        sales: 602
    },
    {
        id: 5,
        title: "Missouri",
        sales: 389
    },
    {
        id: 6,
        title: "Washington",
        sales: 374
    }
]

export const LOST_OPPORTUNITY = {
    currentValue: 1200,
    maxValue: 1600,
}

export const TOTAL_BUDGET_DATA = {
    day: {
        labels: ["00:00", "03:00", "06:00", "09:00", "12:00", "15:00", "18:00", "21:00"],
        planValues: [12000, 11000, 15000, 22000, 28000, 26000, 20000, 16000],
        actualValues: [10000, 9500, 11000, 18000, 24000, 28000, 23000, 15000]
    },
    month: {
        labels: ["1", "4", "7", "10", "13", "16", "19", "22", "25", "28", "31"],
        planValues: [15000, 18000, 16000, 24000, 31000, 33000, 29000, 36000, 27000, 21000, 25000],
        actualValues: [14000, 16000, 9000, 12000, 10000, 28000, 34000, 32000, 19000, 16000, 17000]
    },
    year: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        planValues: [13500, 19000, 20000, 16000, 23000, 33000, 33000, 29000, 34000, 37000, 28000, 23000],
        actualValues: [16000, 15500, 4000, 9000, 11500, 9000, 32000, 34000, 28000, 17000, 16000, 16000]
    }
}