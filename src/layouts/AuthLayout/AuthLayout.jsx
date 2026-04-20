import {Suspense} from "react";
import {Outlet} from "react-router-dom";
import ToastContainer from "../../features/toasts/ToastContainer";
import './AuthLayout.scss'

export default function AuthLayout() {

    return (
        <div className="auth-layout">
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
            <ToastContainer />
        </div>
    )
}