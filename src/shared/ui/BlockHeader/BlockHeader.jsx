import './BlockHeader.scss'

export default function BlockHeader(props) {

    const {
        title,
        Icon,
    } = props

    return (
        <div className="block-header">
            {Icon && (Icon)}
            <h4>{title}</h4>
        </div>
    )
}