import "./CategoryCards.scss"
import {useAnimatedNumber} from "../../../../shared/hooks/useAnimatedNumber";

export default function CategoryCards({category}) {
    const {
        title,
        count,
        prefix = null,
        percent
    } = category

    const animatedCount = useAnimatedNumber(count, 1200);

    return (
        <div className="dashboard--category-card">
            <h4>{title}</h4>
            <div className="stats">
                <span className="stats-count">
                    {animatedCount} {prefix}
                </span>
                {percent && (
                    <span className="stats-percent">
                        ↑ {percent}%
                    </span>
                )}
            </div>
        </div>
    )
}