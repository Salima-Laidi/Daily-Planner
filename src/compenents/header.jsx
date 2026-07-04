import Logo from "./logo";
function Header(){
    return(
        <div className="md:hidden mt-5  mb-8 flex justify-center">
            <Logo/>
        </div>
    )
}
export default Header;