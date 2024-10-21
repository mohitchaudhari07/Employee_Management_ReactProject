import Alltask from "../others/Alltask";
import CreateTask from "../others/CreateTask";
import Header from "../others/Header";

const AdmineDashboard = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-gray-900 to-grey0 ... text-white p-10">
      <Header />
      <CreateTask/>
      <Alltask/>

      
    </div>
  );
};

export default AdmineDashboard;
