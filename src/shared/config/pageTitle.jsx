export const PAGE_HEADER = [
    {
        id: 1,
        name: "Dashboard",
        title: "Dashboard",
        controls: {
            coords: 'bottom',
            control: [
                {
                    id: 1,
                    title: "Actions",
                    type: "select",
                    className: "transparent",
                }
            ]
        }
    },
    {
        id: 2,
        name: "Customers",
        title:"Customers",
    },
    {
        id: 3,
        name: "Customer information",
        title:"Customer information",
        subtitle: "Customer ID:",
        controls: {
            coords: 'top',
            control: [
                {
                    id: 1,
                    title: "Send email",
                    type: "text",
                    className: "",
                },
                {
                    id: 2,
                    title: "Customize",
                    type: "select",
                    className: "",
                }
            ]
        }
    },
    {
        id: 4,
        name: "Certificate",
        title: "Certificate:",
        controls: {
            coords: 'bottom',
            control: [
                {
                    id: 1,
                    title: "Close",
                    type: "text",
                    className: "",
                },
                {
                    id: 2,
                    title: "Operations",
                    type: "select",
                    className: "transparent",
                }
            ]
        }
    }
]