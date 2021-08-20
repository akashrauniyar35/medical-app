import { MainBanner } from '../components'
import PatientsCard from '../components/PatientsCard'
import DoctorsCard from '../components/DoctorsCard'
import SearchBar from '../components/SearchBar'

const BANNER_DATA = [
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
]

const PATIENST_DATA = [
    {
        id: '01',
        name: 'Ram Bahadur',
        department: 'Cardiology',
        sex: 'Male',
        age: '50',
        room:'10',
        photo: 'https://image.flaticon.com/icons/png/128/3034/3034882.png',
    },
    {
        id: '02',
        name: 'Shyam Bahadur',
        department: 'Cardiology',
        sex: 'Male',
        age: '40',
        room:'14',
        photo: 'https://image.flaticon.com/icons/png/128/3845/3845280.png',
    },
    {
        id: '03',
        name: 'Krishna Radha',
        department: 'Cardiology',
        sex: 'Male',
        age: '20',
        room:'08',
        photo: 'https://image.flaticon.com/icons/png/128/3430/3430497.png',
    },
    {
        id: '04',
        name: 'Radha Krishna',
        department: 'Neurology',
        sex: 'Female',
        age: '20',
        room:'11',
        photo: 'https://image.flaticon.com/icons/png/128/3430/3430497.png',
    },
]

const addPatients = () => {
    console.log('Add')
}

function Patients() {
    return (
        <div className="bg-white-300 m-20">

            <div className="flex flex-wrap justify-between bg-white-100 p-5">
                <div>
                    <h1 className="text-4xl font-semibol text-gray-600">Patients</h1>
                </div>
                <div>
                    <button className="w-10 h-10" onClick={() => { addPatients() }}>
                        <img src="https://image.flaticon.com/icons/png/128/1828/1828817.png" />
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap justify-between">

                <div className='flex' >

                    {BANNER_DATA.map((item) => {
                        return (

                            <div className='bg-white-000'>
                                <MainBanner id={item.id} name={item.name} count={item.count} />
                            </div>
                        )
                    })}
                </div>

                <SearchBar />

            </div>

            {/* <div className="bg-red-100 flex flex-wrap justify-end">
                <div className="w-5 h-5 bg-green-300 rounded-2xl" />
                <h2>In Hospital</h2>
            </div> */}

            <div className='flex'>
                {PATIENST_DATA.map((item) => {
                    return (
                        <PatientsCard id={item.id} name={item.name} department={item.department} sex={item.sex} room={item.room} age={item.age} photo={item.photo} />
                    )
                })}

            </div>
            <div className=''>
                <DoctorsCard />
            </div>
            <div className="flex bg-red-200">
            </div>
        </div>
    )
}

export default Patients
