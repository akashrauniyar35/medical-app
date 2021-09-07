import { data } from 'autoprefixer'
import AdministratorCard from '../UI/administratorCard'
import Example from '../UI/administratorAccounts'


const scheduleData = [
    {
        id: "01",
        title: "Super Admin",
        src: {
            img: "https://pbs.twimg.com/profile_images/416942818053992448/ybxZ_hlU_400x400.jpeg"
        }

    },
    {
        id: "02",
        title: "Admin",
        src: {
            img: "https://pbs.twimg.com/profile_images/416942818053992448/ybxZ_hlU_400x400.jpeg"
        }

    },
    {
        id: "03",
        title: "Manager",
        src: {
            img: "https://pbs.twimg.com/profile_images/416942818053992448/ybxZ_hlU_400x400.jpeg"
        }

    },
    {
        id: "04",
        title: "Normal",
        src: {
            img: "https://pbs.twimg.com/profile_images/416942818053992448/ybxZ_hlU_400x400.jpeg"
        }

    }


]


function releases() {
    return (
        <div className="m-5">
            <h1 className="text-lg font-bold">Administrators</h1>
            
            <div className="my-5 p-4 ring-1 ring-gray-300 rounded-md flex flex-col gap-2">
                <h1 className="font-bold">Administrator roles available</h1>
                <p className="text-[0.9rem] text-gray-500">A role provides access to predefined menus and featues so that depending on the assigned role (Super Admin, Manager, Accountant) an administrator can have access to what he needs.</p>

                <div className="flex justify-between space-x-7 my-4">
                    {scheduleData.map((data) => {

                        return (
                            <AdministratorCard key={data.id} title={data.title} img={data.src.img} />
                        )
                    })}

                </div>


            </div>
            <div className="flex flex-col gap-3 ring-1 ring-gray-300 rounded-md">
                <h1 className="text-md font-bold pl-4 pt-4">Administrators accounts</h1>
                <p className="pl-4">Find all of your company's administrator accounts and their associated roles.</p>
                    <Example/>

            </div>
        </div>
    )
}

export default releases
