import { useState } from "react";
import Logo from "./Logo";

const Sidebar = ({inactive, setInactive}) => {
    return (
        <div className={`bg-slate-900 text-slate-300 ${inactive ? 'w-1/5' : 'w-20'} h-screen p-4 transition[weight] ease-in duration-300`}>
            <Logo inactive={inactive} />
            <div className="mt-6">
                <div>
                    <div className="flex items-center justify-between p-3 rounded-sm cursor-pointer hover:bg-slate-800 hover:text-white">
                        <div className="flex items-center gap-3" onClick={() => setInactive(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                            </svg>
                            <div className={`${!inactive ? 'w-0 h-0 opacity-0 invisible' : ''}`}>Dashboard</div>
                        </div>
                        <svg className={`${!inactive ? 'w-0 h-0 opacity-0 invisible' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
                <div>

                    <div className="flex items-center justify-between p-3 rounded-sm cursor-pointer hover:bg-slate-800 hover:text-white">
                        <div className="flex items-center gap-3" onClick={() => setInactive(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                            </svg>
                            <div className={`${!inactive ? 'w-0 h-0 opacity-0 invisible' : ''}`}>Content</div>
                        </div>
                        <svg className={`${!inactive ? 'w-0 h-0 opacity-0 invisible' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <div className="dropdown-menu flex flex-col items-center justify-between ">
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
                    <div className="flex items-center justify-between p-3 rounded-sm cursor-pointer hover:bg-slate-800 hover:text-white">
                        <a href="#" className="flex items-center gap-3" onClick={() => setInactive(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                            </svg>
                            <div className={`${!inactive ? 'w-0 h-0 opacity-0 invisible' : ''}`}>Videos</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;