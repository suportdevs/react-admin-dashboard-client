import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Breamcums from "../components/Breamcums";
import Content from "../components/Content";
import Modal from "../components/Modal";

const MetarialType = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <Breamcums title="Category List">
                <Link className="flex items-center">Home <span><ChevronRightIcon className="w-4 h-4" /></span></Link>
                <Link>Category </Link>
            </Breamcums>
            <Content setModalOpen={setModalOpen} />
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                
            </Modal>
        </>
    )
}

export default MetarialType;
