import ReactSelect from "react-select";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

const ContentFilter = () => {
    return (
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
    );
}

export default ContentFilter;