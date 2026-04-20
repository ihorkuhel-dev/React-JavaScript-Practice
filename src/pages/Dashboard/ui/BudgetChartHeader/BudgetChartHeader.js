import React from 'react';
import './BudgetChartHeader.scss';
import Button from "../../../../shared/ui/Button/Button";

export default function BudgetChartHeader({ activePeriod, setActivePeriod }) {
    return (
        <div className="BudgetChartHeader">
            <h3>Total budget</h3>
            <div className="ui-tools">
                <div className="plan-complete-difference">
                    <span className="plan">Plan</span>
                    <span className="actual">Actual</span>
                </div>
                <div className="select-chart-duration">
                    <Button className={`transparent ${activePeriod === 'day' ? 'active' : ''}`}
                            onClick={() => setActivePeriod('day')}
                    >Day</Button>
                    <Button className={`transparent ${activePeriod === 'month' ? 'active' : ''}`}
                            onClick={() => setActivePeriod('month')}
                    >Month</Button>
                    <Button className={`transparent ${activePeriod === 'year' ? 'active' : ''}`}
                            onClick={() => setActivePeriod('year')}
                    >Year</Button>
                </div>
            </div>
        </div>
    );
};
