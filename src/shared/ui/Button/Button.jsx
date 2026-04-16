import "./Button.scss"
export default function Button({ as = 'button', children, ...rest }) {

    const Tag = as;

    const {
        type= as === 'button'? 'button' : '',
        disabled = as === 'button'? false: '',

        to,
        label,

        href,
        target,

        onClick,
        className = ''
    } = rest

    return (
        <Tag
            className={`ui-button ${className}`}
            type={type}
            disabled={disabled}

            to={to}
            label={label}

            href={href}
            target={target}

            onClick={onClick}
        >
            {children}
        </Tag>
    )
}