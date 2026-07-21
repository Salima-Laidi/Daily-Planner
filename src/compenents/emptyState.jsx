
function EmptyState({heading, paragraph}){
    return(
        <div className="bg-light-beige/50 border boder-solid border-beige-border flex flex-col justify-center items-center flex-1 rounded-xl md:mb-20 px-4 py-10 mb-20 md:mb-0 "> 
                <img src="/src/assets/notebook.png" className="md:w-35 md:h-35 w-30 h-30 ml-10" />
                <h2 className="font-headings text-brown text-xl font-bold mt-5">{heading}</h2>
                <p className="font-content text-light-brown text-center mt-3 md:mt-2">{paragraph}</p>
        </div>
    )
}
export default EmptyState;