import { useState } from "react";
import { useGetPosts } from "../../hooks/useGetPosts";
import CommentIcon from "../../shared/Comment/CommentIcons";
import Like from "../../shared/Like/Like";
import Send from "../../shared/Send/Send";
import "./home.scss";
import { axiosWithToken } from "../../api/api";
import { toast } from "react-toastify";
import { postService } from "../../services/post.service";

const Home = () => {
  const { posts, loading } = useGetPosts();

  const [comment, setComment] = useState("");
  const submitComment = (id: string) => {
    const objComment = {
      text: comment,
    };
    postService
      .commentPost(id, objComment)
      .then(() => toast.success("комменарий успешно добавился"));
  };

  const subscribe = (id: string) => {
    axiosWithToken
      .put(`users/${id}/follow`)
      .then(() => toast.success("подписка сделана"));
  };

  if (loading) {
    return <h1>loading..</h1>;
  } else {
    return (
      <div className="home">
        <div className="container">
          <div className="cards">
            {posts?.map((el) => (
              <div className="card">
                <div className="card__name">
                  <img
                    className="card__authorImg"
                    src={`192.168.68.108:5000/`}
                    alt=""
                  />
                  <h3 className="card__authorName">{el.author.username}</h3>
                  <button
                    className="card__follow"
                    onClick={() => subscribe(el.author._id)}
                  >
                    Подписаться
                  </button>
                </div>
                <div className="card__info">
                  <div className="card__bigImg">
                    <img
                      className="card__img"
                      crossOrigin="anonymous"
                      src={`http://192.168.68.108:5000/${el.image}`}
                      alt=""
                    />
                  </div>

                  <div className="card__text">
                    <div className="card__descWrapepr">
                      <div className="card__name">
                        <img className="card__authorImg" src="" alt="" />
                        <h3 className="card__authorName">
                          {el.author.username}
                        </h3>
                      </div>
                      <p className="card__desc">{el?.description}</p>
                    </div>
                    {/* <div>{el.comments.map((item) => item.text)}</div>
                    <input
                      onChange={(e) => setComment(e.target.value)}
                      type="text"
                      placeholder="введите коммент"
                    />
                    <button onClick={() => submitComment(el._id)}>
                      опубликовать
                    </button> */}
                    <div className="card__bottom">
                      <div className="card__icons">
                        <Like />
                        <CommentIcon />
                        <Send />
                      </div>
                      <h4 className="card__likes">0 отметок “Нравится”</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
