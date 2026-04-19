import {baseApi} from "../../../shared/api/baseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: 'auth/login',
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ ...credentials, expiresInMins: 1440 })
            }),
            invalidateTags: ['Auth']
        }),
        register: builder.mutation({
            query: (userData) => ({
                url: 'users/add',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            })
        })
    })
})

export const { useLoginMutation, useRegisterMutation } = authApi