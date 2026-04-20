import './Pagination.scss';
import {useSearchParams} from "react-router-dom";
import Button from "../../../../shared/ui/Button/Button";

export default function Pagination(props) {

    const {
        totalClients,
        currentPage,
        currentLimit,
    } = props;

    let [searchParams, setSearchParams] = useSearchParams();

    const currentSortBy = searchParams.get('sortBy') || '';
    const currentOrder = searchParams.get('order') || 'asc';

    const totalPages = Math.round(totalClients / currentLimit);
    if (totalPages <= 1) return null;

    const handlePageChange = (newPage) => {

        setSearchParams(
            {
                page: newPage,
                limit: currentLimit,
                sortBy: currentSortBy,
                order: currentOrder,
            }
        );
    }


    return (
        <div className="pagination">
            <Button
                className="pagination-btn transparent"
                disabled={currentPage <= 1}
                onClick={() => handlePageChange(currentPage-1)}
                ariaLabel="Previous page"
            >🡐</Button>
            <span className="pagination-info">
                 {currentPage} ... {totalPages}
            </span>
            <Button
                className="pagination-btn transparent"
                disabled={currentPage===totalPages}
                onClick={() => handlePageChange(currentPage+1)}
                ariaLabel="Next page"
            >🡒</Button>
        </div>
    );
};
