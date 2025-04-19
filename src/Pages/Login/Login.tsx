import axios from "axios"
import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"


const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

  const navigate = useNavigate()

    const loginUser = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const user = {
            email,
            password
        }
        axios.post('http://192.168.68.101:5000/api/auth/login',user)
        .then(({data})=>{
            localStorage.setItem('accessToken',data.token.accessToken)
            localStorage.setItem('refreshToken',data.token.refreshToken)
            navigate('/profile')
        })
        .catch((err)=>console.log(err))
    }


  return (
    <div className='login'>
      <div className="login_container container">
      <div className="register__container container">
        <div className="register__text">
            <h2>METAGRAM</h2>
            <p>Присоединяйся к тем, кто думает шире, чувствует глубже и общается по-новому — это Метаграм</p>
        </div>
        <form onSubmit={(e)=>loginUser(e)} className='register__form'>
            <h3>Вход</h3>
            
            <label>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Электронная почта'/>
            </label>
            <label>
                <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Пароль'/>
            </label>
           
            <button>Вход</button>
            <p>Забыли пароль</p>


        </form>
      </div>
      </div>
    </div>
  )
}

export default Login
