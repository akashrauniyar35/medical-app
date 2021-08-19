import { MainBanner } from '../components'

function dashboard() {

const mainBannerPress=(item)=>{
    console.log('print')
}

    const DATA = [
        {
            id: '01',
            name: 'Patients Today',
            count: '40',
        },
        {
            id: '02',
            name: 'Bed Available',
            count: '30',
        },
        {
            id: '03',
            name: 'Bookings Tomorrow',
            count: '40',
        },
        {
            id: '04',
            name: 'Patients Now',
            count: '40',
        },
    ]


    return (
        <div className="bg-white-200 m-20">
            <h1 className="text-2xl font-semibold pl-5">Dashboard</h1>
            {/* <button className="btn text-red-500 lg:text-5xl">Click me</button> */}
            <div className='flex'>
                {DATA.map((item) => {
                    return (

                        <div className='bg-red-300'>
                            <MainBanner id={item.id} name={item.name} count={item.count} />
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default dashboard
