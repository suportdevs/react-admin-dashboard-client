
import { ChartBarSquareIcon, CircleStackIcon, ShoppingCartIcon, Square3Stack3DIcon, Squares2X2Icon } from "@heroicons/react/24/outline";

export const menuItems = [
    {
        name: "Dashboard",
        icon: <Squares2X2Icon className="w-5 h-5" />,
        to: "/dashboard",
    },{
        name: "Metarials",
        icon: <Square3Stack3DIcon className="w-5 h-5" />,
        to: "/products",
        subMenus: [
            {
                name: "Product Type",
                to: "/metarials/product_type",
            },{
                name: "Category",
                to: "/metarials/category",
            },{
                name: "Products",
                to: "/metarials/products",
            },
        ]
    },{
        name: "Orders",
        icon: <ShoppingCartIcon className="w-5 h-5" />,
        to: "/orders",
        subMenus: [
            {
                name: "New",
                to: "/new",
            },{
                name: "Pending",
                to: "/pending",
            },{
                name: "In Process",
                to: "/in-process",
            },{
                name: "Completed",
                to: "/completed",
            },
        ]
    },{
        name: "Manage",
        icon: <CircleStackIcon className="w-5 h-5" />,
        to: "/",
        subMenus: [
            {
                name: "Fuel",
                to: "/fuel",
            },{
                name: "Customers",
                to: "/customers",
            },{
                name: "Dealer",
                to: "/dealer",
            }
        ]
    },
    {
        name: "Reporting",
        icon: <ChartBarSquareIcon className="w-5 h-5" />,
        to: "/reporting",
    }
]

export const categories = [
    {id: 1, name: 'Categories 1', description: "Demo"},
    {id: 2, name: 'Categories 2', description: "Demo"},
    {id: 3, name: 'Categories 3', description: "Demo"},
    {id: 4, name: 'Categories 4', description: "Demo"},
    {id: 5, name: 'Categories 5', description: "Demo"},
    {id: 6, name: 'Categories 6', description: "Demo"},
    {id: 7, name: 'Categories 7', description: "Demo"},
    {id: 8, name: 'Categories 8', description: "Demo"},
    {id: 9, name: 'Categories 9', description: "Demo"},
    {id: 10, name: 'Categories 10', description: "Demo"},
];