import React from 'react';
import './ClientTable.scss';
import Button from "../../../../shared/ui/Button/Button";
import Input from "../../../../shared/ui/Input/Input";
import { useEditableData } from "../../../../shared/hooks/useEditableData";

export default function ClientTable(props) {
    const { tabData, activeTab } = props;
    const currentTableData = tabData[activeTab];

    const {
        localData: localRows,
        updateFieldById,
        addRow,
        removeLastRow,
        commitChanges
    } = useEditableData(currentTableData?.rows);

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
        addRow(newRow);
    };

    const handleRemoveRow = () => {
        removeLastRow();
    };

    const handleSaveRow = () => {
        commitChanges();
    };

    const handleInputChange = (id, key, value) => {
        updateFieldById(id, key, value);
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

    const handleCellChange = (e) => {
        const rowId = e.currentTarget.dataset.rowid;
        const colKey = e.currentTarget.dataset.colkey;
        if (rowId && colKey) {
            // Need to convert rowId back to number if it was number
            const numericId = isNaN(Number(rowId)) ? rowId : Number(rowId);
            updateFieldById(numericId, colKey, e.target.value);
        }
    };

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
                    <td 
                        key={col.key || `col-${colIndex}`} 
                        className={row.isNew && col.placeholder ? 'editing-cell' : ''}
                    >
                        {row.isNew && col.placeholder ? (
                            <div onKeyDown={handleKeyDown}>
                                <Input
                                    classList="edit table-cell"
                                    id={`${col.key}-input`}
                                    placeholder={col.placeholder}
                                    value={row[col.key] || ''}
                                    data-rowid={row.id}
                                    data-colkey={col.key}
                                    onChange={handleCellChange}
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