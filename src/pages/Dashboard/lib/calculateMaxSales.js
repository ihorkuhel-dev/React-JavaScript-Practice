export const calculateMaxSales = (salesByRegion) => {
    if (!salesByRegion || salesByRegion.length === 0) return 0;
    return Math.max(...salesByRegion.map(item => item.sales)) || 0;
};
