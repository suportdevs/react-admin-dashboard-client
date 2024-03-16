import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon, DocumentPlusIcon } from "@heroicons/react/24/solid";
import Breadcrumbs from "../components/Breadcrumbs"; // Fixed typo here
import Modal from "../components/Modal";
import ContentLinks from "../components/ContentLinks";
import ContentFilter from "../components/ContentFilter";
import Table from "../components/Table";
import { categories } from "../dataset";

const ProductType = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const checkBoxRef = useRef();

    return (
        <>
            <Breadcrumbs title="Category List">
                <Link className="flex items-center">Home <span><ChevronRightIcon className="w-4 h-4" /></span></Link>
                <Link>Category </Link>
            </Breadcrumbs>

            <div className="flex flex-col mt-4 mx-4 rounded-md lg:h-[83vh] " >
                <div className="bg-white flex flex-col py-4 p-2 hip">
                    <ContentLinks setModalOpen={setModalOpen} />
                    <ContentFilter />
                </div>

                <div className=" bg-white flex flex-col mt-2 h-[100vh] overflow-y-auto" id="print_area">
                    <Table>
                    <thead className=" bg-yellow-300 sticky top-0">
                        <tr className="divide-x divide-gray-200">
                            <th className="py-1" >Name</th>
                            <th className="py-1" >Description</th>
                            <th className="py-1 hip" >Actions</th>
                            <th className="py-1 hip" ><input type="checkbox" className="allCheck" /></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {categories.map((item, index) => (
                            <tr className="divide-x divide-gray-200" key={index}>
                                <td className="p-1">{item.name}</td>
                                <td className="p-1">{item.description}</td>
                                <td className="flex items-center justify-center hip">
                                    <Link className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-2 rounded-md focus:ring-4 ring-green-500/50">
                                        <span><DocumentPlusIcon className="w-4 h-4" /></span> New
                                    </Link>
                                </td>
                                <td className="text-center hip">
                                    <input type="checkbox" name='date[]' value={item.id} className="items" />
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </div>

            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                {/* Your modal content goes here */}
            </Modal>
        </>
    )
}

export default ProductType;
