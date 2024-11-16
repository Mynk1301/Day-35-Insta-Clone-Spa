import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>

        <div className="w-full justify-around  mx-auto flex p-3 border-b-2 border-gray-300">
            <Link to='/' className="text-2xl font-bold">Instagram</Link>
            <div className="flex gap-6">
            <Link to='/about' className="font-semibold">About</Link>
            <Link to='/contact' className="font-semibold">Contact</Link>
            <Link to='/requests' className="font-semibold">Requests</Link>
            </div>
        </div>

        </>
    )
}

export default Navbar;
