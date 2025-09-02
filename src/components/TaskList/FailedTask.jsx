/* eslint-disable react/prop-types */

const FailedTask = ({data}) => {
  return (
    <div className="h-full flex-shrink-0 p-5 w-[400px] bg-gray-400 rounded-xl">
        <div className="flex justify-between items-center">
            <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
            <h4 className="text-sm">{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold ">{data.taskTitle}</h2>
        <p className="text-sm mt-2">{data.taskDescription}</p>
        <div className="flex justify-between mt-10">
            <button className="bg-red-400 rounded w-full py-2  px-2 text-md ">Failed</button>
        </div>
    </div>
  )
}

export default FailedTask
