import {useEffect, useRef, useState} from 'react';
import './Select.scss'

export default function Select({ config, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);

    const {
        options = [],
        placeholder = "Select...",
        className = ""
    } = config;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target))
                setIsOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleOptionClick = (optionValue) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    const selectedOption = options.find(opt => opt.value === value);

    return (
        <div className={`custom-select ${className}`} ref={selectRef}>
            <div
                className={`select-header ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={selectedOption ? 'selected-text' : 'placeholder'}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>

                <div className="arrow"></div>
            </div>

            {isOpen && (
                <div className="select-dropdown">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={`select-option ${value === option.value ? 'active' : ''}`}
                            onClick={() => handleOptionClick(option.value)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}