import { Link } from 'react-router-dom'
import './Header.scss'
import post from '../../../public/arcticons_swiss-post.png'
const Header = () => {
  return (
    <header className="header">
    <div className="header__container container">
        <div className="header__left">
          <h2>METAGRAM</h2>
          <input type="text" />
        </div>
        <div className="header__right">
          <img src={post} alt="" />
          <ul>
            <li>Уведомления</li>
            <li>Новости</li>
            <li>Друзья</li>
            <li><Link to={'/profile'}>Профиль</Link></li>
          </ul>
        </div>

    </div>
    </header>
  )
}

export default Header
