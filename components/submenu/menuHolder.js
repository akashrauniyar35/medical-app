import { useRouter } from 'next/router'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import BarChartIcon from '@material-ui/icons/BarChart';
import SettingsIcon from '@material-ui/icons/Settings';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import TimelineIcon from '@material-ui/icons/Timeline';


function menuHolder({Icon, title, link, label }) {
    const router = useRouter()

   


    return (
        <a href={link} className={`flex items-center gap-3 mb-4 align-center font-light text-[17px] h-[2.5rem] w-[13rem] py-2 pl-3 hover:ring-1 ring-blue-500 hover:text-blue-400 rounded-lg bg-gray-100
         `}>
          {Icon}
          {label}
           {title}
           

           
        </a>
    )
}

export default menuHolder
