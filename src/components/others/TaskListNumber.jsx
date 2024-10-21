/* eslint-disable react/prop-types */

function TaskListNumber({data}) {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">

      <div className=" w-[45%] p-10 rounded-xl shadow-[0_0px_15px_0px_rgba(0,0,0,0.3)] shadow-red-300 bg-red-300">
        <h2 className="text-3xl font-semibold">{data.taskCount.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className=" w-[45%] p-10 rounded-xl shadow-[0_0px_15px_0px_rgba(0,0,0,0.3)] shadow-blue-300 bg-blue-300">
        <h2 className="text-3xl font-semibold">{data.taskCount.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className=" w-[45%] p-10 text-black rounded-xl shadow-[0_0px_15px_0px_rgba(0,0,0,0.3)] shadow-yellow-300 bg-yellow-300">
        <h2 className="text-3xl font-semibold">{data.taskCount.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className=" w-[45%] p-10 rounded-xl shadow-[0_0px_15px_0px_rgba(0,0,0,0.3)] shadow-green-300 bg-green-300">
        <h2 className="text-3xl font-semibold">{data.taskCount.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
      
    </div>
  )
}

export default TaskListNumber
