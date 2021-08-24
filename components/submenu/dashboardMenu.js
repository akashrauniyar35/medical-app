import MenuHolder from './menuHolder'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import BarChartIcon from '@material-ui/icons/BarChart';
import SettingsIcon from '@material-ui/icons/Settings';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import TimelineIcon from '@material-ui/icons/Timeline';
import { useRouter } from 'next/router'


function dashboardMenu() {

    const router = useRouter()

    const isCurrentPath = router.pathname === "/dashboard" || router.asPath === "/dashboard";


    return (
        <div>
            
    <div className="pt-10 px-5 border-r-2 border-gray-50 text-sm font-bold text-gray-500 bg-gray-50
        w-[17rem]">
        <h1>BOARD</h1>
        <div className="mt-10 font-semibold">
            <h1>MENU</h1>
            <div className="flex flex-col gap-2 mt-4">
            <MenuHolder Icon={CalendarViewDayIcon} title="Sprint" link="/dashboard" />
            <MenuHolder Icon={BarChartIcon} title="Reports" link="/reports" />
            <MenuHolder Icon={NewReleasesIcon} title="Releases" link="/releases" />

            <MenuHolder Icon={TimelineIcon} title="Tracker" link="/tracker" />

            <MenuHolder Icon={SettingsIcon} title="System Settings" link="/settings" />
            

            </div>



        </div>
    </div>
    </div>
    )
}

export default dashboardMenu
