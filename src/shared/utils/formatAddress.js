export const formatAddress = (addressObj) => {
    if (!addressObj) return "No address provided";
    return `${addressObj.address}, ${addressObj.city}, ${addressObj.state} ${addressObj.postalCode}`;
};
