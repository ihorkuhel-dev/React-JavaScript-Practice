import { useGetClientByIdQuery } from "../../features/clients/api/clientsApi";
import PageHeader from "../../shared/ui/PageHeader/PageHeader";
import ClientInformationTable from "./ClientInformationTable/ClientInformationTable";
import BlockHeader from "../../shared/ui/BlockHeader/BlockHeader";
import DescriptionIcon from "../../shared/assets/DescriptionIcon";
import SelectTable from "./SelectTable/SelectTable";
import ClientTable from "./ClientTable/ClientTable";
import { TABLE_LABELS } from "../../shared/config/TableLables";
import { useState, useMemo } from "react";
import { useParams } from "react-router";
import "./ClientCard.scss";

const formatAddress = (addressObj) => {
    if (!addressObj) return "No address provided";
    return `${addressObj.address}, ${addressObj.city}, ${addressObj.state} ${addressObj.postalCode}`;
};

export default function ClientCard() {
    const { id } = useParams();
    const { data, isLoading, error } = useGetClientByIdQuery(id);
    const [activeTab, setActiveTab] = useState(TABLE_LABELS[0].label);

    const { personalData, contactDetails, processedData } = useMemo(() => {
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

    if (isLoading) return <div>Loading client data...</div>;
    if (error) return <div>Error loading client information.</div>;
    if (!data) return <div>Client not found.</div>;

    const handleTabChange = (item) => {
        setActiveTab(item.label);
    };

    return (
        <>
            <PageHeader pageName="Customer information" id={id} />
            <div className="page-content client">
                <div className="client-information">
                    <ClientInformationTable data={personalData} title="Customer information" editAble={true} />
                    <ClientInformationTable data={contactDetails} title="Master contact detail" editAble={true} />
                </div>

                <div className="client-details">
                    <BlockHeader title="Description" Icon={<DescriptionIcon />} />
                    <div className="client-table-container">
                        <SelectTable lables={TABLE_LABELS} activeTab={activeTab} onClick={handleTabChange} />
                        <ClientTable tabData={processedData} activeTab={activeTab} />
                    </div>
                </div>
            </div>
        </>
    );
}