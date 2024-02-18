
import { HomeIcon, NewspaperIcon, PlayIcon, Squares2X2Icon } from '@heroicons/react/24/solid'

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
        name: "Content",
        icon: <NewspaperIcon className="w-5 h-5" />,
        to: "/content",
        subMenus: [
            {
                name: "Content 01",
                to: "/content",
            },{
                name: "Content 01",
                to: "/content",
            },{
                name: "Content 01",
                to: "/content",
            },
        ]
    },{
        name: "Warehouse",
        icon: <HomeIcon className="w-5 h-5" />,
        to: "/",
        subMenus: [
            {
                name: "Warehouse 01",
                to: "/warehouse",
            },{
                name: "Warehouse 01",
                to: "/warehouse",
            },{
                name: "Warehouse 01",
                to: "/warehouse",
            },{
                name: "Warehouse 01",
                to: "/warehouse",
            },{
                name: "Warehouse 01",
                to: "/warehouse",
            },{
                name: "Warehouse 5",
                to: "/warehouse",
            },{
                name: "Warehouse 01",
                to: "/warehouse",
            },{
                name: "Warehouse 01",
                to: "/warehouse",
            },{
                name: "Warehouse 06",
                to: "/warehouse",
            },{
                name: "Warehouse 07",
                to: "/warehouse",
            },
        ]
    },
    {
        name: "Videos",
        icon: <PlayIcon className="w-5 h-5" />,
        to: "/videos",
    }
]