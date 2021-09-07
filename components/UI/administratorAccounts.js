import { useState } from 'react'
import { Tab } from '@headlessui/react'
import AdministratorDetails from '../UI/administratorDetails'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function administratorAccounts() {
    let [categories] = useState({
        All: [
            {
                id: 1,
                title: 'Jane Cooper',
                email: 'jan3cooper@gmail.com',
                access: 'Full',
                role: 'Super Admin',
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWHGpLEiQnNRyi18dmpS3dpULryUi2feBYw&usqp=CAU'
            },
            {
                id: 2,
                title: "Wade Warren",
                email: 'jandfdfooper@gmail.com',
                access: 'Full',
                role: 'Sub-Admin',
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4_0fSYUBIauNsh3x8GrA6TDXtsJMwc65JQ&usqp=CAU'
            },
            {
                id: 3,
                title: "Shree Ram Thapa",
                email: 'shreeram@gmail.com',
                access: 'Full',
                role: 'Sub-Admin',
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4_0fSYUBIauNsh3x8GrA6TDXtsJMwc65JQ&usqp=CAU'
            },
            {
                id: 4,
                title: "Akash Rauniyar",
                email: 'akashrauniyar@hotmail.com',
                access: 'Admin',
                role: 'Developer',
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4_0fSYUBIauNsh3x8GrA6TDXtsJMwc65JQ&usqp=CAU'
            },
        ],
        SuperAdmin: [
            {
                id: 5,
                title: 'Bhuwan KC',
                email: 'bhuwankc2004@gmail.com',
                access: 'Full',
                role: 'Super Admin',
                img:'data:image/jpeg;base64,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'
            },
            {
                id: 6,
                title: "Jaggi Vasudev",
                email: 'sadhguru@gmail.com',
                access: 'Part',
                role: 'Sub-Admin',
                img:'data:image/jpeg;base64,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'
            },
            {
                id: 7,
                title: "Elon Musk",
                email: 'elonmusk1997@gmail.com',
                access: 'Full',
                role: 'Admin',
                img:'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1699%26cropX2%3D3845%26cropY1%3D559%26cropY2%3D2704'
            },
            {
                id: 8,
                title: "Samundra Rauniyar",
                email: 'samundra@hotmail.com',
                access: 'Admin',
                role: 'Developer',
                img:'https://pbs.twimg.com/profile_images/512657668893200384/OlSquREg.jpeg'
            },
        ],
        Accountant: [
            {
                id: 5,
                title: 'Bhuwan KC',
                email: 'bhuwankc2004@gmail.com',
                access: 'Full',
                role: 'Super Admin',
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWHGpLEiQnNRyi18dmpS3dpULryUi2feBYw&usqp=CAU'
            },
            {
                id: 6,
                title: "Jaggi Vasudev",
                email: 'sadhguru@gmail.com',
                access: 'Full',
                role: 'Sub-Admin',
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4_0fSYUBIauNsh3x8GrA6TDXtsJMwc65JQ&usqp=CAU'
            },
            {
                id: 7,
                title: "Elon Musk",
                email: 'elonmusk1997@gmail.com',
                access: 'Full',
                role: 'Sub-Admin',
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4_0fSYUBIauNsh3x8GrA6TDXtsJMwc65JQ&usqp=CAU'
            },
            {
                id: 8,
                title: "Samundra Rauniyar",
                email: 'samundra@hotmail.com',
                access: 'Admin',
                role: 'Developer',
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4_0fSYUBIauNsh3x8GrA6TDXtsJMwc65JQ&usqp=CAU'
            },
        ],
    })

    return (
        <div className="w-full max-w-2xl px-2 py-5 sm:px-0">
            <Tab.Group>
                <Tab.List className="flex p-1 mx-4 space-x-1 bg-blue-900/20 rounded-xl">
                    {Object.keys(categories).map((category, index) => (
                             <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    'w-full py-2 text-[1rem] leading-5 text-blue-700 flex justify-center rounded-lg',
                                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                                    selected
                                        ? 'bg-white shadow'
                                        : 'hover:bg-white/[0.12] hover:text-white text-gray-600'
                                )
                            }
                        >
                            {`${category}${' '}(${category.length})`}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2 ">
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'bg-white rounded-xl p-3'
                                
                            )}
                        >
                            <table className="table-fixed">
                                <thead>
                                    <tr className="flex mb-2">
                                        <th className="mr-40">Account</th>
                                        <th className="mr-44">Email Address</th>
                                        <th className="ml-6 mr-10">Access</th>
                                        <th>Role</th>
                                    </tr>
                                </thead>
                                <tbody className="w-full">
                                    {posts.map((post) => {
                                        return (
                                            <AdministratorDetails 
                                                key={post.id} 
                                                title={post.title}
                                                email={post.email} 
                                                access={post.access} 
                                                role={post.role} 
                                                img={post.img}
                                                />
                                        )
                                    })}
                                </tbody>
                            </table>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
