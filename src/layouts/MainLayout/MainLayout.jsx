import SideNavigation from "./SideNavigation/SideNavigation";
import {Outlet} from "react-router-dom";

export default function MainLayout(children) {

    return (
        <div className="main-layout">
            <SideNavigation type="navigation-panel" />
            <main>
                <Outlet />

                {children}
            </main>
            <SideNavigation type="user-panel" />

        </div>
    )
}