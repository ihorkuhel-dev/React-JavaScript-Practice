import { baseApi } from "../../../shared/api/baseApi";

export const clientsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getClients: builder.query({
            query: () => 'users',
            transformResponse: (response) => response.users,
            providesTags: ['Clients'],
        }),
        getClientById: builder.query({
            query: (id) => `users/${id}`,
            providesTags: (result, error, id) => [{ type: 'Clients', id }]
        })
    })
});

export const { useGetClientsQuery, useGetClientByIdQuery } = clientsApi;