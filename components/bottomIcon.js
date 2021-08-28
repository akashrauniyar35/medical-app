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
        <a onClick={handleClick}>
        <div 
            className="flex gap-1 flex-col p-3 items-center w-full text-sm">
               <div className={`${isCurrentPath && "ring-2 ring-blue-500 "} h-10 w-10 rounded-lg bg-gray-200 flex items-center justify-center`}>
            <Icon className="h-4" color={isCurrentPath ? "primary" : "action"}/>
            </div>
            <h2 className={`text-[0.8rem] font-light ${isCurrentPath ? "text-blue-500 font-bold" : "text-gray-500"}`}>
                {title}</h2>
        </div>
        </a>
    )
}

export default bottomIcon
