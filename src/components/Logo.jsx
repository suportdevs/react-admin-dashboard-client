import logo from "../images/youtube.png"

const Logo = ({inactive}) => {

    return (
        <div className="flex items-center gap-3">
            <div>
                <img src={logo} alt="logo" className={`w-12 h-auto ${inactive ? 'mt-1' : 'mt-0'}`} />
            </div>
            <h2 className={`text-2xl font-bold overflow-hidden transition-width ease-in duration-300 ${inactive ? 'w-auto' : 'w-auto lg:w-0'}`}>Sub logo</h2>
        </div>
    )
}

export default Logo;