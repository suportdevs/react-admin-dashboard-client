import { BellIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid'

const Header = ({inactive, setInactive}) => {
    return(
        <div className="bg-white w-full h-16 flex items-center justify-between p-4">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={() => setInactive(!inactive)}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>
            </div>
            <div className="flex items-center gap-4">
                <div className="cursor-pointer">
                    <BellIcon className="w-6 h-6"/>
                </div>
                <div className="cursor-pointer">
                    <ChatBubbleLeftRightIcon className="w-6 h-6"/>
                </div>
                <div className="overflow-hidden cursor-pointer">
                    <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </div>

            </div>
        </div>
    )
}

export default Header;