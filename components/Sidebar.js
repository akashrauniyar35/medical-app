import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Link from 'next/link'


function Sidebar() {
    return (
        <div className="absolute top-0 bg-purple-400 w-20 rounded-xl flex flex-col items-center gap-4 p-3 h-screen cursor-pointer">
            <Link href="/dashboard">
            <div className="animate-spin"> <DashboardIcon fontSize="large"/></div>
            </Link>
            <Link href="/Patients">
            <div> <DashboardIcon fontSize="large"/></div>
            </Link>
            <div> <LocalHospitalIcon fontSize="large"/></div>
            <div> <DashboardIcon fontSize="large"/></div>
           
        </div>
    )
}

export default Sidebar
