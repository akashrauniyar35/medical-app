


function administratorCard({title, img}) {
    return (
        <div className="min-w-[18rem] ring-2 ring-gray-200 p-4 rounded-md hover:shadow-lg cursor-pointer flex flex-col gap-3">
        <div className="flex justify-between items-center">
            <h2 className="text-[0.8rem] text-gray-500 font-semibold">3 ACCOUNTS</h2>
            <img className="h-8 w-8 rounded-full ring-2 ring-white" src={img}></img>
            
        </div>
        <div className="flex flex-col">
            <h2 className="font-semibold text-lg">{title}</h2>
            <p className="text-blue-400 text-sm">Learn more</p>
        </div>
    </div>
    )
}

export default administratorCard
