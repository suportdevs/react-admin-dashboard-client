import { ChevronDownIcon } from "@heroicons/react/24/solid";

const AngleDownIcon = ({inactive, openMenu}) => {
    return (
        <ChevronDownIcon className={`w-6 h-6 ${!inactive ? 'w-0 h-0 opacity-0 invisible' : ''} ${openMenu ? 'rotate-180' : ''} transition[rotate] ease-in duration-300`} xmlns="http://www.w3.org/2000/svg" />
    )
}

export default AngleDownIcon;