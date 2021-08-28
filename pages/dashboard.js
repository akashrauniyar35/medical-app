import React, {useState} from 'react';
import { MainBanner } from '../components'
import MenuHolder from '../components/submenu/menuHolder'

import {TabMenu} from '../components/TabMenu';

import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import BarChartIcon from '@material-ui/icons/BarChart';
import SettingsIcon from '@material-ui/icons/Settings';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import TimelineIcon from '@material-ui/icons/Timeline';
import Sprint from './../components/rightScreen/sprint'
import Reports from './../components/rightScreen/reports'
import Releases from './../components/rightScreen/releases'


function dashboard({query}) {

    const [selected, setSelected] = useState('Sprint')
    const mainBannerPress = (item) => {
        console.log('print')
    }


    const DATA = [
        {
            id: '01',
            name: 'Patients Today',
            count: '40',
        },
        {
            id: '02',
            name: 'Bed Available',
            count: '30',
        },
        {
            id: '03',
            name: 'Bookings Tomorrow',
            count: '40',
        },
        {
            id: '04',
            name: 'Patients Now',
            count: '40',
        },
    ]

    
    
    const dashboardData = [
        {
            id: "01",
            title: "sprint",
            link: "/dashboard",
            icon: <CalendarViewDayIcon/>,
            comp:<Sprint/>
        },
        {
            id: "02",
            title: "Reports",
            link: "/dashboard",
            icon: <BarChartIcon/>,
            comp:<Reports/>
        },
        {
            id: "03",
            title: "Releases",
            link: "/dashboard",
            icon: <NewReleasesIcon/>,
            comp:<Releases/>

        },
        {
            id: "04",
            title: "Tracker",
            link: "/dashboard",
            icon: <TimelineIcon/>
        },
        {
            id: "05",
            title: "System Settings",
            link: "/dashboard",
            icon: <SettingsIcon/>
        },
    
    
    ]

    

    return (
        <div className="bg-white-200 ml-[6rem] flex">
          <TabMenu initialTab={query}>
              
              {dashboardData.map((item) => (
                            <MenuHolder comp={item.comp} label={item.title} title={item.title} link={item.link} Icon={item.icon} />
                            ))
              }
              
               </TabMenu>

            
            

        </div>
    )
}

export default dashboard

dashboard.getInitialProps = ({query}) => {
    return {query}
}
