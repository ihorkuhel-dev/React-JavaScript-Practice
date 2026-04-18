import {useState} from "react";
import {useParams} from "react-router";
import "./ClientCard.scss";
import {useGetClientByIdQuery} from "../../features/clients/api/clientsApi";
import DescriptionIcon from "../../shared/assets/DescriptionIcon";
import {TABLE_LABELS} from "../../shared/config/TableLables";
import BlockHeader from "../../shared/ui/BlockHeader/BlockHeader";
import InfoCard from "../../shared/ui/InfoCard/InfoCard";
import PageHeader from "../../shared/ui/PageHeader/PageHeader";
import ClientTable from "./ui/ClientTable/ClientTable";
import SelectTable from "./ui/SelectTable/SelectTable";
import { useClientCardData } from "./lib/useClientCardData";

export default function ClientCard() {
    const { id } = useParams();
    const { data, isLoading, error } = useGetClientByIdQuery(id);
    const [activeTab, setActiveTab] = useState(TABLE_LABELS[0].label);

    const { personalData, contactDetails, processedData } = useClientCardData(data);

    if (isLoading) return <div>Loading client data...</div>;
    if (error) return <div>Error loading client information.</div>;
    if (!data) return <div>Client not found.</div>;

    const handleTabChange = (item) => {
        setActiveTab(item.label);
    };

    return (
        <>
            <PageHeader pageName="Customer information" id={id} />
            <div className="page-content client-page">
                <div className="client-information">
                    <InfoCard data={personalData} title="Customer information" editAble={true} />
                    <InfoCard data={contactDetails} title="Master contact detail" editAble={true} />
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