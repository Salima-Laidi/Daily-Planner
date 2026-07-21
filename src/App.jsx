import Sidebar from "./compenents/sidebar";
import Header from "./compenents/header";
import BottomNav from "./compenents/bottomNavigation";
import Dashboard from "./compenents/dashboard";
import Lists from "./compenents/lists/lists";
import CreateList from "./compenents/lists/createList";

// default export, {name export} can be used to import multiple components from the same file, but only one default export can be used per file
// import Notes from "./compenents/notes";
import{Routes,Route} from "react-router-dom";
import { useState } from "react";
function App() {
  // i declared the id state here because if i declare it in creatingbox compenet it will be reset to 0 every time the component is rendered, so i declared it here and passed it as a prop to the lists component and then creatingbox component
  const [id, setId] = useState(1);
  const[lists, setLists] = useState([]);
  // const [tasksList, setTasksList] = useState([]);
  const [taskID, setTaskId] = useState(1);

  return (
  <div className="h-screen w-screen flex flex-col md:flex-row">
      <Sidebar/>
      <Header/>
      <Routes>
        {/* the path of the dashboard is / so it will be the first page shown and activated when the url is open */}
        <Route path="/" element={<Dashboard lists={lists} />} />
        {/* when we want to create a page inside another page we do the following path : /lists/:id, the :id is a parameter that will be identified in the click on the link */}
        <Route path="/lists" element={<Lists id={id} setId={setId} lists={lists} setLists={setLists}/>} />
        <Route path= "/lists/:id" element={<CreateList lists={lists} setLists={setLists} taskID={taskID} setTaskId={setTaskId}/>} />
      </Routes>

      <BottomNav/>
    </div>
  )
}

export default App;
