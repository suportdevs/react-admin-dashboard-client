
import { HomeIcon, NewspaperIcon, PlayIcon, Squares2X2Icon } from '@heroicons/react/24/solid'

export const menuItems = [
    {
        name: "Dashboard",
        icon: <Squares2X2Icon className="w-6 h-6" />,
        to: "/",
        subMenus: [
            {
                name: "Dashboard 01",
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
        icon: <NewspaperIcon className="w-6 h-6" />,
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
        icon: <HomeIcon className="w-6 h-6" />,
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
                name: "Warehouse 01",
                to: "/warehouse",
            },
        ]
    },
    {
        name: "Videos",
        icon: <PlayIcon className="w-6 h-6" />,
        to: "/videos",
    }
]