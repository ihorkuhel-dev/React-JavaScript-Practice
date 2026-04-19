import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
    prepareHeaders: (headers) => {
        const token = Cookies.get('token');
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    }
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        Cookies.remove('token');
        window.location.href = '/login';
    }
    return result;
};

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['CLents', 'Auth', "Products", "User"],
    endpoints: () => ({}),
});