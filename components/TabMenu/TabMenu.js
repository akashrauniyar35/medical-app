import MenuHolder from '../submenu/menuHolder';
import React,{useState, useEffect} from 'react';
import {slugify} from '../../utils/slugify';
import {useRouter} from 'next/router';

function TabMenu({ children, initialTab }) {

    const [activeTab, setActiveTab] = useState(children[0].props.label)
    const router = useRouter()

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(slugify(newActiveTab))

    }

    useEffect(() => {
        if(initialTab.tab) {
            setActiveTab(initialTab.tab)
        }
    }, [])

    useEffect(() => {
        router.push(`${router.pathname}?tab=${slugify(activeTab)}`, undefined, {shallow:true})
    }, [activeTab])

    return (
        <div className="flex">
            <div className="p-5 text-gray-500 bg-gray-50 h-screen font-bold">
                <h1 >BOARD</h1>

                <h1 className="mt-5">MENU</h1>
                <div className="mt-7">
                    {children.map((tab) =>
                    (<a  onClick={(e) => handleClick(e, tab.props.label)} className={`flex items-center mb-4 align-center cursor-pointer font-light text-[17px] h-[2.5rem] w-[13rem] py-2 pl-3 hover:bg-blue-200 hover:text-blue-400 rounded-lg bg-gray-100 gap-3 ${slugify(tab.props.label) == activeTab && "bg-blue-400 text-blue-100"}`} key={tab.props.label}>
                        {tab.props.Icon}
                        {tab.props.label}
                    </a>))}
                </div>
                {/* <div className="mt-5">
                    {dashboardData.map((item) => {
                        return(
                            <div key={item.id} >
                            <MenuHolder isActive={true} title={item.title} link={item.link} Icon={item.icon} />
                            </div>
                        )
                        
                    })}

                </div> */}

            </div>
            <div>
                {children.map((one) => {
                    if(slugify(one.props.label) == activeTab)
                    return(
                    <div key={one.id}>
                        {one.props.comp}
                    </div>
                    )
                    })}
            </div>
        </div>
    )
}

export default TabMenu

