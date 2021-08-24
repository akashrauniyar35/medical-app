function PatientsCard({ id, name, department, room, age, photo, sex }) {
    return (
        <div className="bg-white-600 w-1/5 my-5 mx-5 rounded-md p-2 shadow-md flex flex-col">
            <div className="bg-gray-100 flex justify-center rounded-md w-5/5">
                <img src={photo} />
            </div>

            <div className="my-1">

                <div className="flex flex-wrap justify-between">
                    <h1 className="text- font-semibol text-gray-600">{name}</h1>
                    <h1 className="text- font-semibol text-gray-600">{sex}</h1>
                </div>

                <h1 className="text-l font-semibol text-gray-600">{department}</h1>
                <h1 className="text-l font-semibol text-gray-600">Others</h1>
                <h1 className="text-l font-semibol text-gray-600">Room : {room}</h1>
            </div>

            <button className="bg-blue-400 shadow-sm rounded-sm flex justify-center w-[220px] self-center">
                <h1 className="text-xl font-semibold text-white">View More</h1>
            </button>

        </div>


    )
}

export default PatientsCard
