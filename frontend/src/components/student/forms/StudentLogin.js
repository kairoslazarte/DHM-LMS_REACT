import React, { useState, useContext } from 'react'
import axios from 'axios'
import { StudentLoginContext } from '../../../contexts/student/StudentLoginContexts'
import { useAuthContext } from '../../../contexts/auth/AuthContext'

const StudentLogin = () => {
    const { student, setStudent } = useContext(StudentLoginContext);
    const { setAuthUser } = useAuthContext();
    const [errorLogin, setErrorLogin] = useState(false);

    const loginHandler = async (e) => {
        e.preventDefault()
        try {
            const {data: student} = await axios.post('/api/students/login', {
                email: e.target.email.value,
                password: e.target.password.value
            })
            
            if (student) {
                setStudent(student)
                setAuthUser(student)
            }
        } catch (error) {
            setErrorLogin(true)
        }   
    }



    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#B3FFAE]">
            <div className="w-full max-w-md shadow-md rounded-md p-8 bg-[#F8FFDB]">
                <div>
                    <a href="/student">
                        <img
                            className="mx-auto h-20 w-auto animate-pulse"
                            src="/static/images/dhm-logo-sm.png"
                            alt="DHM logo small"
                        />
                    </a>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 animate-bounce">
                        Sign in as Student
                    </h2>
                </div>
                <form className="mt-4 space-y-6" onSubmit={loginHandler}>
                    <div className="flex flex-col space-y-4 rounded-md shadow-sm relative">
                        <p 
                            className={`w-full text-red-600 text-center absolute left-[50%] transform translate-x-[-50%] ${errorLogin ? 'block' : 'hidden'}`}
                        >
                            Invalid email or password.
                        </p>
                        <div className="pt-5">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className={`relative block w-full appearance-none rounded-md border px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-700 focus:outline-none focus:ring-greenborder-green-700 sm:text-sm ${errorLogin ? `border-red-600` : `border-gray-300`}`}
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                            id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className={`relative block w-full appearance-none rounded-md border px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-700 focus:outline-none focus:ring-greenborder-green-700 sm:text-sm ${errorLogin ? `border-red-600` : `border-gray-300`}`}
                                placeholder="Password"
                            />
                        </div>
                    </div>
        
                    <div className="pt-3">
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#FF6464] py-2 px-4 text-sm font-medium text-white hover:bg-opacity-75 transition duration-200 focus:outline-none focus:ring-2 focus:ring-greenborder-green-700 focus:ring-offset-2"
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            </span>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default StudentLogin