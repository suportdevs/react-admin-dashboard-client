import { useState } from "react";
import Header from "./Header"
import Sidebar from "./Sidebar"

const AppLayout = ({children}) => {
    const [inactive, setInactive] = useState(true);
    const [offCanvas, setOffCanvas] = useState(false);
    console.log(children)
    return (
        <div className="flex item-center">
            <Sidebar inactive={inactive} setInactive={setInactive} offCanvas={offCanvas} setOffCanvas={setOffCanvas}/>
            <div className={`flex flex-col item-center w-full overflow-hidden transition-[margin] duration-300 lg:ml-[20%] ${inactive ? '' : 'lg:ml-[5rem]'}`}>
                <Header inactive={inactive} setInactive={setInactive}  offCanvas={offCanvas} setOffCanvas={setOffCanvas}/>
                {children}
            </div>
        </div>
    )
}

export default AppLayout;