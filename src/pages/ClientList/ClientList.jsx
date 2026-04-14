import PageHeader from "../../shared/ui/PageHeader/PageHeader";
import {useGetClientsQuery} from "../../features/clients/api/clientsApi";
import {useSearchParams} from "react-router-dom";

export default function ClientList() {

    let [searchParams, setSearchParams] = useSearchParams();

    const currentPage = Number(searchParams.get('page')) || 1;
    const currentLimit = Number(searchParams.get('limit')) || 10;
    const currentSortBy = searchParams.get('sortBy') || '';

    const skipCount = (currentPage - 1) * currentLimit;

    const { data, isLoading } = useGetClientsQuery({
        limit: currentLimit,
        skip: skipCount,
        sortBy: currentSortBy,
        order: 'asc'
    });

    const clients = data?.users || [];
    const totalClients = data?.total || 0;

    return (
        <>
            <PageHeader pageName="Customers" />
            <div className="page-content">
                <h2>Client List page</h2>
            </div>

        </>
    )
}