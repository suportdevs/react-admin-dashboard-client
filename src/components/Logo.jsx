import { XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../images/logo.png"
import { Link } from "react-router-dom";

const Logo = ({inactive, offCanvas, setOffCanvas, lg_device}) => {

    return (
        <div className="px-4 lg:px-0">
            <Link to='/' className="flex items-center justify-between lg:justify-start gap-3 ">
                <div className={`${lg_device ? 'lg:hidden' : ''}`}>
                    <img src={logo} alt="logo" className={`w-12 h-auto ${inactive ? 'mt-1' : 'mt-0'}`} />
                </div>
                <h2 className={`flex items-center text-2xl font-bold overflow-hidden transition-width ease-in duration-300 ${inactive ? 'w-auto' : 'w-0'} ${lg_device ? 'lg:hidden' : ''}`} >Sub logo </h2>
                {!inactive || offCanvas ? <XMarkIcon className="w-6 h-6 lg:hidden cursor-pointer" onClick={() => setOffCanvas(!offCanvas)} /> : ''}
            </Link>
        </div>
    )
}

export default Logo;