import { useEffect, useRef, useState } from 'react';
import AngleDownIcon from "./AngleDownIcon";
import MenuItemLink from "./MenuItemLink";

const MenuItem = ({ name, icon, subMenus, inactive, setInactive, offCanvas, setOffCanvas }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        const dropdownMenu = dropdownRef.current;
        dropdownMenu.style.maxHeight = openMenu ? '0px' : `${dropdownMenu.scrollHeight}px`;
    };
    useEffect(() => {
        const dropdownMenu = dropdownRef.current;
        dropdownMenu.style.maxHeight = inactive ? '0px' : `0px`;
    }, [inactive]);

    return (
        <div>
            <div className={`menu flex items-center justify-between p-3 rounded-sm cursor-pointer hover:bg-slate-800 hover:text-white ${!inactive || offCanvas ? 'visible' : 'invisible lg:visible'}`} onClick={() => {
                setOpenMenu(!openMenu);
                setInactive(true);
                toggleDropdown();
            }}>
                <div className="flex items-center gap-3" >
                    {icon}
                    <div className={`${!inactive ? 'w-0 h-0 opacity-0 visible lg:invisible' : ''}`}>{name}</div>
                </div>
                {subMenus && subMenus.length > 0 ? <AngleDownIcon inactive={inactive} openMenu={openMenu} /> : ''}
            </div>
            <div ref={dropdownRef} className={`dropdown-menu flex flex-col overflow-hidden max-h-0 transition[max-height] ease-in duration-300`}>
                {subMenus && subMenus.length > 0 && subMenus.map((menu, index) => (
                    <MenuItemLink key={index} to={menu.to} name={menu.name} />
                ))}
            </div>
        </div>
    );
};

export default MenuItem;
