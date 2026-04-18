import React, {useEffect, useState} from 'react';
import './ClientTable.scss';
import Button from "../../../shared/ui/Button/Button";
import Input from "../../../shared/ui/Input/Input";

export default function ClientTable(props) {
    const { tabData, activeTab } = props;
    const currentTableData = tabData[activeTab];

    const [localRows, setLocalRows] = useState([]);

    useEffect(() => {
        if (currentTableData && currentTableData.rows)
            setLocalRows(currentTableData.rows);
        else
            setLocalRows([]);

    }, [currentTableData, activeTab]);

    if (!currentTableData) return <div>No data available</div>;

    const isEditableTable = currentTableData.columns && currentTableData.columns.some(col => col.placeholder);

    const handleAddRow = () => {
        const newRow = {
            id: Date.now(),
            isNew: true
        };
        currentTableData.columns.forEach(col => {
            newRow[col.key] = '';
        });
        setLocalRows([...localRows, newRow]);
    };

    const handleRemoveRow = () => {
        if (localRows.length > 0)
            setLocalRows(localRows.slice(0, -1));
    };

    const handleSaveRow = () => {
        setLocalRows(localRows.map(row => ({ ...row, isNew: false })));
    };

    const handleInputChange = (id, key, value) => {
        setLocalRows(localRows.map(row =>
            row.id === id ? { ...row, [key]: value } : row
        ));
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter')
            handleSaveRow();
    };

    if (!currentTableData.columns) {
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
                    <tr>
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

                {localRows.map((row, index) => (
                    <tr key={row.id || `row-${index}`}>
                {currentTableData.columns.map((col, colIndex) => (
                    <td key={col.key || `col-${colIndex}`}>
                        {row.isNew && col.placeholder ? (
                            <div onKeyDown={handleKeyDown}>
                                <Input
                                    classList="edit table-cell"
                                    id={`${col.key}-input`}
                                    placeholder={col.placeholder}
                                    value={row[col.key] || ''}
                                    onChange={(e) => handleInputChange(row.id, col.key, e.target.value)}
                                    required={false}
                                />
                            </div>
                        ) : (
                            row[col.key]
                        )}
                    </td>
                ))}
                </tr>
                ))}
            </tbody>
            </table>

            {isEditableTable && (
                <div className="table-controls">
                    <Button className="table-controls" onClick={handleRemoveRow} type="button">-</Button>
                    <Button className="table-controls" onClick={handleSaveRow} type="button">Save</Button>
                    <Button className="table-controls" onClick={handleAddRow} type="button">+</Button>
                </div>
            )}
        </div>
    );
}