import { React, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import ProfilePage from "./components/ProfilePage";
import PostCreationPage from "./components/PostCreationPage";
import PostDetail from "./components/PostDetail";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loginNotice, setLoginNotice] = useState("");

  useEffect(() => {
    if (localStorage.getItem("forumLoggedInUser")) {
      setUser(JSON.parse(localStorage.getItem("forumLoggedInUser")));
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="*"
          element={
            <HomePage
              user={user}
              setUser={setUser}
              posts={posts}
              setPosts={setPosts}
              setLoginNotice={setLoginNotice}
            />
          }
        />
        <Route
          path="/loginPage"
          element={
            <LoginPage
              setUser={setUser}
              loginNotice={loginNotice}
              setLoginNotice={setLoginNotice}
            />
          }
        />
        <Route path="/signUpPage" element={<SignUpPage />} />
        <Route
          path="/profilePage"
          element={<ProfilePage user={user} setUser={setUser} />}
        />
        <Route
          path="/createPost"
          element={
            <PostCreationPage
              setPosts={setPosts}
              user={user}
              setUser={setUser}
              setLoginNotice={setLoginNotice}
            />
          }
        />
        {posts.map((post) => (
          <Route path={`/${post._id}`} element={<PostDetail post={post} />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
