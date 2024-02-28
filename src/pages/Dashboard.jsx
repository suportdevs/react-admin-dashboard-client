import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Breamcums from "../components/Breamcums";
import Content from "../components/Content";
import Modal from "../components/Modal";

const Dashboard = () => {
    const [inactive, setInactive] = useState(true);
    const [offCanvas, setOffCanvas] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className="flex item-center">
            <Sidebar inactive={inactive} setInactive={setInactive} offCanvas={offCanvas} setOffCanvas={setOffCanvas}/>
            <div className="flex flex-col item-center w-full overflow-hidden">
                <Header inactive={inactive} setInactive={setInactive}  offCanvas={offCanvas} setOffCanvas={setOffCanvas}/>
                <Breamcums title="Dashboard">
                    <Link className="flex items-center">Home <span><ChevronRightIcon className="w-4 h-4" /></span></Link>
                    <Link>Dashboard </Link>
                </Breamcums>
                <Content setModalOpen={setModalOpen} />
                <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                    
                </Modal>
            </div>
        </div>
    )
}

export default Dashboard;
