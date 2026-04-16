import './BlockHeader.scss'

export default function BlockHeader(props) {

    const {
        title,
        Icon,
        className = ''
    } = props

    return (
        <div className={`block-header ${className}`}>
            {Icon && (Icon)}
            <h4>{title}</h4>
        </div>
    )
}