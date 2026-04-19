import './RowTable.scss'

export default function RowTable({data, className}) {

    return (
        <div className="overflow-x-wrap">
            <table className={`row-table ${className}`}>
                <tbody>
                {data.items.map((row) => (
                    <tr key={row.id}>
                        <th>{row.label}</th>
                        <td>{row.value}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}