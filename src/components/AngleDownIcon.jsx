import { ChevronDownIcon } from "@heroicons/react/24/solid";

const AngleDownIcon = ({inactive, openMenu}) => {
    return (
        <ChevronDownIcon className={`w-6 h-6 ${!inactive ? 'lg:w-0 lg:h-0 lg:opacity-0 lg:invisible' : ''} ${openMenu ? 'rotate-180' : ''} transition[rotate] ease-in duration-300`} xmlns="http://www.w3.org/2000/svg" />
    )
}

export default AngleDownIcon;