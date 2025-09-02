/* eslint-disable react/prop-types */
import Alltask from "../others/Alltask";
import CreateTask from "../others/CreateTask";
import Header from "../others/Header";

const AdmineDashboard = (props) => {
  return (
    <div className="h-screen w-screen overflow-y-hidden bg-gradient-to-r from-gray-900 to-grey0 ... text-white p-10">
      <Header changeUser={props.changeUser} />
      <CreateTask/>
      <Alltask />

      
    </div>
  );
};

export default AdmineDashboard;
