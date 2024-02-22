import { XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../images/logo.png"

const Logo = ({inactive, offCanvas, setOffCanvas, lg_device}) => {

    return (
        <div className="flex items-center justify-between gap-3 px-4 lg:px-0">
            <div className={`${lg_device ? 'lg:hidden' : ''}`}>
                <img src={logo} alt="logo" className={`w-12 h-auto ${inactive ? 'mt-1' : 'mt-0'}`} />
            </div>
            <h2 className={`flex items-center text-2xl font-bold overflow-hidden transition-width ease-in duration-300 ${inactive ? 'w-auto' : 'w-0'} ${lg_device ? 'lg:hidden' : ''}`} >Sub logo </h2>
            {!inactive || offCanvas ? <XMarkIcon className="w-6 h-6 lg:hidden cursor-pointer" onClick={() => setOffCanvas(!offCanvas)} /> : ''}
        </div>
    )
}

export default Logo;