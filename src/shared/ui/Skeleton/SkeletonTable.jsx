import '../../../pages/ClientList/ui/ClientListTable/ClientListTable.scss';
import Skeleton from './Skeleton';

export default function SkeletonTable({ rows = 8, columns = 6 }) {
    return (
        <div className="table-wrapper">
            <table className="client-table">
                <thead>
                    <tr>
                        {Array.from({ length: columns }).map((_, colIndex) => (
                            <th key={colIndex}>
                                <Skeleton variant="text" width="80%" height="20px" />
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: rows }).map((_, rowIndex) => (
                        <tr key={rowIndex}>
                            {Array.from({ length: columns }).map((_, colIndex) => (
                                <td key={colIndex}>
                                    <Skeleton variant="text" width={`${Math.random() * 40 + 40}%`} height="16px" />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
