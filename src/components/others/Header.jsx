

function Header({data}) {
  
  return (
    <div className="flex items-end justify-between">
        <h1 className="text-2xl font-medium">Hello, <br/> <span className="text-3xl font-semibold">{data.firstname}👋</span></h1>
        <button className="bg-red-600 hover:bg-red-700 transition-all duration-200 flex text-center px-4 py-1 text-white font-[450] text-[18px] rounded">Log Out</button>
      
    </div>
  )
}

export default Header
