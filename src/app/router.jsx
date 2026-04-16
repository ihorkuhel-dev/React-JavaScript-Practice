import {createBrowserRouter, redirect} from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import LogIn from "../pages/LogIn/Login";
import Register from "../pages/Register/Register";
import MainLayout from "../layouts/MainLayout/MainLayout";
import ClientList from "../pages/ClientList/ClientList";
import ClientCard from "../pages/ClientCard/ClientCard";
import Product from "../pages/Product/Product";
import Dashboard from "../pages/Dashboard/Dashboard";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const checkAuth = () => {
    return !!localStorage.getItem('token')
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