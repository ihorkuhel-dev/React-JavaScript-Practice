import {useGetClientByIdQuery} from "../../features/clients/api/clientsApi";
import PageHeader from "../../shared/ui/PageHeader/PageHeader";
import ClientInformationTable from "./ClientInformationTable/ClientInformationTable";
import "./ClientCard.scss"
import {useParams} from "react-router";
export default function ClientCard() {

    const { id } = useParams();
    const {data, loading} = useGetClientByIdQuery(id);

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

    return (
        <>
            <PageHeader pageName="Customer information" id={id}/>
            <div className="page-content">
                <div className="client-information">
                    <ClientInformationTable data={personalData} title="Customer information"/>
                    <ClientInformationTable data={contactDetails}  title="Master contact detail"/>
                </div>
            </div>

        </>
    )
}