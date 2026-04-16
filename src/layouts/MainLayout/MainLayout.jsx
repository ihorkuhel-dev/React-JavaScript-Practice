import {Outlet} from "react-router-dom";
import SideNavigation from "./SideNavigation/SideNavigation";
import ToastContainer from "../../features/toasts/ToastContainer";
import "./MainLayout.scss"
import {useGetUserQuery} from "../../features/user/api/userApi";

export default function MainLayout() {

    const userInfo = useGetUserQuery()
    console.log(userInfo);

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