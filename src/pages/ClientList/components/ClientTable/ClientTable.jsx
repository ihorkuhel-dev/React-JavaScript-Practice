import './ClientTable.scss';
import { useSearchParams} from "react-router-dom";
import { useNavigate} from "react-router";

export default function ClientTable(props) {

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

    if (isLoading)
        return <div className="table-loader">Загрузка данных...</div>;
    if (!clients || clients.length === 0)
        return <div className="table-empty">Клиенты не найдены</div>;

    const handleSort = (field) => {
        let orderBy = 'asc';

        if (currentSortBy === field)
            orderBy = currentSortByOrder === 'asc' ? 'desc' : 'asc';

        searchParams.set('sortBy', field);
        searchParams.set('order', orderBy);
        searchParams.set('page', '1');
        setSearchParams(searchParams);
    }

    return (
                <table className="client-table">
                    <thead>
                    <tr>
                        <th onClick={() => handleSort('id')}>ID {renderSortIndicator('id')}</th>
                        <th onClick={() => handleSort('firstName')}>Имя клиента {renderSortIndicator('firstName')}</th>
                        <th onClick={() => handleSort('age')}>Возраст {renderSortIndicator('age')}</th>
                        <th onClick={() => handleSort('email')}>Email {renderSortIndicator('email')}</th>
                        <th onClick={() => handleSort('phone')}>Телефон {renderSortIndicator('phone')}</th>
                        <th onClick={() => handleSort('company.title')}>Должность {renderSortIndicator('company.title')}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {clients.map((client) => (
                        <tr key={client.id} onClick={() => navigate(`/client-card/`+client.id)}>
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
    );
};
