import axios from 'axios';
import { useState } from 'react';
import {Link as RouterLink } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

export default function Signin() {

    const [email,setEmail] = useState<String>("")
    const [password,setPassword] = useState<String>("")

    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        let payload = {
            email,
            password
        }
        axios.post(`http://localhost:8080/users/login`,payload)
        .then((res)=>{
            if(res.data.msg == 'Login Successful'){
                alert("Login Successfull")
                localStorage.setItem('username',res.data.user)
                localStorage.setItem('nutriUserToken',res.data.token)
                navigate("/dashboard")
            }else{
                alert("Wrong Credentials")
            }
        })
        .catch((err)=>{
            console.log(err)
            alert("Wrong Credentials")
        })

    }

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-orange-600/40 ring ring-2 ring-orange-500 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-orange-500 underline uppercase decoration-wavy">
                   Sign in
                </h1>
                <form className="mt-6" onSubmit={handleSubmit} >
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                             onChange={(e)=>setEmail(e.target.value)}
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-orange-500 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            onChange={(e)=>setPassword(e.target.value)}
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-orange-500 bg-white border rounded-md focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-orange-500 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-orange-300 focus:outline-none focus:bg-orange-600">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700"   >
                    
                    Don't have an account?{" "}
                    <div className="font-medium text-purple-600 hover:underline inline" >
                        <RouterLink to='/signup' >Sign up</RouterLink>
                    </div>

                        
                </p>
            </div>
        </div>
    );
}

// className="font-medium text-purple-600 hover:underline"