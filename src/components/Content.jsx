import { Cog8ToothIcon, DocumentPlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import Table from "./Table";
import { ExportToExcel, printDiv } from "../utilies/helper";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

const Content = () => {
    return (
        <>
        <div className="flex flex-col mt-4 mx-4 rounded-md lg:h-[83vh] " >
            <div className="bg-white flex flex-col py-4 p-2 hip">
                <div className="flex flex-wrap items-center gap-2 justify-center">
                    <Link className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-2 rounded-md focus:ring-4 ring-green-500/50"><span><DocumentPlusIcon className="w-4 h-4 hover:fill-blue-500" /></span> New</Link>
                    <Link className="flex items-center gap-1 bg-indigo-500 hover:bg-indigo-600 text-white px-2 rounded-md focus:ring-4 ring-indigo-500/50"><span><Cog8ToothIcon className="w-4 h-4 hover:fill-blue-500" /></span> Confirm</Link>
                    <Link className="flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-2 rounded-md focus:ring-4 ring-yellow-500/50"><span><Cog8ToothIcon className="w-4 h-4 hover:fill-blue-500" /></span> Reset</Link>
                    <Link className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-2 rounded-md focus:ring-4 ring-red-500/50"><span><TrashIcon className="w-4 h-4 hover:fill-blue-500" /></span> Delete</Link>
                    <Link className="flex items-center gap-1 bg-teal-500 hover:bg-teal-600 text-white px-2 rounded-md focus:ring-4 ring-teal-500/50" onClick={() => printDiv('print_area')} ><span><TrashIcon className="w-4 h-4 hover:fill-blue-500" /></span> Print</Link>
                    <Link className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-2 rounded-md focus:ring-4 ring-red-500/50" onClick={() => ExportToExcel('print_area')} ><span><TrashIcon className="w-4 h-4 hover:fill-blue-500" /></span> Export</Link>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap items-center lg:gap-1 mt-3">
                    <div className="w-6/12 lg:w-1/2">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 ring-blue-400" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="w-6/12 lg:w-1/2">
                        <ReactSelect options={options} placeholder="Company" />
                    </div>
                    <div className="w-6/12 lg:w-1/2">
                        <ReactSelect options={options} placeholder="Factory" />
                    </div>
                    <div className="w-6/12 lg:w-1/2">
                        <ReactSelect options={options} placeholder="Category" />
                    </div>
                    <div className="w-6/12 lg:w-1/2">
                        <ReactSelect options={options} placeholder="Product" />
                    </div>
                    <div className="flex items-center gap-1">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:ring-4"  type="button">Search</button>
                    <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:ring-4 ring-yellow-500/50"  type="button">Clear</button>
                    </div>
                </div>
            </div>

            <div className="bg-white flex flex-col mt-2 h-[100vh] overflow-y-auto" id="print_area">
                <Table />
            </div>
        </div>
        </>
    )
}

export default Content;