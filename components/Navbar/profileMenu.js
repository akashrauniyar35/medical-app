import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment, useState, useEffect } from 'react'
import BookmarkBorderSharpIcon from '@material-ui/icons/BookmarkBorderSharp';
import RecentActorsSharpIcon from '@material-ui/icons/RecentActorsSharp';
import InsertLinkSharpIcon from '@material-ui/icons/InsertLinkSharp';
import AvailableStatus from '../Navbar/availableStatus'
import { CheckCircleIcon, XCircleIcon, MinusCircleIcon, ClockIcon } from '@heroicons/react/solid'

// const solutions = [
//   {
//     name: 'Insights',
//     description: 'Measure actions your users take',
//     href: '##',
//     icon: IconOne,
//   },
//   {
//     name: 'Automations',
//     description: 'Create your own targeted content',
//     href: '##',
//     icon: IconTwo,
//   },
//   {
//     name: 'Reports',
//     description: 'Keep track of your growth',
//     href: '##',
//     icon: IconThree,
//   },
// ]

export default function profileMenu({availibility, setAvailibility}) {
    // const [availibility, setAvailibility] = useState('Available')

    const renderIcons = () => {
        switch (availibility) {
            case 'Available' : 
            return <CheckCircleIcon className="w-4 h-4 text-green-400 ring-1 rounded-full ring-green-600 bg-white"/>

            case 'Busy' : 
            return <p className="bg-red-700 w-3 h-3 rounded-full ring-1 ring-red-900 mt-1"></p>

            case 'Do not disturb' : 
            return <MinusCircleIcon className="w-4 h-4 text-red-700 ring-1 rounded-full ring-red-900 bg-white"/>

            case 'Be right back' : 
            return <ClockIcon className="w-4 h-4 text-yellow-500 ring-1 rounded-full ring-yellow-600 bg-white"/>

            case 'Appear Away' : 
            return <ClockIcon className="w-4 h-4 text-yellow-500 ring-1 rounded-full ring-yellow-600 bg-white"/>

            case 'Offline' : 
            return <XCircleIcon className="w-4 h-4 text-red-500 ring-1 rounded-full ring-yellow-600 bg-white"/>
            
            default: 
            return null;
            
            <p>Menuka Khadka</p>
        }
        
       
    }
    
    useEffect(() =>{ 
       
    }, [availibility])
    



    return (
        <div className="w-[20rem] bg-white shadow-md ">
            <div className="flex gap-3 p-3 mb-4">
                <p className="bg-pink-200 text-xl rounded-full w-14 h-14 text-center flex items-center justify-center">
                    MA
                    <div className="absolute top-12 left-14 text-6xl w-5 h-5 flex rounded-full">
                    {renderIcons()} </div>
                    </p>
                   
                <div className="text-sm text-gray-700 flex flex-col">
                    <h1 className="font-bold">Milan ADHIKARI</h1>
                    <h2 className="text-[0.8rem] font-normal">Milanadhi0009@gmail.com</h2>
                    <div className="text-[0.8rem] font-normal text-gray-500 flex gap-2 pt-2 w-full ">
                        <div className="flex border-r-2 ">
                            
                            <p className=""><AvailableStatus availibility = {availibility} setAvailibility={setAvailibility} /></p>
                            {/* <ChevronDownIcon className="w-3 "/> */}
                        </div>
                        <p className="hover:text-blue-500 w-[7rem] pl-[-3rem]">Set Status message</p>
                    </div>

                </div>
            </div>
            <div className="text-gray-500 font-normal text-[0.9rem] flex gap-2 mx-4 border-t-2 border-b-2 border-gray-200 py-3 hover:bg-gray-200 px-2">
                <BookmarkBorderSharpIcon/>
                <p>Saved</p>
            </div>
            <div className="flex flex-col">
            <div className="text-gray-500 font-normal text-[0.9rem] flex gap-2 mx-4 border-gray-200 py-3 hover:bg-gray-200 px-2">
                <RecentActorsSharpIcon/>
                <p>Manage account</p>
            </div>
            <div className="text-gray-500 font-normal text-[0.9rem] flex justify-items-center gap-2 mx-4 border-b-2 border-gray-200 hover:bg-gray-200 px-2 pb-6">
                <InsertLinkSharpIcon/>
                <p>Teams for personal use</p>
               
            </div>
            </div>
            <h1 className="mx-4 py-4 cursor-pointer font-normal text-sm text-gray-600">Sign out</h1>
            
        </div>
    )
}

