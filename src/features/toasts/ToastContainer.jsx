import {useDispatch, useSelector} from "react-redux";
import Toast from "../../shared/ui/Toast/Toast";
import {removeToast} from "./toastsSlice";
import './ToastContainer.scss'
import {useCallback} from "react";


export default function ToastContainer() {

    const toasts = useSelector((state) => state.toasts.items);
    const dispatch = useDispatch();

    const handleClose = useCallback((id) => {
        dispatch(removeToast(id));
    }, [dispatch]);

    if (toasts.length === 0) return null;

    return (
        <div className="ToastContainer">
            {toasts.map((toast) => (
                <Toast
                key={toast.id}
                message={toast.message}
                type={toast.type}
                duration={toast.duration}

                onClose={() => handleClose(toast.id)}
                />
            ))}
        </div>
    );
};
