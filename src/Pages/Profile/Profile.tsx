import axios from "axios"
import { useEffect, useState } from "react"
import { UserResponse } from "../../types/data"
const Profile = () => {
    const [myProfile,setMyProfile] = useState<UserResponse>()
    useEffect(()=>{
        const accessToken = localStorage.getItem('accessToken')
        axios.get('http://192.168.68.101:5000/api/auth/me',{headers:{Authorization:`Bearer ${accessToken}`}})
        .then(({data})=>setMyProfile(data))
        .catch((err)=>console.log(err))
    },[])

    if(!myProfile){
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
                        <h3>{myProfile.username}</h3>
                        <h4>{myProfile.posts.length === 0
                        ?0
                        :myProfile.posts.length} публикации</h4>
                        <h4> {myProfile.followers.length === 0
                        ?0
                        :myProfile.followers.length} подписчиков</h4>
                    </div>
                    <p>Метаграм — место, где цифровая реальность становится твоим пространством для общения, идей и свободы самовыражения</p>
                </div>
            </div>
        </div>
        <div className="profile__posts">
          {myProfile.posts.map((el)=>(
            <div className="profile__post">
            <img crossOrigin="anonymous" src={`http://192.168.68.101:5000/${el.image}`} alt="" />
            <h3>{el.title}</h3>
            <p>{el.description}</p>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}
}

export default Profile
