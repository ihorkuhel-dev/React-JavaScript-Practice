import './ClientListTable.scss';
import React, {useCallback} from "react";
import {useNavigate} from "react-router";
import {useSearchParams} from "react-router-dom";
import SkeletonTable from "../../../../shared/ui/Skeleton/SkeletonTable";

export default function ClientListTable(props) {

    const {
        clients,
        isLoading = true
    } = props;

    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const currentSortBy = searchParams.get('sortBy') || '';
    const currentSortByOrder = searchParams.get('order') || '';

    const renderSortIndicator = (field) => {
        if (currentSortBy !== field) return null;
        return currentSortByOrder === 'asc' ? ' ↑' : ' ↓';
    };

    const handleSort = useCallback((e) => {
        const field = e.currentTarget.dataset.field;
        if (!field) return;

        let orderBy = 'asc';

        if (currentSortBy === field)
            orderBy = currentSortByOrder === 'asc' ? 'desc' : 'asc';

        searchParams.set('sortBy', field);
        searchParams.set('order', orderBy);
        searchParams.set('page', '1');
        setSearchParams(searchParams);
    }, [currentSortBy, currentSortByOrder, searchParams, setSearchParams]);

    const handleRowClick = useCallback((e) => {
        const clientId = e.currentTarget.dataset.id;
        if (clientId) navigate(`/client-card/` + clientId);
    }, [navigate]);

    if (isLoading)
        return <SkeletonTable rows={10} columns={6} />;
    if (!clients || clients.length === 0)
        return <div className="table-empty">Клиенты не найдены</div>;

    return (
            <div className="table-wrapper">
                <table className="client-table">
                    <thead>
                    <tr>
                        <th data-field="id" onClick={handleSort}>ID {renderSortIndicator('id')}</th>
                        <th data-field="firstName" onClick={handleSort}>Name {renderSortIndicator('firstName')}</th>
                        <th data-field="age" onClick={handleSort}>Age {renderSortIndicator('age')}</th>
                        <th data-field="email" onClick={handleSort}>Email {renderSortIndicator('email')}</th>
                        <th data-field="phone" onClick={handleSort}>Phone {renderSortIndicator('phone')}</th>
                        <th data-field="company.title" onClick={handleSort}>Role {renderSortIndicator('company.title')}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {clients.map((client) => (
                        <tr key={client.id} data-id={client.id} onClick={handleRowClick}>
                            <td>{client.id}</td>
                            <td>{client.firstName } {client.lastName}</td>
                            <td>{client.age}</td>
                            <td>{client.email}</td>
                            <td>{client.phone}</td>
                            <td>{client.company.title}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
    );
};
