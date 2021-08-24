import { useRouter } from 'next/router'

function menuHolder({Icon, title, link}) {
    const router = useRouter()
    
    const handleClick = event => {
        event.preventDefault();
        router.push(link)
    }


    const isCurrentPath = router.pathname === link || router.asPath === link;


    return (
        <a href={link} className={`flex gap-4 items-center align-center font-light text-[15px] h-full w-[13rem] py-2 pl-3 rounded-lg ${isCurrentPath && "bg-blue-100 text-blue-600"}`}>
           <Icon/>
           {title}

           
        </a>
    )
}

export default menuHolder
