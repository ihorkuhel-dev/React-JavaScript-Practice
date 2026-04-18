import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {logout} from "../../../features/auth/model/authSlice";
import {addToast} from "../../../features/toasts/toastsSlice";

export const useMenuAction = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (actionName) => {
        switch (actionName) {
            case 'logOut':
                dispatch(logout());
                navigate('/login');
                break;
            case 'openSettings':
            case 'openUserProfile':
            case 'openInfo':
                dispatch(addToast({
                    message: actionName,
                    type: 'info',
                }));
                break;
            default:
                break;
        }
    };
};