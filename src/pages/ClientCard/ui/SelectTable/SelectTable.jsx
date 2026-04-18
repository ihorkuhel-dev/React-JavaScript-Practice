import "./SelectTable.scss"

export default function SelectTable(props) {

    const {
        lables,
        activeTab,
        onClick
    } = props

    return (
        <>
            <nav className="lables">
                <ul>
                    {lables.map((item) => (
                        <li key={item.id}
                            className={item.label === activeTab ? "selected" : "" }
                            onClick={() => onClick(item)}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>

            </nav>
        </>
    )
}