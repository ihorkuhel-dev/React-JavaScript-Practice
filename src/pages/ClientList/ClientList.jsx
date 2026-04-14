import PageHeader from "../../shared/ui/PageHeader/PageHeader";
import {useGetClientsQuery} from "../../features/clients/api/clientsApi";
import {useSearchParams} from "react-router-dom";
import ClientTable from "./components/ClientTable/ClientTable";
import Pagination from "./components/Pagination/Pagination";

export default function ClientList() {

    let [searchParams, setSearchParams] = useSearchParams();

    const currentPage = Number(searchParams.get('page')) || 1;
    const currentLimit = Number(searchParams.get('limit')) || 10;
    const currentSortBy = searchParams.get('sortBy') || '';
    const currentOrder = searchParams.get('order') || 'asc';
    const skipCount = (currentPage - 1) * currentLimit;

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
            <div className="page-content">
                <ClientTable clients={clients} isLoading={isLoading}/>
                <Pagination currentLimit={currentLimit} currentPage={currentPage} totalClients={totalClients}/>
            </div>

        </>
    )
}