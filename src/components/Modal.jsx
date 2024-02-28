const Modal = () => {
    return (
        <div className="fixed inset-0 w-screen h-screen backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="bg-white p-5 rounded border shadow-2xl">modal</div>
            </div>
        </div>
    )
}

export default Modal;