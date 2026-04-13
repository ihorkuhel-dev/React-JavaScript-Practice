import { useState, useEffect } from "react";
import { useAnimatedNumber } from "../../../../shared/hooks/useAnimatedNumber";
import { LOST_OPPORTUNITY } from "../../data/dashboardMock";
import "./LostOpportunity.scss";

export default function LostOpportunity() {
    const size = 200;
    const strokeWidth = 24;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const displayMaxValue = useAnimatedNumber(LOST_OPPORTUNITY.maxValue, 1000);

    const [offset, setOffset] = useState(circumference);

    useEffect(() => {
        const finalRatio = LOST_OPPORTUNITY.maxValue > 0
            ? LOST_OPPORTUNITY.currentValue / LOST_OPPORTUNITY.maxValue
            : 0;

        const targetOffset = circumference - (finalRatio * circumference);

        const timer = setTimeout(() => {
            setOffset(targetOffset);
        }, 50);

        return () => clearTimeout(timer);
    }, [circumference]);

    return (
        <div className="lost-opportunity-chart">
            <svg
                width="100%"
                height="100%"
                viewBox={`0 0 ${size} ${size}`}
                style={{ overflow: 'visible' }}
            >
                <defs>
                    <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#000" floodOpacity="0.08" />
                    </filter>
                </defs>

                <g filter="url(#softShadow)">
                    {}
                    <circle
                        cx={size / 2} cy={size / 2} r={radius}
                        fill="none" stroke="var(--accent-color--lighter)" strokeWidth={strokeWidth}
                        strokeLinecap="round"
                    />

                    {}
                    <circle
                        cx={size / 2} cy={size / 2} r={radius}
                        fill="none" stroke="var(--accent-color)" strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        transform={`rotate(-90 ${size / 2} ${size / 2})`}
                        style={{ transition: 'stroke-dashoffset 1s ease-out' }}
                    />
                </g>
            </svg>

            <div className="lost-opportunity-text">
                <span className="value">{displayMaxValue}</span>
                <span className="label">Total</span>
            </div>
        </div>
    );
}