export type User = {
    username:string,
    email:string,
    password:string
}

export type Post ={
    author:string
    comments:object[]
    createdAt:string
    description:string
    dislikes:object[]
    image:string
    likes:object[]
    title:string
    _id:string
    __v:number
}
export type UserResponse = {
    _id:string
    username:string
    email:string
    followers:object[]
    following:object[]
    createdAt:string
    posts:Post[]
  }
