import Logo from "./logo"
function Sidebar(){
    return(
        <div className="hidden md:flex h-full w-75 bg-brown flex-col items-center pt-10">
            <Logo/>
        </div>
    )
}
export default Sidebar;
