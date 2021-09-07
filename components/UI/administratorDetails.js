import Image from 'next/image'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
function administratorDetails({ title, email, access, role, img }) {
    return (
        <div className="w-full cursor-pointer text-center border-t-2 flex items-center py-2 hover:bg-gray-200 ">
            <div className="flex items-center gap-4">
                <Image
                    className="rounded-full"
                    src={img}
                    width={50}
                    height={50}
                    layout="fixed"></Image>
                <h1 className="w-[10rem] text-left font-semibold text-[1rem]">{title}</h1>
            </div>
            <div className="flex items-center gap-2">
                <VerifiedUserIcon className="text-green-500"/>
            <h1 className="text-left w-[14rem]">{email}</h1>
            </div>
            <h2 className="w-[8rem]">{access}</h2>
            <p className="items-center w-[8rem] font-semibold">{role}</p>
        </div>
    )
}

export default administratorDetails
