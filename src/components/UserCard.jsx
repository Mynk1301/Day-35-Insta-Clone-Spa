import { Link } from "react-router-dom";
import Data from "../Data";


function UserCard({name , img , prof ,username  }){

    return(
 <>
        <Link to={`/${username}`} className="">
        <div className="w-[300px] flex items-center gap-3 mt-4 mx-auto   ">
            <img src={img} className="w-10 h-10 rounded-full " alt="" />
            <div className="">
            <p className="">{name}</p>
            <p className="text-sm text-gray-400">{prof}</p>
            </div>
        </div>
        </Link>
        </>
    )
}

export default UserCard;