import { useEffect, useState } from "react"
import { IUserResponse } from "../types/user.data"
import { userService } from "../services/user.service"


export function useGetUser(){
    const [user,setUser] = useState<IUserResponse | undefined>()
        const [loading,setLoading] = useState(true)
    
        useEffect(()=>{
            userService.getUser()
            .then(({data})=>setUser(data))
            .finally(()=>setLoading(false))
        },[])
    
        return {user,loading}
}