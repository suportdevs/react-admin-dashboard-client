import { useEffect, useState } from "react";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import { menuItems } from "../dataset";

const Sidebar = ({ inactive, setInactive, offCanvas, setOffCanvas }) => {
    const [menuItemsState, setMenuItemsState] = useState(menuItems.map(() => false));

    useEffect(() => {
        if (!inactive) {
            setMenuItemsState(menuItems.map(() => false));
        }
    }, [inactive]);

    return (
        <div className={`${offCanvas ? 'fixed top-0 left-0 z-20 w-10/12' : 'w-0'} lg:relative bg-slate-900 text-slate-300 ${inactive ? 'w-0 lg:w-1/5' : 'w-1/2 lg:w-20'} h-screen lg:px-4 transition[weight] ease-in duration-300`}>
            <Logo inactive={inactive} offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
            <div className="mt-6">
                {
                    menuItems.map((menu, index) => (
                        <MenuItem key={index} name={menu.name} icon={menu.icon} subMenus={menu.subMenus || []} inactive={inactive} setInactive={setInactive} offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
                    )
                )}
            </div>
        </div>
    )
};

export default Sidebar;