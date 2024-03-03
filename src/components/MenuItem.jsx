import { useEffect, useRef, useState } from 'react';
import AngleDownIcon from "./AngleDownIcon";
import MenuItemLink from "./MenuItemLink";

const MenuItem = ({ name, icon, subMenus, inactive, setInactive, offCanvas }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        const dropdownMenu = dropdownRef.current;
        dropdownMenu.style.maxHeight = dropdownMenu.style.maxHeight === '0px' ? `${dropdownMenu.scrollHeight}px` : '0px';
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
            <div ref={dropdownRef} className={`dropdown-menu flex flex-col relative overflow-hidden max-h-0 transition[max-height] ease-in duration-300 after:content-[''] after:absolute after:h-full after:w-0.5 after:left-8 after:top-0 after:bg-gray-400 hover:after:bg-white after:left-5`}>
                {subMenus && subMenus.length > 0 && subMenus.map((menu, index) => (
                    <MenuItemLink key={index} to={menu.to} name={menu.name} />
                ))}
            </div>
        </div>
    );
};

export default MenuItem;
