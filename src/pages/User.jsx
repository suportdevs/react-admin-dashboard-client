import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Breamcums from "../components/Breamcums";
import Content from "../components/Content";
import Modal from "../components/Modal";

const User = () => {
    const [inactive, setInactive] = useState(true);
    const [offCanvas, setOffCanvas] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className="flex item-center">
            <Sidebar inactive={inactive} setInactive={setInactive} offCanvas={offCanvas} setOffCanvas={setOffCanvas}/>
            <div className={`flex flex-col item-center w-full overflow-hidden transition-[margin] duration-300 lg:ml-[20%] ${inactive ? '' : 'lg:ml-[5rem]'}`}>
                <Header inactive={inactive} setInactive={setInactive}  offCanvas={offCanvas} setOffCanvas={setOffCanvas}/>
                <Breamcums title="User">
                    <Link className="flex items-center">Home <span><ChevronRightIcon className="w-4 h-4" /></span></Link>
                    <Link>User </Link>
                </Breamcums>
                <Content setModalOpen={setModalOpen} />
                <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                    
                </Modal>
            </div>
        </div>
    )
}

export default User;
