import { useEffect, useState } from "react";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import { menuItems } from "../dataset";

const Sidebar = ({ inactive, setInactive }) => {
    const [menuItemsState, setMenuItemsState] = useState(menuItems.map(() => false));

    useEffect(() => {
        if(!inactive){
            setMenuItemsState(menuItems.map(() => false));
        }
    },[inactive]);

    const handleExpand = (index) => {
        const updatedMenuItemsState = menuItemsState.map((state, idx) => idx === index ? !state : false);
        setMenuItemsState(updatedMenuItemsState);
    };
    
    return (
        <div className={`bg-slate-900 text-slate-300 ${inactive ? 'w-1/5' : 'w-20'} h-screen p-4 transition[weight] ease-in duration-300`}>
            <Logo inactive={inactive} />
            <div className="mt-6">
                {
                menuItems.map((menu, index) => (
                    <MenuItem key={index} name={menu.name} icon={menu.icon} subMenus={menu.subMenus || []} inactive={inactive} setInactive={setInactive} expanded={menuItemsState[index]} onExpand={() => handleExpand(index)} />
                )
                )}
            </div>
        </div>
    )
}

export default Sidebar;
