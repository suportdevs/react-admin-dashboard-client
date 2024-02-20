import { Bars3BottomLeftIcon, BellIcon, ChatBubbleLeftRightIcon, ChevronDownIcon, Cog8ToothIcon, HomeIcon, UserIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from '../dataset';
import Logo from "../components/Logo";

const Header = ({ inactive, setInactive }) => {
    const [active, setActive] = useState(false);
    const [menuItemsState, setMenuItemsState] = useState(menuItems.map(() => false));

    const handleExpand = (index) => {
        const updatedMenuItemsState = menuItemsState.map((state, idx) => idx === index ? !state : false);
        setMenuItemsState(updatedMenuItemsState);
        setActive(false);
    };

    return (
        <div className="bg-white w-full h-16 flex items-center lg:justify-between gap-5 lg:gap-0 p-4 border-b-[1px] border-indigo-600 md:bg-red-400 lg:bg-green-400 xl:bg-blue-400 2xl:bg-tomato-400">
            <div>
                <Bars3BottomLeftIcon className="w-6 h-6 cursor-pointer" onClick={() => setInactive(!inactive)}/>
            </div>
            <div className="flex items-center">
                <Logo inactive={true} />
            </div>
            <div className="lg:flex items-center hidden sm:hidden">
                {
                    menuItems.map((menu, index) => (
                        <div className="relative " key={index}>
                            <div className={`flex items-center gap-1 px-3 py-4 cursor-pointer hover:bg-gray-100 ${menuItemsState[index] ? 'bg-gray-100' : ''}`} onClick={() => handleExpand(index)}>
                                <span>{menu.icon}</span> {menu.name} {menu.subMenus && menu.subMenus.length > 0 ? <span><ChevronDownIcon className="w-4 h-4"/></span> : null}</div>
                            {
                                menu.subMenus && menu.subMenus.length > 0 ? (
                                    <div className={`absolute flex flex-col shadow-lg border overflow-hidden left-1/2 transform -translate-x-1/2 top-full mt-1 w-max bg-white z-10 transition-all ease-in-out duration-300 origin-top ${menuItemsState[index] ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
                                        {
                                            menu.subMenus.map((subMenu, subIndex) => (
                                                <Link to={subMenu.to} className='py-2 px-6 flex items-center gap-3 hover:bg-gray-100' key={subIndex}>{subMenu.icon} {subMenu.name}</Link>
                                            ))
                                        }
                                    </div>
                                ) : null
                            }
                        </div>
                    ))
                }
                <div className=" p-3 cursor-pointer">
                    <BellIcon className="w-6 h-6"/>
                </div>
                <div className=" p-3 cursor-pointer">
                    <ChatBubbleLeftRightIcon className="w-6 h-6"/>
                </div>
                <div className=" p-3 relative ">
                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white cursor-pointer" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" onClick={() => {
                        setActive(!active);
                        setMenuItemsState(menuItems.map(() => false));
                    }}/>
                   <div className={`absolute flex flex-col  shadow-lg border overflow-hidden right-0 top-full bg-white z-10 transition-all ease-in-out duration-300 origin-top ${active ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
                        <Link to='/dashboard' className='py-2 px-4 flex items-center gap-3 hover:bg-gray-100'><HomeIcon className='w-6 h-6' /> Dashboard</Link>
                        <Link to='/profile' className='py-2 px-4 flex items-center gap-3 hover:bg-gray-100'><UserIcon className='w-6 h-6' /> Profile</Link>
                        <Link to='/profile' className='py-2 px-4 flex items-center gap-3 hover:bg-gray-100'><Cog8ToothIcon className='w-6 h-6' /> Setting</Link>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Header;