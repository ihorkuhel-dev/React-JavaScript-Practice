import "./ProductDescription.scss"

export default function ProductDescription({data, className}) {

    return (
        <>
            <div className={`category-block ${className}`}>

                {data.items.map(item => (
                    <div className="category" key={item.id}>
                        <h4>
                            {item.label}
                        </h4>
                        <p className="category-description">
                            {item.value}
                        </p>
                    </div>
                ))}


            </div>
        </>
    )
}