import  './Input.scss';
import {useState} from "react";
import PasswordToggle from "../PasswordToggle/PasswordToggle";

export default function Input(props) {

    const {
        type = 'text',
        autoComplete = 'off',
        required = true,
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
            <div className={`input-wrapper ${type}-wrapper`}>
                <input
                    type={inputType}
                    id={id}
                    name={name}
                    required={required}
                    value={value}
                    onChange={onChange}
                    autoComplete={autoComplete}
                    className={value ? 'has-value' : ''}

                />
                <label htmlFor={id}>{label}</label>
                {type === 'password' && (
                    <PasswordToggle
                        showPassword={showPassword}
                        onToggle={() => setShowPassword(!showPassword)}
                    />
                )}
                <span className="input-border"></span>
            </div>
            {error && (
                <div className="input-error">{error}</div>
            )}
        </>
    )
}