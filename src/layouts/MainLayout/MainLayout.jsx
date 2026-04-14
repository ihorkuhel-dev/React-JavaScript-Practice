import {Outlet} from "react-router-dom";
import SideNavigation from "./SideNavigation/SideNavigation";
import ToastContainer from "../../features/toasts/ToastContainer";
import "./MainLayout.scss"

export default function MainLayout() {

    return (
        <div className="main-layout">
            <SideNavigation type="navigation-panel" />
            <main>
                <Outlet />
            </main>
            <SideNavigation type="user-panel" />
            <ToastContainer/>
        </div>
    )
}