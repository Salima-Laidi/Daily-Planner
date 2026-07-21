import {House, List} from "lucide-react";
import { NavLink } from "react-router-dom";

function BottomNav(){
    
    return(
        // we fix the bottom nav to the bottom of the page so when we scroll it will be displayed all the time there
        <div className="fixed bottom-0 left-0 z-50 md:hidden bg-light-beige flex justify-between items-center py-4 px-15 border-t border-solid border-beige-border w-full shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)]">
            <NavLink to="/" className="bottom-element"  >
            {/* it`s function for handling active link styling because we want to highlight the current page */}
            {({isActive}) =>(
                <>
                <span className={`bottom-icon ${ isActive? "bg-beige-border/70": ""}`}><House className="text-brown"/></span>
                <span className="bottom-text">Dashboard</span>
                </>
            )}
            </NavLink>

            <NavLink to="/lists" className="bottom-element"  >
            {({isActive}) =>(
                <>
                <span className={`bottom-icon ${ isActive? "bg-beige-border/70": ""}`}><List className="text-brown"/></span>
                <span className="bottom-text">Lists</span>
                </>
            )}
            </NavLink>
        </div>
    )
}
export default BottomNav;