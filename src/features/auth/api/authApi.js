import {baseApi} from "../../../shared/api/baseApi";

export const authApi = baseApi.injectEndpoints({
    endpoint: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: 'auth/login',
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(credentials)
            }),
            invalidateTags: ['Auth']
        })
    })
})

export const { useLoginMutation } = authApi