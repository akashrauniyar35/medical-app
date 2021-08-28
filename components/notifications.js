import CloseIcon from '@material-ui/icons/Close';

function notifications({open, setNotification}) {
    return (
        <div className="absolute top-0 left-[6rem] w-[25rem] bg-white rounded-md shadow-lg">
            <div className="flex border-b-2 border-gray-100 justify-between p-3 px-5 items-center">
                <div className="flex gap-4 items-center justify-center">
                <h1 className="text-[1.1rem] font-bold text-gray-800">Notifications </h1>
                <p className="bg-blue-400 rounded-full px-4 text-blue-50 p-2 text-md text-[0.9rem]"> 3 New</p>
                </div>
                <h2 onClick={() => setNotification(!open)}><CloseIcon/></h2>
            </div>
            <div>
                Milan
            </div>
        </div>
    )
}

export default notifications
