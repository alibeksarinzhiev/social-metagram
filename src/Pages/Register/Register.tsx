import { FormEvent, useState } from 'react'
import './Register.scss'
import { User } from '../../types/data'
import axios from 'axios'
const Register = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [password2,setPassword2] = useState('')
    const [user,setUser] = useState<User>()

    

    const registerUser = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const user:User = {
            username:name,
            email,
            password
        }
        if(password === password2){
            axios.post('http://192.168.68.201:5000/api/auth/register',user)
            .then(({data})=>setUser(data))
            .catch((err)=>console.log(err,'ошибка'))
        }else{
            console.error('error with password')
        }
        
    }

  return (
    <div className="register">
      <div className="register__container container">
        <div className="register__text">
            <h2>METAGRAM</h2>
            <p>Присоединяйся к тем, кто думает шире, чувствует глубже и общается по-новому — это Метаграм</p>
        </div>
        <form onSubmit={(e)=>registerUser(e)} className='register__form'>
            <h3>Регистрация</h3>
            <label>
                <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Ник'/>
            </label>
            <label>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Электронная почта'/>
            </label>
            <label>
                <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Пароль'/>
            </label>
            <label>
                <input onChange={(e)=>setPassword2(e.target.value)} type="text"  placeholder='Повторить пароль'/>
            </label>
            <button>Зарегестрироваться</button>
            <p>У вас есть уже аккаунт?</p>


        </form>
      </div>
    </div>
  )
}

export default Register
