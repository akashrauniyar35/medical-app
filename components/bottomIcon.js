import { useRouter } from 'next/router'
import ActiveLink from './ActiveLink'

function bottomIcon({Icon, title, link}) {
    // const [active, setActive] = useState('dashboard')
    const router = useRouter()


    return (
        <ActiveLink href={link}>
        <div 
            className="flex gap-2 p-3 items-center w-full hover:bg-gray-100
           ">
            <Icon className="h-6"/>
            <h2 className="text-[12px] font-bold">{title}</h2>
        </div>
        </ActiveLink>
    )
}

export default bottomIcon
