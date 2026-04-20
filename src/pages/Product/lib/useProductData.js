import {useMemo} from "react";

export const useProductData = (data) => {
    return useMemo(() => {
        if (!data) return {info: [], reviews: [], productDetails: []};

        const info = [
            {label: 'title', value: data.title},
            {label: 'available', value: data.availabilityStatus},
            {label: 'brand', value: data.brand},
            {label: 'category', value: data.category},
            {label: 'price', value: data.price},
            {label: 'rating', value: data.rating},
            {label: 'in stock', value: data.stock},
            {label: 'sku', value: data.sku},
        ]

        const reviews = data.reviews

        const productDetails = [
            {
                category: 'general',
                items: [
                    {id: 0, label: 'title', value: data.title},
                    {id: 1, label: 'description', value: data.description},
                    {id: 2, label: 'warranty', value: data.warrantyInformation},
                ]
            },

            {
                category: 'details',
                direction: 'row',
                items: [
                    {id: 0, label: 'width', value: data.dimensions.width},
                    {id: 1, label: 'height', value: data.dimensions.height},
                    {id: 2, label: 'depth', value: data.dimensions.depth},
                    {id: 3, label: 'weight', value: data.weight},
                ]
            }
        ]

        return { info, reviews, productDetails };
    }, [data]);
};
