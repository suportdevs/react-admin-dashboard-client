import { Cog8ToothIcon, DocumentArrowDownIcon, DocumentPlusIcon, PrinterIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { ExportToExcel, printDiv } from "../utilies/helper";

const ContentLinks = ({setModalOpen}) => {
    return (
        <div className="flex flex-wrap items-center gap-2 justify-center">
            <Link onClick={() => setModalOpen(true)} className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-2 rounded-md focus:ring-4 ring-green-500/50"><span><DocumentPlusIcon className="w-4 h-4" /></span> New</Link>
            <Link className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-2 rounded-md focus:ring-4 ring-blue-500/50"><span><Cog8ToothIcon className="w-4 h-4" /></span> Confirm</Link>
            <Link className="flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-2 rounded-md focus:ring-4 ring-yellow-500/50"><span><Cog8ToothIcon className="w-4 h-4" /></span> Reset</Link>
            <Link className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-2 rounded-md focus:ring-4 ring-red-500/50"><span><TrashIcon className="w-4 h-4" /></span> Delete</Link>
            <Link className="flex items-center gap-1 bg-teal-500 hover:bg-teal-600 text-white px-2 rounded-md focus:ring-4 ring-teal-500/50" onClick={() => printDiv('print_area')} ><span><PrinterIcon className="w-4 h-4" /></span> Print</Link>
            <Link className="flex items-center gap-1 bg-cyan-400 hover:bg-cyan-500 text-white px-2 rounded-md focus:ring-4 ring-cyan-500/50" onClick={() => ExportToExcel('print_area')} ><span><DocumentArrowDownIcon className="w-4 h-4" /></span> Export</Link>
        </div>
    );
}

export default ContentLinks;