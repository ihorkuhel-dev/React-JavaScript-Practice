import './Input.scss';
import {useState} from "react";
import PasswordToggle from "../PasswordToggle/PasswordToggle";

export default function Input(props) {

    const {
        type = 'text',
        autoComplete = 'off',
        required = true,
        classList = '',
        placeholder = '',
        name,
        id,
        value,
        onChange,
        label,
        error,
    } = props

    const [showPassword, setShowPassword] = useState(false);
    const inputType = type === 'password' && showPassword ? 'text' : type;

    return (
        <>
            <div className={`input-wrapper ${type}-wrapper ${error && 'error-wrapper'} `}>
                <input
                    type={inputType}
                    id={id}
                    name={name}
                    required={required}
                    value={value}
                    onChange={onChange}
                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    className={`${value ? 'has-value' : ''} ${classList}`}
                />
                {label && (
                    <label htmlFor={id}>{label}</label>
                )}
                {type === 'password' && (
                    <PasswordToggle
                        showPassword={showPassword}
                        onToggle={() => setShowPassword(!showPassword)}
                    />
                )}
            </div>
            {error && (
                <div className="input-error">{error}</div>
            )}
        </>
    )
}