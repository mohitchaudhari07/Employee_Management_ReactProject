/* eslint-disable react/prop-types */

import Header from "../others/Header"
import TaskListNumber from "../others/TaskListNumber"
import Tasklist from "../TaskList/Tasklist"
function EmployeeDashboard(props) {
  return (
    <div className="h-screen w-screen text-white  p-10 bg-gradient-to-r from-gray-800 to-grey0 ...">
       
        <Header  data = {props.data} changeUser={props.changeUser}/>
        <TaskListNumber data = {props.data} />
        <Tasklist data = {props.data} />
     
    </div>
  )
}

export default EmployeeDashboard
