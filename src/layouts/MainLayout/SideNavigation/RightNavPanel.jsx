import {NAV_BUTTONS} from "../../../shared/config/navigation";
import { useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {logout} from "../../../features/auth/model/authSlice";

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
                console.log('Открываем модалку настроек');
                break;
            case 'openUserProfile':
                console.log('Переходим в профиль');
                break;
            case 'openInfo':
                console.log('Открыть Info');
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