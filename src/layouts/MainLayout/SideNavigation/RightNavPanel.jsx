import {NAV_BUTTONS} from "../../../shared/config/navigation";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {logout} from "../../../features/auth/model/authSlice";
import {addToast} from "../../../features/toasts/toastsSlice";

export default function RightNavPanel() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAction = (actionName) => {
        switch (actionName) {
            case 'logOut':
                dispatch(logout());
                navigate('/login');
                break;
            case 'openSettings':
                dispatch(addToast({
                    message: actionName,
                    type: 'info',
            }))
                break;
            case 'openUserProfile':
                dispatch(addToast({
                    message: actionName,
                    type: 'info',
                }))
                break;
            case 'openInfo':
                dispatch(addToast({
                    message: actionName,
                    type: 'info',
                }))
                break;
            default:
                console.warn('Неизвестное действие:', actionName);
        }
    };

    return (
        <>
            {NAV_BUTTONS.map((btn) => {
                const Icon = btn.icon;
                return (
                    <li key={btn.id}>
                        <button className="nav-button" title={btn.label} onClick={() => handleAction(btn.onClick)}>
                            {Icon && <Icon />}
                        </button>
                    </li>

                );
            })}
        </>
    )
}