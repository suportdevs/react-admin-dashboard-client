import AngleDownIcon from "./AngleDownIcon";
import MenuItemLink from "./MenuItemLink";

const MenuItem = ({name, icon, inactive, setInactive, expended, setexpended}) => {
    return (
        <div>
            <div className="menu flex items-center justify-between p-3 rounded-sm cursor-pointer hover:bg-slate-800 hover:text-white" onClick={() => setexpended(!expended)}>
                <div className="flex items-center gap-3" onClick={() => setInactive(true)}>
                    {icon}
                    <div className={`${!inactive ? 'w-0 h-0 opacity-0 invisible' : ''}`}>{name}</div>
                </div>
                <AngleDownIcon inactive={inactive} expended={expended} />
            </div>
            <div className={`dropdown-menu flex flex-col items-center justify-between ${!expended ? 'h-0 opacity-0 invisible' : ''} transition[height] ease-in duration-400`}>
                <MenuItemLink to="dashboard" name="Dashboard 1"/>
                <MenuItemLink to="dashboard" name="Dashboard 2"/>
                <MenuItemLink to="dashboard" name="Dashboard 3"/>
            </div>
        </div>
    )
}

export default MenuItem;