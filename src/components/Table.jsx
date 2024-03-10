import { Link } from "react-router-dom";
import PrintHeader from "./PrintHeader";
import { Cog8ToothIcon, DocumentPlusIcon } from "@heroicons/react/24/outline";

export default function Table() {
    return (
        <div className="p-1.5 border rounded-lg  overflow-x-auto tbl_exporttable_to_xls">
            <PrintHeader cls="sip" />
            <table className="table divide-y divide-gray-200">
                <thead className=" bg-yellow-300 sticky top-0">
                    <tr className="divide-x divide-gray-200">
                        <th className="py-1 w-2/12">Name</th>
                        <th className="py-1 w-2/12">Email</th>
                        <th className="py-1 w-2/12 hip">Address</th>
                        <th className="py-1 w-2/12 hip">Actions</th>
                        <th className="py-1 w-2/12 hidden sip">how</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1 hip">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1 hip flex justify-center gap-1">
                            <Link className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-2 rounded-md focus:ring-4 ring-green-500/50"><span><DocumentPlusIcon className="w-4 h-4" /></span> New</Link>
                            <Link className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-2 rounded-md focus:ring-4 ring-blue-500/50"><span><Cog8ToothIcon className="w-4 h-4" /></span> Confirm</Link>
                            <Link className="flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-2 rounded-md focus:ring-4 ring-yellow-500/50"><span><Cog8ToothIcon className="w-4 h-4" /></span> Reset</Link>
                        </td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1 hip"><p >edit</p></td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1 hip"><p >edit</p></td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1 hip"><p >edit</p></td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1 hip"><p >edit</p></td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1 hip"><p >edit</p></td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1 hip"><p >edit</p></td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                </tbody>
                <thead className=" bg-gray-50 sticky top-0">
                    <tr className="divide-x divide-gray-200">
                        <th className="py-1">Name 1</th>
                        <th className="py-1">Email 1</th>
                        <th className="py-1">Address 1</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                    <tr className="divide-x divide-gray-200">
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                        <td className="p-1">Mamun</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}