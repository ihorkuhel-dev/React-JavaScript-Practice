import './ClientInformationTable.scss';

export default function ClientInformationTable({data, title}) {

    if (!data) return null;

    return (
        <dl className="info-card__list">
            <h4>{title}</h4>
            {data.map((row, index) => (
                <div className="info-card__row" key={index}>
                    <dt className="info-card__term">{row.label}</dt>
                    <dd className="info-card__desc">{row.value}</dd>
                </div>
            ))}
        </dl>
    );
};
