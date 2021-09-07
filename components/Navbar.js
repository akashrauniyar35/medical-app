import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Image from 'next/image'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ProfileMenu from '../components/Navbar/profileMenu'
import React, {useState} from 'react'



function Navbar() {
    const [profileClicked, setProfileClicked] = useState(false)
    return (
        <div className="absolute top-0 z-10 w-full h-[4rem] bg-blue-500 flex justify-between items-center">
            <div className="h-full w-[4rem] text-gray-200 text-center flex align-center items-center pl-3 cursor-pointer hover:bg-blue-400">
                <AppsIcon fontSize="large" className="" size="large" />
            </div>
            <div className="flex flex-grow items-center text-center flex-shrink rounded-md bg-blue-100 ml-2">
                <input className="p-2 h-full w-6 flex-grow rounded-l-md focus:outline-none pl-5" placeholder="Search" />
                <SearchIcon className="mx-2" />
            </div>
            <div className="flex items-center gap-4 ml-20">
                <div className="text-gray-200 hover:text-white cursor-pointer">
                    <MoreHorizIcon />
                </div>
                <div className="relative  cursor-pointer h-[4rem] w-[4rem] flex items-center justify-center px-2">
                <div 
                    className="relative bg-pink-200 rounded-full w-9 h-9 flex items-center justify-center font-bold text-blue-600"
                    onClick={() => setProfileClicked(!profileClicked)}>
                    <p>JP</p>
                    <div className="absolute flex h-4 top-6 left-6 text-green-400 bg-white rounded-full ring-2 ring-gray-700">
                        <CheckCircleIcon fontSize="inherit" />
                    </div>
                    
                  
                </div>
                {profileClicked && 
                        <div className="absolute w-full h-full top-14 right-72">
                        <ProfileMenu/>
                        </div>
                        }
                </div>
                

            </div>
            
        </div>
    )
}




export default Navbar
