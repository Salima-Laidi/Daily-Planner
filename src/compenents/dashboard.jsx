import {ClipboardCheck, List, Clock,ChevronRight} from "lucide-react";
import {useNavigate } from "react-router-dom";
import EmptyState from "./emptyState";


function Card({list}){
    const navigate = useNavigate()
    const tasks = list.tasksList.length;
    
    return(
    <div className="flex justify-between p-3 md:p-4 items-center">
            <div className="flex gap-4 items-center">
                <span className="w-8 h-8 md:w-10 md:h-10 bg-beige-border/70 rounded-md md:rounded-lg flex items-center justify-center"><List className="text-brown w-5 h-5"/></span>
                <p className="font-content font-semibold text-brown text-sm md:text-lg capitalize">{list.title}</p>
            </div>
            <div className="flex gap-4">
            <p className="font-content text-light-brown text-sm md:text-lg">{tasks} tasks</p>
                                                                                                        {/*  */}
            <ChevronRight className="text-light-brown cursor-pointer w-5 md:w-8 hover:cursor-pointer" onClick={()=> navigate(`/lists/${list.id}`,{state:{id:list.id, title:list.title}})}/>
        </div>
    </div>
    )
}


function Dashboard({lists}){
    const navigate = useNavigate()
    const progress = lists.map((list) =>{
        const tasks = list.tasksList.length;
        const done = list.tasksList.filter(task => task.state === true).length;
        return tasks===0 ? 0 : (done * 100)/tasks;
    })
    
    return(
        <div className="page">
            <div>
                <h1 className="page-title">Welcome!</h1>
                <p className="page-paragraph">Track your progress, and stay organized.</p>
            </div>

            <div className="grid md:grid-cols-3 grid-row-3 gap-4 md:gap-10 ">
                <div className="card">
                    <span className="card-icon"><ClipboardCheck className="md:w-10 md:h-10 w-8 h-8 text-brown"/></span>
                    <div>
                        <p className="card-text-1">{progress.filter(item => item === 100).length}</p>
                        <p className="card-text-2">Lists Completed</p>
                        <p className="card-text-3">Nice work!</p>
                    </div> 
                </div>

                <div className="card">
                    <span className="card-icon"><Clock className="md:w-10 md:h-10 w-8 h-8 text-brown"/></span>
                    <div>
                        <p className="card-text-1">{progress.filter(item => item>0 && item<100).length}</p>
                        <p className="card-text-2">Lists In Progress</p>
                        <p className="card-text-3">Keep it up!</p>
                    </div>
                </div>

                <div className="card">
                    <span className="card-icon"><List className="md:w-10 md:h-10 w-8 h-8 text-brown"/></span>
                    <div>
                        <p className="card-text-1">{lists.length}</p>
                        <p className="card-text-2">Total Lists</p>
                        <p className="card-text-3">All your lists!</p>
                    </div>
                </div>
                
            </div>


            {lists.length ===0 ?<EmptyState heading={"You don`t have any lists yet"} paragraph={"Create your first list to organize your tasks and stay productive!"}/>
            
            :<div className="bg-light-beige border border-solid border-beige-border rounded-xl p-4 md:p-6 divide-y divide-beige-border divide-1 mb-20 md:mb-0">
                <div className="flex justify-between items-center pb-3 md:pb-4">
                    <h2 className="font-headings text-sm md:text-xl text-brown font-semibold">All Lists</h2>
                    <a className="font-content text-brown font-semibold text-sm md:text-lg hover:cursor-pointer" onClick={()=>navigate("/lists")} >View All</a>
                </div>
                {
                [...lists].sort((a,b)=> b.update - a.update).slice(0,5).map(list => {
                    return(
                    <Card key={list.id} list={list}/>
                    )
                })}
            </div> }

        </div>
    )
}
export default Dashboard;