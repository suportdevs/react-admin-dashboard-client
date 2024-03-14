import Table from "./Table";
import ContentLinks from "./ContentLinks";
import ContentFilter from "./ContentFilter";


const Content = ({children}) => {
    return (
        <>
        <div className="flex flex-col mt-4 mx-4 rounded-md lg:h-[83vh] " >
            {children}
        </div>
        </>
    )
}

export default Content;