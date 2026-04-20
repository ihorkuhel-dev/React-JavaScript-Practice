import { useState, useEffect, useCallback } from 'react';

export const useEditableData = (initialData) => {
    const [localData, setLocalData] = useState([]);
    const [activeEdit, setActiveEdit] = useState(false);

    useEffect(() => {
        if (initialData) {
            setLocalData(Array.isArray(initialData) ? initialData.map(item => ({ ...item })) : []);
        } else {
            setLocalData([]);
        }
    }, [initialData]);

    const enableEdit = useCallback(() => setActiveEdit(true), []);
    const disableEdit = useCallback(() => setActiveEdit(false), []);

    const updateFieldByIndex = useCallback((index, key, value) => {
        setLocalData(prev => {
            const newData = [...prev];
            newData[index] = { ...newData[index], [key]: value };
            return newData;
        });
    }, []);

    const updateFieldById = useCallback((id, key, value) => {
        setLocalData(prev =>
            prev.map(row => (row.id === id ? { ...row, [key]: value } : row))
        );
    }, []);

    const addRow = useCallback((newRow) => {
        setLocalData(prev => [...prev, newRow]);
    }, []);

    const removeLastRow = useCallback(() => {
        setLocalData(prev => (prev.length > 0 ? prev.slice(0, -1) : []));
    }, []);

    const commitChanges = useCallback(() => {
        setLocalData(prev => prev.map(row => ({ ...row, isNew: false })));
        disableEdit();
    }, [disableEdit]);

    const discardChanges = useCallback(() => {
        if (initialData) {
            setLocalData(Array.isArray(initialData) ? initialData.map(item => ({ ...item })) : []);
        } else {
            setLocalData([]);
        }
        disableEdit();
    }, [initialData, disableEdit]);

    return {
        localData,
        activeEdit,
        enableEdit,
        disableEdit,
        updateFieldByIndex,
        updateFieldById,
        addRow,
        removeLastRow,
        commitChanges,
        discardChanges,
        setLocalData
    };
};
