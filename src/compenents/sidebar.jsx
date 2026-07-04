import {House, List,  NotebookText} from "lucide-react"

import Logo from "./logo"
import { NavLink } from "react-router-dom";

// NavLink provides an active class to the link in callback function when the link is active, so we can use it to style the active link differently from the others


function Sidebar(){

    return(
        <div className="hidden md:flex h-full w-65 bg-brown flex-col items-center pt-12 gap-15 p-4">
            <Logo/>
            <nav className="flex flex-col gap-4 w-full">
                {/* we created a function in the navlink classname to handle active link styling */}
                <NavLink to="/" className={({ isActive }) => `sidbar-element ${isActive ? "bg-light-brown/50" : ""}`}>
                    <House className="sidbar-icon"/>
                    <span className="sidbar-text">Dashboard </span>
                </NavLink>
                <NavLink to="/lists" className={({ isActive }) => `sidbar-element ${isActive ? "bg-light-brown/50" : ""}`}>
                    <List className="sidbar-icon"/>
                    <span className="sidbar-text">Lists </span>
                </NavLink>
                <NavLink to="/notes" className={({ isActive }) => `sidbar-element ${isActive ? "bg-light-brown/50" : ""}`}>
                    <NotebookText className="sidbar-icon"/>
                    <span className="sidbar-text"> Notes</span>
                </NavLink>
                
            </nav>
        </div>
    )
}
export default Sidebar;
