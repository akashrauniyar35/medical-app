function MainBanner({ id, name, count }) {
    return (
        <div className='bg-gray-200 p-3 flex gap-2 rounded-md w-[220px] shadow-md mx-10 my-10'>
            <h2 className="text-2xl font-semibold">{name}</h2>
            <h2 className="text-5xl font-bold bg-red-400 flex items-center">{count}</h2>

        </div>
    )
}

export default MainBanner
