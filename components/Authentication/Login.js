import React, { useState } from 'react';

function Login() {

    const [toggler, setToggler] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const resetPassowrd = () => {
        return (
            <>
                <div className="bg-gray-50 h-[500px] w-[400px] p-10">

                    <h1 className="text-3xl font-semibol text-gray-500 mb-20">Reset</h1>

                    <div className="">
                        <p className="text-sm font-semibold text-gray-500 pl-1">email</p>
                        <input onChange={(text) => setEmail(text.target.value)} className="rounded-sm border-gray-50 bg-gray-200 h-8" />
                    </div>


                    <button onClick={() => startResetPasword(email)} className="bg-blue-400 shadow-sm rounded-sm flex justify-center w-[120px] self-center mt-10 py-1">
                        <h1 className="text-xl font-semibold text-white">Reset</h1>
                    </button>

                    <button className="flex mt-[180px]" onClick={() => setToggler(!toggler)}>
                        <p className="text-sm font-semibold text-gray-500">Go back</p>
                    </button>

                </div>
            </>
        )
    }

    const startLogin = (email, password) => {
        console.log(email, password)
    }

    const startResetPasword = (email) => {
        console.log('reset', email)
    }



    return (
        <>
            <div className="bg-blue-200 p-10 justify-center items-center flex gap-5 h-screen">

                <div className="bg-gray-50 h-[500px] w-[500px] items-center">
                    <img className="" src="https://static.vecteezy.com/system/resources/previews/002/072/163/non_2x/doctor-injecting-coronavirus-vaccine-to-a-patient-concept-free-vector.jpg" />
                </div>


                {toggler ? resetPassowrd() :




                    <div className="bg-gray-50 h-[500px] w-[400px] p-10">

                        <h1 className="text-3xl font-semibol text-gray-500 mb-20">Login</h1>

                        <div className="">
                            <p className="text-sm font-semibold text-gray-500">email</p>
                            <input onChange={(text) => setEmail(text.target.value)} type="email" className="rounded-sm border-gray-50 bg-gray-200 h-8 pl-1" />
                        </div>

                        <div className="mt-2">
                            <p className="text-sm font-semibold text-gray-500">Password</p>
                            <input onChange={(text) => setPassword(text.target.value)} type="password" className="rounded-sm border-gray-50 bg-gray-200 h-8 pl-1" />
                        </div>

                        <button onClick={() => startLogin(email, password)} className="bg-blue-400 shadow-sm rounded-sm flex justify-center w-[120px] self-center mt-10 py-1">
                            <h1 className="text-xl font-semibold text-white">Continue</h1>
                        </button>

                        <div className="flex mt-10">
                            <p className="text-sm font-semibold text-gray-500">Forgoy your password?... </p>

                            <button className="" onClick={() => [setToggler(!toggler), setEmail(null)]}>
                                <h1 className="underline text-sm font-semibold text-blue-400">Reset</h1>
                            </button>
                        </div>

                    </div>
                }




            </div>
        </>
    )
}

export default Login
