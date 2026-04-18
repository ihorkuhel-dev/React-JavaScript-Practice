import React, { Suspense } from "react";
import {Outlet} from "react-router-dom";
import './AuthLayout.scss'

export default function AuthLayout() {

    return (
        <div className="auth-layout">
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}