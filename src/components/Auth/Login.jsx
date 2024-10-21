/* eslint-disable react/prop-types */
import { useState } from "react"

function Login({handleLogin}) {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const submitHandler = (e) =>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")

    }
  return (
    <div className="bg-gradient-to-r from-gray-800 to-grey0 ... flex h-screen w-screen  items-center justify-center">
        <div className="rounded-md border-2 border-beinge p-[5rem]">
            <form
            onSubmit={(e) =>{
                submitHandler(e)
            }}
             className="  flex flex-col items-center justify-center " >
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                
                required className="text-white outline-none mb-3 bg-transparent rounded-full border-beinge border-2 text-xl py-3 px-4 placeholder:text-gray-400" type="email" placeholder="Enter your email" />
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required className="text-white outline-none mb-3 bg-transparent rounded-full border-beinge border-2 text-xl py-3 px-4 placeholder:text-gray-400" type="password" name="" placeholder="Enter password" id="pass" />
                <button className="outline-none bg-beinge rounded-full pt-1  border-2 text-xl py-2 px-4 w-full ">Login</button>
            </form>
        </div>
     
    </div>
  )
}

export default Login
