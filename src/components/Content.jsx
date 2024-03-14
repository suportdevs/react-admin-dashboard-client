import Table from "./Table";
import ContentLinks from "./ContentLinks";
import ContentFilter from "./ContentFilter";


const Content = ({setModalOpen}) => {
    return (
        <>
        <div className="flex flex-col mt-4 mx-4 rounded-md lg:h-[83vh] " >
            <div className="bg-white flex flex-col py-4 p-2 hip">
                <ContentLinks setModalOpen={setModalOpen} />
                <ContentFilter />
            </div>

            <div className=" bg-white flex flex-col mt-2 h-[100vh] overflow-y-auto" id="print_area">
                <Table />
            </div>
        </div>
        </>
    )
}

export default Content;