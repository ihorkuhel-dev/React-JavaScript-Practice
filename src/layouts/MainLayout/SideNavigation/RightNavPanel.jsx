import {NAV_BUTTONS} from "../../../shared/config/navigation";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../../features/auth/model/authSlice";
import {addToast} from "../../../features/toasts/toastsSlice";
import {selectUser} from "../../../features/user/model/userSlice";
import Button from "../../../shared/ui/Button/Button";

export default function RightNavPanel() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userInfo = useSelector(selectUser)
    const userName = ( userInfo.user?.firstName + " " + userInfo?.user?.lastName ) ?? 'User'


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
                        <Button className="nav-button"
                                title={btn.label === 'User Profile' ?
                                    userName + " profile" :
                                    btn.label
                        }
                                onClick={() => handleAction(btn.onClick)}

                        >
                            {Icon && <Icon />}
                        </Button>
                    </li>

                );
            })}
        </>
    )
}