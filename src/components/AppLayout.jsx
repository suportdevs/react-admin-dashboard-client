import { useState } from "react";
import Header from "./Header"
import Sidebar from "./Sidebar"
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    const [inactive, setInactive] = useState(true);
    const [offCanvas, setOffCanvas] = useState(false);
    
    return (
        <div className="flex item-center">
            <Sidebar inactive={inactive} setInactive={setInactive} offCanvas={offCanvas} setOffCanvas={setOffCanvas}/>
            <div className={`flex flex-col item-center w-full overflow-hidden transition-[margin] duration-300 lg:ml-[20%] ${inactive ? '' : 'lg:ml-[5rem]'}`}>
                <Header inactive={inactive} setInactive={setInactive}  offCanvas={offCanvas} setOffCanvas={setOffCanvas}/>
                <Outlet />
            </div>
        </div>
    )
}

export default AppLayout;