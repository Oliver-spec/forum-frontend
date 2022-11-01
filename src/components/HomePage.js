import { React, useEffect } from 'react';
import {
  Link, useNavigate,
} from 'react-router-dom';
import axios from 'axios';

function HomePage({
  user, posts, setPosts, setLoginNotice,
}) {
  const navigate = useNavigate();

  const getPostsRequest = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/getPosts');
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const redirectToPostCreation = () => {
    if (!user) {
      navigate('/loginPage');
      setLoginNotice('Please login to post');

      return;
    }
    navigate('./createPost');
  };

  useEffect(() => {
    getPostsRequest();
  }, []);

  return (
    <div>
      {user ? <div><Link to="/profilePage">{user.username}</Link></div> : (
        <div>
          <div><Link to="/loginPage">Login</Link></div>
          <div><Link to="/signUpPage">Sign Up</Link></div>
        </div>
      )}
      <input type="text" placeholder="Create a Post" onClick={redirectToPostCreation} />
      <div>
        {posts.map((post) => (
          <div key={post._id}>
            <div>{post.title}</div>
            <div>{post.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
