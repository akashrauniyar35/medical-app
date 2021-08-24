import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Link from 'next/link'
import ReceiptIcon from '@material-ui/icons/Receipt';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Sidenav from './bottomIcon'
import EmailIcon from '@material-ui/icons/Email';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useState } from 'react';
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import DashboardMenu from '../components/submenu/dashboardMenu'

function Sidebar() {
    const [click, setClick] = useState(false)
    const [profile, setProfile] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <div className="absolute top-0 flex">
        <div className="bg-gray-50 border-r-2 shadow-md w-[6rem] text-center rounded-xl flex flex-col items-center gap-4 p-2 h-screen cursor-pointer">
            <h1 className="text-xl font-bold">Medical App</h1>

            <div className="my-5 w-[160px] flex flex-col text-left flex-1">

                <Sidenav Icon={DashboardRoundedIcon} title="Dashboard" link="/dashboard" />
                <div className="">
                    <Sidenav Icon={EventAvailableIcon} title="Schedules" link="/myschedules" />
                    {/* <p onClick={handleClick}><ExpandMoreIcon/></p> */}
                </div>
                {/* {click && <div className="ml-10 mt-[-0.3rem]">
                    <ul className="text-[13px] flex flex-col gap-2 font-semibold">
                        <li> My Appointments </li>
                        <li> Shift Roster </li>
                        <li> Timeline </li>

                    </ul>
                </div>} */}
                <Sidenav Icon={LocalHospitalIcon} title="Overview" link="/overview" />
                <Sidenav Icon={ReceiptIcon} title="Medical" link="/medicalrecords" />               <Sidenav Icon={EmailIcon} title="Messages" link="/" />
            </div>

            <div className="flex flex-col gap-4 mb-3">
                <div className="flex flex-col gap-3 border-b-2 pb-5">
                    <div className="relative ml-2 gap-3 text-[12px] text-gray-500 font-semibold">
                        <NotificationsIcon />
                        <div className="absolute bg-red-500 text-gray-100 w-[14px] rounded-full text-center top-0 right-3 text-[9px]">7</div>

                        <p>Notifications</p>
                    </div>

                    <div className="ml-2 gap-3 text-[12px] text-gray-500 font-semibold">
                        <HelpOutlineIcon />
                        <p>Help ?</p>
                    </div>
                </div>
                {/* <div className="flex gap-2 mt-5">
                    <img
                        className="h-10 rounded-full "
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsULETJhSzytrknF5q1s2ldczx_KC876oFBQ&usqp=CAU" />
                    <div>
                        <h1 className="text-[15px] font-semibold">Dr. Adam H.</h1>
                        <p className="text-sm text-gray-400">Surgeon</p>
                    </div>
                    <ExpandMoreIcon onClick={() => setProfile(!profile)} />
                </div>
                {profile && 
                    <div>
                      <ul className="text-[13px] flex flex-col text-left ml-14 space-y-1 text-gray-500">
                          <li>Profile Settings</li>
                          <li>Logout</li>
                          <li>Security Settings</li>
                      </ul>
                        </div>} */}
            </div>




        </div>
        <DashboardMenu/>
        </div>
    )
}

export default Sidebar
