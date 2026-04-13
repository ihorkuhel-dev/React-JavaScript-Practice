import './PageHeader.scss';
import {PAGE_HEADER} from "../../config/pageTitle";

export default function PageHeader({ pageName }) {

    const header = PAGE_HEADER.find(item => item.name === pageName);
    if (!header) return null;

    const {
        title,
        subtitle,
        controls
    } = header

    const layoutClass = header.controls?.coords === 'top' ? 'layout-top' : 'layout-bottom';

    return (
        <div className={`page-header ${layoutClass}`}>


            <div className="page-header__info">
                {title && <h1 className="page-header__title">{title}</h1>}

                {subtitle && (
                    <p className="page-header__subtitle">
                        {subtitle}
                    </p>
                )}
            </div>


            {controls && (
                <div className="page-header__controls">
                    {controls.control.map((ctrl) => {
                        if (ctrl.type === 'select') {
                            return (
                                <select key={ctrl.id} className={`ui-select ${ctrl.className}`}>
                                    <option>{ctrl.title}</option>
                                </select>
                            );
                        }
                        return (
                            <button key={ctrl.id} className={`ui-button ${ctrl.className} header-button`}>
                                {ctrl.title}
                            </button>
                        );
                    })}
                </div>
            )}

        </div>
    );
}