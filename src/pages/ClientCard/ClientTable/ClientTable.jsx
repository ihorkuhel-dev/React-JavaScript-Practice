import "./ClientTable.scss"

export default function ClientTable(props) {

    const {
        tabData,
        activeTab
    } = props

    const currentTableData = tabData[activeTab];

    if (!currentTableData) return <div>No data available</div>;

    if (activeTab !== "Orders Details") {
        return (
            <div className="overflow-x-wrap">
                <table className="table-client">
                    <thead>
                    <tr>
                        {currentTableData.rows.map((item) => (
                            <th key={item.label}>{item.label}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    <tr >
                        {currentTableData.rows.map((item) => (
                            <td key={item.label}>{item.value}</td>
                        ))}
                    </tr>

                    </tbody>
                </table>
            </div>
        );
    }

    return (
        <div className="overflow-x-wrap">
            <table className="table-client">
                <thead>
                <tr>
                    {currentTableData.columns.map(col => (
                        <th key={col.key}>{col.label}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {currentTableData.rows.map(row => (
                    <tr key={row.id}>
                        {currentTableData.columns.map(col => (
                            <td key={col.key}>
                                {row[col.key]}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    );
};