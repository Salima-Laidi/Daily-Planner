import Sidebar from "./compenents/sidebar";
import Header from "./compenents/header";
import BottomNav from "./compenents/bottomNavigation";
import Dashboard from "./compenents/dashboard";
import Lists from "./compenents/lists";
import Notes from "./compenents/notes";
import{Routes,Route} from "react-router-dom";
function App() {
  

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row">
      <Sidebar/>
      <Header/>

      <Routes>
        {/* the path of the dashboard is / so it will be the first page shown and activated when the url is open */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>

      <BottomNav/>
    </div>
  )
}

export default App;
