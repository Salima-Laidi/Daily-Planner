import {Search, Plus} from "lucide-react";
import{useState} from "react";
import EmptyState from "../emptyState";
import CreatingBox from "./creating";
import ListCard from "./listCard";



function Lists({ id, setId, lists, setLists, saveLists }){
    const [create, setCreate] = useState(false);
    const [option, setOption] = useState("all");
    const [search, setSearch] = useState("")
    return(
        <div className="page">
            <div className="flex flex-col justify-between gap-4 md:gap-0 md:flex-row">
                <div>
                    <h1 className="page-title">Lists</h1>
                    <p className="page-paragraph">View and manage all your lists</p>
                </div>
                <div className="flex items-start gap-0 md:gap-8">
                    <div className="flex bg-light-beige items-center gap-4 px-4 py-3 rounded-l-lg md:rounded-lg border border-solid border-beige-border">
                        <Search className="text-brown "/>
                        <input type="text"  placeholder="Search lists..." className="outline-none placeholder:text-light-brown text-brown font-content font-medium " onChange={(e) => setSearch(e.target.value)}/>
                    </div>
                    <button className="flex gap-2 bg-brown rounded-r-lg px-4 py-3 text-light-beige  font-content hover:bg-light-brown hover:cursor-pointer  md:rounded-lg border border-solid border-beige-border md:border-none transition duration-300" onClick={()=> {setCreate(true)}}>
                        <Plus className="text-light-beige"/> 
                        <span className="hidden md:inline">New List</span>
                    </button>
                </div>
            </div>

            <div className="flex gap-2">
                <button className={`filter ${option === "all" && "bg-brown text-light-beige"}`}onClick={()=> setOption("all")}>All</button>
                <button className={`filter ${option === "progress" && "bg-brown text-light-beige"}`} onClick={()=> setOption("progress")}>In Progress</button>
                <button className={`filter ${option === "completed" && "bg-brown text-light-beige"}`} onClick={()=> setOption("completed")}>Completed</button>
                <button className={`filter ${option === "unstarted" && "bg-brown text-light-beige"}`} onClick={()=> setOption("unstarted")}>Not started</button>
            </div>
            {/* i passes close as prop to use it in creatingbox when i`ll click on the button cancel to make the creatingbox disappear */}
            {create && <CreatingBox id={id} setId={setId} setLists={setLists} close={() =>setCreate(false)} saveLists={saveLists}/>}
            { lists.length === 0&& <EmptyState heading={"You don`t have any lists yet"} paragraph={"Create your first list to organize your tasks and stay productive!"}/>}
            {/* SEARCH */}
            {search ?
            <div className="mb-8">
                {
                [...lists].sort((a,b)=> b.update - a.update)
                .filter(list =>{
                    return list.title.toLowerCase().includes(search.toLowerCase())
                })
                .map(list => {
                    return(
                    <ListCard key={list.id} list={list} setLists={setLists} saveLists={saveLists}/>
                    )
                })}
            </div>
            :<>
            {/* ALL */}
            {option === "all"&&
            <div className="mb-8">
                {/* we use map and not forEach cause it returns nothing the opposite of map that returns jsx and we need a jsx card to be diplayed */}
                {
                [...lists].sort((a,b)=> b.update - a.update).map(list => {
                    return(
                    <ListCard key={list.id} list={list} setLists={setLists} saveLists={saveLists}/>
                    )
                })}
            </div>}

            {/* PROGRESS */}
            {option === "progress"&&
            <div className="mb-8">
                {
                [...lists].sort((a,b)=> b.update - a.update)
                .filter(list =>{
                    const tasks = list.tasksList.length;
                    const done = list.tasksList.filter(task => task.state === true).length;
                    const percentage = tasks===0 ? 0 : (done * 100)/tasks;
                    return percentage>0 && percentage<100
                })
                .map(list => {
                    return(
                    <ListCard key={list.id} list={list} setLists={setLists} saveLists={saveLists}/>
                    )
                })}
            </div>}


            {/* COMPLETED */}
            {option === "completed"&&
            <div className="mb-8">
                {
                [...lists].sort((a,b)=> b.update - a.update)
                .filter(list =>{
                    const tasks = list.tasksList.length;
                    const done = list.tasksList.filter(task => task.state === true).length;
                    const percentage = tasks===0 ? 0 : (done * 100)/tasks;
                    return percentage===100
                })
                .map(list => {
                    return(
                    <ListCard key={list.id} list={list} setLists={setLists} saveLists={saveLists}/>
                    )
                })}
            </div>}


            {/* UNSTARTED */}
            {option === "unstarted"&&
            <div className="mb-8">
                {
                [...lists].sort((a,b)=> b.update - a.update)
                .filter(list =>{
                    const tasks = list.tasksList.length;
                    const done = list.tasksList.filter(task => task.state === true).length;
                    const percentage = tasks===0 ? 0 : (done * 100)/tasks;
                    return percentage===0
                })
                .map(list => {
                    return(
                    <ListCard key={list.id} list={list} setLists={setLists} saveLists={saveLists}/>
                    )
                })}
            </div>}
            </>}

            


        </div>

    )
}

export default Lists; 
