import {baseApi} from "../../../shared/api/baseApi";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => ({
                url:  'auth/me',
                method: 'GET'
            }),
            providesTags: ['User']
        })
    })
})

export const { useGetUserQuery } = userApi