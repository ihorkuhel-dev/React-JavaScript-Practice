import { useMemo } from "react";
import { TABLE_LABELS } from "../../../shared/config/TableLables";
import { formatAddress } from "../../../shared/utils/formatAddress";

export const useClientCardData = (data) => {
    return useMemo(() => {
        if (!data) return { personalData: [], contactDetails: [], processedData: {} };

        const personal = [
            { label: "Name", value: `${data.firstName || ''} ${data.lastName || ''}`.trim() },
            { label: "Gender", value: data.gender },
            { label: "Birth Date", value: data.birthDate },
            { label: "Blood Group", value: data.bloodGroup },
            { label: "Weight", value: data.weight },
            { label: "Height", value: data.height },
        ];

        const contact = [
            { label: "Phone", value: data.phone },
            { label: "Email", value: data.email },
            { label: "Address", value: formatAddress(data.address) },
        ];

        const processed = {
            "Contact Details": {
                rows: [
                    ...contact,
                    { label: 'University', value: data.university || "Not provided" },
                ]
            },
            "Crypto Details": {
                rows: [
                    { label: 'Coin', value: data.crypto?.coin },
                    { label: 'Network', value: data.crypto?.network },
                    { label: 'Wallet', value: data.crypto?.wallet },
                ]
            },
            "Company Details": {
                rows: [
                    { label: 'Department', value: data.company?.department },
                    { label: 'Name', value: data.company?.name },
                    { label: 'Role', value: data.company?.title },
                    { label: 'Address', value: formatAddress(data.company?.address) }
                ]
            },
            "Orders Details": {
                columns: [
                    { key: 'date', label: 'Create date', placeholder: 'Enter Date' },
                    { key: 'product', label: 'Product', placeholder: 'Enter Name' },
                    { key: 'quantity', label: 'Quantity', placeholder: '0' },
                    { key: 'productAmount', label: 'Product amount', placeholder: '0' },
                    { key: 'totalPaid', label: 'Total paid', placeholder: '0' },
                    { key: 'pendingAmount', label: 'Pending amount', placeholder: '0' },
                    { key: 'status', label: 'Order status', placeholder: 'Status' }
                ],
                rows: [
                    {
                        id: 1,
                        date: '01 Jun, 2023',
                        product: 'Pain relieve ointment',
                        quantity: 10,
                        productAmount: 12000,
                        totalPaid: 18000,
                        pendingAmount: 4000,
                        status: 'Shipping'
                    }
                ]
            }
        };

        return { personalData: personal, contactDetails: contact, processedData: processed };
    }, [data]);
};
