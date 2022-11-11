import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PostDetail({ post, setUser, setLoginNotice, user }) {
  const [likes, setLikes] = useState(post.likes);
  const [dislikes, setDislikes] = useState(post.dislikes);

  const navigate = useNavigate();

  const handleRating = async (rating) => {
    try {
      const res = await axios.post(
        "http://localhost:3001/api/ratePost",
        {
          userId: user.id,
          postId: post._id,
          rating: rating,
        },
        { headers: { Authorization: `bearer ${user.token}` } }
      );

      if (res.data === "liked") {
        setLikes((prevLikes) => ++prevLikes);
        return;
      }

      if (res.data === "disliked") {
        setDislikes((prevDislikes) => ++prevDislikes);
        return;
      }

      if (res.data === "removed like") {
        setLikes((prevLikes) => --prevLikes);
        return;
      }

      if (res.data === "removed dislike") {
        setDislikes((prevDislikes) => --prevDislikes);
        return;
      }
    } catch (err) {
      navigate("/loginPage");

      setUser(null);

      if (localStorage.getItem("forumLoggedInUser")) {
        localStorage.removeItem("forumLoggedInUser");
      }

      setLoginNotice("Please login to post");
    }
  };

  return (
    <div>
      <div>{post.title}</div>
      <div>{post.authorName}</div>
      <div>{post.content}</div>
      <div>Likes: {likes}</div>
      <div>Dislikes: {dislikes}</div>
      <button type="button" onClick={() => handleRating("like")}>
        Like
      </button>
      <button type="button" onClick={() => handleRating("dislike")}>
        Dislike
      </button>
    </div>
  );
}

export default PostDetail;
