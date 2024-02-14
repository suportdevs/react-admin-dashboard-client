import { useEffect, useState } from "react";
import Logo from "./Logo";
import AngleDownIcon from "./AngleDownIcon";
import { HomeIcon, NewspaperIcon, PlayIcon, Squares2X2Icon } from '@heroicons/react/24/solid'
import MenuItemLink from "./MenuItemLink";
import MenuItem from "./MenuItem";

const menuItems = [
    {
        name: "Dashboard",
        icon: "Squares2X2Icon",
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
        icon: "NewspaperIcon",
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
        icon: "HomeIcon",
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
            },
        ]
    },
    {
        name: "Videos",
        icon: "PlayIcon",
        to: "/videos",
    }
]

const Sidebar = ({ inactive, setInactive }) => {
    const [dashboardExpend, setDashboardExpend] = useState(false);
    const [contentExpend, setContentExpend] = useState(false);
    const [warehouseExpend, setWarehouseExpend] = useState(false);

    useEffect(() => {
        if(!inactive){
            setDashboardExpend(false);
            setContentExpend(false);
            setWarehouseExpend(false);
        }
    },[inactive]);

    
    return (
        <div className={`bg-slate-900 text-slate-300 ${inactive ? 'w-1/5' : 'w-20'} h-screen p-4 transition[weight] ease-in duration-300`}>
            <Logo inactive={inactive} />
            <div className="mt-6">
                <MenuItem />
                <div>
                    <div className="flex items-center justify-between p-3 rounded-sm cursor-pointer hover:bg-slate-800 hover:text-white" onClick={() => setContentExpend(!contentExpend)}>
                        <div className="flex items-center gap-3" onClick={() => setInactive(true)}>
                            <NewspaperIcon className="w-6 h-6" />
                            <div className={`${!inactive ? 'w-0 h-0 opacity-0 invisible' : ''}`}>Content</div>
                        </div>
                        <AngleDownIcon inactive={inactive} expended={contentExpend} />
                    </div>
                    <div className={`dropdown-menu flex flex-col items-center justify-between ${!contentExpend ? 'h-0 opacity-0 invisible' : ''} transition[height] ease-in duration-400`}>
                        <a href="#" className="w-full pl-5 p-2 rounded-sm cursor-pointer hover:bg-slate-800 hover:text-white">
                            Sub Menu 1
                        </a>
                        <a href="#" className="w-full pl-5 p-2 rounded-sm cursor-pointer hover:bg-slate-800 hover:text-white">
                            Sub Menu 1
                        </a>
                        <a href="#" className="w-full pl-5 p-2 rounded-sm cursor-pointer hover:bg-slate-800 hover:text-white">
                            Sub Menu 1
                        </a>
                        <a href="#" className="w-full pl-5 p-2 rounded-sm cursor-pointer hover:bg-slate-800 hover:text-white">
                            Sub Menu 1
                        </a>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between p-3 rounded-sm cursor-pointer hover:bg-slate-800 hover:text-white" onClick={() => setWarehouseExpend(!warehouseExpend)}>
                        <div className="flex items-center gap-3" onClick={() => setInactive(true)}>
                            <HomeIcon className="w-6 h-6" />
                            <div className={`${!inactive ? 'w-0 h-0 opacity-0 invisible' : ''}`}>Warehouse</div>
                        </div>
                        <AngleDownIcon inactive={inactive} expended={warehouseExpend} />
                    </div>
                    <div className={`dropdown-menu flex flex-col items-center justify-between ${!warehouseExpend ? 'h-0 opacity-0 invisible' : ''} transition[height] ease-in duration-400`}>
                        <a href="#" className="w-full pl-5 p-2 rounded-sm cursor-pointer hover:bg-slate-800 hover:text-white">Purchase</a>
                        <a href="#" className="w-full pl-5 p-2 rounded-sm cursor-pointer hover:bg-slate-800 hover:text-white">Purchase Items</a>
                        <a href="#" className="w-full pl-5 p-2 rounded-sm cursor-pointer hover:bg-slate-800 hover:text-white">Sale</a>
                        <a href="#" className="w-full pl-5 p-2 rounded-sm cursor-pointer hover:bg-slate-800 hover:text-white">Sale Items</a>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between p-3 rounded-sm cursor-pointer hover:bg-slate-800 hover:text-white">
                        <a href="#" className="flex items-center gap-3" onClick={() => setInactive(true)}>
                            <PlayIcon className="w-6 h-6" />
                            <div className={`${!inactive ? 'w-0 h-0 opacity-0 invisible' : ''}`}>Videos</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
