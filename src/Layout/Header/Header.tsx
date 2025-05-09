import { Link } from "react-router-dom";
import "./Header.scss";
import post from "../../../public/arcticons_swiss-post.png";
const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <nav className="header__nav">
          <div className="header__left">
            <h2>
              <Link to={"/"}>METAGRAM</Link>
            </h2>
            <div className="header__ipnut-wrapper">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.65727 1.94554C1.18492 2.4116 0.809421 2.96651 0.552402 3.57829C0.295383 4.19008 0.161919 4.84666 0.159696 5.51024C0.157473 6.17382 0.286534 6.83128 0.539449 7.44477C0.792363 8.05827 1.16413 8.61567 1.63336 9.08489C2.10258 9.55412 2.65998 9.92589 3.27348 10.1788C3.88697 10.4317 4.54444 10.5608 5.20801 10.5586C5.87159 10.5563 6.52817 10.4229 7.13996 10.1658C7.75174 9.90883 8.30665 9.53333 8.77271 9.06098C9.70586 8.11524 10.2271 6.83882 10.2226 5.51024C10.2182 4.18165 9.68841 2.90875 8.74896 1.96929C7.8095 1.02984 6.5366 0.500085 5.20801 0.495634C3.87943 0.491183 2.60301 1.01239 1.65727 1.94554ZM7.47916 7.76743C7.18183 8.06476 6.82884 8.30062 6.44035 8.46154C6.05187 8.62245 5.63549 8.70528 5.21499 8.70528C4.7945 8.70528 4.37812 8.62245 3.98963 8.46154C3.60115 8.30062 3.24816 8.06476 2.95082 7.76743C2.65349 7.47009 2.41763 7.1171 2.25671 6.72862C2.0958 6.34013 2.01297 5.92375 2.01297 5.50326C2.01297 5.08276 2.0958 4.66638 2.25671 4.2779C2.41763 3.88941 2.65349 3.53642 2.95082 3.23909C3.55132 2.63859 4.36577 2.30124 5.21499 2.30124C6.06422 2.30124 6.87867 2.63859 7.47916 3.23909C8.07966 3.83958 8.41701 4.65403 8.41701 5.50326C8.41701 6.35248 8.07966 7.16693 7.47916 7.76743Z"
                  fill="white"
                />
                <path
                  d="M7.80195 10.0318C7.67448 9.9043 7.57337 9.75298 7.50439 9.58644C7.43541 9.4199 7.3999 9.2414 7.3999 9.06114C7.3999 8.88088 7.43541 8.70238 7.50439 8.53584C7.57337 8.36931 7.67448 8.21798 7.80195 8.09052C7.92941 7.96306 8.08073 7.86195 8.24727 7.79296C8.41381 7.72398 8.59231 7.68848 8.77257 7.68848C8.95283 7.68848 9.13132 7.72398 9.29786 7.79296C9.4644 7.86195 9.61572 7.96306 9.74319 8.09052L12.9771 11.3253C13.1081 11.4519 13.2127 11.6033 13.2846 11.7707C13.3565 11.9381 13.3943 12.1182 13.3959 12.3004C13.3975 12.4826 13.3628 12.6633 13.2938 12.8319C13.2248 13.0006 13.1229 13.1538 12.9941 13.2826C12.8652 13.4115 12.712 13.5134 12.5434 13.5824C12.3747 13.6514 12.194 13.6861 12.0118 13.6845C11.8296 13.6829 11.6496 13.6451 11.4822 13.5732C11.3147 13.5012 11.1633 13.3967 11.0367 13.2656L7.80195 10.0318Z"
                  fill="white"
                />
              </svg>
              <input className="header__input" type="text" />
            </div>
          </div>
          <img src={post} alt="" />
          <div className="header__right">
            <ul className="header__list">
              <li>Уведомления</li>
              <li>Новости</li>
              <li>Друзья</li>
              <li>
                <Link to={"/profile"}>Профиль</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
