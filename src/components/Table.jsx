import PrintHeader from "./PrintHeader";

export default function Table({theadElm, children}) {
    return (
        <div className="p-1.5 border rounded-lg  overflow-x-auto tbl_exporttable_to_xls">
            <PrintHeader cls="sip" />
            <table className="table table-auto min-w-full divide-y divide-gray-200">
                {children}
            </table>
        </div>
    );
}