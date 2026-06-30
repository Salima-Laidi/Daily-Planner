import {ClipboardCheck} from "lucide-react";
function Logo(){
    return(
        <div className=" gap-1 flex md:gap-3 items-center">
            <ClipboardCheck className="text-brown md:text-beige-border md:w-10 md:h-10 w-8 h-8" />
            <h1 className="font-headings text-brown md:text-light-beige md:text-2xl text-lg font-bold md:font-medium">Daily<span className="text-light-brown md:text-beige-border">Planner</span></h1>
        </div>
    )
}
export default Logo;