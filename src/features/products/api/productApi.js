import { baseApi } from "../../../shared/api/baseApi";

export const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products',
            providesTags: ['Products'],
        }),
        getProductById: builder.query({
            query: (id) => `products/${id}`,
            providesTags: (result, error, id) => [{ type: 'Products', id }]
        }),
        getFirstProduct: builder.query({
            query: () => 'products/1',
            providesTags: ['Products']
        })
    })
});

export const { useGetProductsQuery, useGetProductByIdQuery, useGetFirstProductQuery } = productApi;