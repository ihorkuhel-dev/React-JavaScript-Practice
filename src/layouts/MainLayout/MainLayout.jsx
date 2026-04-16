import {Outlet} from "react-router-dom";
import SideNavigation from "./SideNavigation/SideNavigation";
import ToastContainer from "../../features/toasts/ToastContainer";
import "./MainLayout.scss"
import {useGetUserQuery} from "../../features/user/api/userApi";
import {useDispatch} from "react-redux";
import { setUserInfo} from "../../features/user/model/userSlice";
import {useEffect} from "react";

export default function MainLayout() {

    const dispatch = useDispatch();

    const {data: userData, isSuccess: isSuccess} = useGetUserQuery();

    useEffect(() => {
        if (isSuccess && userData) {
            dispatch(setUserInfo(userData));
        }
    }, [userData, isSuccess, dispatch]);

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