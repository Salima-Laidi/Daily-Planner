import { useState } from "react";
function EditingBox({ setTitle2, close }){
    const [error, setError] = useState(false);
    const [draftTitle, setDraftTitle] = useState("");

    function cancel(){
        close();
    }

    function save(){
        if (draftTitle === ""){
            setError(true);
        }
        else{ 
            setTitle2(draftTitle);
            close();
        }
    }
    return(
        <div className="fixed inset-0 bg-black/20 backdrop-blur-xs flex items-center justify-center z-50">
            <div className="px-8 py-10 bg-light-beige rounded-lg border boder-solid border-beige-border w-[90%] md:w-[30%] backdrop-blur-3xl">
                <h2 className="text-brown text-xl font-content font-semibold mb-8">Edit List Name</h2>
                <div className="flex justify-between mb-2">
                    <h3 className="text-light-brown text-lg font-content font-medium">List Title</h3>
                    <p className={`font-content text-red-500 font-semibold ${error? "block" : "hidden"}`}>This field is required</p>
                </div>
                                                                            {/* target represents the element to which the event is attached */}
                <input type="text" placeholder="Enter list name"  onChange={(e)=>{setDraftTitle(e.target.value);setError(false)}} className="outline-none px-4 py-2 border border-solid border-light-brown rounded-lg font-content font-medium w-full mb-12"/>
                <div className="flex gap-4 justify-end">
                    <button className="py-2 px-4 font-content text-light-brown border border-solid border-light-brown rounded-lg hover:cursor-pointer" onClick={cancel}>Cancel</button>
                                                                                                                                                                            {/* navigate it`s variable  declared with the hook useNavigate, it`s like link or navLink, and at the same time stores data as state  */} 
                                                                                                                                                                                                                                     {/* i added close() to close the creatingbox when we open new page because it`s not going to close automatically */}
                                                                                                                                                                                                                {/* i put setId to update the id state for the next page */}
                    <button className="py-2 px-4 font-content text-light-beige bg-brown rounded-lg hover:cursor-pointer hover:bg-light-brown transition duration-300" onClick={save}> 
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditingBox;