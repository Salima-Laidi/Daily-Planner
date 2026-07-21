import { useNavigate } from "react-router-dom"
import{Trash2}from "lucide-react"


function ListCard({list,setLists}){
    const navigate = useNavigate() 
    const tasks = list.tasksList.length;
    const done = list.tasksList.filter(task => task.state === true).length;
    const percentage = tasks===0 ? 0 : (done * 100)/tasks;
    return(
        <div className="bg-light-beige flex p-4 md:py-6 md:px-10 rounded-lg border border-solid border-beige-border justify-between items-center mb-4">
            <h3 className="text-brown capitalize text-base md:text-xl font-semibold font-content hover:cursor-pointer" onClick={()=>navigate(`/lists/${list.id}`, { state: { title: list.title, id: list.id } })}>{list.title}</h3>
            <div className="flex items-center gap-3 md:gap-4">
                <div className="md:w-100  w-25 h-2 rounded-full bg-beige-border">
                    <div className={`bg-brown h-full rounded-full transition-all duration-300`}   style={{ width: `${percentage}%` }}></div>
                </div>
                <p className="font-content text-light-brown text-sm md:text-lg">{`${done} / ${tasks} Tasks`}</p>
            </div>
            <Trash2 className="text-brown w-4 h-4 md:w-6 md:h-6 hover:cursor-pointer" onClick={()=> setLists((prevList)=> prevList.filter((item)=>item.id !== list.id ))}/>
        </div>
    )
}

export default ListCard;