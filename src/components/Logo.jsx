import logo from "../images/youtube.png"

const Logo = ({inactive}) => {

    return (
        <div className="flex items-center gap-3">
            <div>
                <img src={logo} alt="logo" className="w-12 h-12" />
            </div>
            <h2 className={`text-2xl font-bold ${inactive ? 'block' : 'hidden' }`}>Sub logo</h2>
        </div>
    )
}

export default Logo;