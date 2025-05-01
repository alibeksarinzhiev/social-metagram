import { axiosWithToken } from "../api/api"


export const postService={
    async getPosts(){
       const response = await axiosWithToken.get('posts')
       return response
    },
    async commentPost(id:string,data:{text:string}){
        const response = await axiosWithToken.post(`posts/${id}/comments`,data)
        return response
    }
}