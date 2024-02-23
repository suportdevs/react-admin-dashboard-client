import { useEffect, useState } from "react";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import { menuItems } from "../dataset";

const Sidebar = ({ inactive, setInactive }) => {
  const [menuItemsState, setMenuItemsState] = useState(menuItems.map(() => false));

  useEffect(() => {
    if (!inactive) {
      setMenuItemsState(menuItems.map(() => false));
    }
  }, [inactive]);

  const handleExpand = (index) => {
    const updatedMenuItemsState = menuItemsState.map((state, idx) => (idx === index ? !state : false));
    setMenuItemsState(updatedMenuItemsState);
  };

  return (
    <div
      className={`fixed lg:relative left-0 top-0 z-50 h-screen overflow-y-auto bg-slate-900 text-slate-300 transition-weight duration-300 ease-in-out ${
        inactive ? "w-0 lg:w-64" : "w-64 lg:w-12"
      }`}
    >
      <Logo inactive={inactive} />
      <div className="mt-6">
        {menuItems.map((menu, index) => (
          <MenuItem
            key={index}
            name={menu.name}
            icon={menu.icon}
            subMenus={menu.subMenus || []}
            inactive={inactive}
            setInactive={setInactive}
            handleExpand={handleExpand}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;