import MenuHolder from './menuHolder'

import { useRouter } from 'next/router'


function dashboardMenu({data}) {

    const router = useRouter()

    const isCurrentPath = router.pathname === "/dashboard" || router.asPath === "/dashboard";


    return (
        <div>
            
    <div className="pt-10 px-5 border-r-2 border-gray-50 text-sm font-bold text-gray-500 bg-gray-50
        w-[17rem]">
        <div className="mt-10 font-semibold">
            <div className="flex flex-col gap-2 mt-4">
                {data.map((item) => {
                 <MenuHolder key={item.id} Icon={item.icon} title={item.title} link={item.link} />

                })}
            {/* <MenuHolder Icon={BarChartIcon} title="Reports" link="/reports" />
            <MenuHolder Icon={NewReleasesIcon} title="Releases" link="/releases" />

            <MenuHolder Icon={TimelineIcon} title="Tracker" link="/tracker" />

            <MenuHolder Icon={SettingsIcon} title="System Settings" link="/settings" /> */}
            

            </div>



        </div>
    </div>
    </div>
    )
}

export default dashboardMenu
