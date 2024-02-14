import AngleDownIcon from "./AngleDownIcon";
import MenuItemLink from "./MenuItemLink";

const MenuItem = ({ name, icon, subMenus, inactive, setInactive, expanded, onExpand }) => {
    return (
        <div>
            <div className="menu flex items-center justify-between p-3 rounded-sm cursor-pointer hover:bg-slate-800 hover:text-white" onClick={onExpand}>
                <div className="flex items-center gap-3" onClick={() => setInactive(true)}>
                    {icon}
                    <div className={`${!inactive ? 'w-0 h-0 opacity-0 invisible' : ''}`}>{name}</div>
                </div>
                {subMenus && subMenus.length > 0 ? <AngleDownIcon inactive={inactive} expended={expanded} /> : ''}
            </div>
            {
                subMenus && subMenus.length > 0 ? (
                    <div className={`dropdown-menu flex flex-col items-center justify-between ${expanded ? 'h-auto opacity-1 visible' : 'h-0 opacity-0 invisible '} transition[height] ease-in duration-400`}>
                        {subMenus.map((menu, index) => (
                            <MenuItemLink key={index} to={menu.to} name={menu.name}/>
                        ))}
                    </div>
                ) : null
            }
        </div>
    )
}

export default MenuItem;
