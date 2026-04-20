import {useSearchParams} from "react-router-dom";

export const useClientListParams = () => {
    let [searchParams] = useSearchParams();

    const currentPage = Number(searchParams.get('page')) || 1;
    const currentLimit = Number(searchParams.get('limit')) || 10;
    const currentSortBy = searchParams.get('sortBy') || '';
    const currentOrder = searchParams.get('order') || 'asc';
    const skipCount = (currentPage - 1) * currentLimit;

    return {
        currentPage,
        currentLimit,
        currentSortBy,
        currentOrder,
        skipCount
    };
};
