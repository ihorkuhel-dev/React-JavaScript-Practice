import {useGetClientsQuery} from "../../features/clients/api/clientsApi";
import PageHeader from "../../shared/ui/PageHeader/PageHeader";
import ClientListTable from "./ui/ClientListTable/ClientListTable";
import Pagination from "./ui/Pagination/Pagination";
import { useClientListParams } from "./lib/useClientListParams";
import {useSEO} from "../../shared/hooks/useSEO";

export default function ClientList() {

    useSEO({ title: 'Clients | CRM', description: 'List of all clinic patients' });

    const { currentPage, currentLimit, currentSortBy, currentOrder, skipCount } = useClientListParams();

    const { data, isLoading } = useGetClientsQuery({
        limit: currentLimit,
        skip: skipCount,
        sortBy: currentSortBy,
        order: currentOrder,
    });

    const clients = data?.users || [];
    const totalClients = data?.total || 0;
    
    return (
        <>
            <PageHeader pageName="Customers">
            </PageHeader>
            <div className="page-content client-list">
                <ClientListTable clients={clients} isLoading={isLoading}/>
                <Pagination currentLimit={currentLimit} currentPage={currentPage} totalClients={totalClients}/>
            </div>
        </>
    )
}