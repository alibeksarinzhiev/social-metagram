import { useEffect, useState } from "react"
import { axiosWithToken } from "../api/api"
import { postService } from "../services/post.service"


export function useGetPosts(){
    const [posts,setPosts] =useState()
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        postService.getPosts()
        .then(({data})=>setPosts(data))
        .finally(()=>setLoading(false))
    },[])

    return {posts,loading}
}