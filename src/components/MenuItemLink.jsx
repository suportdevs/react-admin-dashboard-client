import { Link } from "react-router-dom";

const MenuItemLink = ({name, to}) => {
    return (
        <Link to={to} className="w-full pl-5 p-2 rounded-sm cursor-pointer hover:bg-slate-800 hover:text-white">{name}</Link>
    )
}

export default MenuItemLink;