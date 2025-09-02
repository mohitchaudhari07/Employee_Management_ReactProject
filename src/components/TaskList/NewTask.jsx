/* eslint-disable react/prop-types */


const NewTask = ({data}) => {
  return (
    <div className="h-full flex-shrink-0 p-5 w-[400px] bg-lightviolet rounded-xl">
        <div className="flex justify-between items-center">
            <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
            <h4 className="text-sm">{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold ">{data.taskTitle}</h2>
        <p className="text-sm mt-2">{data.taskDescription}</p>
        <div className="flex justify-between mt-10">
            <button className="bg-green-400 rounded py-2 px-3 text-sm ">Accept Task</button>
        </div>
    </div>
  )
}

export default NewTask
