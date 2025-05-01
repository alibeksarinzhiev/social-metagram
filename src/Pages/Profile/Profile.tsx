import axios from "axios"
import './Profile.scss'
import { useEffect, useState } from "react"
import { UserResponse } from "../../types/data"
import { axiosWithToken } from "../../api/api"
import { useGetUser } from "../../hooks/useGetUser"
import { url } from "../../utils/global"
const Profile = () => {

  const {user,loading} = useGetUser()

    const [comment,setComment] = useState('')
    

    const postComment = (id:string)=>{
      axiosWithToken.post(`/posts/$${id}`)
    }

    if(loading){
        <div>loading</div>
    }else{
  return (
    <section className="profile">
      <div className="profile__container container">
        <div className="profile__content">
            {/* <img src="" alt="" /> */}
            <div className="profile__info">
                <div className="profile__btns">
                    <button>Редактировать профиль</button>
                    <button>Настройка аккаунта</button>
                </div>
                <div className="profile__about">
                    <div className="profile__names">
                        <h3>{user?.username}</h3> 
                        <h4>{user?.posts.length === 0
                        ?0
                        :user?.posts.length} публикации</h4>
                        <h4> {user?.followers.length === 0
                        ?0
                        :user?.followers.length} подписчиков</h4>
                    </div>
                    <p>Метаграм — место, где цифровая реальность становится твоим пространством для общения, идей и свободы самовыражения</p>
                </div>
            </div>
        </div>
        <div className="profile__posts">
          {user?.posts.map((el)=>(
            <div className="profile__post">
            <img crossOrigin="anonymous" src={`${url}/${el.image}`} alt="" />
            <h3>{el.title}</h3>
            <p>{el.description}</p>
            <div className="profile__comments">
              <p>like</p>
              <p>comment</p>
            </div>
            <input onChange={(e)=>setComment(e.target.value)} type="text" placeholder="введите комментарий" />
            <button onClick={()=>postComment(el._id)}>add comment</button>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}
}

export default Profile
