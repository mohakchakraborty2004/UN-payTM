import { Link } from "react-router-dom"

export function User({user}){
    return <div className="flex flex-col">
        <div className="flex justify-between items-center">
            <div className="flex justify-center items-center">
            <div className=" m-3 bg-slate-400 p-4 pl-4 pr-4 rounded-full">
                    {user.firstName[0]}
          </div>
        {user.firstName} {user.lastName}
            </div>
       
        <Link to={`/send?id=${user._id}&name=${user.firstName}`} className="mr-3 items-center">
                <button className="text-white bg-black p-2 rounded-xl ">Send Money</button>
        </Link>
        </div>
    
        </div>
}