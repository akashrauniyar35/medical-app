import {useRouter} from 'next/router'

const ActiveLink = ({href, children}) => {
    const router = useRouter()
    
    const handleClick = event => {
        event.preventDefault();
        router.push(href)
    }

    const isCurrentPath = router.pathname === href || router.asPath === href;
    return (
        <div className="">
     
        <a href={href} onClick={handleClick}
        style={{
            textDecoration:'none',
            margin:0,
            padding:0,
            fontWeight: isCurrentPath ? "bolder" : "normal",
            // color: isCurrentPath ? "blue" : "black",
            
        }}
        className={`"font-bold text-gray-900 flex flex-col" ${isCurrentPath ? "text-blue-500 rounded-sm font-bold text-white " : "bg-white"}`}>    
            {children}
        </a>  
    
        </div>
    )
    
}

export default ActiveLink