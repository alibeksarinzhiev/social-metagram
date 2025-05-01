import { Post } from "./data"

export interface IUserResponse{
    _id:string
    username:string
    email:string
    followers:string[]
    following:string[]
    posts:Post[]
}