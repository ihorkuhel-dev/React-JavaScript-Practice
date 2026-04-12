import SideNavigation from "./SideNavigation/SideNavigation";
import {Outlet} from "react-router-dom";

export default function MainLayout() {

    return (
        <div className="main-layout">
            <SideNavigation type="navigation-panel" />
            <main>
                <Outlet />
            </main>
            <SideNavigation type="user-panel" />

        </div>
    )
}