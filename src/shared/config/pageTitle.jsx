import {NavLink} from 'react-router-dom';

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
                    title: "Action",
                    type: "select",
                    placeholder: "Action",
                    options: [
                        { value: "edit", label: "Edit" },
                        { value: "export", label: "Export" }
                    ],
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
                    as: "a",
                    link: "",
                },
                {
                    id: 2,
                    title: "Customize",
                    type: "select",
                    options: [
                        { value: "Generate account statement", label: "Generate account statement" },
                        { value: "Add sub offices", label: "Add sub offices" },
                        { value: "Merge data", label: "Merge data" },
                        { value: "Create login", label: "Create login" },
                        { value: "Map rate plan", label: "Map rate plan" },
                        { value: "Add follow-up", label: "Add follow-up" },
                        { value: "Add payments", label: "Add payments" },
                        { value: "Add referral code", label: "Add referral code" },
                    ],
                    className: "",
                }
            ]
        }
    },
    {
        id: 4,
        name: "Product",
        title: "Product:",
        controls: {
            coords: 'bottom',
            control: [
                {
                    id: 1,
                    title: "Close",
                    as: NavLink,
                    to: "/",
                    className: "",
                    action: false
                },
                {
                    id: 2,
                    title: "Operations",
                    type: "select",
                    placeholder: "Action",
                    options: [
                        { value: "edit", label: "Edit" },
                        { value: "export", label: "Export" }
                    ],
                    className: "transparent",
                }
            ]
        }
    }
]