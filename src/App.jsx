import Sidebar from "./compenents/sidebar";
import Dashboard from "./compenents/dashboard";
import Header from "./compenents/header";
function App() {
  

  return (
    <div className="h-screen w-screen bg-beige flex flex-col md:flex-row">
      <Sidebar/>
      <Header/>
      <Dashboard/>
    </div>
  )
}

export default App;
