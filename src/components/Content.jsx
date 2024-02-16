import { Cog8ToothIcon, DocumentPlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

const Content = () => {
    return (
        <>
        <div className="flex flex-col m-4 rounded-md min-h-[80vh]">
            <div className="bg-white flex flex-col py-4 p-2">
                <div className="flex items-center gap-2 justify-center">
                    <Link className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-2 rounded-md focus:ring-4 ring-green-500/50"><span><DocumentPlusIcon className="w-4 h-4" /></span> New</Link>
                    <Link className="flex items-center gap-1 bg-indigo-500 hover:bg-indigo-600 text-white px-2 rounded-md focus:ring-4 ring-indigo-500/50"><span><Cog8ToothIcon className="w-4 h-4" /></span> Confirm</Link>
                    <Link className="flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-2 rounded-md focus:ring-4 ring-yellow-500/50"><span><Cog8ToothIcon className="w-4 h-4" /></span> Reset</Link>
                    <Link className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-2 rounded-md focus:ring-4 ring-red-500/50"><span><TrashIcon className="w-4 h-4" /></span> Delete</Link>
                </div>
                <div className="flex items-center gap-1 mt-3">
                    <div className="w-52">
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 ring-blue-400" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="w-52">
                        <ReactSelect options={options} />
                    </div>
                    <div className="flex items-center gap-1">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:ring-4"  type="button">Search</button>
                    <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:ring-4 ring-yellow-500/50"  type="button">Clear</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Content;