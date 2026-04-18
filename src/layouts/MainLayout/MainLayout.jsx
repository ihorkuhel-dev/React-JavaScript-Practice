import {useEffect, Suspense} from "react";
import {useDispatch} from "react-redux";
import {Outlet} from "react-router-dom";
import ToastContainer from "../../features/toasts/ToastContainer";
import "./MainLayout.scss"
import {useGetUserQuery} from "../../features/user/api/userApi";
import {setUserInfo} from "../../features/user/model/userSlice";
import {useMediaQuery} from "../../shared/hooks/useMediaQuery";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import SideNavigation from "./components/SideNavigation/SideNavigation";

export default function MainLayout() {

    const dispatch = useDispatch();

    const {data: userData, isSuccess: isSuccess} = useGetUserQuery();
    const isMobile = useMediaQuery('(max-width: 900px)');

    useEffect(() => {
        if (isSuccess && userData) {
            dispatch(setUserInfo(userData));
        }
    }, [userData, isSuccess, dispatch]);

    return (
        <div className="main-layout">
            {!isMobile ? (
                <SideNavigation type="navigation-panel" />
            ) : (
                <HamburgerMenu/>
                )}
            <main>
                <Suspense fallback={<div>Loading page...</div>}>
                    <Outlet />
                </Suspense>
            </main>
            {!isMobile &&  <SideNavigation type="user-panel" />}
            <ToastContainer/>
        </div>
    )
}