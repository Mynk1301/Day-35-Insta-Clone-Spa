import Data from "../Data";
import { useParams } from "react-router-dom";
import Feed from "../components/Feed";

function UserDetails() {
  let { username } = useParams();
  let person = Data.find((user) => user.username == username);

  return (
    <>
      <div className="w-[600px] flex items-center gap-5 mt-20 mx-auto  ">
        <img
          src={person.image}
          className="w-40 h-40 rounded-full object-cover "
          alt=""
        />
        <div className="">
          <p className="text-2xl font-bold">{person.name}</p>
          <p className="text-sm text-gray-600 mt-1">{person.profession}</p>
          <p className="text-sm text-gray-800">{person.description}</p>
          <div className="flex gap-3 mt-2">
            <p className="bg-neutral-200 font-medium px-2 rounded-md">
              {person.followers} Followers
            </p>
            <p className="bg-neutral-200 font-medium  px-2 rounded-md">
              {person.following} Following
            </p>
          </div>
        </div>
      </div>

      <div className="w-[800px]  mx-auto mt-6">
        <div className="flex flex-wrap  gap-2 ">
        {
            person.posts.map(post=> <Feed img={post.image} id={post.id}/>)

        }
        </div>

      </div>




    </>
  );
}

export default UserDetails;
