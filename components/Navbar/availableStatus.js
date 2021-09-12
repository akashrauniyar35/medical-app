import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid'
import { ClockIcon, RefreshIcon } from '@heroicons/react/outline'


export default function availableStatus({availibility, setAvailibility}) {
    return (
        <div className="">
            <Menu as="div" className="relative inline-block text-right">
                <div>
                    <Menu.Button className="inline-flex text-left i w-full text-[0.8rem] hover:text-blue-400">
                        {availibility}
                        <ChevronDownIcon
                            className="w-3 h-5 ml-2 mr-1 text-violet-200 hover:text-violet-100"
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-white  rounded-md shadow-lg ring-0 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item onClick={()=> setAvailibility('Available')}>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-violet-500' : 'text-gray-900'
                                            } group flex rounded-md items-center w-full px-2 py-2 gap-2 text-sm`}
                                    >
                                        <CheckCircleIcon className="w-3.5 text-green-500" />
                                        Available
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item onClick={()=> setAvailibility('Busy')} >
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-violet-500' : 'text-gray-900'
                                            } group flex rounded-md items-center gap-2 w-full px-2.5 py-2 text-sm`}
                                    >
                                        <p className="bg-red-700 w-2.5 h-2.5 rounded-full"></p>
                                        Busy
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                            <Menu.Item onClick={()=> setAvailibility('Do not disturb')}>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-violet-500' : 'text-gray-900'
                                            } group flex rounded-md items-center w-full px-2 py-2 gap-2 ml-0.5 text-sm`}
                                    >
                                        <p className="bg-red-700 w-2.5 h-2.5 rounded-full flex justify-center items-center align-center pb-[2.5px] pr-[1px] text-white">-</p>
                                        Do not disturb
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item onClick={()=> setAvailibility('Be right back')}>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                            } group flex rounded-md items-center w-full px-2 py-2 gap-1.5 text-sm`}
                                    >
                                        <ClockIcon className="w-3.5 text-white rounded-full bg-yellow-400"/>
                                        Be right back
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                            <Menu.Item onClick={()=> setAvailibility('Appear Away')}>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-violet-500' : 'text-gray-900'
                                            } group flex items-center w-full px-2 py-2 gap-1.5 text-sm`}
                                    >
                              <ClockIcon className="w-3.5 text-white rounded-full bg-yellow-400"/>

                                        Appear Away
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item onClick={()=> setAvailibility('Offline')}>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-violet-500' : 'text-gray-900'
                                            } group flex rounded-md items-center w-full px-2 py-2 gap-1.5 text-sm `}
                                    >
                              <XCircleIcon className="w-3.5 text-gray-500"/>

                                        Appear offline
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                       
                        <div className="px-1 py-1 border-t-2 border-gray-100">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-violet-500' : 'text-gray-900'
                                            } group flex rounded-md items-center w-full px-2 py-2 gap-1.5 text-sm`}
                                    >
                              <ClockIcon className="w-4 "/>

                                        Duration
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-violet-500' : 'text-gray-900'
                                            } group flex rounded-md items-center w-full px-2 py-2 gap-1.5 text-sm`}
                                    >
                              <RefreshIcon className="w-3.5 text-gray-500"/>

                                       Reset Status
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

function EditInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    )
}

function EditActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    )
}

function DuplicateInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4H12V12H4V4Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path
                d="M8 8H16V16H8V8Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    )
}

function DuplicateActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4H12V12H4V4Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path
                d="M8 8H16V16H8V8Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    )
}

function ArchiveInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="8"
                width="10"
                height="8"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <rect
                x="4"
                y="4"
                width="12"
                height="4"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function ArchiveActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="8"
                width="10"
                height="8"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <rect
                x="4"
                y="4"
                width="12"
                height="4"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function MoveInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function MoveActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    )
}

function DeleteInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function DeleteActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    )
}
