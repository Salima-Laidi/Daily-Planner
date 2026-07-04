import {ClipboardCheck, List, Clock} from "lucide-react";
import {ChevronRight } from "lucide-react";
function Dashboard(){
    return(
        <div className="flex flex-col flex-1 md:px-10 md:py-14 px-4 py-4">
            <h1 className="font-headings text-brown font-bold text-3xl ml-2">Welcome!</h1>
            <p className="font-content mt-3 text-light-brown">Track your progress, and stay organized.</p>

            <div className="grid md:grid-cols-3 grid-row-3 gap-4 md:gap-10 my-4 md:my-8 ">
                <div className="card">
                    <span className="card-icon"><ClipboardCheck className="md:w-10 md:h-10 w-8 h-8 text-brown"/></span>
                    <div>
                        <p className="card-text-1">0</p>
                        <p className="card-text-2">Lists Completed</p>
                        <p className="card-text-3">Nice work!</p>
                    </div> 
                </div>

                <div className="card">
                    <span className="card-icon"><Clock className="md:w-10 md:h-10 w-8 h-8 text-brown"/></span>
                    <div>
                        <p className="card-text-1">0</p>
                        <p className="card-text-2">Lists In Progress</p>
                        <p className="card-text-3">Keep it up!</p>
                    </div>
                </div>

                <div className="card">
                    <span className="card-icon"><List className="md:w-10 md:h-10 w-8 h-8 text-brown"/></span>
                    <div>
                        <p className="card-text-1">0</p>
                        <p className="card-text-2">Total Lists</p>
                        <p className="card-text-3">All your lists!</p>
                    </div>
                </div>
                
            </div>


            {/* when the user has no lists */}
            {/* <div className="bg-light-beige/50 border boder-solid border-beige-border flex flex-col justify-center items-center flex-1 rounded-xl md:mb-20 px-4 py-10 mb-20 md:mb-0"> 
                <img src="/src/assets/notebook.png" className="md:w-35 md:h-35 w-30 h-30 ml-10" />
                <h2 className="font-headings text-brown text-xl font-bold mt-5">You don`t have any lists yet</h2>
                <p className="font-content text-light-brown text-center mt-3 md:mt-2">Create your first list to organize your tasks and stay productive!</p>
            </div> */}

            {/* when the user has lists */}
            <div className="bg-light-beige border border-solid border-beige-border rounded-xl p-4 md:p-6 divide-y divide-beige-border divide-1 mb-20 md:mb-0">
                <div className="flex justify-between items-center pb-3 md:pb-4">
                    <h2 className="font-headings text-sm md:text-xl text-brown font-semibold">All Lists</h2>
                    <a href="" className="font-content text-brown font-semibold text-sm md:text-lg">View All</a>
                </div>


                <div className="flex justify-between p-3 md:p-4 items-center">
                    <div className="flex gap-4 items-center">
                        <span className="w-8 h-8 md:w-10 md:h-10 bg-beige-border/70 rounded-md md:rounded-lg flex items-center justify-center"><List className="text-brown w-5 h-5"/></span>
                        <p className="font-content font-semibold text-brown text-sm md:text-lg">Work Tasks</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="font-content text-light-brown text-sm md:text-lg">0 tasks</p>
                        <ChevronRight className="text-light-brown cursor-pointer w-5 md:w-8" />
                    </div>
                </div>


                <div className="flex justify-between p-3 md:p-4 items-center">
                    <div className="flex gap-4 items-center">
                        <span className="w-8 h-8 md:w-10 md:h-10 bg-beige-border/70 rounded-md md:rounded-lg flex items-center justify-center"><List className="text-brown w-5 h-5"/></span>
                        <p className="font-content font-semibold text-brown text-sm md:text-lg">Work Tasks</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="font-content text-light-brown text-sm md:text-lg">0 tasks</p>
                        <ChevronRight className="text-light-brown cursor-pointer w-5 md:w-8" />
                    </div>
                </div>


                <div className="flex justify-between p-3 md:p-4 items-center">
                    <div className="flex gap-4 items-center">
                        <span className="w-8 h-8 md:w-10 md:h-10 bg-beige-border/70 rounded-md md:rounded-lg flex items-center justify-center"><List className="text-brown w-5 h-5"/></span>
                        <p className="font-content font-semibold text-brown text-sm md:text-lg">Work Tasks</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="font-content text-light-brown text-sm md:text-lg">0 tasks</p>
                        <ChevronRight className="text-light-brown cursor-pointer w-5 md:w-8" />
                    </div>
                </div>


                <div className="flex justify-between p-3 md:p-4 items-center">
                    <div className="flex gap-4 items-center">
                        <span className="w-8 h-8 md:w-10 md:h-10 bg-beige-border/70 rounded-md md:rounded-lg flex items-center justify-center"><List className="text-brown w-5 h-5"/></span>
                        <p className="font-content font-semibold text-brown text-sm md:text-lg">Work Tasks</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="font-content text-light-brown text-sm md:text-lg">0 tasks</p>
                        <ChevronRight className="text-light-brown cursor-pointer w-5 md:w-8" />
                    </div>
                </div>


                <div className="flex justify-between p-3 md:p-4 items-center">
                    <div className="flex gap-4 items-center">
                        <span className="w-8 h-8 md:w-10 md:h-10 bg-beige-border/70 rounded-md md:rounded-lg flex items-center justify-center"><List className="text-brown w-5 h-5"/></span>
                        <p className="font-content font-semibold text-brown text-sm md:text-lg">Work Tasks</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="font-content text-light-brown text-sm md:text-lg">0 tasks</p>
                        <ChevronRight className="text-light-brown cursor-pointer w-5 md:w-8" />
                    </div>
                </div> 

            </div>

        </div>
    )
}
export default Dashboard;