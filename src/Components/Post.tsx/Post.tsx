import { useState, FormEvent } from 'react'
import './Post.scss'
import axios from 'axios'
const Post = () => {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [image,setImage ] = useState<any>()

    const formSubmit = (e:FormEvent<HTMLFormElement>)=>{

        const accessToken = localStorage.getItem('accessToken')

            e.preventDefault()
            // const onePost = {
            //     title,
            //     description,
            //     image
            // }
            

        const formData = new FormData()
        formData.append('title',title)
        formData.append('description',description)
        formData.append('image',image)

        axios.post('http://192.168.68.101:5000/api/posts',formData,{headers:{
            Authorization:`Bearer ${accessToken}`,
            "Content-Type":"multipart/form-data"
        }})
        
    }
  return (
    <form onSubmit={(e)=>formSubmit(e)} className='post'>
      <h2>Новый пост</h2>
      <input onChange={(e)=>setTitle(e.target.value)} type="text"  placeholder='введите название'/>
      <input onChange={(e)=>setDescription(e.target.value)} type="text"  placeholder='введите описание'/>
      <input onChange={(e)=>setImage(e.target.files[0])} type="file" />
      <button>Опубликовать</button>
    </form>
  )
}

export default Post
