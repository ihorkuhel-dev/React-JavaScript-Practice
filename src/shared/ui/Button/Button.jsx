import "./Button.scss"

export default function Button(props) {
    const {
        children,
        type= 'button',
        disabled = false,
        onClick,
        className = ''
    } = props

    return (
        <button
            className={`ui-button ${className}`}
        type={type}
        disabled={disabled}
        onClick={onClick}
        >
            {children}
        </button>
    )
}