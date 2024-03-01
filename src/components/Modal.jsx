import { XMarkIcon } from "@heroicons/react/24/outline";

const Modal = ({id= 'modal', modalOpen, setModalOpen, modalSize}) => {
    let modalWeight = 'lg:w-4/12';
    if(modalSize === 'sm'){
        modalWeight = 'lg:w-4/12';
    }else if(modalSize === 'md'){
        modalWeight = 'lg:w-6/12';
    }else if(modalSize === 'lg'){
        modalWeight = 'lg:w-8/12';
    }else if(modalSize === 'xl'){
        modalWeight = 'lg:w-10/12';
    }
    const handleModalClose = (e) => {
        if(e.target.id === id){
            setModalOpen(false);
        }
    }

    return (
        <div onClick={handleModalClose}  id={id} className={`fixed inset-0 flex justify-center items-center w-screen h-screen backdrop-blur-sm transition ${modalOpen ? 'visible' : 'invisible'}`}>
            <div className={`flex flex-col gap-2  w-full m-5 rounded border shadow-2xl bg-white overflow-hidden transition-all ${modalWeight} ${modalOpen ? 'scale-100 opacity-1' : 'scale-125 opacity-0'}` }>
                <div className="bg-blue-800 text-white px-4 p-2 flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Are you sure delete this record!</h2>
                    <XMarkIcon onClick={() => setModalOpen(false)} className="w-6 h-6 cursor-pointer" />
                </div>
                <div className="px-4 py-2">
                    <div className="w-full">
                        <label htmlFor="">User Name</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 ring-blue-400" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="">Email</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 ring-blue-400" id="username" type="text" placeholder="Email" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="">Passowrd</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 ring-blue-400" id="username" type="text" placeholder="Passowrd" />
                    </div>
                    <div className="w-full">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:ring-4"  type="button">Search</button>
                    </div>
                </div>
                <div className="bg-gray-100 px-4 py-2 flex items-center justify-end gap-1">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline focus:ring-4 ring-green-200"  type="button">Yes</button>
                    <button onClick={() => setModalOpen(false)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline focus:ring-4 ring-red-200"  type="button">No</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;