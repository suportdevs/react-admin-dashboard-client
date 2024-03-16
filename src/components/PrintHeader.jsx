const PrintHeader = ({cls}) => {
    return (
        <div className={`text-center mb-4 ${cls ? 'hidden' : ''} ${cls}`}>
            <table className="print_header text-center w-full">
                <tbody>
                    <tr>
                        <th><h2 className="text-2xl font-extrabold m-0">Suport Devs</h2></th>
                    </tr>
                    <tr>
                        <th>Address: test address, #1025</th>
                    </tr>
                    <tr>
                        <th>Contact: 01725896325</th>
                    </tr>
                    <tr>
                        <th><b className="underline underline-offset-4 ">Dashboard</b></th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PrintHeader;