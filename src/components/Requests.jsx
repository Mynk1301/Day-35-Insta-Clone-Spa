import UserCard from "./UserCard";
import Data  from '../Data'

function Requests(){
    return(
        <>

        <h1 className="text-4xl  font-bold text-center  mt-5">Your Follow Requests</h1>
        <p className="text-center text-sm mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, asperiores? Incidunt, cum.</p>

        {
            Data.map(user=><UserCard img={user.image} name={user.name} prof={user.profession} username={user.username} followers={user.followers} following={user.following} desc={user.description} />)
        }

        </>
    )
}

export default Requests;
