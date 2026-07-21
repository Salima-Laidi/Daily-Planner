import { useState,useEffect} from "react";
import{useLocation, useNavigate} from "react-router-dom";
import EmptyState from "../emptyState";
import EditingBox from "./editing";
import{Plus, Pencil,MoveLeft, Trash2, Check} from "lucide-react"


function TaskCard({task, setLists, id}){

    function change(e){
        setLists(prevLists =>
                // i will update a list 
                prevLists.map((list) =>
                    list.id === id
                    ? { ...list, 
                        tasksList: list.tasksList.map(todo =>
                            todo.id === task.id? 
                            { ...todo, state:e.target.checked}
                            :todo
                        )}
                    : list
            )
        )
    }


    function clear(){
        setLists(prevLists =>
                // i will update a list 
                prevLists.map((list) =>
                    list.id === id
                    ? { ...list, 
                        tasksList: list.tasksList.filter((todo)=>todo.id !== task.id )
                    }
                    : list
            )
        )
    }
    return(
        <div className="bg-light-beige flex p-4 md:py-6 md:px-10 rounded-lg border border-solid border-beige-border justify-between items-center mb-4">
            <div className="flex gap-4 items-center">
                <input type="checkbox" id={`task-${task.id}`} className="hidden" onChange={change}/>
                <label htmlFor={`task-${task.id}`} className={`border border-solid border-beige-border rounded-lg p-1 ${task.state&&"bg-brown"}`}>
                    <Check className="text-light-beige w-4 h-4 md:w-6 md:h-6"/>
                </label>
                <h3 className="text-brown capitalize text-base md:text-xl font-semibold font-content hover:cursor-pointer">{task.title}</h3>
            </div>
            <Trash2 className="text-brown w-4 h-4 md:w-6 md:h-6 hover:cursor-pointer" onClick={ clear}/>
        </div>
    )
}





function CreateList({lists, setLists, taskID, setTaskId}){
    // i used the useLocation hook to get the state passed from the creatingbox component when i click on the create button
    const location = useLocation();
    const navigate = useNavigate();
    const title = location.state?.title;
    const id = location.state?.id
    const [edit, setEdit] = useState(false)
    const [title2, setTitle2] = useState(title)
    const [name, setName] = useState("");
    const[error, setError] = useState(false)
    useEffect(() => {

        setLists(prevLists => {
                return prevLists.map((list) =>
                    list.id === id
                        ? { ...list, title:title2 ,update:Date.now()}
                        : list
                );
            });
    }, [id, title,title2, setLists]);

    function createTask(){
        if(name===""){
            setError(true);
        }
        else{
            // in arrow function when it`s singale line we don`t need return when it`s multiple lines we need return
            setLists(prevLists =>
                // i will update a list 
                    prevLists.map((list) =>
                    list.id === id
                    ? { ...list, 
                        tasksList:[
                            ...list.tasksList,
                            {
                            id : taskID,
                            title: name,
                            state : false,
                            }
                        ]
                    }
                    : list
            )
        )
            setTaskId(taskID+1);
            //to clear the input
            setName("");
        }
    }
    // we used find because returns the element directly, filter returns array
    const currentList = lists.filter(list => list.id === id);
    const tasks = currentList[0].tasksList.length;
    const done = currentList[0].tasksList.filter(task => task.state === true).length;
    const percentage = tasks===0 ? 0 : (done * 100)/tasks;
    return(
        <div className="page">
            <div className="flex flex-col gap-4 justify-between md:flex-row">
                <div className="flex gap-8 items-center">
                    <span onClick={() => navigate("/lists")} className="p-3 border border-solid border-beige-border rounded-lg hover:cursor-pointer"><MoveLeft className="text-brown w-3 h-3 md:w-6 md:h-6"/></span>
                    <div>
                        <h1 className="page-title text-xl md:text-3xl capitalize mb-4 flex gap-2 items-center">{title2}
                            <span onClick={() => { setEdit(true); }}><Pencil className="md:w-6 md:h-6 w-4 h-4 hover:cursor-pointer"/></span>
                        </h1>
                        <div className="flex items-center gap-3 md:gap-4">
                            <p className="font-content text-light-brown text-sm md:text-lg">{`${done} / ${tasks} Tasks`}</p>
                            <div className="md:w-100  w-40 h-2 rounded-full bg-beige-border">
                                <div className={`bg-brown h-full rounded-full transition-all duration-300`}   style={{ width: `${percentage}%` }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className={`font-content text-red-500 font-semibold mb-2 ml-4 ${error? "block" : "hidden"}`}>This field is required</p>
                    <div className="flex items-start  ml-4 ">
                        <div className="flex bg-light-beige items-center gap-4 px-4 py-3 rounded-l-lg border border-solid border-beige-border">
                                                            {/* the input is controlled by the browser so we use value={var}  to controle it by our selves using react*/}
                            <input type="text"  placeholder="Create a task..." value={name} className="outline-none placeholder:text-light-brown text-brown font-content font-medium " onChange={(e)=>{setName(e.target.value);setError(false);}}/>
                        </div>
                    
                        <button className="flex gap-2 bg-brown rounded-r-lg px-4 py-3 text-light-beige  font-content hover:bg-light-brown hover:cursor-pointer border border-solid border-beige-border md:border-none transition duration-300" onClick={createTask}>
                            <Plus className="text-light-beige"/> 
                            <span className="hidden md:inline">Add Task</span>
                        </button>
                    </div>
                </div>
            </div>
            {edit && <EditingBox setTitle2={setTitle2}  close={() => setEdit(false)} />}
            {currentList[0].tasksList.length ===0 ?<EmptyState heading={"You don`t have any tasks yet"} paragraph={"Add your first task to get started."}/>
            : <div>
                {
                    currentList[0].tasksList.map((task)=>{return(
                        <TaskCard key={task.id} task={task} setLists={setLists} id={id}/>
                )})
                }
            </div>}
        </div>
    )
}
export default CreateList;