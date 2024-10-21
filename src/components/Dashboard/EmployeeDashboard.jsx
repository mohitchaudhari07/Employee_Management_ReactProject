/* eslint-disable no-unused-vars */

import Header from "../others/Header"
import TaskListNumber from "../others/TaskListNumber"
import Tasklist from "../TaskList/Tasklist"
function EmployeeDashboard({data}) {
  return (
    <div className="h-screen w-screen text-white  p-10 bg-gradient-to-r from-gray-800 to-grey0 ...">
       
        <Header data = {data}/>
        <TaskListNumber data = {data} />
        <Tasklist data = {data} />
     
    </div>
  )
}

export default EmployeeDashboard
