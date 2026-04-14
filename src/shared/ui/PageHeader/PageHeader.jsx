import './PageHeader.scss';
import {PAGE_HEADER} from "../../config/pageTitle";
import Select from "../Select/Select";
import {addToast} from "../../../features/toasts/toastsSlice";
import {useDispatch} from "react-redux";

export default function PageHeader({ pageName, children }) {
    const dispatch = useDispatch();

    const header = PAGE_HEADER.find(item => item.name === pageName);
    if (!header) return null;

    const {
        title,
        subtitle,
        controls
    } = header

    const layoutClass = header.controls?.coords === 'top' ? 'layout-top' : 'layout-bottom';

    const handleAction = (actionName) => {
        dispatch(addToast({
            message: actionName,
            type: 'success',
        }));
    };

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
                                <Select key={ctrl.id}
                                        config={ctrl}
                                        onChange={(val) => handleAction(val)}
                                />
                            );
                        }
                        return (
                            <button key={ctrl.id}
                                    className={`ui-button ${ctrl.className} header-button`}
                                    onClick={() => handleAction(ctrl.action)}>
                                {ctrl.title}
                            </button>
                        );
                    })}
                </div>
            )}

            {children}
        </div>
    );
}