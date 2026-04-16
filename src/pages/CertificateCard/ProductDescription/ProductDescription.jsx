import "./ProductDescription.scss"

export default function ProductDescription({data, className}) {

    return (
        <>
            <div className={`category-block ${className}`}>

                {data.items.map(item => (
                    <div className="category" key={item.id}>
                        <h6>
                            {item.label}
                        </h6>
                        <p className="category-description">
                            {item.value}
                        </p>
                    </div>
                ))}


            </div>
        </>
    )
}