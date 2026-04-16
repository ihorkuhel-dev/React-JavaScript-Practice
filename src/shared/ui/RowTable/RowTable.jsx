import './RowTable.scss'

export default function RowTable({data, className}) {

    return (
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
    )
}