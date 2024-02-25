
import { HomeIcon, NewspaperIcon, PlayIcon, Squares2X2Icon } from "@heroicons/react/24/outline";

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
        name: "Blogs",
        icon: <HomeIcon className="w-5 h-5" />,
        to: "/",
        subMenus: [
            {
                name: "Blogs 01",
                to: "/Blogs",
            },{
                name: "Blogs 01",
                to: "/Blogs",
            },{
                name: "Blogs 01",
                to: "/Blogs",
            },{
                name: "Blogs 01",
                to: "/Blogs",
            },{
                name: "Blogs 01",
                to: "/Blogs",
            },{
                name: "Blogs 5",
                to: "/Blogs",
            },{
                name: "Blogs 01",
                to: "/Blogs",
            },{
                name: "Blogs 01",
                to: "/Blogs",
            },{
                name: "Blogs 06",
                to: "/Blogs",
            },{
                name: "Blogs 07",
                to: "/Blogs",
            },
        ]
    },
    {
        name: "Videos",
        icon: <PlayIcon className="w-5 h-5" />,
        to: "/videos",
    }
]