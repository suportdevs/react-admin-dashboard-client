
import { ChartBarSquareIcon, CircleStackIcon, ShoppingCartIcon, Squares2X2Icon } from "@heroicons/react/24/outline";

export const menuItems = [
    {
        name: "Dashboard",
        icon: <Squares2X2Icon className="w-5 h-5" />,
        to: "/",
        subMenus: [
            {
                name: "Dashboard 01 Dashboard 01 Dashboard 01",
                to: "/",
            },{
                name: "Dashboard 01",
                to: "/",
            },{
                name: "Dashboard 01",
                to: "/",
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