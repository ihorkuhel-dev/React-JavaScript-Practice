import {useGetClientByIdQuery} from "../../features/clients/api/clientsApi";
import PageHeader from "../../shared/ui/PageHeader/PageHeader";
import ClientInformationTable from "./ClientInformationTable/ClientInformationTable";
import "./ClientCard.scss"
import {useParams} from "react-router";
import BlockHeader from "../../shared/ui/BlockHeader/BlockHeader";
import DescriptionIcon from "../../shared/assets/DescriptionIcon";
import SelectTable from "./SelectTable/SelectTable";
import ClientTable from "./ClientTable/ClientTable";
import {TABLE_LABELS} from "../../shared/config/TableLables";
import {useState} from "react";


export default function ClientCard() {

    const { id } = useParams();
    const {data, loading} = useGetClientByIdQuery(id);
    const [activeTab, setActiveTab] = useState(TABLE_LABELS[0].label)

    const personalData = [
        { label: "Name", value: `${data?.firstName || ''} ${data?.lastName || ''}`.trim() },
        { label: "Gender", value: data?.gender },
        { label: "Birth Date", value: data?.birthDate },
        { label: "Blood Group", value: data?.bloodGroup },
        { label: "Weight", value: data?.weight },
        { label: "Height", value: data?.height },
    ];

    const contactDetails = [
        { label: "Phone", value: data?.phone },
        { label: "Email", value: data?.email },
        {
            label: "Address",
            value: data?.address
                ? `${data.address.address}, ${data.address.city}, ${data.address.state} ${data.address.postalCode}`
                : "No address provided"
        },
    ];

    const processedData = {
        "Contact Details": {
            rows: [
                { label: 'Phone', value: data?.phone || "Not provided" },
                { label: 'Email', value: data?.email || "Not provided" },
                {
                    label: 'Address',
                    value: data?.address
                        ? `${data.address.address}, ${data.address.city}, ${data.address.state} ${data.address.postalCode}`
                        : "No address provided"
                },
                { label: 'University', value: data?.university || "Not provided" },
            ]
        },

        "Crypto Details": {
            rows: [
                { label: 'Coin', value: data?.crypto?.coin },
                { label: 'Network', value: data?.crypto?.network },
                { label: 'Wallet', value: data?.crypto?.wallet },
            ]
        },

        "Company Details": {
            rows: [
                { label: 'Department', value: data?.company?.department },
                { label: 'Name', value: data?.company?.name },
                { label: 'Role', value: data?.company?.title },
                {
                    label: 'Address',
                    value: data?.company?.address
                        ? `${data.company.address.address}, ${data.company.address.city}, ${data.company.address.state} ${data.company.address.postalCode}`
                        : "No address provided"
                }
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

    const handleTabChange = (tab) => {
        setActiveTab(TABLE_LABELS[tab.id].label)
    }

    return (
        <>
            <PageHeader pageName="Customer information" id={id}/>
            <div className="page-content client">
                <div className="client-information">
                    <ClientInformationTable data={personalData} title="Customer information" editAble={true}/>
                    <ClientInformationTable data={contactDetails}  title="Master contact detail" editAble={true}/>
                </div>

                <div className="client-details">
                    <BlockHeader title="Description" Icon={<DescriptionIcon/>}/>
                    <div className="client-table-container">
                        <SelectTable lables={TABLE_LABELS} activeTab={activeTab} onClick={(item) => handleTabChange(item)}/>
                        <ClientTable tabData={processedData} activeTab={activeTab}/>
                    </div>
                </div>
            </div>

        </>
    )
}