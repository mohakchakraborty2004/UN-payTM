import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { User } from "./user";
import axios from 'axios';

export function SearchBar() {
    
    const [users, setUsers] = useState([])
    const [filter , setFilter] = useState()

useEffect(() =>{
 axios.get("http://localhost:3000/paytm/v1/get?filter=" + filter  )
    .then(
        response =>{
            setUsers(response.data.Found)
        })
    
}, [filter])

    return <div className="flex flex-col ">

        <h1 className="ml-3 mt-10 font-bold text-xl"> Users</h1>
        <input type="text" placeholder="Search Users" className="font-semibold border-2 m-3 p-1 rounded-md" onChange={
            (e) => {
              setFilter(e.target.value)
            }
        } />
        <div>
            <div className="font-semibold">
               
                {users.map(user => <User user={user} />)}
                  
            </div>
        </div>
    </div>
}

