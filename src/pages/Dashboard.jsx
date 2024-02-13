import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
    const [inactive, setInactive] = useState(true);
    return (
        <div className="flex item-center">
            <Sidebar inactive={inactive} setInactive={setInactive}/>
            <Header inactive={inactive} setInactive={setInactive}/>
        </div>
    )
}

export default Dashboard;