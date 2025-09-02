/* eslint-disable react/jsx-key */
import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"


const Alltask = () => {
    const [userData , setUserData] = useContext(AuthContext)

    



  return (
    <div id="alltask" className="bg-[#1d072b4a] p-5 rounded mt-5 h-52 overflow-y-hidden ">

        <div className=" font-bold mb-2 py-1 px-4 flex justify-between rounded">
            <h2 className="w-1/5 bg-red-300 pl-3 py-2 mr-2 rounded h-[100%] ">Employee Name</h2>
            <h3 className="w-1/5 bg-red-300 pl-3 py-2 mr-2 rounded h-[100%]   ">New Task</h3>
            <h5 className="w-1/5 bg-red-300 pl-3 py-2 mr-2 rounded h-[100%]   ">Active Task</h5>
            <h5 className="w-1/5 bg-red-300 pl-3 py-2 mr-2 rounded h-[100%]  ">Completed</h5>
            <h5 className="w-1/5 bg-red-300 pl-3 mr-2 py-2  rounded h-[100%]  ">Failed</h5>

        </div>
        <div id="alltask" className="h-[78%] overflow-auto ">
       {userData.map(function(elem ,idx){
        return <div key={idx} className="  mb-2 py-2  px-4 flex justify-between rounded">
                    <h2 className="w-1/5 bg-white rounded pl-3 mr-4 text-black">{elem.firstname}</h2>
                    <h3 className="w-1/5 bg-white rounded pl-3 text-blue-500 mr-4">{elem.taskCount.newTask}</h3>
                    <h5 className="w-1/5 bg-white rounded pl-3 text-yellow-400 mr-4 ">{elem.taskCount.active}</h5>
                    <h5 className="w-1/5 bg-white rounded pl-3 text-green-500 mr-4">{elem.taskCount.completed}</h5>
                    <h5 className="w-1/5 bg-white rounded pl-3 text-fuchsia-500 mr-4">{elem.taskCount.failed}</h5>
               </div>
        
            
        
       })}
       </div>
      
    </div>
  )
}

export default Alltask
