import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Link from 'next/link'
import ReceiptIcon from '@material-ui/icons/Receipt';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Sidenav from './bottomIcon'
import EmailIcon from '@material-ui/icons/Email';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return (

        <div className="absolute top-0 shadow-md w-55 text-center rounded-xl flex flex-col items-center gap-4 p-2 h-screen cursor-pointer">
            <h1 className="text-2xl font-bold">Medical App</h1>

            <div className="my-5 w-[160px] flex flex-col gap-3 text-left flex-1">
           
            <Sidenav Icon={DashboardIcon} title="Dashboard" link="/dashboard"/>
            <Sidenav Icon={EventAvailableIcon} title="My Schedules" link="/myschedules"/>
            <Sidenav Icon={LocalHospitalIcon} title="Overview" link="/overview"/>
            <Sidenav Icon={ReceiptIcon} title="Medical Records" link="/medicalrecords"/>
            <Sidenav Icon={EmailIcon} title="Messages" link="/"/>
            </div>

            <div className="flex flex-col gap-4 mb-3">
                <div className="flex flex-col gap-2 border-b-2 pb-5">
                    <div className="ml-2 flex gap-3 text-[13px] text-gray-500 font-semibold">
                        <NotificationsIcon/>
                        <p>Notifications</p>
                        <div className="bg-red-500 text-gray-100 w-[25px] rounded-full text-center">7</div>
                    </div>

                    <div className="ml-2 flex gap-3 text-[13px] text-gray-500 font-semibold">
                        <HelpOutlineIcon/>
                        <p>Help ?</p>
                    </div>
                </div>
                <div className="flex gap-2 mt-5">
                    <img
                     className="h-10 rounded-full "
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsULETJhSzytrknF5q1s2ldczx_KC876oFBQ&usqp=CAU" />
                    <div>
                        <h1 className="text-[15px] font-semibold">Dr. Adam H.</h1>
                        <p className="text-sm text-gray-400">Surgeon</p>
                    </div>
                    <ExpandMoreIcon/>
                </div>
            </div>


           
        </div>
    )
}

export default Sidebar
