import { useNavigate } from "react-router-dom";

const Breamcums = ({children, title}) => {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-between px-4 py-2 bg-white">
            <div>
                <button onClick={() => navigate(-1)} className="bg-blue-500 text-white rounded-md px-3 hover:bg-blue-600 focus:ring-4">Back</button>
            </div>
            <div>
                <h1 className="text-2xl font-bold">{title}</h1>
            </div>
            <div className="flex items-center gap-1">{children}</div>
        </div>
    )
}

export default Breamcums;