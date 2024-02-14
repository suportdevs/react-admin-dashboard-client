import AngleDownIcon from "./AngleDownIcon";
import MenuItemLink from "./MenuItemLink";

const MenuItem = ({ name, icon, subMenus, inactive, setInactive, expanded, onExpand }) => {
    return (
        <div>
            <div className="menu flex items-center justify-between p-3 rounded-sm cursor-pointer hover:bg-slate-800 hover:text-white" onClick={() => {
                onExpand();
                setInactive(true);
            }}>
                <div className="flex items-center gap-3" >
                    {icon}
                    <div className={`${!inactive ? 'w-0 h-0 opacity-0 invisible' : ''}`}>{name}</div>
                </div>
                {subMenus && subMenus.length > 0 ? <AngleDownIcon inactive={inactive} expended={expanded} /> : ''}
            </div>
            {
                subMenus && subMenus.length > 0 ? (
                    <div className={`dropdown-menu flex flex-col overflow-hidden max-h-0 transition[max-height] ease-in duration-300 ${expanded ? 'max-h-52' : 'max-h-0'}`}>
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
