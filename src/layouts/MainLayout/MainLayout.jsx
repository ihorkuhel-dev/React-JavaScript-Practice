import {Outlet} from "react-router-dom";
import SideNavigation from "./SideNavigation/SideNavigation";
import ToastContainer from "../../features/toasts/ToastContainer";
import "./MainLayout.scss"
import {useGetUserQuery} from "../../features/user/api/userApi";
import {useDispatch} from "react-redux";
import { setUserInfo} from "../../features/user/model/userSlice";
import {useEffect} from "react";
import {useMediaQuery} from "../../shared/hooks/useMediaQuery";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

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
                <BurgerMenu/>
                )}
            <main>
                <Outlet />
            </main>
            {!isMobile &&  <SideNavigation type="user-panel" />}
            <ToastContainer/>
        </div>
    )
}