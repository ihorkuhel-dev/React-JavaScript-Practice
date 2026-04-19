import Cookies from "js-cookie";
import {lazy} from "react";
import {createBrowserRouter, redirect} from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const ClientCard = lazy(() => import("../pages/ClientCard/ClientCard"));
const ClientList = lazy(() => import("../pages/ClientList/ClientList"));
const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const LogIn = lazy(() => import("../pages/LogIn/Login"));
const Product = lazy(() => import("../pages/Product/Product"));
const Register = lazy(() => import("../pages/Register/Register"));

const checkAuth = () => {
    return !!Cookies.get('token')
}


export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        children: [
            {
                element: <AuthLayout />,
                loader: () => {
                    if(checkAuth())
                        return redirect('/')
                    return null
                },
                children: [
                    {
                        path: 'login',
                        element: <LogIn />
                    },
                    {
                        path: 'register',
                        element: <Register />
                    }
                ]
            },
            {
                element: <MainLayout />,
                loader: () => {
                    if(!checkAuth()){
                        return redirect('/login')
                    }
                    return null
                },
                children: [
                    {
                        path: 'client-list',
                        element: <ClientList />,
                    },
                    {
                        path: 'client-card/:id',
                        element: <ClientCard />,
                    },
                    {
                        path: 'product',
                        element: <Product />,
                    },
                    {
                        index: true,
                        element: <Dashboard />,
                    }
                ]
            }
        ]
    }
]);