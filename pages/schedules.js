import React, { useState } from 'react';
import { MainBanner } from '../components'
import MenuHolder from '../components/submenu/menuHolder'
import DateRangeIcon from '@material-ui/icons/DateRange';import BarChartIcon from '@material-ui/icons/BarChart';
import SettingsIcon from '@material-ui/icons/Settings';
import SendIcon from '@material-ui/icons/Send';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import {TabMenu} from '../components/TabMenu';
import MyAppointments from '../components/rightScreen/myappointments'

function schedule({query}) {

    const [selected, setSelected] = useState('Sprint')
    const mainBannerPress = (item) => {
        console.log('print')
    }

    console.log(selected)



    const scheduleData = [
        {
            id: "01",
            title: "my-appointments",
            link: "/dashboard",
            icon: <DateRangeIcon/>,
            comp:<MyAppointments/>
        },
        {
            id: "02",
            title: "Request & Cancellation",
            link: "/dashboard",
            icon: <SendIcon/>
        },
        {
            id: "03",
            title: "Training & Lecture",
            link: "/dashboard",
            icon: <MenuBookIcon />
        },
        {
            id: "04",
            title: "Roster",
            link: "/dashboard",
            icon: <TimelapseIcon/>
        },
        {
            id: "05",
            title: "System Settings",
            link: "/dashboard",
            icon: <SettingsIcon />
        },


    ]



    return (
        <div className="bg-white-200 ml-[6rem] flex">
             <TabMenu initialTab={query}>
              
              {scheduleData.map((item) => (
                            <MenuHolder comp={item.comp} label={item.title} title={item.title} link={item.link} Icon={item.icon} />
                            ))
              }
              
               </TabMenu>
        </div>
    )
}

export default schedule

schedule.getInitialProps = ({query}) => {
    return {query}
}
