import { useRouter } from 'next/router'
import ActiveLink from './ActiveLink'

function bottomIcon({Icon, title, link}) {
    // const [active, setActive] = useState('dashboard')
    const router = useRouter()
    
    const handleClick = event => {
        event.preventDefault();
        router.push(link)
    }

    const isCurrentPath = router.pathname === link || router.asPath === link;


    return (
        <a className="w-[7.5rem] hover:bg-blue-100" onClick={handleClick}>
        <div 
            className={`flex flex-col p-3 items-center hover:text-blue-500 ml-11 w-1/2 pl-8 h-[4rem] text-sm ${isCurrentPath && 'border-l-2 border-blue-600'}`}>
               <div className={`${isCurrentPath && ""} h-10 w-10 flex items-center justify-center`}>
            <Icon className="h-4" color={isCurrentPath ? "primary" : "action"}/>
            </div>
            <h2 className={`text-[0.7rem] font-light ${isCurrentPath ? "text-blue-500 font-bold" : "text-gray-500"}`}>
                {title}</h2>
        </div>
        </a>
    )
}

export default bottomIcon
