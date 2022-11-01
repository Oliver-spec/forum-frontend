import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function PostCreationPage({
  setPosts, user, setUser, setLoginNotice,
}) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate();

  const createPostRequest = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post('http://localhost:3001/api/createPost', { title, content }, { headers: { Authorization: `bearer ${user.token}` } });
      setPosts(res.data);
      navigate('*');
    } catch (err) {
      navigate('/loginPage');

      setUser(null);

      if (localStorage.getItem('forumLoggedInUser')) {
        localStorage.removeItem('forumLoggedInUser');
      }

      setLoginNotice('Please login to post');
    }
  };

  return (
    <form onSubmit={createPostRequest}>
      <input type="text" placeholder="Title" onChange={(event) => setTitle(event.target.value)} value={title} />
      <input type="text" placeholder="Content" onChange={(event) => setContent(event.target.value)} value={content} />
      <button type="submit">Post</button>
    </form>
  );
}

export default PostCreationPage;
