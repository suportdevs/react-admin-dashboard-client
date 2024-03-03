import { Link } from "react-router-dom";

const MenuItemLink = ({name, to}) => {
    return (
        <Link to={to} className="w-full pl-14 p-2 rounded-sm cursor-pointer hover:bg-slate-800 hover:text-white relative after:content-[''] after:absolute after:h-0.5 after:w-4 after:left-7 after:top-0 after:bg-gray-400 hover:after:bg-white after:top-1/2 after:transform after:-translate-y-1/2">{name}</Link>
    )
}

export default MenuItemLink;