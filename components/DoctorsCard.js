function PatientsCard() {
    return (
        <>
            <div className=" bg-white-600 w-[390px] my-5 mx-5 rounded-md p-2 shadow-md">

                <div className="flex justify-between">

                    <div className="bg-red-100 flex justify-center w-[220px] rounded-md">
                        <img src='https://image.flaticon.com/icons/png/128/3034/3034882.png' />
                    </div>

                    <div className="w-40% bg-white-300 flex flex-col justify-between">
                        <div className="">
                            <h1 className="text- font-semibol text-gray-600">Dr. Sushant Sharma</h1>
                            <h1 className="text-l font-semibol text-gray-600">Neurologist</h1>
                            <h1 className="text-l font-semibol text-gray-600">Others</h1>
                            <h1 className="text-l font-semibol text-gray-600">Others</h1>
                        </div>
                        <div className="bg-blue-400 shadow-sm rounded-sm flex justify-center">
                            <h1 className="text-xl font-semibold text-white">View More</h1>
                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}

export default PatientsCard
